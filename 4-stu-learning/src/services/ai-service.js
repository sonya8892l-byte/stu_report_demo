const API_BASE = (import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/$/, '');

async function jsonRequest(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: { 'content-type': 'application/json', ...(options.headers || {}) },
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error || `请求失败（${response.status}）`);
  return body;
}

export function createAgentSession(payload) {
  return jsonRequest('/sessions', { method: 'POST', body: JSON.stringify(payload) });
}

export function getAgentSession(sessionId) {
  return jsonRequest(`/sessions/${encodeURIComponent(sessionId)}`);
}

function parseEventBlock(block) {
  let type = 'message';
  const data = [];
  for (const line of block.split('\n')) {
    if (line.startsWith('event:')) type = line.slice(6).trim();
    if (line.startsWith('data:')) data.push(line.slice(5).trim());
  }
  if (!data.length) return null;
  return { type, data: JSON.parse(data.join('\n')) };
}

export async function sendAgentTurn(payload, onEvent = () => {}) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 25_000);
  let response;
  try {
    response = await fetch(`${API_BASE}/agent/turn`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'text/event-stream' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
  } catch (error) {
    window.clearTimeout(timeout);
    if (error.name === 'AbortError') throw new Error('连接响应超时，请再试一次。');
    throw error;
  }
  if (!response.ok) {
    window.clearTimeout(timeout);
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error || `智能体请求失败（${response.status}）`);
  }
  if (!response.body) {
    window.clearTimeout(timeout);
    throw new Error('浏览器不支持流式响应。');
  }
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  const events = [];
  let agentError = null;
  try {
    while (true) {
      const { value, done } = await reader.read();
      buffer += decoder.decode(value || new Uint8Array(), { stream: !done }).replaceAll('\r\n', '\n');
      const blocks = buffer.split('\n\n');
      buffer = blocks.pop() || '';
      for (const block of blocks) {
        const event = parseEventBlock(block);
        if (!event) continue;
        events.push(event);
        onEvent(event);
        if (event.type === 'agent.error') {
          agentError = Object.assign(
            new Error(event.data?.message || '絮絮这次没有连接成功。'),
            event.data || {},
          );
        }
      }
      if (done) break;
    }
  } catch (error) {
    if (error.name === 'AbortError') throw new Error('连接响应超时，请再试一次。');
    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
  if (buffer.trim()) {
    const event = parseEventBlock(buffer);
    if (event) { events.push(event); onEvent(event); }
  }
  if (agentError) throw agentError;
  return events;
}

async function compressEvidenceImage(file) {
  if (!file?.type?.startsWith('image/') || /hei[cf]/i.test(file.type)) return file;
  try {
    const bitmap = await createImageBitmap(file);
    const maxDimension = 1280;
    const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height));
    if (scale === 1 && file.size <= 600 * 1024) {
      bitmap.close?.();
      return file;
    }
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));
    canvas.getContext('2d', { alpha: false }).drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close?.();
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.78));
    if (!blob || blob.size >= file.size) return file;
    const filename = file.name.replace(/\.[^.]+$/, '') || 'evidence';
    return new File([blob], `${filename}.jpg`, { type: 'image/jpeg', lastModified: file.lastModified });
  } catch {
    return file;
  }
}

export async function uploadEvidence(file) {
  const uploadFile = await compressEvidenceImage(file);
  const form = new FormData();
  form.append('file', uploadFile, uploadFile.name);
  const response = await fetch(`${API_BASE}/uploads`, { method: 'POST', body: form });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.error || '证据上传失败。');
  return body;
}

export function answerTimeBank(payload) {
  return jsonRequest('/time-bank/answer', { method: 'POST', body: JSON.stringify(payload) });
}

export function giftTime(payload) {
  return jsonRequest('/time-bank/gift', { method: 'POST', body: JSON.stringify(payload) });
}

export function requestTeacherHelp(payload) {
  return jsonRequest('/student/help', { method: 'POST', body: JSON.stringify(payload) });
}

export function getTeacherCommands(sessionId, after = 0) {
  return jsonRequest(`/student/sessions/${encodeURIComponent(sessionId)}/commands?after=${encodeURIComponent(after)}`);
}

export function sendTeacherCommandReceipt(sessionId, commandId, status) {
  return jsonRequest(`/student/sessions/${encodeURIComponent(sessionId)}/commands/${encodeURIComponent(commandId)}/receipt`, {
    method: 'POST', body: JSON.stringify({ status }),
  });
}

export function reportStudentPresence(sessionId, payload) {
  return jsonRequest(`/student/sessions/${encodeURIComponent(sessionId)}/presence`, {
    method: 'POST', body: JSON.stringify(payload),
  });
}
