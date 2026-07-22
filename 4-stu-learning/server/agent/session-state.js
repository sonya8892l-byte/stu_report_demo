function iso(value = Date.now()) {
  return new Date(value).toISOString();
}

const DIALOGUE_SCHEMA_VERSION = 2;

function dialogueDefaults(session) {
  return {
    lifecycle: 'ORIENT_ROLE',
    pendingQuestion: null,
    interruptedQuestion: null,
    confirmedSlots: {
      arrival: Boolean(session.onboardingState?.arrivedConfirmed),
      readiness: Boolean(session.onboardingState?.readyConfirmed),
    },
    lastDialogueMove: '',
    lastAssistantText: '',
    recentAssistantFingerprints: [],
    consecutiveMisunderstandings: 0,
    repairCount: 0,
    lastRepairAt: null,
  };
}

function learnerDefaults(session) {
  return {
    grade: session.grade || '初中',
    engagement: 'unknown',
    emotion: 'neutral',
    preferredInput: 'unknown',
    scaffoldLevel: Number(session.scaffoldLevel || 0),
    consecutiveDifficulties: 0,
  };
}

function environmentDefaults() {
  return {
    pageVisible: true,
    activeTab: 'task',
    hasDraft: false,
    phaseRemainingSeconds: null,
    teacherCommand: null,
    groupStatus: null,
    observedAt: null,
  };
}

function learningDefaults(session, task) {
  return {
    coursePhaseId: session.phaseId || '',
    roleId: session.roleId || '',
    roleStageId: task?.roleStageId || task?.id || '',
    stepId: task?.steps?.[0]?.id || (task?.id ? `${task.id}-step-1` : ''),
    stepStatus: 'active',
    completedStepIds: [],
    completedRoleStageIds: [...(session.completedTaskIds || [])],
    activeToolCallId: null,
    evidenceIds: [],
    stageValidation: 'pending',
    teacherLock: null,
  };
}

function syncLearningState(session, task) {
  session.learningState ||= learningDefaults(session, task);
  const stepIndex = Number(session.taskState?.guidanceStepIndex || 0);
  const stepCount = task?.steps?.length || task?.guidanceSteps?.length || 1;
  session.learningState.coursePhaseId = session.phaseId || '';
  session.learningState.roleId = session.roleId || '';
  session.learningState.roleStageId = task?.roleStageId || task?.id || '';
  session.learningState.stepId = stepIndex >= stepCount
    ? null
    : (task?.steps?.[stepIndex]?.id || `${task?.id || 'step'}-step-${stepIndex + 1}`);
  session.learningState.stepStatus = stepIndex >= stepCount ? 'awaiting_evidence' : 'active';
  session.learningState.completedRoleStageIds = [...(session.completedTaskIds || [])];
  session.learningState.completedStepIds ||= [];
  session.learningState.evidenceIds ||= [];
  session.learningState.stageValidation ||= 'pending';
  return session.learningState;
}

