import fs from 'node:fs/promises';
import path from 'node:path';
import { GetObjectCommand, ListObjectsV2Command, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

function localStore({ projectRoot }) {
  const directory = path.resolve(projectRoot, 'uploads');
  return {
    async put({ id, extension, data }) {
      await fs.mkdir(directory, { recursive: true });
      const filename = `${id}${extension}`;
      await fs.writeFile(path.join(directory, filename), data, { mode: 0o600 });
      return filename;
    },
    async get(filename) {
      const data = await fs.readFile(path.join(directory, filename)).catch(() => null);
      return data ? { data, contentType: null } : null;
    },
    async findById(id) {
      const filename = (await fs.readdir(directory).catch(() => [])).find((item) => item.startsWith(`${id}.`));
      if (!filename) return null;
      return { filename, ...(await this.get(filename)) };
    },
    kind: 'local',
  };
}

function s3Store(env) {
  const client = new S3Client({
    region: env.S3_REGION || 'auto',
    endpoint: env.S3_ENDPOINT,
    forcePathStyle: Boolean(env.S3_ENDPOINT),
    credentials: env.S3_ACCESS_KEY_ID && env.S3_SECRET_ACCESS_KEY ? {
      accessKeyId: env.S3_ACCESS_KEY_ID,
      secretAccessKey: env.S3_SECRET_ACCESS_KEY,
    } : undefined,
  });
  const prefix = String(env.S3_PREFIX || 'evidence').replace(/^\/+|\/+$/g, '');
  const key = (filename) => `${prefix}/${filename}`;
  return {
    async put({ id, extension, data, contentType }) {
      const filename = `${id}${extension}`;
      await client.send(new PutObjectCommand({
        Bucket: env.S3_BUCKET, Key: key(filename), Body: data, ContentType: contentType,
        Metadata: { evidenceId: id },
      }));
      return filename;
    },
    async get(filename) {
      try {
        const result = await client.send(new GetObjectCommand({ Bucket: env.S3_BUCKET, Key: key(filename) }));
        return { data: Buffer.from(await result.Body.transformToByteArray()), contentType: result.ContentType || null };
      } catch (error) {
        if (error.name === 'NoSuchKey' || error.$metadata?.httpStatusCode === 404) return null;
        throw error;
      }
    },
    async findById(id) {
      const result = await client.send(new ListObjectsV2Command({ Bucket: env.S3_BUCKET, Prefix: key(`${id}.`), MaxKeys: 1 }));
      const objectKey = result.Contents?.[0]?.Key;
      if (!objectKey) return null;
      const filename = objectKey.split('/').at(-1);
      return { filename, ...(await this.get(filename)) };
    },
    kind: 's3',
  };
}

export function createEvidenceStore(env) {
  return env.S3_BUCKET ? s3Store(env) : localStore(env);
}
