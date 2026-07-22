import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

export function createSessionStore({ baseDir }) {
  async function ensure() {
    await fs.mkdir(baseDir, { recursive: true });
  }

  function filePath(id) {
    if (!/^[a-zA-Z0-9_-]+$/.test(id)) throw new Error('无效会话 ID。');
    return path.join(baseDir, `${id}.json`);
  }

  async function save(session) {
    await ensure();
    session.updatedAt = new Date().toISOString();
    const target = filePath(session.id);
    const temporary = `${target}.${crypto.randomUUID()}.tmp`;
    await fs.writeFile(temporary, JSON.stringify(session, null, 2), { mode: 0o600 });
    await fs.rename(temporary, target);
    return session;
  }

  async function create(values) {
    const session = {
      schemaVersion: 2,
      id: `ses_${crypto.randomUUID().replaceAll('-', '')}`,
      courseId: values.courseId,
      studentId: values.studentId,
      groupId: values.groupId,
      runId: values.runId || null,
      participantId: values.participantId || null,
      roleId: values.roleId,
      grade: values.grade || '初中',
      phaseId: values.phaseId || 'phase-2',
      phaseNumber: Number.parseInt((values.phaseId || 'phase-2').match(/\d+/)?.[0], 10) || 2,
      currentTaskIndex: 0,
      scaffoldLevel: 0,
      completedTaskIds: [],
      events: [],
      messages: [],
      pendingTools: {},
      handledRequestIds: [],
      timeBalance: Number(values.timeBalance || 0),
      timeEarned: 0,
      completedBankTaskIds: [],
      gifts: [],
      taskState: {},
      learningState: {
        coursePhaseId: values.phaseId || 'phase-2',
        roleId: values.roleId,
        roleStageId: '',
        stepId: '',
        stepStatus: 'active',
        completedStepIds: [],
        completedRoleStageIds: [],
        activeToolCallId: null,
        evidenceIds: [],
        stageValidation: 'pending',
        teacherLock: null,
      },
      locationState: null,
      onboardingState: {
        arrivedConfirmed: false,
        readyConfirmed: false,
        completed: false,
      },
      conversationState: {
        lastIntent: '',
        lastIntentAt: null,
        studentSignal: 'neutral',
        lastNudgeAt: null,
        nudgeCount: 0,
      },
      dialogueState: {
        lifecycle: 'ORIENT_ROLE',
        pendingQuestion: null,
        interruptedQuestion: null,
        confirmedSlots: { arrival: false, readiness: false },
        lastDialogueMove: '',
        lastAssistantText: '',
        recentAssistantFingerprints: [],
        consecutiveMisunderstandings: 0,
        repairCount: 0,
        lastRepairAt: null,
      },
      learnerState: {
        grade: values.grade || '初中',
        engagement: 'unknown',
        emotion: 'neutral',
        preferredInput: 'unknown',
        scaffoldLevel: 0,
        consecutiveDifficulties: 0,
      },
      environmentState: {
        pageVisible: true,
        activeTab: 'task',
        hasDraft: false,
        phaseRemainingSeconds: null,
        teacherCommand: null,
        groupStatus: null,
        observedAt: null,
      },
      createdAt: new Date().toISOString(),
    };
    return save(session);
  }

  async function get(id) {
    try {
      return JSON.parse(await fs.readFile(filePath(id), 'utf8'));
    } catch (error) {
      if (error.code === 'ENOENT') return null;
      throw error;
    }
  }

  return { create, get, save };
}
