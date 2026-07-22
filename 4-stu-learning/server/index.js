import { loadEnv } from './config/env.js';
import { buildApp } from './app.js';

const env = loadEnv();
// 进程启动时重新加载并编译课程配置。
const app = await buildApp({ env });

try {
  await app.listen({ host: env.HOST, port: env.PORT });
} catch (error) {
  app.log.error(error);
  process.exitCode = 1;
}