function replyFingerprint(value = '') {
  return String(value)
    .toLowerCase()
    .replace(/[\s，。！？、；：,.!?;:'"“”‘’~～—_-]/g, '')
    .replace(/第\d+(?:个)?/g, '第#')
    .slice(0, 160);
}

function timestamp(value, now = Date.now()) {
  const parsed = typeof value === 'number' ? value : Date.parse(value || '');
  if (!Number.isFinite(parsed)) return null;
  return Math.min(parsed, now);
}

function locationDefaults(task) {
  const required = task?.location?.mode && task.location.mode !== 'none';
  return {
    taskId: task?.id || '',
    mode: task?.location?.mode || 'none',
    status: required ? 'pending' : 'not_required',
    permission: 'unknown',
    insideFence: null,
    accuracyMeters: null,
    radiusMeters: Number(task?.location?.radiusMeters || 0) || null,
    minDwellSeconds: Number(task?.location?.minDwellSeconds || 0),
    arrivalVerification: task?.location?.verification || 'none',
    enteredAt: null,
    dwellSeconds: 0,
    verifiedBy: required ? null : 'not_required',
    observedAt: null,
  };
}

export function ensureSessionRuntime(session, task, now = Date.now()) {
  session.schemaVersion = Math.max(Number(session.schemaVersion || 1), DIALOGUE_SCHEMA_VERSION);
  session.onboardingState ||= {
    arrivedConfirmed: false,
    readyConfirmed: false,
    completed: false,
  };
  session.conversationState ||= {
    lastIntent: '',
    lastIntentAt: null,
    studentSignal: 'neutral',
    lastNudgeAt: null,
    nudgeCount: 0,
  };
  session.dialogueState ||= dialogueDefaults(session);
  session.dialogueState.confirmedSlots ||= {
    arrival: Boolean(session.onboardingState.arrivedConfirmed),
    readiness: Boolean(session.onboardingState.readyConfirmed),
  };
  session.dialogueState.recentAssistantFingerprints ||= [];
  session.dialogueState.consecutiveMisunderstandings = Number(session.dialogueState.consecutiveMisunderstandings || 0);
  session.dialogueState.repairCount = Number(session.dialogueState.repairCount || 0);
  session.dialogueState.lifecycle ||= session.onboardingState.completed ? 'GUIDE_CURRENT_STEP' : 'ORIENT_ROLE';
  session.learnerState ||= learnerDefaults(session);
  session.learnerState.grade ||= session.grade || '初中';
  session.learnerState.scaffoldLevel = Number(session.scaffoldLevel || session.learnerState.scaffoldLevel || 0);
  session.environmentState ||= environmentDefaults();
  session.learningState ||= learningDefaults(session, task);
  session.taskState ||= {};
  if (session.taskState.taskId !== task?.id) {
    session.taskState = {
      taskId: task?.id || '',
      startedAt: iso(now),
      lastMeaningfulActionAt: iso(now),
      lastUserInputAt: null,
      lastToolActionAt: null,
      guidanceStepIndex: 0,
      stageAnnounced: false,
    };
    session.locationState = locationDefaults(task);
    session.conversationState.lastNudgeAt = null;
    session.conversationState.nudgeCount = 0;
    session.dialogueState.pendingQuestion = null;
    session.dialogueState.interruptedQuestion = null;
    session.dialogueState.lifecycle = session.onboardingState.completed ? 'ORIENT_ROLE_STAGE' : 'ORIENT_ROLE';
    session.learningState.activeToolCallId = null;
    session.learningState.stageValidation = 'pending';
  } else {
    session.taskState.startedAt ||= iso(now);
    session.taskState.lastMeaningfulActionAt ||= session.taskState.startedAt;
    session.taskState.lastUserInputAt ||= null;
    session.taskState.lastToolActionAt ||= null;
    session.taskState.guidanceStepIndex = Number(session.taskState.guidanceStepIndex || 0);
    session.taskState.stageAnnounced = Boolean(session.taskState.stageAnnounced);
    session.locationState ||= locationDefaults(task);
  }
  syncLearningState(session, task);
  updateDwell(session, now);
  return session;
}

export function setDialogueLifecycle(session, lifecycle) {
  ensureDialogueState(session);
  session.dialogueState.lifecycle = lifecycle;
}

function ensureDialogueState(session) {
  session.dialogueState ||= dialogueDefaults(session);
  session.dialogueState.confirmedSlots ||= {
    arrival: Boolean(session.onboardingState?.arrivedConfirmed),
    readiness: Boolean(session.onboardingState?.readyConfirmed),
  };
  return session.dialogueState;
}

export function setPendingQuestion(session, question, now = Date.now()) {
  const state = ensureDialogueState(session);
  state.interruptedQuestion = null;
  const previousAttempts = state.pendingQuestion?.id === question.id
    ? Number(state.pendingQuestion.attemptCount || 0)
    : 0;
  state.pendingQuestion = {
    id: question.id,
    type: question.type || `${question.kind}_confirmation`,
    kind: question.kind,
    slot: question.slot || question.kind,
    prompt: question.prompt,
    quickReplies: question.quickReplies || [],
    expectedActs: question.expectedActs || [],
    expectedValues: question.expectedValues || ['yes', 'no'],
    askedAt: iso(now),
    retryCount: previousAttempts,
    attemptCount: previousAttempts + 1,
    metadata: question.metadata || {},
  };
  if (question.kind === 'arrival') state.lifecycle = 'CONFIRM_ARRIVAL';
  if (question.kind === 'readiness') state.lifecycle = 'CONFIRM_READINESS';
  return state.pendingQuestion;
}

export function clearPendingQuestion(session, { outcome = 'resolved', now = Date.now() } = {}) {
  const state = ensureDialogueState(session);
  const previous = state.pendingQuestion;
  if (previous) {
    state.lastResolvedQuestion = {
      id: previous.id,
      kind: previous.kind,
      outcome,
      resolvedAt: iso(now),
    };
  }
  state.pendingQuestion = null;
  return previous;
}

export function suspendPendingQuestion(session) {
  const state = ensureDialogueState(session);
  if (!state.pendingQuestion) return null;
  state.interruptedQuestion = state.pendingQuestion;
  state.pendingQuestion = null;
  return state.interruptedQuestion;
}

export function resumePendingQuestion(session) {
  const state = ensureDialogueState(session);
  if (!state.interruptedQuestion) return null;
  state.pendingQuestion = state.interruptedQuestion;
  state.interruptedQuestion = null;
  return state.pendingQuestion;
}

export function confirmDialogueSlot(session, slot, value = true) {
  const state = ensureDialogueState(session);
  state.confirmedSlots[slot] = value;
  if (value === true && state.interruptedQuestion?.slot === slot) state.interruptedQuestion = null;
  if (slot === 'arrival') session.onboardingState.arrivedConfirmed = value === true;
  if (slot === 'readiness') session.onboardingState.readyConfirmed = value === true;
  return value;
}

export function recordDialogueMove(session, { move, text = '', now = Date.now() }) {
  const state = ensureDialogueState(session);
  const fingerprint = replyFingerprint(text);
  state.lastDialogueMove = move || '';
  state.lastAssistantText = text || '';
  state.lastAssistantAt = iso(now);
  if (fingerprint) {
    state.recentAssistantFingerprints.push(fingerprint);
    state.recentAssistantFingerprints = state.recentAssistantFingerprints.slice(-6);
  }
  return fingerprint;
}

export function isRepeatedAssistantText(session, text) {
  const fingerprint = replyFingerprint(text);
  if (!fingerprint) return false;
  const recent = ensureDialogueState(session).recentAssistantFingerprints || [];
  return recent.slice(-3).includes(fingerprint);
}

export function recordMisunderstanding(session, now = Date.now()) {
  const state = ensureDialogueState(session);
  state.consecutiveMisunderstandings += 1;
  state.lastMisunderstandingAt = iso(now);
  return state.consecutiveMisunderstandings;
}

export function clearMisunderstandings(session) {
  ensureDialogueState(session).consecutiveMisunderstandings = 0;
}

export function recordConversationRepair(session, now = Date.now()) {
  const state = ensureDialogueState(session);
  state.repairCount += 1;
  state.lastRepairAt = iso(now);
  state.lifecycle = 'CONVERSATION_REPAIR';
  return state.repairCount;
}

export function markMeaningfulAction(session, value = Date.now(), kind = 'other') {
  const now = Date.now();
  const time = timestamp(value, now) ?? now;
  const previous = timestamp(session.taskState?.lastMeaningfulActionAt, now) || 0;
  if (time >= previous) session.taskState.lastMeaningfulActionAt = iso(time);
  if (kind === 'user') session.taskState.lastUserInputAt = iso(time);
  if (kind === 'tool') session.taskState.lastToolActionAt = iso(time);
}

export function recordStepCompletion(session, task, stepIndex) {
  const learning = syncLearningState(session, task);
  const stepId = task?.steps?.[stepIndex]?.id || `${task?.id || 'step'}-step-${stepIndex + 1}`;
  if (!learning.completedStepIds.includes(stepId)) learning.completedStepIds.push(stepId);
  syncLearningState(session, task);
  return stepId;
}

export function recordActiveTool(session, toolCallId = null) {
  session.learningState ||= learningDefaults(session, null);
  session.learningState.activeToolCallId = toolCallId;
}

export function recordEvidenceIds(session, evidenceIds = []) {
  session.learningState ||= learningDefaults(session, null);
  for (const id of evidenceIds.filter(Boolean)) {
    if (!session.learningState.evidenceIds.includes(id)) session.learningState.evidenceIds.push(id);
  }
}

export function recordClientContext(session, data = {}, now = Date.now()) {
  const clientAction = timestamp(data.lastLocalActionAt, now);
  if (clientAction) markMeaningfulAction(session, clientAction, 'other');
  if (data.location && typeof data.location === 'object') recordLocationObservation(session, data.location, now);
  session.environmentState ||= environmentDefaults();
  if (typeof data.pageVisible === 'boolean') session.environmentState.pageVisible = data.pageVisible;
  if (typeof data.activeTab === 'string') session.environmentState.activeTab = data.activeTab;
  if (typeof data.hasDraft === 'boolean') session.environmentState.hasDraft = data.hasDraft;
  if (Number.isFinite(Number(data.phaseRemainingSeconds))) {
    session.environmentState.phaseRemainingSeconds = Number(data.phaseRemainingSeconds);
  }
  if (data.teacherCommand) session.environmentState.teacherCommand = data.teacherCommand;
  if (data.groupStatus) session.environmentState.groupStatus = data.groupStatus;
  session.environmentState.observedAt = iso(now);
  updateDwell(session, now);
}

export function recordLocationObservation(session, observation = {}, now = Date.now()) {
  const state = session.locationState;
  if (!state) return;
  if (['unknown', 'granted', 'denied', 'unavailable'].includes(observation.permission)) {
    state.permission = observation.permission;
  }
  if (typeof observation.insideFence === 'boolean') state.insideFence = observation.insideFence;
  const accuracy = Number(observation.accuracyMeters);
  if (Number.isFinite(accuracy) && accuracy >= 0) state.accuracyMeters = Math.round(accuracy);
  state.observedAt = iso(now);
  if (state.insideFence && !state.enteredAt) state.enteredAt = iso(now);
  if (!state.insideFence) {
    state.enteredAt = null;
    state.dwellSeconds = 0;
  }
  updateDwell(session, now);
  const automaticVerification = /geofence|gps|auto/.test(state.arrivalVerification || '');
  const accuracyLimit = Math.max(50, Number(state.radiusMeters || 0));
  const accuracyAccepted = Number.isFinite(state.accuracyMeters) && state.accuracyMeters <= accuracyLimit;
  const dwellAccepted = Number(state.dwellSeconds || 0) >= Number(state.minDwellSeconds || 0);
  if (state.insideFence && automaticVerification && accuracyAccepted && dwellAccepted && !state.verifiedBy) {
    state.verifiedBy = 'geofence';
    state.status = 'arrived';
  }
}

export function recordArrival(session, verification = 'manual', now = Date.now()) {
  const state = session.locationState;
  if (!state || state.mode === 'none') return;
  state.status = 'arrived';
  state.verifiedBy = ['manual', 'geofence', 'qr', 'teacher'].includes(verification) ? verification : 'manual';
  state.enteredAt ||= iso(now);
  state.observedAt = iso(now);
  updateDwell(session, now);
  markMeaningfulAction(session, now, 'tool');
}

export function updateDwell(session, now = Date.now()) {
  const enteredAt = timestamp(session.locationState?.enteredAt, now);
  if (!enteredAt) return 0;
  session.locationState.dwellSeconds = Math.max(0, Math.floor((now - enteredAt) / 1000));
  return session.locationState.dwellSeconds;
}

export function recordIntent(session, intent, signal = 'neutral', now = Date.now()) {
  session.conversationState.lastIntent = intent;
  session.conversationState.lastIntentAt = iso(now);
  session.conversationState.studentSignal = signal;
  session.learnerState ||= learnerDefaults(session);
  session.learnerState.emotion = signal === 'neutral' ? 'neutral' : signal;
}

export function runtimeSnapshot(session, now = Date.now()) {
  updateDwell(session, now);
  const taskStarted = timestamp(session.taskState?.startedAt, now) || now;
  const lastAction = timestamp(session.taskState?.lastMeaningfulActionAt, now) || taskStarted;
  return {
    taskId: session.taskState?.taskId || '',
    taskElapsedSeconds: Math.max(0, Math.floor((now - taskStarted) / 1000)),
    idleSeconds: Math.max(0, Math.floor((now - lastAction) / 1000)),
    location: { ...(session.locationState || {}) },
    lastIntent: session.conversationState?.lastIntent || '',
    studentSignal: session.conversationState?.studentSignal || 'neutral',
    nudgeCount: session.conversationState?.nudgeCount || 0,
    guidanceStepIndex: Number(session.taskState?.guidanceStepIndex || 0),
    stageAnnounced: Boolean(session.taskState?.stageAnnounced),
    onboarding: { ...(session.onboardingState || {}) },
    dialogue: structuredClone(session.dialogueState || dialogueDefaults(session)),
    learner: structuredClone(session.learnerState || learnerDefaults(session)),
    environment: structuredClone(session.environmentState || environmentDefaults()),
    learning: structuredClone(session.learningState || learningDefaults(session, null)),
  };
}
