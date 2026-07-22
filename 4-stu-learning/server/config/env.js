import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { config } from 'dotenv';
import { z } from 'zod';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

for (const filename of ['.env.local', '.env']) {
  const envPath = path.join(projectRoot, filename);
  if (fs.existsSync(envPath)) config({ path: envPath, override: false });
}

const schema = z.object({
  OPENAI_BASE_URL: z.string().url(),
  OPENAI_API_KEY: z.string().min(1),
  OPENAI_MODEL: z.string().min(1),
  OPENAI_WIRE_API: z.enum(['responses', 'chat_completions']).default('responses'),
  AI_TOOL_MODE: z.enum(['auto', 'native', 'structured']).default('auto'),
  AI_WEB_SEARCH_MODE: z.enum(['auto', 'enabled', 'disabled']).default('auto'),
  AI_VISION_MODE: z.enum(['auto', 'enabled', 'disabled']).default('auto'),
  AI_REASONING_EFFORT: z.enum(['none', 'minimal', 'low', 'medium', 'high', 'xhigh']).default('minimal'),
  AI_MAX_OUTPUT_TOKENS: z.coerce.number().int().min(64).max(2000).default(192),
  AI_TIMEOUT_MS: z.coerce.number().int().min(5000).max(120000).default(18000),
  VITE_AMAP_KEY: z.string().default(''),
  VITE_AMAP_SECURITY_CODE: z.string().default(''),
  VITE_AMAP_STYLE: z.string().default('amap://styles/normal'),
  HOST: z.string().default('127.0.0.1'),
  PORT: z.coerce.number().int().positive().default(3000),
  SESSION_STORE_DIR: z.string().default('.runtime'),
  DATABASE_URL: z.string().url().optional(),
  S3_BUCKET: z.string().min(1).optional(),
  S3_REGION: z.string().default('auto'),
  S3_ENDPOINT: z.string().url().optional(),
  S3_ACCESS_KEY_ID: z.string().optional(),
  S3_SECRET_ACCESS_KEY: z.string().optional(),
  S3_PREFIX: z.string().default('evidence'),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']).default('info'),
});

export function loadEnv() {
  const parsed = schema.safeParse(process.env);
  if (!parsed.success) {
    const fields = parsed.error.issues.map((issue) => issue.path.join('.')).join(', ');
    throw new Error(`智能体服务环境变量校验失败：${fields}`);
  }
  return { ...parsed.data, projectRoot };
}
