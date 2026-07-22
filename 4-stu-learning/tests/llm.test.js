import test from 'node:test';
import assert from 'node:assert/strict';
import { createLLM } from '../server/services/llm.js';

test('模型不支持 minimal 时自动降为 none 并重试同一请求', async (t) => {
  const originalFetch = globalThis.fetch;
  const bodies = [];
  t.after(() => { globalThis.fetch = originalFetch; });
  globalThis.fetch = async (_url, options) => {
    const body = JSON.parse(options.body);
    bodies.push(body);
    if (bodies.length === 1) {
      return new Response(JSON.stringify({
        error: {
          message: "Unsupported value: 'minimal' is not supported. Supported values are: 'none', 'low'.",
        },
      }), { status: 400, headers: { 'content-type': 'application/json' } });
    }
    return new Response(JSON.stringify({
      choices: [{ message: { content: '{"ok":true}', tool_calls: [] } }],
    }), { status: 200, headers: { 'content-type': 'application/json' } });
  };

  const llm = createLLM({
    baseUrl: 'https://example.test/v1',
    apiKey: 'test-key',
    model: 'gpt-5.5',
    wireApi: 'chat_completions',
    reasoningEffort: 'minimal',
    maxOutputTokens: 192,
    timeoutMs: 5000,
  });
  const result = await llm.generate({
    instructions: '只输出JSON。',
    messages: [{ role: 'user', content: '你好' }],
    jsonMode: true,
  });

  assert.equal(result.text, '{"ok":true}');
  assert.equal(bodies.length, 2);
  assert.equal(bodies[0].reasoning_effort, 'minimal');
  assert.equal(bodies[1].reasoning_effort, 'none');
  assert.equal(llm.capabilities().reasoningEffort, 'none');
});

