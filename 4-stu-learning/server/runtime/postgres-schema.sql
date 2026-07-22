-- Production persistence contract. The local demo uses the file adapter so it
-- remains runnable without infrastructure; these tables preserve the same IDs.
create table if not exists runtime_state (
  id text primary key, payload jsonb not null, updated_at timestamptz not null default now()
);
create table if not exists learner_sessions (
  id text primary key, payload jsonb not null, updated_at timestamptz not null default now()
);
create table if not exists course_runs (
  id text primary key, teacher_id text not null, course_id text not null,
  course_version text not null, class_name text not null, status text not null,
  phase_id text, version integer not null default 1, payload jsonb not null,
  created_at timestamptz not null, updated_at timestamptz not null
);
create table if not exists run_events (
  sequence bigserial primary key, run_id text not null references course_runs(id),
  type text not null, payload jsonb not null, created_at timestamptz not null default now()
);
create index if not exists run_events_run_sequence on run_events(run_id, sequence);
create table if not exists teacher_commands (
  id text primary key, run_id text not null references course_runs(id),
  idempotency_key text not null, actor_id text not null, action text not null,
  target jsonb not null, payload jsonb not null, status text not null,
  created_at timestamptz not null, unique(run_id, idempotency_key)
);
create table if not exists alerts (
  id text primary key, run_id text not null references course_runs(id),
  participant_id text, group_id text, severity text not null, type text not null,
  status text not null, context jsonb not null, created_at timestamptz not null,
  updated_at timestamptz not null
);
create table if not exists audit_events (
  id text primary key, run_id text not null references course_runs(id),
  actor_id text not null, action text not null, subject jsonb not null,
  reason text, payload jsonb not null, created_at timestamptz not null
);
