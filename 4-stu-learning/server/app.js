import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import Fastify from 'fastify';
import cors from '@fastify/cors';
import multipart from '@fastify/multipart';
import fastifyStatic from '@fastify/static';
import fastifyWebsocket from '@fastify/websocket';
import { z } from 'zod';
import { compileCourse } from './course/compiler.js';
import { createLLM } from './services/llm.js';
import { createSessionStore } from './services/store.js';
import { AgentActionError, createAgentService } from './agent/service.js';
import { createCourseRunStore } from './runtime/course-run-store.js';
import { createCourseRunService } from './runtime/course-run-service.js';
import { createRealtimeHub } from './runtime/realtime.js';
import { registerRuntimeRoutes } from './runtime/routes.js';
import { createPostgresCourseRunStore, createPostgresSessionStore } from './runtime/postgres-store.js';
import { createEvidenceStore } from './services/evidence-store.js';

const sessionSchema = z.object({
  courseId: z.string().regex(/^[a-zA-Z0-9_-]+$/),
  roleId: z.string().regex(/^[a-zA-Z0-9_-]+$/),
  studentId: z.string().min(1).max(100),
  groupId: z.string().min(1).max(100),
  runId: z.string().min(1).max(100).optional(),
  participantId: z.string().min(1).max(100).optional(),
  grade: z.string().max(40).optional(),
});

const turnSchema = z.object({
  sessionId: z.string().min(1),
  requestId: z.string().min(1).max(100),
  input: z.discriminatedUnion('type', [
    z.object({ type: z.literal('user_text'), text: z.string().min(1).max(2000) }),
    z.object({
      type: z.literal('quick_reply'),
      questionId: z.string().min(1).max(120),
      act: z.enum(['affirm', 'deny', 'request_navigation', 'request_help']),
      value: z.string().min(1).max(200),
    }),
    z.object({ type: z.literal('lifecycle_event'), event: z.string().min(1).max(100), data: z.record(z.unknown()).optional() }),
    z.object({
      type: z.literal('tool_result'),
      toolCallId: z.string().min(1),
      result: z.object({
        status: z.enum(['completed', 'cancelled', 'failed']),
        values: z.record(z.unknown()).optional(),
        evidence: z.array(z.object({ id: z.string(), url: z.string(), mimeType: z.string().optional() })).optional(),
      }),
    }),
  ]),
});

const EVIDENCE_TYPES = new Map([
  ['image/jpeg', '.jpg'],
  ['image/png', '.png'],
  ['image/webp', '.webp'],
  ['image/heic', '.heic'],
  ['image/heif', '.heif'],
  ['audio/webm', '.webm'],
  ['audio/ogg', '.ogg'],
  ['audio/mp4', '.m4a'],
  ['audio/mpeg', '.mp3'],
  ['audio/wav', '.wav'],
  ['audio/x-wav', '.wav'],
]);

function publicSession(session) {
  return {
    id: session.id,
    courseId: session.courseId,
    roleId: session.roleId,
    studentId: session.studentId,
    groupId: session.groupId,
    runId: session.runId || null,
    participantId: session.participantId || null,
    phaseId: session.phaseId,
    currentTaskIndex: session.currentTaskIndex,
    completedTaskIds: session.completedTaskIds,
    scaffoldLevel: session.scaffoldLevel,
    timeBalance: session.timeBalance,
    timeEarned: session.timeEarned,
    completedBankTaskIds: session.completedBankTaskIds,
    runtime: session.taskState ? {
      task: session.taskState,
      location: session.locationState,
      conversation: session.conversationState,
      dialogue: session.dialogueState,
      learner: session.learnerState,
      environment: session.environmentState,
      learning: session.learningState,
    } : null,
    updatedAt: session.updatedAt,
  };
}

function openSse(reply) {
  reply.hijack();
  reply.raw.writeHead(200, {
    'content-type': 'text/event-stream; charset=utf-8',
    'cache-control': 'no-cache, no-transform',
    connection: 'keep-alive',
    'x-accel-buffering': 'no',
  });
  return {
    send(type, data) {
      reply.raw.write(`event: ${type}\ndata: ${JSON.stringify(data)}\n\n`);
    },
    end() { reply.raw.end(); },
  };
}

