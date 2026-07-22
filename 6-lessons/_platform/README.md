# 平台通用规则 _platform/

此目录下的 .md 文件定义所有课程智能体共享的底线规则。引擎编译时自动将这些规则注入每个智能体的 System Prompt 前缀，课程设计者**无法覆盖或关闭**。

## 文件清单

| 文件 | 内容 |
|---|---|
| safety-rules.md | 安全边界 + 话题回避 |
| pedagogy-rules.md | 苏格拉底底线 + 角色边界 + 来源标注 |
| privacy-rules.md | 数据隐私规则 |

## 编译行为

引擎按以下顺序拼装 System Prompt：

1. `_platform/*.md` → 不可覆盖的前缀
2. `lesson_xxx/course.md` → 人设与元数据
3. `lesson_xxx/prompts/phaseN.md` → 当前阶段提示词
4. `lesson_xxx/guidance/role.md` → 角色引导规则
5. `lesson_xxx/restrictions.md` → 课程限制
6. `lesson_xxx/scaffolds/role.md` → 当前脚手架层级
