import crypto from 'node:crypto';
import pg from 'pg';

const { Pool } = pg;
const EMPTY_STATE = {
  schemaVersion: 1, sequence: 0, runs: [], alerts: [], commands: [], receipts: [],
  interventions: [], auditEvents: [], events: [],
};

export function createPostgresCourseRunStore({ databaseUrl }) {
  const pool = new Pool({ connectionString: databaseUrl, max: 8 });
  let ready;
  function ensure() {
    ready ||= pool.query(`
      create table if not exists runtime_state (
        id text primary key,
        payload jsonb not null,
        updated_at timestamptz not null default now()
      );
      insert into runtime_state(id, payload) values('course-runs', $1::jsonb)
      on conflict (id) do nothing;
    `, [JSON.stringify(EMPTY_STATE)]);
    return ready;
  }

  async function read() {
    await ensure();
    const result = await pool.query('select payload from runtime_state where id = $1', ['course-runs']);
    return structuredClone(result.rows[0]?.payload || EMPTY_STATE);
  }

  async function transaction(mutator) {
    await ensure();
    const client = await pool.connect();
    try {
      await client.query('begin');
      const result = await client.query('select payload from runtime_state where id = $1 for update', ['course-runs']);
      const state = structuredClone(result.rows[0]?.payload || EMPTY_STATE);
      const value = await mutator(state);
      await client.query('update runtime_state set payload = $1::jsonb, updated_at = now() where id = $2', [JSON.stringify(state), 'course-runs']);
      await client.query('commit');
      return value;
    } catch (error) {
      await client.query('rollback');
      throw error;
    } finally {
      client.release();
    }
  }

  return { read, transaction, close: () => pool.end() };
}

export function createPostgresSessionStore({ databaseUrl }) {
  const pool = new Pool({ connectionString: databaseUrl, max: 8 });
  let ready;
  function ensure() {
    ready ||= pool.query(`
      create table if not exists learner_sessions (
        id text primary key,
        payload jsonb not null,
        updated_at timestamptz not null default now()
      )
    `);
    return ready;
  }

  async function save(session) {
    await ensure();
    session.updatedAt = new Date().toISOString();
    await pool.query(`
      insert into learner_sessions(id, payload, updated_at) values($1, $2::jsonb, now())
      on conflict (id) do update set payload = excluded.payload, updated_at = now()
    `, [session.id, JSON.stringify(session)]);
    return session;
  }

  async function create(values) {
    const session = {
      id: `ses_${crypto.randomUUID().replaceAll('-', '')}`,
      courseId: values.courseId, studentId: values.studentId, groupId: values.groupId,
      runId: values.runId || null, participantId: values.participantId || null,
      roleId: values.roleId, grade: values.grade || '初中', phaseId: values.phaseId || 'phase-2',
      phaseNumber: Number.parseInt((values.phaseId || 'phase-2').match(/\d+/)?.[0], 10) || 2,
      currentTaskIndex: 0, scaffoldLevel: 0, completedTaskIds: [], events: [], messages: [],
      pendingTools: {}, handledRequestIds: [], timeBalance: Number(values.timeBalance || 0), timeEarned: 0,
      completedBankTaskIds: [], gifts: [], taskState: {}, locationState: null,
      onboardingState: { arrivedConfirmed: false, readyConfirmed: false, completed: false },
      conversationState: { lastIntent: '', lastIntentAt: null, studentSignal: 'neutral', lastNudgeAt: null, nudgeCount: 0 },
      createdAt: new Date().toISOString(),
    };
    return save(session);
  }

  async function get(id) {
    await ensure();
    const result = await pool.query('select payload from learner_sessions where id = $1', [id]);
    return result.rows[0]?.payload || null;
  }

  return { create, get, save, close: () => pool.end() };
}
