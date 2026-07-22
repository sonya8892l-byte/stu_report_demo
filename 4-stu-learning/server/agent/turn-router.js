const exactGreeting = /^(你好|您好|嗨|哈喽|hello|hi|hey|早上好|早安|中午好|下午好|晚上好|在吗)[呀啊哦嘛吗！!。.～~ ]*$/i;
const exactThanks = /^(谢谢|谢谢你|多谢|感谢|好的谢谢|ok谢谢)[呀啊哦嘛吗！!。.～~ ]*$/i;
const exactGoodbye = /^(再见|拜拜|晚安|下次见|bye|goodbye)[呀啊哦嘛吗！!。.～~ ]*$/i;
const exactAffirmative = /^(好|好的|好了|嗯|嗯嗯|行|可以|没问题|ok|okay|yes|是|对|准备好了|开始吧)[呀啊哦嘛吗啦呢！!。.～~ ]*$/i;
const exactNegative = /^(不|不要|不行|还没|没有|没好|等等|等一下|no|不是|不对)[呀啊哦嘛吗啦呢！!。.～~ ]*$/i;
const complaintPattern = /你有毒|有病|傻|笨|烦死|真烦|一直重复|又问|说过了|听不懂人话|别催|别再问|怎么老是|卡住了|没反应/;

function lowSemanticInput(text) {
  const compact = text.replace(/\s+/g, '');
  if (!compact) return true;
  if (/^[=+\-*/_~～.。…，,!?！？、:：;；]+$/.test(compact)) return true;
  if (/^(额+|呃+|em+|emm+|啊+|哦+|哈+|呵+|？？+|\?\?+)$/i.test(compact)) return true;
  return false;
}

function contains(text, pattern) {
  return pattern.test(text.toLowerCase());
}

function courseRelevance(text, course, role) {
  if (text.length < 2) return false;
  const haystack = [
    course.publicLesson.title,
    course.publicLesson.coreQuestion,
    role.name,
    role.question,
    ...role.tasks.flatMap((task) => [task.name, task.requirement, task.goals]),
    ...course.knowledge.flatMap((entry) => [entry.topic, entry.title, ...(entry.tags || [])]),
  ].join('');
  for (let index = 0; index < text.length - 1; index += 1) {
    const token = text.slice(index, index + 2);
    if (haystack.includes(token)) return true;
  }
  return false;
}

function base(intent, additions = {}) {
  return {
    intent,
    signal: 'neutral',
    fastPath: false,
    needsKnowledge: false,
    includeTaskContext: false,
    includePhasePrompt: false,
    includeRestrictions: false,
    allowedTools: [],
    sourceMode: 'conversation',
    ...additions,
  };
}

export function entrySignals(text) {
  return {
    notArrived: /还没到|没有到|没到位|在路上|快到了/.test(text),
    notReady: /还没准备好|没准备好|等一下|稍等|先等等/.test(text),
    arrived: /已经到|我到了|到位了|已到|在现场|在展区|到了|已经站在|就在任务点|跟大家会合|已经来了/.test(text),
    ready: /准备好了|我准备好|可以开始|开始吧|就绪|准备完毕|可以做了|开工吧|能开始了|继续吧|继续学习|回到任务|继续$/.test(text),
  };
}

export function resolvePendingAnswer(text, pendingQuestion) {
  if (!pendingQuestion) return { matched: false, value: null, confidence: 0 };
  const entry = entrySignals(text);
  const affirmative = exactAffirmative.test(text);
  const negative = exactNegative.test(text);
  if (pendingQuestion.kind === 'arrival') {
    if (entry.notArrived) return { matched: true, value: false, confidence: 0.99, entry };
    if (entry.arrived) return { matched: true, value: true, confidence: 0.99, entry };
    if (affirmative) return { matched: true, value: true, confidence: 0.9, entry };
    if (negative) return { matched: true, value: false, confidence: 0.82, entry };
  }
  if (pendingQuestion.kind === 'readiness') {
    if (entry.notReady) return { matched: true, value: false, confidence: 0.99, entry };
    if (entry.ready) return { matched: true, value: true, confidence: 0.99, entry };
    if (affirmative) return { matched: true, value: true, confidence: 0.9, entry };
    if (negative) return { matched: true, value: false, confidence: 0.82, entry };
  }
  return { matched: false, value: null, confidence: 0, entry };
}

