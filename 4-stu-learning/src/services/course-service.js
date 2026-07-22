import lessons from '../generated/lesson-public.js';

export function getLesson(lessonId) {
  const resolvedLessonId = lessonId || Object.keys(lessons)[0];
  const lesson = lessons[resolvedLessonId];
  if (!lesson) throw new Error(`课程 ${resolvedLessonId} 不存在。`);
  return structuredClone(lesson);
}

export function listLessons() {
  return Object.values(lessons).map((lesson) => structuredClone(lesson));
}
