import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = resolve(repositoryRoot, 'dist');
const studentBuildDirectory = resolve(repositoryRoot, '4-stu-learning', 'dist');
const teacherSourceDirectory = resolve(repositoryRoot, '4-tea-leading');

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

await cp(studentBuildDirectory, resolve(outputDirectory, 'student'), {
  recursive: true,
});

await cp(teacherSourceDirectory, resolve(outputDirectory, 'teacher'), {
  recursive: true,
  filter(source) {
    return !source.endsWith('.DS_Store') && !source.endsWith('README.md');
  },
});

await writeFile(
  resolve(outputDirectory, 'index.html'),
  `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="refresh" content="0; url=/student/" />
    <title>研学智能学习平台</title>
  </head>
  <body>
    <p>正在进入学生端… <a href="/student/">立即进入</a></p>
  </body>
</html>
`,
  'utf8',
);

console.log('统一部署目录已生成：');
console.log(`- 学生端：${resolve(outputDirectory, 'student')}`);
console.log(`- 教师端：${resolve(outputDirectory, 'teacher')}`);
