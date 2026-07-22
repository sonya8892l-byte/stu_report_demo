function roleAllows(entry, role) {
  return entry.roles.some((name) => name === role.name || name === '全角色共享' || name === '全部角色');
}

function completed(session, roleId, taskNumber, course) {
  const role = course?.roles?.find((item) => item.id === roleId);
  const taskId = role?.tasks?.[taskNumber - 1]?.id || `task-${taskNumber}`;
  return session.completedTaskIds.includes(`${roleId}:${taskId}`);
}

export function restrictionUnlocked(restriction, session, course) {
  const condition = restriction.unlockWhen;
  if (/模拟运行后/.test(condition)) return session.events.includes('xuanji-simulation:completed');
  const fallbackRoleMap = {
    数龙官: 'dragon-counter',
    测坡官: 'slope-surveyor',
    寻沟官: 'ditch-finder',
    引河官: 'river-guide',
    护城官: 'moat-guard',
    真相官: 'truth-seeker',
  };
  const roleMap = course?.roles?.length
    ? Object.fromEntries(course.roles.map((role) => [role.name, role.id]))
    : fallbackRoleMap;
  const roleName = Object.keys(roleMap).find((name) => condition.includes(name));
  const taskNumber = Number.parseInt(condition.match(/任务\s*(\d+)/)?.[1], 10);
  if (roleName && taskNumber) return completed(session, roleMap[roleName], taskNumber, course);
  const phase = Number.parseInt(condition.match(/Phase\s*(\d+)/i)?.[1], 10);
  if (phase && session.phaseNumber >= phase) return true;
  return false;
}

function knowledgeVisible(entry, session, role, course) {
  if (!roleAllows(entry, role)) return false;
  const rule = entry.revealWhen.toLowerCase();
  if (/always|content_always_available/.test(rule)) return true;
  const taskNumber = Number.parseInt(rule.match(/after[_-]?task(\d+)/)?.[1], 10);
  if (taskNumber) return completed(session, role.id, taskNumber, course);
  if (/truth[_-]?seeker.*task2/.test(rule)) {
    return session.roleId === 'truth-seeker' && completed(session, 'truth-seeker', 2, course);
  }
  const phaseNumber = Number.parseInt(rule.match(/phase[_:-]?(\d+)/)?.[1], 10);
  if (phaseNumber) return session.phaseNumber >= phaseNumber;
  return false;
}

function redactLockedTerms(content, course, session) {
  let result = content;
  for (const restriction of course.restrictions) {
    if (restrictionUnlocked(restriction, session, course)) continue;
    for (const term of restriction.protectedTerms) result = result.replaceAll(term, '[待学生探索的数据]');
  }
  return result;
}

function tokens(text = '') {
  const normalized = text.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '');
  const values = new Set();
  for (let index = 0; index < normalized.length - 1; index += 1) values.add(normalized.slice(index, index + 2));
  return values;
}

function relevance(entry, query) {
  const haystack = `${entry.topic}${entry.title}${entry.tags.join('')}`.toLowerCase();
  let score = entry.tags.filter((tag) => query.includes(tag)).length * 8;
  if (query.includes(entry.topic) || entry.topic.includes(query)) score += 12;
  const queryTokens = tokens(query);
  const entryTokens = tokens(haystack);
  for (const token of queryTokens) if (entryTokens.has(token)) score += 1;
  return score;
}

function compactContent(content, query, maxLength = 700) {
  const paragraphs = String(content || '')
    .split(/\n{2,}/)
    .map((text, index) => ({ text: text.trim(), index }))
    .filter((item) => item.text);
  if (!paragraphs.length) return '';
  const queryTokens = tokens(query);
  const ranked = paragraphs.map((item) => {
    const paragraphTokens = tokens(item.text);
    let score = /^#{1,4}\s/.test(item.text) ? 1 : 0;
    for (const token of queryTokens) if (paragraphTokens.has(token)) score += 1;
    return { ...item, score };
  }).sort((a, b) => b.score - a.score || a.index - b.index);
  const selected = [];
  let length = 0;
  for (const item of ranked) {
    if (selected.length && length + item.text.length > maxLength) continue;
    selected.push(item);
    length += item.text.length;
    if (length >= maxLength * 0.75) break;
  }
  return selected.sort((a, b) => a.index - b.index).map((item) => item.text).join('\n\n').slice(0, maxLength);
}

export function retrieveKnowledge({ course, session, role, query, references = '', limit = 2 }) {
  const referencedIds = new Set(
    [...String(references).matchAll(/\bK-?(\d+)\b/gi)]
      .map((match) => `K-${String(Number(match[1])).padStart(2, '0')}`),
  );
  return course.knowledge
    .filter((entry) => knowledgeVisible(entry, session, role, course))
    .map((entry) => ({ ...entry, score: relevance(entry, query) + (referencedIds.has(entry.id) ? 100 : 0) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id))
    .slice(0, limit)
    .map((entry) => ({
      ...entry,
      content: compactContent(redactLockedTerms(entry.content, course, session), query),
    }));
}

export function findSpoiler(text, course, session) {
  for (const restriction of course.restrictions) {
    if (restrictionUnlocked(restriction, session, course)) continue;
    const term = restriction.protectedTerms.find((value) => text.includes(value));
    if (term) return { restriction, term };
  }
  return null;
}