export async function buildApp({ env, llm: providedLLM } = {}) {
  const app = Fastify({ logger: { level: env.LOG_LEVEL } });
  const lessonsRoot = path.resolve(env.projectRoot, '../6-lessons');
  const store = env.DATABASE_URL
    ? createPostgresSessionStore({ databaseUrl: env.DATABASE_URL })
    : createSessionStore({ baseDir: path.resolve(env.projectRoot, env.SESSION_STORE_DIR) });
  const runStore = env.DATABASE_URL
    ? createPostgresCourseRunStore({ databaseUrl: env.DATABASE_URL })
    : createCourseRunStore({ baseDir: path.resolve(env.projectRoot, env.SESSION_STORE_DIR) });
  const realtime = createRealtimeHub();
  const llm = providedLLM || createLLM({
    baseUrl: env.OPENAI_BASE_URL,
    apiKey: env.OPENAI_API_KEY,
    model: env.OPENAI_MODEL,
    wireApi: env.OPENAI_WIRE_API,
    toolMode: env.AI_TOOL_MODE,
    visionMode: env.AI_VISION_MODE,
    reasoningEffort: env.AI_REASONING_EFFORT,
    maxOutputTokens: env.AI_MAX_OUTPUT_TOKENS,
    timeoutMs: env.AI_TIMEOUT_MS,
  });
  const getCourse = (courseId) => compileCourse({ lessonsRoot, courseId });
  const evidenceStore = createEvidenceStore(env);
  const loadEvidence = async (id) => {
    if (!/^ev_[a-f0-9]+$/.test(id)) return null;
    const evidence = await evidenceStore.findById(id);
    if (!evidence) return null;
    const extension = path.extname(evidence.filename);
    const mimeType = evidence.contentType || [...EVIDENCE_TYPES.entries()].find(([, value]) => value === extension)?.[0] || 'application/octet-stream';
    return `data:${mimeType};base64,${evidence.data.toString('base64')}`;
  };
  const agent = createAgentService({ llm, store, getCourse, loadEvidence });
  const runtime = createCourseRunService({ store: runStore, getCourse, realtime });

  await app.register(cors, { origin: true });
  await app.register(multipart, { limits: { fileSize: 10 * 1024 * 1024, files: 1 } });
  await app.register(fastifyWebsocket);
  await registerRuntimeRoutes(app, { runtime });

  app.get('/api/health', async () => ({ ok: true, model: env.OPENAI_MODEL, capabilities: llm.capabilities() }));

  app.get('/api/map-config', async (request, reply) => {
    reply.header('cache-control', 'private, max-age=300');
    return {
      provider: 'amap',
      key: env.VITE_AMAP_KEY || '',
      securityCode: env.VITE_AMAP_SECURITY_CODE || '',
      style: env.VITE_AMAP_STYLE || 'amap://styles/normal',
    };
  });

  app.post('/api/sessions', async (request, reply) => {
    const input = sessionSchema.parse(request.body);
    const { session } = await agent.createSession(input);
    const binding = await runtime.bindLearnerSession({ ...input, sessionId: session.id });
    if (binding) {
      session.runId = binding.runId;
      session.participantId = binding.participantId;
      await store.save(session);
    }
    reply.code(201);
    return publicSession(session);
  });

  app.get('/api/sessions/:id', async (request, reply) => {
    const session = await store.get(request.params.id);
    if (!session) return reply.code(404).send({ error: '会话不存在。' });
    return publicSession(session);
  });

  app.post('/api/agent/turn', async (request, reply) => {
    const input = turnSchema.parse(request.body);
    const stream = openSse(reply);
    try {
      const result = await agent.runTurn({
        ...input,
        onTextDelta: (text) => stream.send('assistant.delta', { text }),
      });
      for (const event of result.events) stream.send(event.type, event.data);
    } catch (error) {
      request.log.error({ err: error }, 'agent turn failed');
      if (error instanceof AgentActionError) {
        stream.send('agent.error', {
          kind: 'validation',
          code: error.code,
          message: error.message,
          details: error.details,
          retryable: false,
        });
      } else {
        stream.send('agent.error', {
          kind: 'connection',
          code: 'AGENT_TURN_FAILED',
          message: '连接这次中断了，请重新发送刚才的内容。',
          retryable: true,
        });
      }
    } finally {
      stream.end();
    }
  });

  app.post('/api/uploads', async (request, reply) => {
    const part = await request.file();
    if (!part) return reply.code(400).send({ error: '没有收到文件。' });
    const extension = EVIDENCE_TYPES.get(part.mimetype);
    if (!extension) return reply.code(415).send({ error: '当前仅支持常见图片或音频证据。' });
    const id = `ev_${crypto.randomUUID().replaceAll('-', '')}`;
    const filename = await evidenceStore.put({ id, extension, data: await part.toBuffer(), contentType: part.mimetype });
    reply.code(201);
    return { id, url: `/api/uploads/${filename}`, mimeType: part.mimetype, storage: evidenceStore.kind };
  });

  app.get('/api/uploads/:filename', async (request, reply) => {
    if (!/^ev_[a-f0-9]+\.[a-zA-Z0-9]+$/.test(request.params.filename)) return reply.code(404).send();
    const evidence = await evidenceStore.get(request.params.filename);
    if (!evidence) return reply.code(404).send();
    reply.type(evidence.contentType || path.extname(request.params.filename));
    return evidence.data;
  });

  app.post('/api/time-bank/answer', async (request) => {
    const body = z.object({
      sessionId: z.string(),
      taskId: z.string(),
      answer: z.unknown().optional(),
      evidence: z.array(z.object({ id: z.string(), url: z.string(), mimeType: z.string().optional() })).optional(),
      location: z.object({
        lng: z.coerce.number(), lat: z.coerce.number(), accuracyMeters: z.coerce.number().min(0).optional(),
      }).optional(),
    }).parse(request.body);
    return agent.answerTimeBank(body);
  });

  app.post('/api/time-bank/gift', async (request) => {
    const body = z.object({ sessionId: z.string(), roleId: z.string(), amount: z.coerce.number() }).parse(request.body);
    return agent.giftTime(body);
  });

  app.setErrorHandler((error, request, reply) => {
    request.log.error({ err: error }, 'request failed');
    const status = error instanceof z.ZodError ? 400 : (error.statusCode || 500);
    reply.code(status).send({ error: status >= 500 ? '服务暂时不可用，请稍后重试。' : error.message });
  });

  const teacherRoot = path.resolve(env.projectRoot, '../4-tea-leading');
  try {
    await fs.access(path.join(teacherRoot, 'index.html'));
    await app.register(fastifyStatic, {
      root: teacherRoot,
      prefix: '/teacher/',
      decorateReply: false,
    });
    app.get('/teacher', (request, reply) => reply.redirect('/teacher/'));
  } catch {
    // Teacher PWA is optional during isolated student-runtime tests.
  }

  const dist = path.resolve(env.projectRoot, 'dist');
  try {
    await fs.access(dist);
    await app.register(fastifyStatic, { root: dist, wildcard: false });
    app.get('/*', (request, reply) => reply.sendFile('index.html'));
  } catch {
    // Development uses Vite's dev server and proxy.
  }

  return app;
}
