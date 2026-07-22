export class LLMError extends Error {
  constructor(message, { status, body, cause } = {}) {
    super(message);
    this.name = 'LLMError';
    this.status = status;
    this.body = body;
    if (cause) this.cause = cause;
  }
}

function parseArguments(value) {
  if (typeof value === 'object' && value) return value;
  try { return JSON.parse(value || '{}'); } catch { return {}; }
}

function responseText(payload) {
  const chunks = [];
  for (const item of payload?.output || []) {
    if (item.type !== 'message') continue;
    for (const content of item.content || []) {
      if (content.type === 'output_text' && content.text) chunks.push(content.text);
    }
  }
  return chunks.join('');
}

function responseTools(payload) {
  return (payload?.output || [])
    .filter((item) => item.type === 'function_call')
    .map((item) => ({
      id: item.call_id || item.id,
      name: item.name,
      arguments: parseArguments(item.arguments),
    }));
}

function chatTools(message) {
  return (message?.tool_calls || []).map((item) => ({
    id: item.id,
    name: item.function?.name,
    arguments: parseArguments(item.function?.arguments),
  }));
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function consumeTextStream(response, responses, onTextDelta) {
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  let text = '';
  let finalPayload = null;

  function consumeLine(line) {
    if (!line.startsWith('data:')) return;
    const data = line.slice(5).trim();
    if (!data || data === '[DONE]') return;
    let payload;
    try { payload = JSON.parse(data); } catch { return; }
    if (payload.type === 'response.completed') finalPayload = payload.response;
    const delta = responses
      ? (payload.type === 'response.output_text.delta' ? payload.delta : '')
      : payload?.choices?.[0]?.delta?.content;
    if (typeof delta === 'string' && delta) {
      text += delta;
      onTextDelta(delta);
    }
  }

  while (true) {
    const { done, value } = await reader.read();
    buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
    const lines = buffer.split(/\r?\n/);
    buffer = lines.pop() || '';
    lines.forEach(consumeLine);
    if (done) break;
  }
  if (buffer) consumeLine(buffer);
  if (!text && finalPayload) text = responseText(finalPayload);
  return { text, toolCalls: [], raw: finalPayload };
}

export function createLLM({
  baseUrl,
  apiKey,
  model,
  wireApi,
  toolMode = 'auto',
  visionMode = 'auto',
  reasoningEffort = 'minimal',
  maxOutputTokens = 192,
  timeoutMs = 18_000,
}) {
  const responses = wireApi === 'responses';
  const url = `${baseUrl.replace(/\/$/, '')}${responses ? '/responses' : '/chat/completions'}`;
  let nativeToolsSupported = toolMode !== 'structured';
  let visionSupported = visionMode !== 'disabled';
  let latencyOptionsSupported = true;
  let effectiveReasoningEffort = reasoningEffort;

  function messagesWithImages(messages, images) {
    if (!images.length || !visionSupported) return messages;
    const result = structuredClone(messages);
    const last = result.at(-1);
    if (!last) return result;
    if (responses) {
      last.content = [
        { type: 'input_text', text: String(last.content) },
        ...images.map((image) => ({ type: 'input_image', image_url: image, detail: 'low' })),
      ];
    } else {
      last.content = [
        { type: 'text', text: String(last.content) },
        ...images.map((image) => ({ type: 'image_url', image_url: { url: image, detail: 'low' } })),
      ];
    }
    return result;
  }

  function requestBody({ instructions, messages, tools, jsonMode, images }) {
    const nativeTools = nativeToolsSupported && tools.length;
    const inputMessages = messagesWithImages(messages, images);
    if (responses) {
      const body = {
        model,
        instructions,
        input: inputMessages,
        store: false,
        parallel_tool_calls: false,
      };
      if (latencyOptionsSupported) {
        body.reasoning = { effort: effectiveReasoningEffort };
        body.max_output_tokens = maxOutputTokens;
      }
      if (nativeTools) {
        body.tools = tools.map((tool) => ({ type: 'function', ...tool, strict: true }));
      }
      if (jsonMode) body.text = { format: { type: 'json_object' } };
      return body;
    }
    const allMessages = [{ role: 'system', content: instructions }, ...inputMessages];
    const body = { model, messages: allMessages, store: false, parallel_tool_calls: false };
    if (latencyOptionsSupported) {
      body.reasoning_effort = effectiveReasoningEffort;
      body.max_completion_tokens = maxOutputTokens;
    }
    if (nativeTools) {
      body.tools = tools.map((tool) => ({ type: 'function', function: { ...tool, strict: true } }));
    }
    if (jsonMode) body.response_format = { type: 'json_object' };
    return body;
  }

  async function generate({ instructions, messages, tools = [], images = [], jsonMode = false, maxRetries = 0, onTextDelta }) {
    let lastError;
    for (let attempt = 0; attempt <= maxRetries; attempt += 1) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      try {
        const streamText = Boolean(onTextDelta && !tools.length && !jsonMode);
        const body = requestBody({ instructions, messages, tools, jsonMode, images });
        if (streamText) body.stream = true;
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'content-type': 'application/json', authorization: `Bearer ${apiKey}` },
          body: JSON.stringify(body),
          signal: controller.signal,
        });
        if (!response.ok) {
          const rawText = await response.text();
          if (
            effectiveReasoningEffort === 'minimal'
            && [400, 422].includes(response.status)
            && /unsupported value[\s\S]*minimal[\s\S]*(?:none|supported values)/i.test(rawText)
          ) {
            effectiveReasoningEffort = 'none';
            clearTimeout(timer);
            return generate({ instructions, messages, tools, images, jsonMode, maxRetries, onTextDelta });
          }
          if (
            latencyOptionsSupported
            && [400, 404, 422].includes(response.status)
            && /reasoning|max_output_tokens|max_completion_tokens|unsupported parameter/i.test(rawText)
          ) {
            latencyOptionsSupported = false;
            clearTimeout(timer);
            return generate({ instructions, messages, tools, images, jsonMode, maxRetries, onTextDelta });
          }
          if (streamText && [400, 404, 422].includes(response.status)) {
            clearTimeout(timer);
            return generate({ instructions, messages, tools, images, jsonMode, maxRetries, onTextDelta: undefined });
          }
          if (tools.length && nativeToolsSupported && [400, 404, 422].includes(response.status) && toolMode === 'auto') {
            nativeToolsSupported = false;
            clearTimeout(timer);
            return generate({ instructions, messages, tools, images, jsonMode, maxRetries: 1 });
          }
          if (images.length && visionSupported && [400, 404, 415, 422].includes(response.status) && visionMode === 'auto') {
            visionSupported = false;
            clearTimeout(timer);
            return generate({ instructions, messages, tools, images: [], jsonMode, maxRetries: 1 });
          }
          throw new LLMError(`模型接口返回 ${response.status}`, { status: response.status, body: rawText });
        }
        if (streamText && response.body && /text\/event-stream/i.test(response.headers.get('content-type') || '')) {
          return consumeTextStream(response, responses, onTextDelta);
        }
        const rawText = await response.text();
        let payload;
        try { payload = JSON.parse(rawText); } catch (cause) {
          throw new LLMError('模型返回了无法解析的内容。', { body: rawText, cause });
        }
        const message = responses ? null : payload?.choices?.[0]?.message;
        const result = {
          text: responses ? responseText(payload) : message?.content || '',
          toolCalls: responses ? responseTools(payload) : chatTools(message),
          raw: payload,
        };
        if (streamText && result.text) onTextDelta(result.text);
        return result;
      } catch (error) {
        lastError = error;
        const retryable = error.name === 'AbortError' || error.status === 429 || error.status >= 500;
        if (!retryable || attempt === maxRetries) break;
        await sleep(500 * (attempt + 1));
      } finally {
        clearTimeout(timer);
      }
    }
    throw lastError;
  }

  return {
    generate,
    capabilities() {
      return {
        wireApi,
        nativeTools: nativeToolsSupported,
        vision: visionSupported,
        streaming: true,
        webSearch: false,
        latencyOptions: latencyOptionsSupported,
        reasoningEffort: effectiveReasoningEffort,
        maxOutputTokens,
      };
    },
  };
}