export function classifyTurn({ input, session, course, role, nudge }) {
  if (input.type === 'quick_reply') {
    const pending = session.dialogueState?.pendingQuestion;
    if (!pending || pending.id !== input.questionId) {
      return base('quick_reply_stale', { fastWorkflow: true });
    }
    if (input.act === 'request_navigation') {
      return base('onboarding_navigation', {
        fastWorkflow: true,
        includeTaskContext: true,
        allowedTools: ['show_navigation', 'call_teacher'],
        sourceMode: 'course-config',
      });
    }
    return base('pending_answer', {
      fastWorkflow: true,
      includeTaskContext: true,
      includePhasePrompt: true,
      includeRestrictions: true,
      allowedTools: input.act === 'affirm' ? ['open_task_tool'] : ['show_navigation'],
      sourceMode: 'course-config',
      pendingResolution: {
        matched: true,
        value: input.act === 'affirm',
        confidence: 1,
        entry: pending.kind === 'arrival'
          ? { arrived: input.act === 'affirm', notArrived: input.act === 'deny', ready: false, notReady: false }
          : { arrived: false, notArrived: false, ready: input.act === 'affirm', notReady: input.act === 'deny' },
      },
      entry: pending.kind === 'arrival'
        ? { arrived: input.act === 'affirm', notArrived: input.act === 'deny', ready: false, notReady: false }
        : { arrived: false, notArrived: false, ready: input.act === 'affirm', notReady: input.act === 'deny' },
    });
  }
  if (input.type === 'tool_result') {
    const navigationCompleted = input.data?.resolvedTool === 'show_navigation' && input.result?.status === 'completed';
    return base(navigationCompleted ? 'navigation_completed' : 'tool_result', {
      fastWorkflow: navigationCompleted,
      includeTaskContext: true,
      includePhasePrompt: true,
      includeRestrictions: true,
      // 工具推进由状态机在模型回答后追加，避免模型为了选择一个确定工具而阻塞整轮回复。
      allowedTools: [],
      sourceMode: 'course-config',
    });
  }
  if (input.type === 'lifecycle_event') {
    if (input.event === 'context_tick') {
      return base(nudge?.due ? 'proactive_nudge' : 'silent_context_tick', {
        fastWorkflow: Boolean(nudge?.due),
        includeTaskContext: Boolean(nudge?.due),
        allowedTools: nudge?.reason === 'location_pending' ? ['show_navigation'] : [],
        sourceMode: 'course-config',
        silent: !nudge?.due,
        nudge,
      });
    }
    if (input.event === 'role_assigned') {
      return base('role_assigned', {
        fastWorkflow: true,
        includeTaskContext: true,
        includePhasePrompt: true,
        includeRestrictions: true,
        allowedTools: ['show_navigation', 'call_teacher'],
        sourceMode: 'course-config',
      });
    }
    if (input.event === 'task_step_completed') {
      return base('task_step_completed', {
        fastWorkflow: true,
        includeTaskContext: true,
        includePhasePrompt: true,
        includeRestrictions: true,
        sourceMode: 'course-config',
      });
    }
    return base('lifecycle_event', {
      includeTaskContext: true,
      includePhasePrompt: true,
      includeRestrictions: true,
      allowedTools: [],
      sourceMode: 'course-config',
    });
  }

  const text = input.text.trim();
  if (contains(text, /受伤|流血|摔倒|走失|迷路|危险|救命|不舒服|联系老师|叫老师|找老师/)) {
    return base('safety_help', { signal: 'distressed', fastWorkflow: true, allowedTools: ['call_teacher'] });
  }
  if (complaintPattern.test(text)) {
    return base('conversation_repair', {
      signal: 'frustrated',
      fastWorkflow: true,
      sourceMode: 'conversation',
    });
  }
  if (exactGreeting.test(text)) return base('greeting', { fastPath: true });
  if (exactThanks.test(text)) return base('gratitude', { fastPath: true });
  if (exactGoodbye.test(text)) return base('goodbye', { fastPath: true });
  if (contains(text, /好累|累死|困了|想休息|不想做了/)) {
    return base('emotion', { signal: 'tired', fastPath: true });
  }
  if (contains(text, /烦|生气|讨厌|没意思|焦虑|紧张|害怕|难过|沮丧|崩溃/)) {
    return base('emotion', { signal: 'frustrated', fastPath: true });
  }
  if (contains(text, /在哪|哪里|怎么走|导航|地图|位置|没找到|找不到/)) {
    return base(session.onboardingState?.completed ? 'navigation' : 'onboarding_navigation', {
      fastWorkflow: true,
      includeTaskContext: true,
      allowedTools: ['show_navigation', 'call_teacher'],
      sourceMode: 'course-config',
    });
  }

  const pendingResolution = resolvePendingAnswer(text, session.dialogueState?.pendingQuestion);
  if (pendingResolution.matched) {
    return base('pending_answer', {
      fastWorkflow: true,
      includeTaskContext: true,
      includePhasePrompt: true,
      includeRestrictions: true,
      allowedTools: pendingResolution.value ? ['open_task_tool'] : ['show_navigation'],
      sourceMode: 'course-config',
      pendingResolution,
      entry: pendingResolution.entry,
    });
  }

  const entry = entrySignals(text);
  if (!session.onboardingState?.completed) {
    if (entry.notArrived) {
      return base('onboarding_not_arrived', {
        fastWorkflow: true,
        includeTaskContext: true,
        allowedTools: ['show_navigation', 'call_teacher'],
        sourceMode: 'course-config',
        entry,
      });
    }
    if (entry.notReady) {
      return base('onboarding_not_ready', {
        fastWorkflow: true,
        includeTaskContext: true,
        sourceMode: 'course-config',
        entry,
      });
    }
    if (entry.arrived || entry.ready) {
      return base('onboarding_check', {
        fastWorkflow: true,
        includeTaskContext: true,
        includePhasePrompt: true,
        includeRestrictions: true,
        allowedTools: ['show_navigation', 'open_task_tool'],
        sourceMode: 'course-config',
        entry,
      });
    }
    if (courseRelevance(text, course, role)) {
      return base('course_knowledge', {
        includeTaskContext: true,
        includeRestrictions: true,
        needsKnowledge: true,
        allowedTools: [],
      });
    }
    if (lowSemanticInput(text)) return base('unclear_input', { fastWorkflow: true });
    if (exactAffirmative.test(text)) return base('acknowledgement', { fastPath: true });
    return base('onboarding_unclear', {
      includeTaskContext: false,
      sourceMode: 'conversation',
    });
  }
  if (contains(text, /在哪|哪里|怎么走|导航|地图|位置|到达|到了|没找到|找不到/)) {
    return base('navigation', {
      fastWorkflow: true,
      includeTaskContext: true,
      allowedTools: ['show_navigation', 'call_teacher'],
      sourceMode: 'course-config',
    });
  }
  if (contains(text, /不会|不懂|没看懂|不知道怎么|怎么做|帮我|提示|线索|卡住/)) {
    return base('task_help', {
      fastGuidance: true,
      includeTaskContext: true,
      includeRestrictions: true,
      allowedTools: [],
      sourceMode: 'course-config',
    });
  }
  if (contains(text, /做完|完成|搞定|(?:这一步)?好了|提交|下一步|然后呢|开始任务|继续任务|打开任务/)) {
    return base('task_progress', {
      fastWorkflow: true,
      includeTaskContext: true,
      includePhasePrompt: true,
      includeRestrictions: true,
      allowedTools: ['open_task_tool', 'show_navigation'],
      sourceMode: 'course-config',
    });
  }
  if (/^(不知道|没懂|为什么|怎么了|它呢|这个呢)[？?。 ]*$/.test(text) && /task|knowledge|navigation/.test(session.conversationState?.lastIntent || '')) {
    return base('task_followup', {
      fastGuidance: true,
      includeTaskContext: true,
      includeRestrictions: true,
      allowedTools: [],
      sourceMode: 'course-config',
    });
  }
  if (courseRelevance(text, course, role)) {
    return base('course_knowledge', {
      includeTaskContext: true,
      includeRestrictions: true,
      needsKnowledge: true,
      allowedTools: [],
    });
  }
  if (lowSemanticInput(text)) return base('unclear_input', { fastWorkflow: true });
  if (exactAffirmative.test(text)) return base('acknowledgement', { fastPath: true });
  return base('social');
}

export function fastConversationReply(intent, companionName = '絮絮', signal = 'neutral') {
  if (intent === 'greeting') return `你好呀，我是${companionName}～我在呢。你想聊什么都可以。`;
  if (intent === 'gratitude') return '不客气呀～我一直在，有想法就继续告诉我。';
  if (intent === 'goodbye') return '好呀，回头见～需要我的时候再来找我。';
  if (intent === 'acknowledgement') return '嗯嗯，我在听。你可以接着说。';
  if (intent === 'emotion' && signal === 'tired') return '听起来你有点累了。先在安全的位置休息一分钟，好吗？我会在这里等你。';
  if (intent === 'emotion') return '我在听。紧张、烦躁或害怕都可以告诉我，你愿意先说说刚刚发生了什么吗？';
  return '';
}

export function toolsForDecision(decision, definitions) {
  const allowed = new Set(decision.allowedTools || []);
  return definitions.filter((tool) => allowed.has(tool.name));
}
