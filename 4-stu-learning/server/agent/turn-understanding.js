const SPEECH_ACTS = new Set([
  'affirm',
  'deny',
  'greeting',
  'emotion',
  'complaint',
  'course_question',
  'task_help',
  'request_navigation',
  'request_teacher',
  'social',
  'unclear',
]);

const DIALOGUE_MOVES = new Set([
  'answer_student',
  'acknowledge_student',
  'support_emotion',
  'repair_conversation',
  'clarify_input',
  'ask_arrival',
  'ask_readiness',
  'support_navigation',
]);

export function understandingInstructions(baseInstructions, pendingQuestion) {
  return `${baseInstructions}

[结构化回合理解]
当前待回答问题：${pendingQuestion?.prompt || '无'}
只输出一个 JSON 对象，不要使用 Markdown：
{
  "speechAct": "affirm|deny|greeting|emotion|complaint|course_question|task_help|request_navigation|request_teacher|social|unclear",
  "answersPendingQuestion": true或false,
  "pendingAnswer": "yes|no|unknown",
  "emotion": "neutral|tired|frustrated|worried|excited",
  "taskRelation": "current_flow|course_related|unrelated|unknown",
  "confidence": 0到1,
  "dialogueMove": "answer_student|acknowledge_student|support_emotion|repair_conversation|clarify_input|ask_arrival|ask_readiness|support_navigation",
  "reply": "直接给学生的一条自然回复"
}
只有学生明确回答了当前待回答问题时，answersPendingQuestion 才能为 true。不要提出两个问题，不要宣布任务完成。`;
}

function parseJson(text) {
  const source = String(text || '').trim().replace(/^```json\s*|```$/g, '').trim();
  try {
    return JSON.parse(source);
  } catch {
    const start = source.indexOf('{');
    const end = source.lastIndexOf('}');
    if (start < 0 || end <= start) return null;
    try { return JSON.parse(source.slice(start, end + 1)); } catch { return null; }
  }
}

export function parseTurnUnderstanding(text) {
  const value = parseJson(text);
  if (!value || !SPEECH_ACTS.has(value.speechAct)) return null;
  const pendingAnswer = ['yes', 'no', 'unknown'].includes(value.pendingAnswer) ? value.pendingAnswer : 'unknown';
  const confidence = Math.max(0, Math.min(1, Number(value.confidence || 0)));
  return {
    speechAct: value.speechAct,
    answersPendingQuestion: Boolean(value.answersPendingQuestion) && pendingAnswer !== 'unknown',
    pendingAnswer,
    emotion: ['neutral', 'tired', 'frustrated', 'worried', 'excited'].includes(value.emotion) ? value.emotion : 'neutral',
    taskRelation: ['current_flow', 'course_related', 'unrelated', 'unknown'].includes(value.taskRelation)
      ? value.taskRelation
      : 'unknown',
    confidence,
    dialogueMove: DIALOGUE_MOVES.has(value.dialogueMove) ? value.dialogueMove : 'acknowledge_student',
    reply: String(value.reply || '').trim().slice(0, 500),
  };
}

