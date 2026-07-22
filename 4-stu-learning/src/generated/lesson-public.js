// 此文件由 scripts/sync-lessons.mjs 自动生成，只包含学生端公开课程字段。
export default {
  "lesson_zhuhun_001": {
    "id": "lesson_zhuhun_001",
    "title": "故宫600年不积水的秘密",
    "subtitle": "故宫排水智慧 · 跨学科研学课例",
    "series": "铸魂",
    "seriesCode": "zhuhun",
    "themeTemplate": "zhuhun",
    "venue": "故宫博物院（中轴线区域）",
    "mapCenter": [
      116.397,
      39.918
    ],
    "duration": "6小时（含午休）",
    "grades": "小学高年级 / 初中 / 高中",
    "groupRule": "6人一组，每人一个角色",
    "coreQuestion": "故宫建成600年，历经无数暴雨，为何几乎从不积水？",
    "persona": {
      "name": "絮絮",
      "courseRole": "",
      "character": "亲切、好奇、有少年感，尊重学生的观察和试错过程；本课侧重：亲切、好奇、有点调皮，像一个知识渊博的学长",
      "tone": "清晰、自然、耐心，偶尔幽默；本课侧重：少年感、清晰、节奏适中，偶尔幽默"
    },
    "phases": [
      {
        "id": "phase-1",
        "number": 1,
        "name": "沉浸叙事",
        "duration": "20min",
        "mode": "集体（全班）",
        "location": "集合区域（午门广场或指定教室）",
        "modules": "A06(沉浸媒体)",
        "trigger": "教师手动启动",
        "endCondition": "视频播放完成 + AI收集完初始猜想",
        "flow": [
          "播放\"暴雨将至\"沉浸短片（3min）",
          "AI（絮絮）出场，自我介绍，建立关系",
          "AI向每个学生提问：「你觉得故宫暴雨时会积水吗？为什么？」",
          "收集学生的初始假设（C类数据：C2认知数据）",
          "引出核心问题：「600年，为什么不积水？今天我们一起找答案」",
          "发放角色卡（扫码确认角色）"
        ]
      },
      {
        "id": "phase-2",
        "number": 2,
        "name": "现场采证",
        "duration": "90min",
        "mode": "个人（按角色分散）",
        "location": "故宫各区域（由角色决定）",
        "modules": "A01(多模态采集), A02(答题), A07(扫码)",
        "trigger": "Phase 1 结束 + 教师确认",
        "endCondition": "教师手动推进 或 时间耗尽",
        "flow": [
          "AI根据角色引导学生前往目标区域（位置导航卡片）",
          "每个角色执行3个递进任务（见 roles/*.md）",
          "任务完成后获得密符字母",
          "时间银行分支任务可并行进行"
        ]
      },
      {
        "id": "phase-3",
        "number": 3,
        "name": "推理推演",
        "duration": "40min",
        "mode": "个人→小组过渡",
        "location": "指定集合区域",
        "modules": "A01(文字输入), A03(拼合搭建), A04(沙盘推演)",
        "trigger": "Phase 2 结束",
        "endCondition": "小组完成证据拼合",
        "flow": [
          "AI引导学生整理采证阶段的发现",
          "每个角色撰写\"我的发现报告\"（文字+照片）",
          "小组汇合后，用拼合工具将6个角色的发现整合",
          "尝试还原完整的故宫排水路径"
        ]
      },
      {
        "id": "phase-4",
        "number": 4,
        "name": "璇玑时刻",
        "duration": "30min",
        "mode": "小组协作",
        "location": "集合区域",
        "modules": "A04(沙盘推演), A06(沉浸媒体)",
        "trigger": "密符集齐 或 教师解锁",
        "endCondition": "暴雨模拟完成",
        "flow": [
          "小组在沙盘中搭建完整水系图（基于Phase 3的拼合结果）",
          "设置暴雨参数（降水量、持续时间）",
          "运行模拟——观察水流路径",
          "AI揭示：「你们搭建的系统……能撑过暴雨吗？」",
          "播放暴雨动画验证"
        ]
      },
      {
        "id": "phase-5",
        "number": 5,
        "name": "总结汇报",
        "duration": "20min",
        "mode": "集体",
        "location": "集合区域",
        "modules": "A01(文字输入/语音)",
        "trigger": "Phase 4 结束",
        "endCondition": "教师推进",
        "flow": [
          "每组分享\"我们组的发现\"（2-3min/组）",
          "AI辅助生成组间对比（不做排名，聚焦差异）",
          "回顾初始假设——「你最初的猜想对了吗？」",
          "AI引导元认知反思：「如果再来一次，你会改变哪一步？」"
        ]
      },
      {
        "id": "phase-6",
        "number": 6,
        "name": "尾声",
        "duration": "10min",
        "mode": "个人",
        "location": "",
        "modules": "无（系统自动）",
        "trigger": "Phase 5 结束",
        "endCondition": "",
        "flow": [
          "AI生成个人学习报告预览（完整版后续推送）",
          "絮絮告别：「今天很开心陪你探索！下次见~」",
          "课程结束标记"
        ]
      }
    ],
    "roleSystem": {
      "collectionName": "治水官",
      "itemName": "身份",
      "pickerEyebrow": "{roleCount}种身份 · {roleCount}段证据",
      "pickerTitle": "选择你的{collectionName}身份",
      "pickerDescription": "每位成员负责一个系统环节。集齐{roleCount}枚{collectionItemName}，才能解锁{unlockTarget}。",
      "collectionItemName": "密符",
      "collectionPanelName": "小组密符",
      "unlockTarget": "璇玑时刻",
      "phaseId": "phase-2"
    },
    "roles": [
      {
        "id": "dragon-counter",
        "order": 1,
        "name": "数龙官",
        "question": "千龙吐水的\"千\"是虚指还是真有一千条龙？",
        "selectionDescription": "追踪螭首的形态与数量，判断“千龙吐水”的“千”究竟有多大。",
        "location": "三大殿三台（太和殿·中和殿·保和殿）",
        "geofence": "中心(116.3972, 39.9171) 半径100m",
        "type": "核心角色",
        "collectionItem": "Y",
        "collectionItemImage": "lessons/lesson_zhuhun_001/assets/tokens/mifu-Y.png",
        "tasks": [
          {
            "id": "task-1",
            "roleStageId": "task-1",
            "name": "观其形",
            "phase": "Phase 2 现场采证",
            "modules": "A01(拍照采集)",
            "tools": [
              {
                "id": "photo",
                "module": "A01",
                "name": "拍照采集",
                "icon": "camera",
                "output": "files",
                "config": {
                  "minCount": 1,
                  "maxCount": 6,
                  "accept": "image/*",
                  "recognition": "course-evidence"
                }
              }
            ],
            "requirement": "拍照最少5张，含正面/侧面/细节",
            "guidanceSteps": [
              "先选择一处螭首，拍下它在台基上的正面全景",
              "换到安全的侧面角度，记录螭首与台基的连接方式",
              "再拍材质、出水口和排列细节，检查照片是否至少5张"
            ],
            "steps": [
              {
                "id": "task-1-step-1",
                "objective": "先选择一处螭首，拍下它在台基上的正面全景",
                "studentAction": "先选择一处螭首，拍下它在台基上的正面全景",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-1-step-2",
                "objective": "换到安全的侧面角度，记录螭首与台基的连接方式",
                "studentAction": "换到安全的侧面角度，记录螭首与台基的连接方式",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-1-step-3",
                "objective": "再拍材质、出水口和排列细节，检查照片是否至少5张",
                "studentAction": "再拍材质、出水口和排列细节，检查照片是否至少5张",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "完成5张有效照片采集",
            "passCondition": "完成5张有效照片采集",
            "goals": "K1(排水系统构成), K3(螭首功能), S4(史料实证)",
            "toolType": "capture",
            "image": "lessons/lesson_zhuhun_001/assets/tasks/chishou-front.jpg",
            "location": {
              "mode": "geofence",
              "legacyMode": "inherit_role",
              "name": "三大殿三台（太和殿·中和殿·保和殿）",
              "coordinates": [
                116.3972,
                39.9171
              ],
              "radiusMeters": 100,
              "geofence": "中心(116.3972, 39.9171) 半径100m",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-2",
            "roleStageId": "task-2",
            "name": "算其数",
            "phase": "Phase 2 现场采证",
            "modules": "A01(拍照采集), A02(答题评测)",
            "tools": [
              {
                "id": "photo",
                "module": "A01",
                "name": "拍照采集",
                "icon": "camera",
                "output": "files",
                "config": {
                  "minCount": 1,
                  "maxCount": 6,
                  "accept": "image/*",
                  "recognition": "course-evidence"
                }
              },
              {
                "id": "quiz",
                "module": "A02",
                "name": "答题评测",
                "icon": "list-checks",
                "output": "answers",
                "config": {
                  "type": "single_choice",
                  "question": "",
                  "options": []
                }
              }
            ],
            "requirement": "表单字段：[上层台基数量, 中层台基数量, 下层台基数量, 总计]",
            "guidanceSteps": [
              "先观察三层台基的排列规律，决定逐个数还是分段估算",
              "分别估算上层、中层和下层的数量，记录每层的方法",
              "把三层结果相加，检查总数与现场观察是否匹配"
            ],
            "steps": [
              {
                "id": "task-2-step-1",
                "objective": "先观察三层台基的排列规律，决定逐个数还是分段估算",
                "studentAction": "先观察三层台基的排列规律，决定逐个数还是分段估算",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-2-step-2",
                "objective": "分别估算上层、中层和下层的数量，记录每层的方法",
                "studentAction": "分别估算上层、中层和下层的数量，记录每层的方法",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-2-step-3",
                "objective": "把三层结果相加，检查总数与现场观察是否匹配",
                "studentAction": "把三层结果相加，检查总数与现场观察是否匹配",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "提交估算值 + 说明估算方法",
            "passCondition": "提交估算值 + 说明估算方法",
            "goals": "K3(螭首功能), S1(估算计数), C1(证据意识), C4(科学精神)",
            "toolType": "capture",
            "image": "",
            "location": {
              "mode": "geofence",
              "legacyMode": "inherit_role",
              "name": "三大殿三台（太和殿·中和殿·保和殿）",
              "coordinates": [
                116.3972,
                39.9171
              ],
              "radiusMeters": 100,
              "geofence": "中心(116.3972, 39.9171) 半径100m",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-3",
            "roleStageId": "task-3",
            "name": "验其差",
            "phase": "Phase 2 现场采证 / Phase 3 推演",
            "modules": "A01(文字输入/语音录入)",
            "tools": [
              {
                "id": "audio",
                "module": "A01",
                "name": "语音记录",
                "icon": "mic",
                "output": "recording",
                "config": {
                  "minSeconds": 3,
                  "maxSeconds": 90,
                  "language": "zh-CN",
                  "transcribe": true
                }
              },
              {
                "id": "text",
                "module": "A01",
                "name": "文字表单",
                "icon": "notebook-pen",
                "output": "fields",
                "config": {
                  "fields": [
                    {
                      "id": "observation",
                      "label": "观察记录",
                      "type": "long_text",
                      "required": true
                    }
                  ]
                }
              }
            ],
            "requirement": "反思文本最少50字",
            "guidanceSteps": [
              "先对比各组或各次估算结果，找出差异最大的一处",
              "列出至少两个可能造成误差的原因",
              "写下如果重新计数会怎样改进，完成至少50字的反思"
            ],
            "steps": [
              {
                "id": "task-3-step-1",
                "objective": "先对比各组或各次估算结果，找出差异最大的一处",
                "studentAction": "先对比各组或各次估算结果，找出差异最大的一处",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-3-step-2",
                "objective": "列出至少两个可能造成误差的原因",
                "studentAction": "列出至少两个可能造成误差的原因",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-3-step-3",
                "objective": "写下如果重新计数会怎样改进，完成至少50字的反思",
                "studentAction": "写下如果重新计数会怎样改进，完成至少50字的反思",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "提交包含\"误差来源分析\"的反思",
            "passCondition": "提交包含\"误差来源分析\"的反思",
            "goals": "C3(元认知), C4(科学精神), S1(估算计数)",
            "toolType": "audio",
            "image": "",
            "location": {
              "mode": "geofence",
              "legacyMode": "inherit_role",
              "name": "三大殿三台（太和殿·中和殿·保和殿）",
              "coordinates": [
                116.3972,
                39.9171
              ],
              "radiusMeters": 100,
              "geofence": "中心(116.3972, 39.9171) 半径100m",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          }
        ],
        "cardImage": "lessons/lesson_zhuhun_001/assets/roles/role-card-dragon-counter.png",
        "badgeImage": "lessons/lesson_zhuhun_001/assets/roles/badge-dragon-counter.png"
      },
      {
        "id": "slope-surveyor",
        "order": 2,
        "name": "测坡官",
        "question": "故宫的地面是平的吗？如果不是，水往哪里流？",
        "selectionDescription": "用观察和测量判断故宫地势走向，找到雨水自然流动的方向。",
        "location": "太和殿广场至午门通道（南北轴线）",
        "geofence": "中心(116.3970, 39.9155) 半径150m",
        "type": "核心角色",
        "collectionItem": "I",
        "collectionItemImage": "lessons/lesson_zhuhun_001/assets/tokens/mifu-I.png",
        "tasks": [
          {
            "id": "task-1",
            "roleStageId": "task-1",
            "name": "察其势",
            "phase": "Phase 2 现场采证",
            "modules": "A01(拍照采集)",
            "tools": [
              {
                "id": "photo",
                "module": "A01",
                "name": "拍照采集",
                "icon": "camera",
                "output": "files",
                "config": {
                  "minCount": 1,
                  "maxCount": 6,
                  "accept": "image/*",
                  "recognition": "course-evidence"
                }
              }
            ],
            "requirement": "拍摄至少3个位置的地面对比照",
            "guidanceSteps": [
              "先找到一处看起来较高和一处较低的地面",
              "从相似高度和角度拍下至少3个位置",
              "对比照片，用箭头标出你判断的水流方向"
            ],
            "steps": [
              {
                "id": "task-1-step-1",
                "objective": "先找到一处看起来较高和一处较低的地面",
                "studentAction": "先找到一处看起来较高和一处较低的地面",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-1-step-2",
                "objective": "从相似高度和角度拍下至少3个位置",
                "studentAction": "从相似高度和角度拍下至少3个位置",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-1-step-3",
                "objective": "对比照片，用箭头标出你判断的水流方向",
                "studentAction": "对比照片，用箭头标出你判断的水流方向",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "拍照完成 + 描述观察到的高差线索",
            "passCondition": "拍照完成 + 描述观察到的高差线索",
            "goals": "K4(坡度与排水), S2(坡度与流向判断)",
            "toolType": "capture",
            "image": "lessons/lesson_zhuhun_001/assets/maps/drainage-profile.png",
            "location": {
              "mode": "geofence",
              "legacyMode": "inherit_role",
              "name": "太和殿广场至午门通道（南北轴线）",
              "coordinates": [
                116.397,
                39.9155
              ],
              "radiusMeters": 150,
              "geofence": "中心(116.3970, 39.9155) 半径150m",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-2",
            "roleStageId": "task-2",
            "name": "量其度",
            "phase": "Phase 2 现场采证",
            "modules": "A01(拍照), A02(答题评测)",
            "tools": [
              {
                "id": "photo",
                "module": "A01",
                "name": "拍照采集",
                "icon": "camera",
                "output": "files",
                "config": {
                  "minCount": 1,
                  "maxCount": 6,
                  "accept": "image/*",
                  "recognition": "course-evidence"
                }
              },
              {
                "id": "quiz",
                "module": "A02",
                "name": "答题评测",
                "icon": "list-checks",
                "output": "answers",
                "config": {
                  "type": "single_choice",
                  "question": "",
                  "options": []
                }
              }
            ],
            "requirement": "工具：目测+步测法（或提供简易水平仪AR模拟）\n表单字段：[估测高差(m), 估测距离(m), 计算坡度(%)]",
            "guidanceSteps": [
              "选定一高一低两个安全观测点",
              "用目测和步测记录高差与水平距离",
              "根据高差和距离计算坡度，并写下估测方法"
            ],
            "steps": [
              {
                "id": "task-2-step-1",
                "objective": "选定一高一低两个安全观测点",
                "studentAction": "选定一高一低两个安全观测点",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-2-step-2",
                "objective": "用目测和步测记录高差与水平距离",
                "studentAction": "用目测和步测记录高差与水平距离",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-2-step-3",
                "objective": "根据高差和距离计算坡度，并写下估测方法",
                "studentAction": "根据高差和距离计算坡度，并写下估测方法",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "正确判断坡度方向（北高南低）+ 给出估算值",
            "passCondition": "正确判断坡度方向（北高南低）+ 给出估算值",
            "goals": "K4(坡度与排水), S2(坡度判断), S1(估算), C1(证据意识)",
            "toolType": "capture",
            "image": "",
            "location": {
              "mode": "geofence",
              "legacyMode": "inherit_role",
              "name": "太和殿广场至午门通道（南北轴线）",
              "coordinates": [
                116.397,
                39.9155
              ],
              "radiusMeters": 150,
              "geofence": "中心(116.3970, 39.9155) 半径150m",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-3",
            "roleStageId": "task-3",
            "name": "析其理",
            "phase": "Phase 2 / Phase 3",
            "modules": "A01(文字输入), A01(画板草图)",
            "tools": [
              {
                "id": "text",
                "module": "A01",
                "name": "文字表单",
                "icon": "notebook-pen",
                "output": "fields",
                "config": {
                  "fields": [
                    {
                      "id": "observation",
                      "label": "观察记录",
                      "type": "long_text",
                      "required": true
                    }
                  ]
                }
              },
              {
                "id": "sketch",
                "module": "A01",
                "name": "画板标注",
                "icon": "pen-tool",
                "output": "image",
                "config": {
                  "width": 720,
                  "height": 420,
                  "brushColors": [
                    "#8d211f",
                    "#245c4f",
                    "#1f2937"
                  ],
                  "backgroundImage": ""
                }
              }
            ],
            "requirement": "画出水流方向示意图 + 文字解释坡度的排水作用",
            "guidanceSteps": [
              "把观测到的高点、低点和排水设施标在示意图上",
              "用箭头连出水可能经过的路径",
              "用现场证据解释坡度如何帮助水流向低处"
            ],
            "steps": [
              {
                "id": "task-3-step-1",
                "objective": "把观测到的高点、低点和排水设施标在示意图上",
                "studentAction": "把观测到的高点、低点和排水设施标在示意图上",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-3-step-2",
                "objective": "用箭头连出水可能经过的路径",
                "studentAction": "用箭头连出水可能经过的路径",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-3-step-3",
                "objective": "用现场证据解释坡度如何帮助水流向低处",
                "studentAction": "用现场证据解释坡度如何帮助水流向低处",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "示意图标注正确的流向 + 文字解释逻辑通顺",
            "passCondition": "示意图标注正确的流向 + 文字解释逻辑通顺",
            "goals": "K2([待学生探索]), C2(系统思维), S2(坡度判断)",
            "toolType": "text",
            "image": "",
            "location": {
              "mode": "geofence",
              "legacyMode": "inherit_role",
              "name": "太和殿广场至午门通道（南北轴线）",
              "coordinates": [
                116.397,
                39.9155
              ],
              "radiusMeters": 150,
              "geofence": "中心(116.3970, 39.9155) 半径150m",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          }
        ],
        "cardImage": "lessons/lesson_zhuhun_001/assets/roles/role-card-slope-surveyor.png",
        "badgeImage": "lessons/lesson_zhuhun_001/assets/roles/badge-slope-surveyor.png"
      },
      {
        "id": "ditch-finder",
        "order": 3,
        "name": "寻沟官",
        "question": "水从螭首流出后，走了一条怎样的\"地下旅程\"？",
        "selectionDescription": "寻找可见与隐藏的排水沟渠，把零散设施连接成地下排水网络。",
        "location": "东西六宫区域（御沟可见段）",
        "geofence": "中心(116.3985, 39.9185) 半径120m",
        "type": "核心角色",
        "collectionItem": "N",
        "collectionItemImage": "lessons/lesson_zhuhun_001/assets/tokens/mifu-N.png",
        "tasks": [
          {
            "id": "task-1",
            "roleStageId": "task-1",
            "name": "寻其踪",
            "phase": "Phase 2 现场采证",
            "modules": "A01(拍照采集)",
            "tools": [
              {
                "id": "photo",
                "module": "A01",
                "name": "拍照采集",
                "icon": "camera",
                "output": "files",
                "config": {
                  "minCount": 1,
                  "maxCount": 6,
                  "accept": "image/*",
                  "recognition": "course-evidence"
                }
              }
            ],
            "requirement": "找到并拍照至少3处可见的排水设施（明沟/暗沟口/雨水篦子）",
            "guidanceSteps": [
              "先低头观察地面和墙根，找到第一处可见排水设施",
              "继续寻找不同位置或不同类型的设施，完成至少3张照片",
              "为每张照片标注设施类型和周围水可能流入的方向"
            ],
            "steps": [
              {
                "id": "task-1-step-1",
                "objective": "先低头观察地面和墙根，找到第一处可见排水设施",
                "studentAction": "先低头观察地面和墙根，找到第一处可见排水设施",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-1-step-2",
                "objective": "继续寻找不同位置或不同类型的设施，完成至少3张照片",
                "studentAction": "继续寻找不同位置或不同类型的设施，完成至少3张照片",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-1-step-3",
                "objective": "为每张照片标注设施类型和周围水可能流入的方向",
                "studentAction": "为每张照片标注设施类型和周围水可能流入的方向",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "3张有效照片 + 标注每处设施类型",
            "passCondition": "3张有效照片 + 标注每处设施类型",
            "goals": "K5(明暗沟系统), S4(史料实证), C1(证据意识)",
            "toolType": "capture",
            "image": "",
            "location": {
              "mode": "geofence",
              "legacyMode": "inherit_role",
              "name": "东西六宫区域（御沟可见段）",
              "coordinates": [
                116.3985,
                39.9185
              ],
              "radiusMeters": 120,
              "geofence": "中心(116.3985, 39.9185) 半径120m",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-2",
            "roleStageId": "task-2",
            "name": "探其网",
            "phase": "Phase 2 现场采证",
            "modules": "A01(画板草图), A02(答题)",
            "tools": [
              {
                "id": "sketch",
                "module": "A01",
                "name": "画板标注",
                "icon": "pen-tool",
                "output": "image",
                "config": {
                  "width": 720,
                  "height": 420,
                  "brushColors": [
                    "#8d211f",
                    "#245c4f",
                    "#1f2937"
                  ],
                  "backgroundImage": ""
                }
              },
              {
                "id": "quiz",
                "module": "A02",
                "name": "答题评测",
                "icon": "list-checks",
                "output": "answers",
                "config": {
                  "type": "single_choice",
                  "question": "",
                  "options": []
                }
              }
            ],
            "requirement": "画出发现的排水设施之间的连接关系\n问答：明沟和暗沟有什么区别？各有什么优势？",
            "guidanceSteps": [
              "把已发现的排水设施按位置摆列出来",
              "根据高低和开口方向画出至少3个节点的连接关系",
              "对比明沟和暗沟的外观、连接方式和优势"
            ],
            "steps": [
              {
                "id": "task-2-step-1",
                "objective": "把已发现的排水设施按位置摆列出来",
                "studentAction": "把已发现的排水设施按位置摆列出来",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-2-step-2",
                "objective": "根据高低和开口方向画出至少3个节点的连接关系",
                "studentAction": "根据高低和开口方向画出至少3个节点的连接关系",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-2-step-3",
                "objective": "对比明沟和暗沟的外观、连接方式和优势",
                "studentAction": "对比明沟和暗沟的外观、连接方式和优势",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "画出至少3个节点的连接关系图 + 正确区分明暗沟",
            "passCondition": "画出至少3个节点的连接关系图 + 正确区分明暗沟",
            "goals": "K5(明暗沟系统), S5(系统分级), C2(系统思维)",
            "toolType": "sketch",
            "image": "",
            "location": {
              "mode": "geofence",
              "legacyMode": "inherit_role",
              "name": "东西六宫区域（御沟可见段）",
              "coordinates": [
                116.3985,
                39.9185
              ],
              "radiusMeters": 120,
              "geofence": "中心(116.3985, 39.9185) 半径120m",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-3",
            "roleStageId": "task-3",
            "name": "绘其图",
            "phase": "Phase 3 推演",
            "modules": "A01(画板草图), A03(拼合搭建)",
            "tools": [
              {
                "id": "sketch",
                "module": "A01",
                "name": "画板标注",
                "icon": "pen-tool",
                "output": "image",
                "config": {
                  "width": 720,
                  "height": 420,
                  "brushColors": [
                    "#8d211f",
                    "#245c4f",
                    "#1f2937"
                  ],
                  "backgroundImage": ""
                }
              },
              {
                "id": "builder",
                "module": "A03",
                "name": "拼合搭建",
                "icon": "blocks",
                "output": "layout",
                "config": {
                  "mode": "evidence-wall",
                  "items": [],
                  "zones": [],
                  "connections": []
                }
              }
            ],
            "requirement": "绘制完整的\"院落→支沟→干沟→河\"分级排水网络图",
            "guidanceSteps": [
              "先把已发现的沟渠放入院落、支沟、干沟和河道对应层级",
              "按水从小范围汇入大范围的方向连线",
              "检查网络是否至少包含3级且每条水路都标有流向"
            ],
            "steps": [
              {
                "id": "task-3-step-1",
                "objective": "先把已发现的沟渠放入院落、支沟、干沟和河道对应层级",
                "studentAction": "先把已发现的沟渠放入院落、支沟、干沟和河道对应层级",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-3-step-2",
                "objective": "按水从小范围汇入大范围的方向连线",
                "studentAction": "按水从小范围汇入大范围的方向连线",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-3-step-3",
                "objective": "检查网络是否至少包含3级且每条水路都标有流向",
                "studentAction": "检查网络是否至少包含3级且每条水路都标有流向",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "网络图包含3级以上层级 + 标注流向",
            "passCondition": "网络图包含3级以上层级 + 标注流向",
            "goals": "K5(明暗沟系统), K2([待学生探索]), S5(系统分级), C2(系统思维)",
            "toolType": "sketch",
            "image": "",
            "location": {
              "mode": "none",
              "legacyMode": "none",
              "name": "",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "",
              "verification": "none",
              "minDwellSeconds": 0
            },
            "timing": {
              "suggestedSeconds": 1200,
              "idleNudgeSeconds": 240,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          }
        ],
        "cardImage": "lessons/lesson_zhuhun_001/assets/roles/role-card-ditch-finder.png",
        "badgeImage": "lessons/lesson_zhuhun_001/assets/roles/badge-ditch-finder.png"
      },
      {
        "id": "river-guide",
        "order": 4,
        "name": "引河官",
        "question": "内金水河不只是装饰——它在排水系统中扮演什么角色？",
        "selectionDescription": "追踪内金水河的来路与去向，分析它在排水系统中的作用。",
        "location": "内金水河沿线（太和门前弓形段）",
        "geofence": "中心(116.3968, 39.9160) 半径80m",
        "type": "核心角色",
        "collectionItem": "S",
        "collectionItemImage": "lessons/lesson_zhuhun_001/assets/tokens/mifu-S.png",
        "tasks": [
          {
            "id": "task-1",
            "roleStageId": "task-1",
            "name": "追其源",
            "phase": "Phase 2 现场采证",
            "modules": "A01(拍照采集)",
            "tools": [
              {
                "id": "photo",
                "module": "A01",
                "name": "拍照采集",
                "icon": "camera",
                "output": "files",
                "config": {
                  "minCount": 1,
                  "maxCount": 6,
                  "accept": "image/*",
                  "recognition": "course-evidence"
                }
              }
            ],
            "requirement": "沿河行走拍照至少4处关键节点（入水口/桥下/弯道/出水口）",
            "guidanceSteps": [
              "先找到安全可观察的入水口，记录水从哪里来",
              "沿老师指定路线记录桥下、弯道等中间节点",
              "找到出水方向，按上游到下游整理至少4张照片"
            ],
            "steps": [
              {
                "id": "task-1-step-1",
                "objective": "先找到安全可观察的入水口，记录水从哪里来",
                "studentAction": "先找到安全可观察的入水口，记录水从哪里来",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-1-step-2",
                "objective": "沿老师指定路线记录桥下、弯道等中间节点",
                "studentAction": "沿老师指定路线记录桥下、弯道等中间节点",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-1-step-3",
                "objective": "找到出水方向，按上游到下游整理至少4张照片",
                "studentAction": "找到出水方向，按上游到下游整理至少4张照片",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "4张有效照片 + 标注上下游方向",
            "passCondition": "4张有效照片 + 标注上下游方向",
            "goals": "K5(明暗沟系统), K2([待学生探索]), S2(流向判断)",
            "toolType": "capture",
            "image": "lessons/lesson_zhuhun_001/assets/maps/inner-river-path.png",
            "location": {
              "mode": "geofence",
              "legacyMode": "inherit_role",
              "name": "内金水河沿线（太和门前弓形段）",
              "coordinates": [
                116.3968,
                39.916
              ],
              "radiusMeters": 80,
              "geofence": "中心(116.3968, 39.9160) 半径80m",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-2",
            "roleStageId": "task-2",
            "name": "测其流",
            "phase": "Phase 2 现场采证",
            "modules": "A01(拍照/语音), A02(答题)",
            "tools": [
              {
                "id": "photo",
                "module": "A01",
                "name": "拍照采集",
                "icon": "camera",
                "output": "files",
                "config": {
                  "minCount": 1,
                  "maxCount": 6,
                  "accept": "image/*",
                  "recognition": "course-evidence"
                }
              },
              {
                "id": "audio",
                "module": "A01",
                "name": "语音记录",
                "icon": "mic",
                "output": "recording",
                "config": {
                  "minSeconds": 3,
                  "maxSeconds": 90,
                  "language": "zh-CN",
                  "transcribe": true
                }
              },
              {
                "id": "quiz",
                "module": "A02",
                "name": "答题评测",
                "icon": "list-checks",
                "output": "answers",
                "config": {
                  "type": "single_choice",
                  "question": "",
                  "options": []
                }
              }
            ],
            "requirement": "观察法估测流速（投叶片/观水面）\n表单：[估测河宽(m), 估测河深(m), 估测流速(m/s), 计算流量]\n允许较大误差，重在方法",
            "guidanceSteps": [
              "先在安全位置选择流速观察方法，说明观察依据",
              "估测河宽、河深和流速，记录数值与单位",
              "用估测值计算流量，并标出哪个数据的不确定性最大"
            ],
            "steps": [
              {
                "id": "task-2-step-1",
                "objective": "先在安全位置选择流速观察方法，说明观察依据",
                "studentAction": "先在安全位置选择流速观察方法，说明观察依据",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-2-step-2",
                "objective": "估测河宽、河深和流速，记录数值与单位",
                "studentAction": "估测河宽、河深和流速，记录数值与单位",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-2-step-3",
                "objective": "用估测值计算流量，并标出哪个数据的不确定性最大",
                "studentAction": "用估测值计算流量，并标出哪个数据的不确定性最大",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "给出估测方法说明 + 估测值",
            "passCondition": "给出估测方法说明 + 估测值",
            "goals": "S1(估算), S3(实验设计), C1(证据意识), C4(科学精神)",
            "toolType": "capture",
            "image": "",
            "location": {
              "mode": "geofence",
              "legacyMode": "inherit_role",
              "name": "内金水河沿线（太和门前弓形段）",
              "coordinates": [
                116.3968,
                39.916
              ],
              "radiusMeters": 80,
              "geofence": "中心(116.3968, 39.9160) 半径80m",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-3",
            "roleStageId": "task-3",
            "name": "演其变",
            "phase": "Phase 3 推演",
            "modules": "A01(文字), A04(沙盘推演)",
            "tools": [
              {
                "id": "text",
                "module": "A01",
                "name": "文字表单",
                "icon": "notebook-pen",
                "output": "fields",
                "config": {
                  "fields": [
                    {
                      "id": "observation",
                      "label": "观察记录",
                      "type": "long_text",
                      "required": true
                    }
                  ]
                }
              },
              {
                "id": "simulation",
                "module": "A04",
                "name": "沙盘推演",
                "icon": "waves",
                "output": "rounds",
                "config": {
                  "rounds": 1,
                  "resources": {},
                  "choices": [],
                  "metrics": []
                }
              }
            ],
            "requirement": "在沙盘中设置不同降水量，观察内金水河水位变化",
            "guidanceSteps": [
              "先设置正常降水量，记录河道水位和流动状态",
              "分别调到中雨和暴雨，观察哪个环节最先发生变化",
              "对比三种情况，说明河道的容量边界和多出的水可能去向"
            ],
            "steps": [
              {
                "id": "task-3-step-1",
                "objective": "先设置正常降水量，记录河道水位和流动状态",
                "studentAction": "先设置正常降水量，记录河道水位和流动状态",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-3-step-2",
                "objective": "分别调到中雨和暴雨，观察哪个环节最先发生变化",
                "studentAction": "分别调到中雨和暴雨，观察哪个环节最先发生变化",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-3-step-3",
                "objective": "对比三种情况，说明河道的容量边界和多出的水可能去向",
                "studentAction": "对比三种情况，说明河道的容量边界和多出的水可能去向",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "描述\"正常/中雨/暴雨\"三种情况下河道状态变化",
            "passCondition": "描述\"正常/中雨/暴雨\"三种情况下河道状态变化",
            "goals": "K2([待学生探索]), C2(系统思维), S5(系统分级)",
            "toolType": "text",
            "image": "lessons/lesson_zhuhun_001/assets/videos/video-simulation.png",
            "location": {
              "mode": "none",
              "legacyMode": "none",
              "name": "",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "",
              "verification": "none",
              "minDwellSeconds": 0
            },
            "timing": {
              "suggestedSeconds": 1200,
              "idleNudgeSeconds": 240,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          }
        ],
        "cardImage": "lessons/lesson_zhuhun_001/assets/roles/role-card-river-guide.png",
        "badgeImage": "lessons/lesson_zhuhun_001/assets/roles/badge-river-guide.png"
      },
      {
        "id": "moat-guard",
        "order": 5,
        "name": "护城官",
        "question": "[待学生探索]宽的护城河，除了防御还有什么隐藏功能？",
        "selectionDescription": "观察护城河结构与容量，发现它在防御之外承担的多重功能。",
        "location": "护城河沿线（东华门至午门段）",
        "geofence": "中心(116.3995, 39.9165) 半径130m",
        "type": "核心角色",
        "collectionItem": "H",
        "collectionItemImage": "lessons/lesson_zhuhun_001/assets/tokens/mifu-H.png",
        "tasks": [
          {
            "id": "task-1",
            "roleStageId": "task-1",
            "name": "观其堤",
            "phase": "Phase 2 现场采证",
            "modules": "A01(拍照采集)",
            "tools": [
              {
                "id": "photo",
                "module": "A01",
                "name": "拍照采集",
                "icon": "camera",
                "output": "files",
                "config": {
                  "minCount": 1,
                  "maxCount": 6,
                  "accept": "image/*",
                  "recognition": "course-evidence"
                }
              }
            ],
            "requirement": "拍照河堤结构、排水口、水位标记至少4处",
            "guidanceSteps": [
              "先观察河堤轮廓，找到排水口或水位痕迹",
              "分别拍摄河堤结构、排水口和水位标记，完成至少4张照片",
              "为照片分类，写下每种结构可能承担的作用"
            ],
            "steps": [
              {
                "id": "task-1-step-1",
                "objective": "先观察河堤轮廓，找到排水口或水位痕迹",
                "studentAction": "先观察河堤轮廓，找到排水口或水位痕迹",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-1-step-2",
                "objective": "分别拍摄河堤结构、排水口和水位标记，完成至少4张照片",
                "studentAction": "分别拍摄河堤结构、排水口和水位标记，完成至少4张照片",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-1-step-3",
                "objective": "为照片分类，写下每种结构可能承担的作用",
                "studentAction": "为照片分类，写下每种结构可能承担的作用",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "4张有效照片 + 描述观察到的结构特征",
            "passCondition": "4张有效照片 + 描述观察到的结构特征",
            "goals": "K6(护城河蓄排并用), S4(史料实证), C1(证据意识)",
            "toolType": "capture",
            "image": "",
            "location": {
              "mode": "geofence",
              "legacyMode": "inherit_role",
              "name": "护城河沿线（东华门至午门段）",
              "coordinates": [
                116.3995,
                39.9165
              ],
              "radiusMeters": 130,
              "geofence": "中心(116.3995, 39.9165) 半径130m",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-2",
            "roleStageId": "task-2",
            "name": "验其深",
            "phase": "Phase 2 现场采证",
            "modules": "A01(拍照/语音), A02(答题)",
            "tools": [
              {
                "id": "photo",
                "module": "A01",
                "name": "拍照采集",
                "icon": "camera",
                "output": "files",
                "config": {
                  "minCount": 1,
                  "maxCount": 6,
                  "accept": "image/*",
                  "recognition": "course-evidence"
                }
              },
              {
                "id": "audio",
                "module": "A01",
                "name": "语音记录",
                "icon": "mic",
                "output": "recording",
                "config": {
                  "minSeconds": 3,
                  "maxSeconds": 90,
                  "language": "zh-CN",
                  "transcribe": true
                }
              },
              {
                "id": "quiz",
                "module": "A02",
                "name": "答题评测",
                "icon": "list-checks",
                "output": "answers",
                "config": {
                  "type": "single_choice",
                  "question": "",
                  "options": []
                }
              }
            ],
            "requirement": "步测法估测河宽 + 观察法推测河深\n表单：[估测河宽(m), 估测深度(m), 估测周长(m), 计算蓄水体积]\n引导计算蓄水量（简化为矩形截面×周长）",
            "guidanceSteps": [
              "用步测法估测河宽，记录步数和换算方法",
              "根据可见结构推测河深和周长，标出估算依据",
              "按简化截面计算蓄水量量级，检查单位和结果是否合理"
            ],
            "steps": [
              {
                "id": "task-2-step-1",
                "objective": "用步测法估测河宽，记录步数和换算方法",
                "studentAction": "用步测法估测河宽，记录步数和换算方法",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-2-step-2",
                "objective": "根据可见结构推测河深和周长，标出估算依据",
                "studentAction": "根据可见结构推测河深和周长，标出估算依据",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-2-step-3",
                "objective": "按简化截面计算蓄水量量级，检查单位和结果是否合理",
                "studentAction": "按简化截面计算蓄水量量级，检查单位和结果是否合理",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "给出蓄水量量级估算（万级m³即可）",
            "passCondition": "给出蓄水量量级估算（万级m³即可）",
            "goals": "K6(护城河), S1(估算), C1(证据意识), C4(科学精神)",
            "toolType": "capture",
            "image": "",
            "location": {
              "mode": "geofence",
              "legacyMode": "inherit_role",
              "name": "护城河沿线（东华门至午门段）",
              "coordinates": [
                116.3995,
                39.9165
              ],
              "radiusMeters": 130,
              "geofence": "中心(116.3995, 39.9165) 半径130m",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-3",
            "roleStageId": "task-3",
            "name": "解其用",
            "phase": "Phase 2 / Phase 3",
            "modules": "A01(文字输入), A02(答题)",
            "tools": [
              {
                "id": "text",
                "module": "A01",
                "name": "文字表单",
                "icon": "notebook-pen",
                "output": "fields",
                "config": {
                  "fields": [
                    {
                      "id": "observation",
                      "label": "观察记录",
                      "type": "long_text",
                      "required": true
                    }
                  ]
                }
              },
              {
                "id": "quiz",
                "module": "A02",
                "name": "答题评测",
                "icon": "list-checks",
                "output": "answers",
                "config": {
                  "type": "single_choice",
                  "question": "",
                  "options": []
                }
              }
            ],
            "requirement": "问答：护城河至少有哪3个功能？（防御/排水/景观/消防/交通）\n文字：解释\"蓄排并用\"——为什么先蓄后排而不是直接排走？",
            "guidanceSteps": [
              "根据现场结构和课程材料列出护城河的至少3个功能",
              "为每个功能匹配一条观察或资料证据",
              "结合降雨和排水速度，解释先蓄后排的作用"
            ],
            "steps": [
              {
                "id": "task-3-step-1",
                "objective": "根据现场结构和课程材料列出护城河的至少3个功能",
                "studentAction": "根据现场结构和课程材料列出护城河的至少3个功能",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-3-step-2",
                "objective": "为每个功能匹配一条观察或资料证据",
                "studentAction": "为每个功能匹配一条观察或资料证据",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-3-step-3",
                "objective": "结合降雨和排水速度，解释先蓄后排的作用",
                "studentAction": "结合降雨和排水速度，解释先蓄后排的作用",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "列出≥3个功能 + 解释蓄排并用逻辑",
            "passCondition": "列出≥3个功能 + 解释蓄排并用逻辑",
            "goals": "K6(护城河), K2([待学生探索]), C2(系统思维), C5(文化认同)",
            "toolType": "text",
            "image": "",
            "location": {
              "mode": "geofence",
              "legacyMode": "inherit_role",
              "name": "护城河沿线（东华门至午门段）",
              "coordinates": [
                116.3995,
                39.9165
              ],
              "radiusMeters": 130,
              "geofence": "中心(116.3995, 39.9165) 半径130m",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          }
        ],
        "cardImage": "lessons/lesson_zhuhun_001/assets/roles/role-card-moat-guard.png",
        "badgeImage": "lessons/lesson_zhuhun_001/assets/roles/badge-moat-guard.png"
      },
      {
        "id": "truth-seeker",
        "order": 6,
        "name": "真相官",
        "question": "600年不积水——这是事实、传说、还是有条件的结论？",
        "selectionDescription": "汇总并核验多方证据，为“600年不积水”形成有条件的结论。",
        "location": "机动（跟随其他角色采集二手证据 + 独立调研区域）",
        "geofence": "中心(116.3970, 39.9170) 半径200m（较大范围）",
        "type": "整合角色",
        "collectionItem": "U",
        "collectionItemImage": "lessons/lesson_zhuhun_001/assets/tokens/mifu-U.png",
        "tasks": [
          {
            "id": "task-1",
            "roleStageId": "task-1",
            "name": "汇其证",
            "phase": "Phase 2 现场采证",
            "modules": "A01(拍照/文字/语音), A07(扫码)",
            "tools": [
              {
                "id": "photo",
                "module": "A01",
                "name": "拍照采集",
                "icon": "camera",
                "output": "files",
                "config": {
                  "minCount": 1,
                  "maxCount": 6,
                  "accept": "image/*",
                  "recognition": "course-evidence"
                }
              },
              {
                "id": "audio",
                "module": "A01",
                "name": "语音记录",
                "icon": "mic",
                "output": "recording",
                "config": {
                  "minSeconds": 3,
                  "maxSeconds": 90,
                  "language": "zh-CN",
                  "transcribe": true
                }
              },
              {
                "id": "text",
                "module": "A01",
                "name": "文字表单",
                "icon": "notebook-pen",
                "output": "fields",
                "config": {
                  "fields": [
                    {
                      "id": "observation",
                      "label": "观察记录",
                      "type": "long_text",
                      "required": true
                    }
                  ]
                }
              },
              {
                "id": "scanner",
                "module": "A07",
                "name": "扫码识别",
                "icon": "scan-line",
                "output": "scanResult",
                "config": {
                  "mode": "qr",
                  "allowManualEntry": true,
                  "prompt": ""
                }
              }
            ],
            "requirement": "收集至少5条来自不同角色的\"证据摘要\"\n扫描其他角色完成任务后生成的证据二维码\n每条证据标注来源（哪个角色、什么方法获得）",
            "guidanceSteps": [
              "先向不同角色索取或扫码获取证据摘要",
              "收集至少5条后，为每条标注角色、地点和获取方法",
              "区分自己观察的一手证据和他人提供的二手证据"
            ],
            "steps": [
              {
                "id": "task-1-step-1",
                "objective": "先向不同角色索取或扫码获取证据摘要",
                "studentAction": "先向不同角色索取或扫码获取证据摘要",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-1-step-2",
                "objective": "收集至少5条后，为每条标注角色、地点和获取方法",
                "studentAction": "收集至少5条后，为每条标注角色、地点和获取方法",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-1-step-3",
                "objective": "区分自己观察的一手证据和他人提供的二手证据",
                "studentAction": "区分自己观察的一手证据和他人提供的二手证据",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "收集≥5条 + 每条有来源标注",
            "passCondition": "收集≥5条 + 每条有来源标注",
            "goals": "S4(史料实证), S6(信息整合), C1(证据意识)",
            "toolType": "capture",
            "image": "",
            "location": {
              "mode": "geofence",
              "legacyMode": "inherit_role",
              "name": "机动（跟随其他角色采集二手证据 + 独立调研区域）",
              "coordinates": [
                116.397,
                39.917
              ],
              "radiusMeters": 200,
              "geofence": "中心(116.3970, 39.9170) 半径200m（较大范围）",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-2",
            "roleStageId": "task-2",
            "name": "辨其伪",
            "phase": "Phase 2 / Phase 3",
            "modules": "A01(文字), A02(答题)",
            "tools": [
              {
                "id": "text",
                "module": "A01",
                "name": "文字表单",
                "icon": "notebook-pen",
                "output": "fields",
                "config": {
                  "fields": [
                    {
                      "id": "observation",
                      "label": "观察记录",
                      "type": "long_text",
                      "required": true
                    }
                  ]
                }
              },
              {
                "id": "quiz",
                "module": "A02",
                "name": "答题评测",
                "icon": "list-checks",
                "output": "answers",
                "config": {
                  "type": "single_choice",
                  "question": "",
                  "options": []
                }
              }
            ],
            "requirement": "对每条证据做可信度评级（强/中/弱）\n问答：\"600年不积水\"这个说法精确吗？有没有反例？\n提供[待学生探索]故宫局部积水的新闻资料（AI适时出示）",
            "guidanceSteps": [
              "先按来源、方法和是否可复核将每条证据评为强、中或弱",
              "用已收集证据检查“600年不积水”这句话成立需要哪些条件",
              "阅读局部积水反例资料，修正为能够被证据支持的结论"
            ],
            "steps": [
              {
                "id": "task-2-step-1",
                "objective": "先按来源、方法和是否可复核将每条证据评为强、中或弱",
                "studentAction": "先按来源、方法和是否可复核将每条证据评为强、中或弱",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-2-step-2",
                "objective": "用已收集证据检查“600年不积水”这句话成立需要哪些条件",
                "studentAction": "用已收集证据检查“600年不积水”这句话成立需要哪些条件",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-2-step-3",
                "objective": "阅读局部积水反例资料，修正为能够被证据支持的结论",
                "studentAction": "阅读局部积水反例资料，修正为能够被证据支持的结论",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "完成证据评级 + 对\"600年不积水\"给出带条件的判断",
            "passCondition": "完成证据评级 + 对\"600年不积水\"给出带条件的判断",
            "goals": "C4(科学精神), C1(证据意识), S4(史料实证)",
            "toolType": "text",
            "image": "",
            "location": {
              "mode": "geofence",
              "legacyMode": "inherit_role",
              "name": "机动（跟随其他角色采集二手证据 + 独立调研区域）",
              "coordinates": [
                116.397,
                39.917
              ],
              "radiusMeters": 200,
              "geofence": "中心(116.3970, 39.9170) 半径200m（较大范围）",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-3",
            "roleStageId": "task-3",
            "name": "断其案",
            "phase": "Phase 3 推演",
            "modules": "A01(文字/语音), A03(拼合)",
            "tools": [
              {
                "id": "audio",
                "module": "A01",
                "name": "语音记录",
                "icon": "mic",
                "output": "recording",
                "config": {
                  "minSeconds": 3,
                  "maxSeconds": 90,
                  "language": "zh-CN",
                  "transcribe": true
                }
              },
              {
                "id": "text",
                "module": "A01",
                "name": "文字表单",
                "icon": "notebook-pen",
                "output": "fields",
                "config": {
                  "fields": [
                    {
                      "id": "observation",
                      "label": "观察记录",
                      "type": "long_text",
                      "required": true
                    }
                  ]
                }
              },
              {
                "id": "builder",
                "module": "A03",
                "name": "拼合搭建",
                "icon": "blocks",
                "output": "layout",
                "config": {
                  "mode": "evidence-wall",
                  "items": [],
                  "zones": [],
                  "connections": []
                }
              }
            ],
            "requirement": "撰写\"真相报告\"——总结排水系统的真实能力和边界",
            "guidanceSteps": [
              "先把证据按地势、沟渠、河道和蓄水功能分组",
              "用强证据总结排水系统在什么条件下有效",
              "加入已知局限和反例，写出带边界的最终结论"
            ],
            "steps": [
              {
                "id": "task-3-step-1",
                "objective": "先把证据按地势、沟渠、河道和蓄水功能分组",
                "studentAction": "先把证据按地势、沟渠、河道和蓄水功能分组",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-3-step-2",
                "objective": "用强证据总结排水系统在什么条件下有效",
                "studentAction": "用强证据总结排水系统在什么条件下有效",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              },
              {
                "id": "task-3-step-3",
                "objective": "加入已知局限和反例，写出带边界的最终结论",
                "studentAction": "加入已知局限和反例，写出带边界的最终结论",
                "completionMode": "user_confirm",
                "evidenceRequirement": "",
                "location": {
                  "mode": "inherit"
                },
                "tools": []
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "报告包含：系统能力总结 + 已知局限 + 带条件的结论",
            "passCondition": "报告包含：系统能力总结 + 已知局限 + 带条件的结论",
            "goals": "C4(科学精神), C2(系统思维), S6(信息整合), C5(文化认同)",
            "toolType": "audio",
            "image": "",
            "location": {
              "mode": "none",
              "legacyMode": "none",
              "name": "",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "",
              "verification": "none",
              "minDwellSeconds": 0
            },
            "timing": {
              "suggestedSeconds": 1200,
              "idleNudgeSeconds": 240,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          }
        ],
        "cardImage": "lessons/lesson_zhuhun_001/assets/roles/role-card-truth-seeker.png",
        "badgeImage": "lessons/lesson_zhuhun_001/assets/roles/badge-truth-seeker.png"
      }
    ],
    "timeBank": {
      "enabled": true,
      "initialBalance": 0,
      "currencyUnit": "分钟",
      "earnRules": {
        "maxTotal": 15,
        "maxPerTask": 3,
        "tasksVisibleAtOnce": 3
      },
      "giftRules": {
        "allowGiftToSelf": false,
        "maxPerAction": 5,
        "minAmount": 1,
        "target": "same_group_only"
      },
      "tasks": [
        {
          "id": "tb-01",
          "type": "quiz",
          "question": "开国大典礼炮几响？",
          "options": [
            "21",
            "28",
            "54"
          ],
          "answerType": "",
          "hint": "和一个历史事件的年份有关",
          "reward": 2,
          "unlockAfter": "phase2-start",
          "minLength": 0,
          "requiresText": false
        },
        {
          "id": "tb-02",
          "type": "quiz",
          "question": "故宫一共有多少间房屋？（传说数字）",
          "options": [
            "8888",
            "9999",
            "9999.5"
          ],
          "answerType": "",
          "hint": "比天帝的万间少半间",
          "reward": 2,
          "unlockAfter": "phase2-start",
          "minLength": 0,
          "requiresText": false
        },
        {
          "id": "tb-03",
          "type": "quiz",
          "question": "午门有几个门洞？",
          "options": [
            "3",
            "5",
            "7"
          ],
          "answerType": "",
          "hint": "",
          "reward": 1,
          "unlockAfter": "phase2-start",
          "minLength": 0,
          "requiresText": false
        },
        {
          "id": "tb-04",
          "type": "quiz",
          "question": "太和殿屋脊上有几只走兽？（是所有古建筑中最多的）",
          "options": [
            "9",
            "10",
            "11"
          ],
          "answerType": "",
          "hint": "一般最多9只，太和殿破例多加了1只",
          "reward": 2,
          "unlockAfter": "phase2-start",
          "minLength": 0,
          "requiresText": false
        },
        {
          "id": "tb-05",
          "type": "photo_checkpoint",
          "question": "找到一口铜缸并拍照",
          "options": [],
          "answerType": "",
          "hint": "太和殿前广场两侧找找看",
          "reward": 3,
          "unlockAfter": "phase2-start",
          "minLength": 0,
          "requiresText": false
        },
        {
          "id": "tb-06",
          "type": "photo_checkpoint",
          "question": "找到日晷（古代计时器）并拍照",
          "options": [],
          "answerType": "",
          "hint": "太和殿前月台上",
          "reward": 2,
          "unlockAfter": "phase2-start",
          "minLength": 0,
          "requiresText": false
        },
        {
          "id": "tb-07",
          "type": "photo_checkpoint",
          "question": "拍一张内金水河上的石桥",
          "options": [],
          "answerType": "",
          "hint": "太和门前有5座",
          "reward": 2,
          "unlockAfter": "phase2-start",
          "minLength": 0,
          "requiresText": false
        },
        {
          "id": "tb-08",
          "type": "location_checkin",
          "question": "到达九龙壁前签到",
          "options": [],
          "answerType": "",
          "hint": "",
          "reward": 2,
          "unlockAfter": "phase2-start",
          "minLength": 0,
          "requiresText": false
        },
        {
          "id": "tb-09",
          "type": "location_checkin",
          "question": "到达御花园入口签到",
          "options": [],
          "answerType": "",
          "hint": "",
          "reward": 2,
          "unlockAfter": "phase2-start",
          "minLength": 0,
          "requiresText": false
        },
        {
          "id": "tb-10",
          "type": "quiz",
          "question": "你觉得故宫排水最关键的一个设计是什么？（开放题，任何合理回答均可）",
          "options": [],
          "answerType": "open_ended",
          "hint": "",
          "reward": 3,
          "unlockAfter": "phase3-start",
          "minLength": 20,
          "requiresText": false
        }
      ]
    },
    "assets": {
      "cover": "lessons/lesson_zhuhun_001/assets/backgrounds/cover.png",
      "chat": "lessons/lesson_zhuhun_001/assets/backgrounds/chat-bg.png",
      "transition": "lessons/lesson_zhuhun_001/assets/backgrounds/phase-transition.png",
      "certificate": "lessons/lesson_zhuhun_001/assets/backgrounds/certificate-bg.png",
      "navigationMap": "lessons/lesson_zhuhun_001/assets/maps/navigation-map.png",
      "importPlaceholder": "lessons/lesson_zhuhun_001/assets/videos/video-storm-coming.png",
      "simulationPlaceholder": "lessons/lesson_zhuhun_001/assets/videos/video-simulation.png",
      "companionIdle": "/assets/video/xuxu-idle.webm",
      "companionTalk": "/assets/video/xuxu-talk.webm"
    }
  },
  "lesson_zhuhun_002": {
    "id": "lesson_zhuhun_002",
    "title": "得意之笔·四渡赤水",
    "subtitle": "在中国共产党历史展览馆，用证据完成一场战略推演",
    "series": "铸魂",
    "seriesCode": "zhuhun",
    "themeTemplate": "zhuhun",
    "venue": "中国共产党历史展览馆",
    "mapCenter": [
      116.3953,
      40.0071
    ],
    "duration": "5.5小时（含参观、午休与集合）",
    "grades": "小学中高年级 / 初中 / 高中",
    "groupRule": "5人一组，每人一个推演角色",
    "coreQuestion": "面对悬殊兵力与不断变化的局势，四渡赤水这支“得意之笔”究竟得意在哪里？",
    "persona": {
      "name": "絮絮",
      "courseRole": "协助展开地图、整理电文的电子参谋员",
      "character": "亲切、好奇、有少年感，尊重学生的观察和试错过程；本课侧重：冷静、尊重证据，愿意承认信息不足",
      "tone": "清晰、自然、耐心，偶尔幽默；本课侧重：战略推演中节奏更沉着，不煽情、不催促"
    },
    "phases": [
      {
        "id": "phase-1",
        "number": 1,
        "name": "局势入场",
        "duration": "25min",
        "mode": "集体（全班）",
        "location": "集合教室或展馆指定教育空间",
        "modules": "A06(沉浸媒体), A01(文字输入)",
        "trigger": "教师手动启动",
        "endCondition": "完成开场影片 + 提交初始判断",
        "flow": [
          "播放“3万对40万”局势导入影片或占位内容",
          "絮絮说明自己是AI学习同伴，本课以电子参谋员身份只按本轮可见情报协助推演",
          "学生阅读1935年1月遵义会议后的初始态势卡",
          "学生提交初始选择：继续北渡、原地作战、向东转移或暂不决策",
          "AI只追问判断依据，不公布后续四渡路线",
          "教师开启角色领取"
        ]
      },
      {
        "id": "phase-2",
        "number": 2,
        "name": "展陈采证",
        "duration": "120min",
        "mode": "个人角色任务 + 同角色短协作",
        "location": "中国共产党历史展览馆长征相关展区",
        "modules": "A01(多模态采集), A02(答题评测), A07(扫码), 位置导航",
        "trigger": "Phase 1结束 + 教师确认",
        "endCondition": "教师手动推进或采证时间结束",
        "flow": [
          "AI根据角色显示馆内动线与安全提示",
          "五种角色分别完成3个递进任务",
          "每条证据必须标记：展项/权威资料/课程材料/个人推测",
          "完成核心任务后获得对应战图图层",
          "时间银行分支任务可并行进行"
        ]
      },
      {
        "id": "phase-3",
        "number": 3,
        "name": "四渡推演",
        "duration": "60min",
        "mode": "小组协作",
        "location": "馆内教育空间或返程后的学习空间",
        "modules": "A03(拼合搭建), A04(兵棋推演), A05(讨论记录)",
        "trigger": "Phase 2结束",
        "endCondition": "完成四轮决策与证据复盘",
        "flow": [
          "五层战图叠合，显示各角色证据但隐藏史实结果",
          "系统依次冻结在一渡、二渡、三渡、四渡前的时间点",
          "每轮只开放当时已经掌握的情报",
          "小组提交“目标—约束—方案—风险—预期敌方反应”",
          "系统再开放下一段史实，要求标记原判断保留或修正",
          "通讯兵记录：基层执行者实际能看到多少信息"
        ]
      },
      {
        "id": "phase-4",
        "number": 4,
        "name": "璇玑时刻",
        "duration": "30min",
        "mode": "小组讨论 → 全班交流",
        "location": "学习空间",
        "modules": "A06(沉浸媒体), A04(双视角整合), A01(语音/文字)",
        "trigger": "Phase 3完成或教师解锁",
        "endCondition": "完成双视角回应",
        "flow": [
          "战图从“全局指挥视角”切换为“基层士兵有限视角”",
          "展示[待学生探索]课程情境材料，并明确标注出处待核",
          "学生回答：看不到全局时，一个人凭什么判断、行动和坚持",
          "AI要求区分史实证据、情境推断与价值判断",
          "小组形成双栏结论：战略层的行动逻辑 / 个体层的行动依据"
        ]
      },
      {
        "id": "phase-5",
        "number": 5,
        "name": "得意何在",
        "duration": "30min",
        "mode": "小组汇报 + 集体讲解",
        "location": "学习空间",
        "modules": "A01(文字/语音), A05(小组对比)",
        "trigger": "Phase 4结束",
        "endCondition": "每组形成带证据的核心判断",
        "flow": [
          "每组用3分钟回答核心问题",
          "AI按“证据—判断—边界”整理各组差异，不做排名",
          "教师补充四渡赤水与遵义会议后独立自主、实事求是的历史意义",
          "回看初始方案，记录至少一次判断变化及触发它的证据",
          "完成迁移题：现实中何时应该坚持，何时应该调整方案"
        ]
      },
      {
        "id": "phase-6",
        "number": 6,
        "name": "归档与尾声",
        "duration": "10min",
        "mode": "个人",
        "location": "学习空间",
        "modules": "学习报告",
        "trigger": "Phase 5结束",
        "endCondition": "报告预览生成",
        "flow": [
          "AI生成个人推演轨迹：初始判断、证据贡献、修正节点和最终结论",
          "学生确认哪些内容是史实、推断或价值表达",
          "絮絮告别并提醒：历史判断需要持续回到证据",
          "课程结束标记"
        ]
      }
    ],
    "roleSystem": {
      "collectionName": "推演角色",
      "itemName": "身份",
      "pickerEyebrow": "{roleCount}种推演身份 · {roleCount}层战图证据",
      "pickerTitle": "选择你的推演身份",
      "pickerDescription": "每位成员负责一种观察视角。集齐{roleCount}层{collectionItemName}，共同还原四渡赤水的决策链。",
      "collectionItemName": "战图图层",
      "collectionPanelName": "五层战图",
      "unlockTarget": "璇玑时刻",
      "phaseId": "phase-2"
    },
    "roles": [
      {
        "id": "map-strategist",
        "order": 1,
        "name": "地图参谋",
        "question": "山脉、河流与渡口怎样改变一支队伍可以选择的路？",
        "selectionDescription": "负责读懂川黔滇地形，把河流、渡口、山地和敌我位置整理成可推演的战场底图。",
        "location": "长征路线地图与模型展区",
        "geofence": "中国共产党历史展览馆课程动线内",
        "type": "核心角色",
        "collectionItem": "地形层",
        "collectionItemImage": "lessons/lesson_zhuhun_002/assets/tokens/layer-terrain.png",
        "tasks": [
          {
            "id": "task-1",
            "roleStageId": "task-1",
            "name": "定坐标",
            "phase": "Phase 2 展陈采证",
            "modules": "A01(拍照采集), A07(扫码), 位置导航",
            "tools": [
              {
                "id": "photo",
                "module": "A01",
                "name": "拍照采集",
                "icon": "camera",
                "output": "files",
                "config": {
                  "minCount": 1,
                  "maxCount": 6,
                  "accept": "image/*",
                  "recognition": "course-evidence"
                }
              },
              {
                "id": "scanner",
                "module": "A07",
                "name": "扫码识别",
                "icon": "scan-line",
                "output": "scanResult",
                "config": {
                  "mode": "qr",
                  "allowManualEntry": true,
                  "prompt": ""
                }
              }
            ],
            "requirement": "找到长征路线地图或地形模型，拍摄至少2处允许拍摄的局部；分别标注赤水河、乌江、长江、金沙江中能够辨认的水系，并记录展项标题",
            "guidanceSteps": [
              "对准展项整体和标题区域完成一次实物识别",
              "拍摄一张地图全景和一张能看清河流名称或图例的局部照片",
              "在课程底图上圈出至少两条能够确认的水系，并用箭头标出它们的相对方向"
            ],
            "steps": [
              {
                "id": "map-locate-exhibit",
                "title": "确认地图展项",
                "objective": "确认眼前展项属于本角色需要观察的长征路线地图或地形模型",
                "studentAction": "对准展项整体和标题区域完成一次实物识别",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "识别画面需同时包含地图或模型主体，以及可定位该展项的标题或说明区域",
                "location": {
                  "mode": "inherit",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A07(实物识别)",
                "next": "step:map-capture-water-system",
                "tools": [
                  {
                    "id": "scanner",
                    "module": "A07",
                    "name": "扫码识别",
                    "icon": "scan-line",
                    "output": "scanResult",
                    "config": {
                      "mode": "object",
                      "allowManualEntry": false,
                      "prompt": "请把地图或地形模型主体与展项标题一起放入画面，完成一次实物识别。"
                    }
                  }
                ]
              },
              {
                "id": "map-capture-water-system",
                "title": "采集水系证据",
                "objective": "获得能够支持水系相对位置判断的现场图像证据",
                "studentAction": "拍摄一张地图全景和一张能看清河流名称或图例的局部照片",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "至少2张照片；一张保留地图整体方向，一张清楚呈现至少一个河流名称或水系图例；不得拍入其他参观者正脸",
                "location": {
                  "mode": "inherit",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(拍照)",
                "next": "step:map-annotate-water-system",
                "tools": [
                  {
                    "id": "photo",
                    "module": "A01",
                    "name": "拍照采集",
                    "icon": "camera",
                    "output": "files",
                    "config": {
                      "minCount": 2,
                      "maxCount": 4,
                      "accept": "image/*",
                      "recognition": "map-source-and-waterway",
                      "prompt": "先拍地图全景，再拍河流名称或图例局部；两张照片都要保留可核对的展项信息。"
                    }
                  }
                ]
              },
              {
                "id": "map-annotate-water-system",
                "title": "标出可确认水系",
                "objective": "依据现场证据建立地图方向和水系相对位置",
                "studentAction": "在课程底图上圈出至少两条能够确认的水系，并用箭头标出它们的相对方向",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "画板中至少出现2个水系标注、1组相对方向箭头，并能对应本阶段照片；无法确认的名称写“待核”。",
                "location": {
                  "mode": "inherit",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(画板标注)",
                "next": "role-stage:task-2",
                "tools": [
                  {
                    "id": "sketch",
                    "module": "A01",
                    "name": "画板标注",
                    "icon": "pen-tool",
                    "output": "image",
                    "config": {
                      "width": 720,
                      "height": 520,
                      "brushColors": [
                        "#8d211f",
                        "#245c4f",
                        "#1f2937"
                      ],
                      "backgroundImage": "lessons/lesson_zhuhun_002/assets/tasks/terrain-map.svg",
                      "prompt": "红色圈水系名称，绿色画相对方向，黑色写照片编号；看不清的地方标“待核”。"
                    }
                  }
                ]
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "至少2张有效证据照片 + 1条展项来源 + 至少2个正确空间标注",
            "passCondition": "至少2张有效证据照片 + 1条展项来源 + 至少2个正确空间标注",
            "goals": "K1(时空坐标), S1(地图判读), S3(史料实证)",
            "toolType": "capture",
            "image": "lessons/lesson_zhuhun_002/assets/tasks/terrain-map.svg",
            "location": {
              "mode": "point",
              "legacyMode": "inherit_role",
              "name": "长征路线地图与模型展区",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "中国共产党历史展览馆课程动线内",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-2",
            "roleStageId": "task-2",
            "name": "布态势",
            "phase": "Phase 2 展陈采证",
            "modules": "A01(画板标注), A01(文字输入)",
            "tools": [
              {
                "id": "sketch",
                "module": "A01",
                "name": "画板标注",
                "icon": "pen-tool",
                "output": "image",
                "config": {
                  "width": 720,
                  "height": 420,
                  "brushColors": [
                    "#8d211f",
                    "#245c4f",
                    "#1f2937"
                  ],
                  "backgroundImage": ""
                }
              },
              {
                "id": "text",
                "module": "A01",
                "name": "文字表单",
                "icon": "notebook-pen",
                "output": "fields",
                "config": {
                  "fields": [
                    {
                      "id": "observation",
                      "label": "观察记录",
                      "type": "long_text",
                      "required": true
                    }
                  ]
                }
              }
            ],
            "requirement": "在空白底图上标出红军所在区域、敌军可能形成的封锁方向、至少2个渡河点候选和1处地形约束；每个标记附一句证据说明",
            "guidanceSteps": [
              "把红军区域、敌军封锁方向、两个候选渡口和一处地形约束卡分别放入对应区域",
              "在底图上用实线标现场可确认信息，用虚线标个人推演，并画出至少一个被河流或山地阻断的位置",
              "分别写下一条“能否通行”的证据和一条“是否值得走”的判断，并说明仍缺什么信息"
            ],
            "steps": [
              {
                "id": "map-place-situation-cards",
                "title": "摆放态势卡",
                "objective": "把不同类型的空间信息放进同一张态势底图",
                "studentAction": "把红军区域、敌军封锁方向、两个候选渡口和一处地形约束卡分别放入对应区域",
                "completionMode": "tool_result",
                "evidenceRequirement": "6张卡全部进入作品区；每张卡保留“展陈信息”或“推演假设”标签，不得把候选渡口写成史实渡口",
                "location": {
                  "mode": "inherit",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A03(拼合搭建)",
                "next": "step:map-mark-evidence-boundary",
                "tools": [
                  {
                    "id": "builder",
                    "module": "A03",
                    "name": "拼合搭建",
                    "icon": "blocks",
                    "output": "layout",
                    "config": {
                      "mode": "evidence-wall",
                      "items": [
                        {
                          "id": "red-area",
                          "label": "红军所在区域｜展陈信息"
                        },
                        {
                          "id": "block-north",
                          "label": "敌军封锁方向A｜待核"
                        },
                        {
                          "id": "crossing-a",
                          "label": "候选渡口A｜推演假设"
                        },
                        {
                          "id": "crossing-b",
                          "label": "候选渡口B｜推演假设"
                        },
                        {
                          "id": "terrain-river",
                          "label": "河流约束｜展陈信息"
                        },
                        {
                          "id": "terrain-mountain",
                          "label": "山地或交通约束｜待核"
                        }
                      ],
                      "zones": [
                        {
                          "id": "confirmed",
                          "label": "展陈可确认"
                        },
                        {
                          "id": "inference",
                          "label": "个人推演"
                        },
                        {
                          "id": "unknown",
                          "label": "仍待核验"
                        }
                      ],
                      "connections": [],
                      "prompt": "先按证据性质分区，再摆放态势卡。红军区域与地形约束需要现场证据；两个渡口仍是候选。"
                    }
                  }
                ]
              },
              {
                "id": "map-mark-evidence-boundary",
                "title": "画出空间关系",
                "objective": "用不同视觉符号区分事实位置、封锁方向和候选路线",
                "studentAction": "在底图上用实线标现场可确认信息，用虚线标个人推演，并画出至少一个被河流或山地阻断的位置",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "至少包含1个实线事实标记、2个虚线候选标记、1个封锁方向和1处地形阻断；标注与上一步态势卡一致",
                "location": {
                  "mode": "inherit",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(画板标注)",
                "next": "step:map-explain-terrain-constraint",
                "tools": [
                  {
                    "id": "sketch",
                    "module": "A01",
                    "name": "画板标注",
                    "icon": "pen-tool",
                    "output": "image",
                    "config": {
                      "width": 720,
                      "height": 520,
                      "brushColors": [
                        "#8d211f",
                        "#245c4f",
                        "#1f2937"
                      ],
                      "backgroundImage": "lessons/lesson_zhuhun_002/assets/tasks/terrain-map.svg",
                      "prompt": "红色实线表示展陈可确认，绿色虚线表示推演，黑色叉号标地形阻断。"
                    }
                  }
                ]
              },
              {
                "id": "map-explain-terrain-constraint",
                "title": "解释地形约束",
                "objective": "把地图标记转化为可供小组使用的路线约束",
                "studentAction": "分别写下一条“能否通行”的证据和一条“是否值得走”的判断，并说明仍缺什么信息",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "三个字段全部填写；通行证据引用现场照片或标注图，价值判断使用条件句，缺失信息不得虚构补全",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(文字表单)",
                "next": "role-stage:task-3",
                "tools": [
                  {
                    "id": "text",
                    "module": "A01",
                    "name": "文字表单",
                    "icon": "notebook-pen",
                    "output": "fields",
                    "config": {
                      "fields": [
                        {
                          "id": "passability",
                          "label": "能否通行：现场证据",
                          "type": "long_text",
                          "required": true,
                          "placeholder": "例：照片2显示……因此这段可能/不可能通行"
                        },
                        {
                          "id": "value",
                          "label": "是否值得走：带条件判断",
                          "type": "long_text",
                          "required": true,
                          "placeholder": "只有在……条件满足时，这条方向才值得考虑"
                        },
                        {
                          "id": "missing",
                          "label": "仍缺的信息",
                          "type": "short_text",
                          "required": true,
                          "placeholder": "敌军位置、补给、渡河条件等"
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "完成四类标注 + 至少3条证据说明 + 明确区分展陈信息与个人推断",
            "passCondition": "完成四类标注 + 至少3条证据说明 + 明确区分展陈信息与个人推断",
            "goals": "K2(敌我态势), S1(地图判读), S6(因果表达), C3(证据边界)",
            "toolType": "sketch",
            "image": "lessons/lesson_zhuhun_002/assets/tasks/terrain-map.svg",
            "location": {
              "mode": "point",
              "legacyMode": "inherit_role",
              "name": "长征路线地图与模型展区",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "中国共产党历史展览馆课程动线内",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-3",
            "roleStageId": "task-3",
            "name": "拟路线",
            "phase": "Phase 2 展陈采证",
            "modules": "A01(画板标注), A02(表单)",
            "tools": [
              {
                "id": "sketch",
                "module": "A01",
                "name": "画板标注",
                "icon": "pen-tool",
                "output": "image",
                "config": {
                  "width": 720,
                  "height": 420,
                  "brushColors": [
                    "#8d211f",
                    "#245c4f",
                    "#1f2937"
                  ],
                  "backgroundImage": ""
                }
              },
              {
                "id": "quiz",
                "module": "A02",
                "name": "答题评测",
                "icon": "list-checks",
                "output": "answers",
                "config": {
                  "type": "open_response",
                  "question": "",
                  "options": []
                }
              }
            ],
            "requirement": "只依据本角色已采集证据，提出一条阶段性转移路线；填写目标、地形优势、主要风险、仍缺信息各1项",
            "guidanceSteps": [
              "从当前起点画到一个候选终点，标出渡河点、转向点和备用出口",
              "根据刚画的路线填写目标、地形优势、主要风险和仍缺信息四项",
              "选择目前最符合你这条路线证据状态的描述"
            ],
            "steps": [
              {
                "id": "map-draw-candidate-route",
                "title": "绘制候选路线",
                "objective": "形成一条基于当前证据、可以被检查的阶段性路线",
                "studentAction": "从当前起点画到一个候选终点，标出渡河点、转向点和备用出口",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "路线连续，至少包含1个渡河点、1个转向点和1个备用出口；不得照抄尚未解锁的史实路线",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(画板标注)",
                "next": "step:map-complete-route-matrix",
                "tools": [
                  {
                    "id": "sketch",
                    "module": "A01",
                    "name": "画板标注",
                    "icon": "pen-tool",
                    "output": "image",
                    "config": {
                      "width": 720,
                      "height": 520,
                      "brushColors": [
                        "#8d211f",
                        "#245c4f",
                        "#1f2937"
                      ],
                      "backgroundImage": "lessons/lesson_zhuhun_002/assets/tasks/terrain-map.svg",
                      "prompt": "用红线画主路线、绿线画备用出口、黑圈标渡河点；这是候选方案，请勿写成史实路线。"
                    }
                  }
                ]
              },
              {
                "id": "map-complete-route-matrix",
                "title": "填写路线矩阵",
                "objective": "说明候选路线的目标、优势、风险和信息边界",
                "studentAction": "根据刚画的路线填写目标、地形优势、主要风险和仍缺信息四项",
                "completionMode": "tool_result",
                "evidenceRequirement": "四个字段均完成；优势和风险各引用至少一个现场观察；未知项保持为未知",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(文字表单)",
                "next": "step:map-check-route-evidence",
                "tools": [
                  {
                    "id": "text",
                    "module": "A01",
                    "name": "文字表单",
                    "icon": "notebook-pen",
                    "output": "fields",
                    "config": {
                      "fields": [
                        {
                          "id": "goal",
                          "label": "阶段目标",
                          "type": "short_text",
                          "required": true,
                          "placeholder": "保存力量、寻找出口、争取补给等"
                        },
                        {
                          "id": "advantage",
                          "label": "地形优势与证据",
                          "type": "long_text",
                          "required": true,
                          "placeholder": "引用照片或标注图说明"
                        },
                        {
                          "id": "risk",
                          "label": "主要风险与证据",
                          "type": "long_text",
                          "required": true,
                          "placeholder": "写出最可能使路线失效的条件"
                        },
                        {
                          "id": "unknown",
                          "label": "仍缺信息",
                          "type": "short_text",
                          "required": true,
                          "placeholder": "当前无法确认的信息"
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "id": "map-check-route-evidence",
                "title": "核对证据充分性",
                "objective": "判断候选路线是否已具备进入小组推演的最低证据条件",
                "studentAction": "选择目前最符合你这条路线证据状态的描述",
                "completionMode": "tool_result",
                "evidenceRequirement": "选择能够同时保留现场证据、风险和未知项的选项",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A02(单选答题)",
                "next": "role-stage:complete",
                "tools": [
                  {
                    "id": "quiz",
                    "module": "A02",
                    "name": "答题评测",
                    "icon": "list-checks",
                    "output": "answers",
                    "config": {
                      "type": "single_choice",
                      "question": "哪一种提交方式最适合把候选路线带入小组推演？",
                      "options": [
                        "路线与史实一致，所以无需再写风险",
                        "引用至少2条现场证据，同时保留主要风险和未知信息",
                        "只要地图上能连起来，就可以认定路线可行"
                      ]
                    }
                  }
                ]
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "提交1条连续路线 + 4项理由完整 + 至少引用2条现场证据",
            "passCondition": "提交1条连续路线 + 4项理由完整 + 至少引用2条现场证据",
            "goals": "K3(四次渡河), S5(决策矩阵), C1(实事求是), C2(战略思维)",
            "toolType": "sketch",
            "image": "lessons/lesson_zhuhun_002/assets/tasks/terrain-map.svg",
            "location": {
              "mode": "point",
              "legacyMode": "inherit_role",
              "name": "长征路线地图与模型展区",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "中国共产党历史展览馆课程动线内",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          }
        ],
        "cardImage": "lessons/lesson_zhuhun_002/assets/roles/role-card-map-strategist.png",
        "badgeImage": "lessons/lesson_zhuhun_002/assets/roles/badge-map-strategist.png"
      },
      {
        "id": "intelligence-strategist",
        "order": 2,
        "name": "情报参谋",
        "question": "双方掌握的信息不同，怎样让对方根据不完整信息作出错误判断？",
        "selectionDescription": "负责辨认电文和情报线索，画出“我方已知、敌方已知、双方未知与可能误判”的信息盲区。",
        "location": "情报与通信史料展区",
        "geofence": "中国共产党历史展览馆课程动线内",
        "type": "核心角色",
        "collectionItem": "情报层",
        "collectionItemImage": "lessons/lesson_zhuhun_002/assets/tokens/layer-intelligence.png",
        "tasks": [
          {
            "id": "task-1",
            "roleStageId": "task-1",
            "name": "读电文",
            "phase": "Phase 2 展陈采证",
            "modules": "A01(拍照采集), A07(扫码)",
            "tools": [
              {
                "id": "photo",
                "module": "A01",
                "name": "拍照采集",
                "icon": "camera",
                "output": "files",
                "config": {
                  "minCount": 1,
                  "maxCount": 6,
                  "accept": "image/*",
                  "recognition": "course-evidence"
                }
              },
              {
                "id": "scanner",
                "module": "A07",
                "name": "扫码识别",
                "icon": "scan-line",
                "output": "scanResult",
                "config": {
                  "mode": "qr",
                  "allowManualEntry": true,
                  "prompt": ""
                }
              }
            ],
            "requirement": "寻找通信、侦察、电台或电文相关展项，拍摄至少2处允许拍摄的证据；记录发送者、接收者、时间、信息内容中能够确认的项目",
            "guidanceSteps": [
              "拍摄一张通信工具或电文展项全景，再拍一张展项说明局部",
              "逐项填写发送者、接收者、时间、可确认内容和展项来源；看不清或材料未说明时填写“未知”",
              "选择最符合史料边界的记录方式"
            ],
            "steps": [
              {
                "id": "intel-capture-message",
                "title": "采集通信史料",
                "objective": "获得能够确认通信史料内容与来源的现场证据",
                "studentAction": "拍摄一张通信工具或电文展项全景，再拍一张展项说明局部",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "至少2张照片；全景能确认展项类型，局部能辨认标题、日期、通信主体或说明文字中的至少一项；不得依据模糊字迹补写",
                "location": {
                  "mode": "inherit",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(拍照)",
                "next": "step:intel-confirm-fields",
                "tools": [
                  {
                    "id": "photo",
                    "module": "A01",
                    "name": "拍照采集",
                    "icon": "camera",
                    "output": "files",
                    "config": {
                      "minCount": 2,
                      "maxCount": 4,
                      "accept": "image/*",
                      "recognition": "message-source-fields",
                      "prompt": "先拍展项全景，再拍说明文字局部；文字模糊时换角度，不要凭印象补写。"
                    }
                  }
                ]
              },
              {
                "id": "intel-confirm-fields",
                "title": "确认电文字段",
                "objective": "从现场材料中提取可确认字段，并保留材料未说明的空白",
                "studentAction": "逐项填写发送者、接收者、时间、可确认内容和展项来源；看不清或材料未说明时填写“未知”",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "5个字段均完成，其中至少3项来自照片中可辨认的信息；“未知”允许作为有效记录，禁止补造原句或编号",
                "location": {
                  "mode": "inherit",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(文字表单)",
                "next": "step:intel-mark-source-boundary",
                "tools": [
                  {
                    "id": "text",
                    "module": "A01",
                    "name": "文字表单",
                    "icon": "notebook-pen",
                    "output": "fields",
                    "config": {
                      "fields": [
                        {
                          "id": "sender",
                          "label": "发送者",
                          "type": "short_text",
                          "required": true,
                          "placeholder": "无法确认时填“未知”"
                        },
                        {
                          "id": "receiver",
                          "label": "接收者",
                          "type": "short_text",
                          "required": true,
                          "placeholder": "无法确认时填“未知”"
                        },
                        {
                          "id": "time",
                          "label": "时间",
                          "type": "short_text",
                          "required": true,
                          "placeholder": "按展项原文记录；未知可保留"
                        },
                        {
                          "id": "content",
                          "label": "能够确认的信息内容",
                          "type": "long_text",
                          "required": true,
                          "placeholder": "只转述清晰可见的内容"
                        },
                        {
                          "id": "source",
                          "label": "展项标题或来源",
                          "type": "short_text",
                          "required": true,
                          "placeholder": "填写展项标题、照片编号或说明牌"
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "id": "intel-mark-source-boundary",
                "title": "判断信息边界",
                "objective": "区分展项原文、展陈转述和个人推测",
                "studentAction": "选择最符合史料边界的记录方式",
                "completionMode": "tool_result",
                "evidenceRequirement": "正确选择保留未知、标明来源并将推测单独标注的表达",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A02(单选答题)",
                "next": "role-stage:task-2",
                "tools": [
                  {
                    "id": "quiz",
                    "module": "A02",
                    "name": "答题评测",
                    "icon": "list-checks",
                    "output": "answers",
                    "config": {
                      "type": "single_choice",
                      "question": "照片中有一处字迹模糊，哪种记录方式符合本课证据规则？",
                      "options": [
                        "按上下文补出最可能的原句",
                        "写“该字段未知”，并保留照片编号供复核",
                        "请AI生成一条意思接近的电文原文"
                      ]
                    }
                  }
                ]
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "至少2张有效照片 + 1条展项来源 + 至少3项信息字段；无法确认的字段标记“未知”",
            "passCondition": "至少2张有效照片 + 1条展项来源 + 至少3项信息字段；无法确认的字段标记“未知”",
            "goals": "K4(情报与信息差), S3(史料实证), C3(证据边界)",
            "toolType": "capture",
            "image": "lessons/lesson_zhuhun_002/assets/tasks/intelligence-matrix.svg",
            "location": {
              "mode": "point",
              "legacyMode": "inherit_role",
              "name": "情报与通信史料展区",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "中国共产党历史展览馆课程动线内",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-2",
            "roleStageId": "task-2",
            "name": "划盲区",
            "phase": "Phase 2 展陈采证",
            "modules": "A02(表单), A01(画板标注)",
            "tools": [
              {
                "id": "quiz",
                "module": "A02",
                "name": "答题评测",
                "icon": "list-checks",
                "output": "answers",
                "config": {
                  "type": "open_response",
                  "question": "",
                  "options": []
                }
              },
              {
                "id": "sketch",
                "module": "A01",
                "name": "画板标注",
                "icon": "pen-tool",
                "output": "image",
                "config": {
                  "width": 720,
                  "height": 420,
                  "brushColors": [
                    "#8d211f",
                    "#245c4f",
                    "#1f2937"
                  ],
                  "backgroundImage": ""
                }
              }
            ],
            "requirement": "把证据放入四象限：我方已知、敌方可能已知、双方未知、敌方可能误判；每项同时填写来源与可靠度（高/中/低）",
            "guidanceSteps": [
              "把任务1形成的5张信息卡分别放入四个象限；同一张卡只能先选择一个当前最合适的位置",
              "分别给5张信息卡选择高、中或低可靠度，并为低可靠度卡写出一种核验办法",
              "选择最符合当前证据的表述"
            ],
            "steps": [
              {
                "id": "intel-sort-information",
                "title": "分类信息卡",
                "objective": "建立我方已知、敌方可能已知、双方未知和敌方可能误判四类信息",
                "studentAction": "把任务1形成的5张信息卡分别放入四个象限；同一张卡只能先选择一个当前最合适的位置",
                "completionMode": "tool_result",
                "evidenceRequirement": "5张卡全部完成分类，四个象限均有记录；“敌方可能已知”保持可能性表述",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A03(分类搭建)",
                "next": "step:intel-rate-reliability",
                "tools": [
                  {
                    "id": "builder",
                    "module": "A03",
                    "name": "拼合搭建",
                    "icon": "blocks",
                    "output": "layout",
                    "config": {
                      "mode": "evidence-wall",
                      "items": [
                        {
                          "id": "sender-card",
                          "label": "任务1·发送者字段"
                        },
                        {
                          "id": "receiver-card",
                          "label": "任务1·接收者字段"
                        },
                        {
                          "id": "time-card",
                          "label": "任务1·时间字段"
                        },
                        {
                          "id": "content-card",
                          "label": "任务1·内容字段"
                        },
                        {
                          "id": "signal-card",
                          "label": "展项中可被观察的行动信号"
                        }
                      ],
                      "zones": [
                        {
                          "id": "ours",
                          "label": "我方已知"
                        },
                        {
                          "id": "enemy-maybe",
                          "label": "敌方可能已知"
                        },
                        {
                          "id": "unknown",
                          "label": "双方未知"
                        },
                        {
                          "id": "misread",
                          "label": "敌方可能误判"
                        }
                      ],
                      "connections": [],
                      "prompt": "把来自任务1的字段卡与一个行动信号卡放入四象限；分类依据是当时各方能否获得信息。",
                      "bindings": {
                        "sender-card": {
                          "taskId": "task-1",
                          "stepId": "intel-confirm-fields",
                          "toolId": "text",
                          "fieldId": "sender",
                          "prefix": "发送者："
                        },
                        "receiver-card": {
                          "taskId": "task-1",
                          "stepId": "intel-confirm-fields",
                          "toolId": "text",
                          "fieldId": "receiver",
                          "prefix": "接收者："
                        },
                        "time-card": {
                          "taskId": "task-1",
                          "stepId": "intel-confirm-fields",
                          "toolId": "text",
                          "fieldId": "time",
                          "prefix": "时间："
                        },
                        "content-card": {
                          "taskId": "task-1",
                          "stepId": "intel-confirm-fields",
                          "toolId": "text",
                          "fieldId": "content",
                          "prefix": "内容："
                        }
                      },
                      "zoneMinimums": {
                        "ours": 1,
                        "enemy-maybe": 1,
                        "unknown": 1,
                        "misread": 1
                      }
                    }
                  }
                ]
              },
              {
                "id": "intel-rate-reliability",
                "title": "标记可靠度",
                "objective": "为分类判断补充来源、可靠度和核验办法",
                "studentAction": "分别给5张信息卡选择高、中或低可靠度，并为低可靠度卡写出一种核验办法",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "5张卡均有可靠度；至少1张卡保留低或中可靠度；低可靠度信息填写可执行的核验办法",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(文字表单)",
                "next": "step:intel-correct-overclaim",
                "tools": [
                  {
                    "id": "text",
                    "module": "A01",
                    "name": "文字表单",
                    "icon": "notebook-pen",
                    "output": "fields",
                    "config": {
                      "fields": [
                        {
                          "id": "sender-rating",
                          "label": "发送者字段：可靠度与理由",
                          "type": "short_text",
                          "required": true,
                          "placeholder": "高/中/低 + 照片或来源"
                        },
                        {
                          "id": "receiver-rating",
                          "label": "接收者字段：可靠度与理由",
                          "type": "short_text",
                          "required": true
                        },
                        {
                          "id": "time-rating",
                          "label": "时间字段：可靠度与理由",
                          "type": "short_text",
                          "required": true
                        },
                        {
                          "id": "content-rating",
                          "label": "内容字段：可靠度与理由",
                          "type": "short_text",
                          "required": true
                        },
                        {
                          "id": "signal-rating",
                          "label": "行动信号：可靠度与理由",
                          "type": "short_text",
                          "required": true
                        },
                        {
                          "id": "verification-method",
                          "label": "一条低可靠度信息的核验办法",
                          "type": "long_text",
                          "required": true,
                          "placeholder": "回看展项、寻找独立来源或请教师核验"
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "id": "intel-correct-overclaim",
                "title": "修正越界判断",
                "objective": "把关于敌方认知的确定断言改写为带证据边界的判断",
                "studentAction": "选择最符合当前证据的表述",
                "completionMode": "tool_result",
                "evidenceRequirement": "选择同时说明推测性质、依据和替代可能的表达",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A02(单选答题)",
                "next": "role-stage:task-3",
                "tools": [
                  {
                    "id": "quiz",
                    "module": "A02",
                    "name": "答题评测",
                    "icon": "list-checks",
                    "output": "answers",
                    "config": {
                      "type": "single_choice",
                      "question": "只有一条行动信号证据时，怎样记录敌方是否已经知道？",
                      "options": [
                        "敌方一定已经知道，并会按我们预想行动",
                        "根据这条信号，敌方可能知道；还需说明观察渠道和其他解释",
                        "只要我方看得到，敌方就必然看得到"
                      ]
                    }
                  }
                ]
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "四个象限均有记录 + 至少5条信息卡 + 每条含来源和可靠度",
            "passCondition": "四个象限均有记录 + 至少5条信息卡 + 每条含来源和可靠度",
            "goals": "K4(情报与信息差), S4(信息不对称分析), C2(战略思维)",
            "toolType": "form",
            "image": "lessons/lesson_zhuhun_002/assets/tasks/intelligence-matrix.svg",
            "location": {
              "mode": "point",
              "legacyMode": "inherit_role",
              "name": "情报与通信史料展区",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "中国共产党历史展览馆课程动线内",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-3",
            "roleStageId": "task-3",
            "name": "测判断",
            "phase": "Phase 2 展陈采证",
            "modules": "A02(表单), A01(文字输入)",
            "tools": [
              {
                "id": "quiz",
                "module": "A02",
                "name": "答题评测",
                "icon": "list-checks",
                "output": "answers",
                "config": {
                  "type": "open_response",
                  "question": "",
                  "options": []
                }
              },
              {
                "id": "text",
                "module": "A01",
                "name": "文字表单",
                "icon": "notebook-pen",
                "output": "fields",
                "config": {
                  "fields": [
                    {
                      "id": "observation",
                      "label": "观察记录",
                      "type": "long_text",
                      "required": true
                    }
                  ]
                }
              }
            ],
            "requirement": "选择一个行动信号，预测敌方看到它后最可能形成的两种判断；填写判断依据、我方可利用的窗口和判断失败风险",
            "guidanceSteps": [
              "从当前开放的三类信号中选择一类，作为本轮判断测试对象",
              "连续运行两轮，分别测试“敌方相信信号”和“敌方怀疑或未按预期行动”两种分支",
              "分别写出两种判断的依据，再记录可利用窗口、失败风险和使判断失效的新信息"
            ],
            "steps": [
              {
                "id": "intel-select-signal",
                "title": "选择行动信号",
                "objective": "选定一个可能被敌方观察、且适合进行多分支分析的信号",
                "studentAction": "从当前开放的三类信号中选择一类，作为本轮判断测试对象",
                "completionMode": "tool_result",
                "evidenceRequirement": "完成选择，并能在下一步说明该信号通过什么渠道可能被观察",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A02(单选答题)",
                "next": "step:intel-run-branches",
                "tools": [
                  {
                    "id": "quiz",
                    "module": "A02",
                    "name": "答题评测",
                    "icon": "list-checks",
                    "output": "answers",
                    "config": {
                      "type": "single_choice",
                      "question": "选择一个准备测试的行动信号：",
                      "options": [
                        "公开可观察的行军方向",
                        "渡口附近出现的行动迹象",
                        "可能被截获或转述的通信线索"
                      ]
                    }
                  }
                ]
              },
              {
                "id": "intel-run-branches",
                "title": "运行判断分支",
                "objective": "比较同一行动信号可能引发的不同敌方反应",
                "studentAction": "连续运行两轮，分别测试“敌方相信信号”和“敌方怀疑或未按预期行动”两种分支",
                "completionMode": "tool_result",
                "evidenceRequirement": "完成2轮且选择不同反应；运行记录保留每轮判断及公开反馈，模拟结果不得作为史实证据",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A04(沙盘推演)",
                "next": "step:intel-record-window-risk",
                "tools": [
                  {
                    "id": "simulation",
                    "module": "A04",
                    "name": "沙盘推演",
                    "icon": "waves",
                    "output": "rounds",
                    "config": {
                      "rounds": 2,
                      "resources": {
                        "证据卡": 5,
                        "时间窗口": "待判断"
                      },
                      "choices": [
                        {
                          "id": "believe",
                          "label": "敌方相信信号并调整部署",
                          "publicFeedback": "可能形成短暂窗口；需要继续检查信号能否被观察和窗口持续多久。",
                          "effects": {
                            "window": 2,
                            "exposure": 1
                          }
                        },
                        {
                          "id": "doubt",
                          "label": "敌方怀疑信号并保留兵力",
                          "publicFeedback": "窗口可能缩小；需要准备替代方案并寻找新情报。",
                          "effects": {
                            "window": -1,
                            "exposure": 1
                          }
                        },
                        {
                          "id": "other",
                          "label": "敌方形成另一种解释",
                          "publicFeedback": "原有预测失效；请说明还可能出现什么解释。",
                          "effects": {
                            "window": 0,
                            "uncertainty": 2
                          }
                        }
                      ],
                      "metrics": [
                        {
                          "id": "window",
                          "label": "可利用窗口",
                          "initial": 0,
                          "initialLabel": "待判断"
                        },
                        {
                          "id": "uncertainty",
                          "label": "不确定性",
                          "initial": 0,
                          "initialLabel": "待判断"
                        },
                        {
                          "id": "exposure",
                          "label": "信号暴露",
                          "initial": 0,
                          "initialLabel": "待判断"
                        }
                      ],
                      "allowRepeat": false,
                      "prompt": "运行两个不同的敌方反应分支，比较窗口和不确定性。",
                      "roundPrompts": [
                        "第1轮：选择敌方对信号的一种初始判断。",
                        "第2轮：改选另一种反应，检查原判断失效时会发生什么。"
                      ]
                    }
                  }
                ]
              },
              {
                "id": "intel-record-window-risk",
                "title": "记录窗口与风险",
                "objective": "为两个敌方判断分支补足依据、利用窗口和失效条件",
                "studentAction": "分别写出两种判断的依据，再记录可利用窗口、失败风险和使判断失效的新信息",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "判断A和判断B各有至少1条依据；窗口、失败风险和失效信息均完成；表述使用“可能、如果、在……条件下”",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(文字表单)",
                "next": "role-stage:complete",
                "tools": [
                  {
                    "id": "text",
                    "module": "A01",
                    "name": "文字表单",
                    "icon": "notebook-pen",
                    "output": "fields",
                    "config": {
                      "fields": [
                        {
                          "id": "basis-a",
                          "label": "判断A及依据",
                          "type": "long_text",
                          "required": true,
                          "placeholder": "如果敌方相信……依据是……"
                        },
                        {
                          "id": "basis-b",
                          "label": "判断B及依据",
                          "type": "long_text",
                          "required": true,
                          "placeholder": "如果敌方怀疑或另作判断……依据是……"
                        },
                        {
                          "id": "window",
                          "label": "我方可能利用的窗口",
                          "type": "long_text",
                          "required": true
                        },
                        {
                          "id": "risk",
                          "label": "判断失败风险",
                          "type": "long_text",
                          "required": true
                        },
                        {
                          "id": "invalidate",
                          "label": "哪条新信息会使判断失效",
                          "type": "short_text",
                          "required": true
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "提交2种敌方判断 + 每种至少1条依据 + 1项利用窗口 + 1项失败风险",
            "passCondition": "提交2种敌方判断 + 每种至少1条依据 + 1项利用窗口 + 1项失败风险",
            "goals": "K4(情报与信息差), K6(虚实行动链), S5(决策矩阵), C2(战略思维)",
            "toolType": "form",
            "image": "lessons/lesson_zhuhun_002/assets/tasks/intelligence-matrix.svg",
            "location": {
              "mode": "point",
              "legacyMode": "inherit_role",
              "name": "情报与通信史料展区",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "中国共产党历史展览馆课程动线内",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          }
        ],
        "cardImage": "lessons/lesson_zhuhun_002/assets/roles/role-card-intelligence-strategist.png",
        "badgeImage": "lessons/lesson_zhuhun_002/assets/roles/badge-intelligence-strategist.png"
      },
      {
        "id": "decision-strategist",
        "order": 3,
        "name": "决策参谋",
        "question": "多数人支持一个方案时，怎样保护有证据的不同意见并共同承担决定？",
        "selectionDescription": "负责还原方案分歧，比较收益、风险、信息可靠度和可逆性，记录决定如何形成与修正。",
        "location": "遵义会议与苟坝会议专题展陈区",
        "geofence": "中国共产党历史展览馆课程动线内",
        "type": "核心角色",
        "collectionItem": "决策层",
        "collectionItemImage": "lessons/lesson_zhuhun_002/assets/tokens/layer-decision.png",
        "tasks": [
          {
            "id": "task-1",
            "roleStageId": "task-1",
            "name": "列方案",
            "phase": "Phase 2 展陈采证",
            "modules": "A01(拍照采集), A02(表单)",
            "tools": [
              {
                "id": "photo",
                "module": "A01",
                "name": "拍照采集",
                "icon": "camera",
                "output": "files",
                "config": {
                  "minCount": 1,
                  "maxCount": 6,
                  "accept": "image/*",
                  "recognition": "course-evidence"
                }
              },
              {
                "id": "quiz",
                "module": "A02",
                "name": "答题评测",
                "icon": "list-checks",
                "output": "answers",
                "config": {
                  "type": "open_response",
                  "question": "",
                  "options": []
                }
              }
            ],
            "requirement": "拍摄至少1处允许拍摄的会议相关展项说明；从材料中提取2个待比较方案或意见，记录提出背景、支持理由、反对理由和材料来源",
            "guidanceSteps": [
              "拍摄一张会议相关展项及其说明牌，确保方案背景或讨论对象可以辨认",
              "分别填写方案A和方案B的背景、主张及材料来源；材料没有说明的内容写“未知”",
              "选择最适合进入下一阶段风险比较的记录方式"
            ],
            "steps": [
              {
                "id": "decision-capture-source",
                "title": "拍下方案来源",
                "objective": "获得能够追溯会议背景和不同意见的现场材料",
                "studentAction": "拍摄一张会议相关展项及其说明牌，确保方案背景或讨论对象可以辨认",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "至少1张有效照片，同时保留展项主体和标题或说明；不得拍入其他参观者正脸",
                "location": {
                  "mode": "inherit",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(拍照)",
                "next": "step:decision-build-options",
                "tools": [
                  {
                    "id": "photo",
                    "module": "A01",
                    "name": "拍照采集",
                    "icon": "camera",
                    "output": "files",
                    "config": {
                      "minCount": 1,
                      "maxCount": 3,
                      "accept": "image/*",
                      "recognition": "meeting-options-source",
                      "prompt": "把会议展项与说明牌一起拍下，优先保留讨论背景和材料来源。"
                    }
                  }
                ]
              },
              {
                "id": "decision-build-options",
                "title": "建立两个方案条目",
                "objective": "忠实整理材料中出现的两个待比较方案或意见",
                "studentAction": "分别填写方案A和方案B的背景、主张及材料来源；材料没有说明的内容写“未知”",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "两个方案均包含名称或中性转述、提出背景和来源；不使用没有可靠出处的直接引语",
                "location": {
                  "mode": "inherit",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(文字表单)",
                "next": "step:decision-balance-reasons",
                "tools": [
                  {
                    "id": "text",
                    "module": "A01",
                    "name": "文字表单",
                    "icon": "notebook-pen",
                    "output": "fields",
                    "config": {
                      "fields": [
                        {
                          "id": "option-a",
                          "label": "方案A：中性转述",
                          "type": "long_text",
                          "required": true,
                          "placeholder": "材料中明确出现的意见；不要添加人物原话"
                        },
                        {
                          "id": "context-a",
                          "label": "方案A：提出背景",
                          "type": "short_text",
                          "required": true
                        },
                        {
                          "id": "source-a",
                          "label": "方案A：来源",
                          "type": "short_text",
                          "required": true,
                          "placeholder": "展项标题或照片编号"
                        },
                        {
                          "id": "option-b",
                          "label": "方案B：中性转述",
                          "type": "long_text",
                          "required": true
                        },
                        {
                          "id": "context-b",
                          "label": "方案B：提出背景",
                          "type": "short_text",
                          "required": true
                        },
                        {
                          "id": "source-b",
                          "label": "方案B：来源",
                          "type": "short_text",
                          "required": true
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "id": "decision-balance-reasons",
                "title": "检查正反理由",
                "objective": "理解比较方案时需要同时保存支持和反对理由",
                "studentAction": "选择最适合进入下一阶段风险比较的记录方式",
                "completionMode": "tool_result",
                "evidenceRequirement": "正确选择同时记录两个方案的支持理由、反对理由和来源的做法",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A02(单选答题)",
                "next": "role-stage:task-2",
                "tools": [
                  {
                    "id": "quiz",
                    "module": "A02",
                    "name": "答题评测",
                    "icon": "list-checks",
                    "output": "answers",
                    "config": {
                      "type": "single_choice",
                      "question": "怎样整理两个方案，才能进入公平的风险比较？",
                      "options": [
                        "只记录多数人支持方案的优点",
                        "给每个方案分别记录支持理由、反对理由和材料来源",
                        "先看后来结果，再删除失败方案的合理理由"
                      ]
                    }
                  }
                ]
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "至少1张来源照片 + 2个方案条目 + 每个方案含支持与反对理由",
            "passCondition": "至少1张来源照片 + 2个方案条目 + 每个方案含支持与反对理由",
            "goals": "K5(遵义与苟坝), S3(史料实证), S5(决策矩阵)",
            "toolType": "capture",
            "image": "lessons/lesson_zhuhun_002/assets/tasks/decision-matrix.svg",
            "location": {
              "mode": "point",
              "legacyMode": "inherit_role",
              "name": "遵义会议与苟坝会议专题展陈区",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "中国共产党历史展览馆课程动线内",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-2",
            "roleStageId": "task-2",
            "name": "比风险",
            "phase": "Phase 2 展陈采证",
            "modules": "A04(沙盘推演), A02(表单)",
            "tools": [
              {
                "id": "simulation",
                "module": "A04",
                "name": "沙盘推演",
                "icon": "waves",
                "output": "rounds",
                "config": {
                  "rounds": 1,
                  "resources": {},
                  "choices": [],
                  "metrics": []
                }
              },
              {
                "id": "quiz",
                "module": "A02",
                "name": "答题评测",
                "icon": "list-checks",
                "output": "answers",
                "config": {
                  "type": "open_response",
                  "question": "",
                  "options": []
                }
              }
            ],
            "requirement": "为每个方案评估目标一致度、证据可靠度、成功收益、失败代价和可逆性；保留至少1条少数意见并写明复核办法",
            "guidanceSteps": [
              "分别为方案A、方案B填写目标一致度、证据可靠度、成功收益、失败代价和可逆性，并给出一句评分依据",
              "运行两轮风险测试：一轮假设敌情判断错误，一轮假设行动窗口已经变化",
              "组内讨论后至少记录两条内容：阶段选择与理由、少数意见及其复核条件"
            ],
            "steps": [
              {
                "id": "decision-score-options",
                "title": "完成五维比较",
                "objective": "用同一套维度比较两个方案的收益、风险和信息质量",
                "studentAction": "分别为方案A、方案B填写目标一致度、证据可靠度、成功收益、失败代价和可逆性，并给出一句评分依据",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "两个方案的五个维度均完成；每个方案至少引用1条任务1材料；分数或高低判断附带理由",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(文字表单)",
                "next": "step:decision-test-failure",
                "tools": [
                  {
                    "id": "text",
                    "module": "A01",
                    "name": "文字表单",
                    "icon": "notebook-pen",
                    "output": "fields",
                    "config": {
                      "fields": [
                        {
                          "id": "a-goal",
                          "label": "方案A｜目标一致度及依据",
                          "type": "short_text",
                          "required": true,
                          "placeholder": "高/中/低 + 依据"
                        },
                        {
                          "id": "a-reliability",
                          "label": "方案A｜证据可靠度及依据",
                          "type": "short_text",
                          "required": true
                        },
                        {
                          "id": "a-benefit",
                          "label": "方案A｜成功收益",
                          "type": "short_text",
                          "required": true
                        },
                        {
                          "id": "a-cost",
                          "label": "方案A｜失败代价",
                          "type": "short_text",
                          "required": true
                        },
                        {
                          "id": "a-reversible",
                          "label": "方案A｜可逆性",
                          "type": "short_text",
                          "required": true
                        },
                        {
                          "id": "b-goal",
                          "label": "方案B｜目标一致度及依据",
                          "type": "short_text",
                          "required": true
                        },
                        {
                          "id": "b-reliability",
                          "label": "方案B｜证据可靠度及依据",
                          "type": "short_text",
                          "required": true
                        },
                        {
                          "id": "b-benefit",
                          "label": "方案B｜成功收益",
                          "type": "short_text",
                          "required": true
                        },
                        {
                          "id": "b-cost",
                          "label": "方案B｜失败代价",
                          "type": "short_text",
                          "required": true
                        },
                        {
                          "id": "b-reversible",
                          "label": "方案B｜可逆性",
                          "type": "short_text",
                          "required": true
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "id": "decision-test-failure",
                "title": "测试错误前提",
                "objective": "检验关键判断出错时两个方案的失败代价和调整空间",
                "studentAction": "运行两轮风险测试：一轮假设敌情判断错误，一轮假设行动窗口已经变化",
                "completionMode": "tool_result",
                "evidenceRequirement": "完成2轮不同风险测试；每轮选择一个应对方案，保留失败代价和是否还能调整的记录",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A04(沙盘推演)",
                "next": "step:decision-record-team-decision",
                "tools": [
                  {
                    "id": "simulation",
                    "module": "A04",
                    "name": "沙盘推演",
                    "icon": "waves",
                    "output": "rounds",
                    "config": {
                      "rounds": 2,
                      "resources": {
                        "候选方案": 2,
                        "复核机会": 1
                      },
                      "choices": [
                        {
                          "id": "continue-a",
                          "label": "继续方案A并设置复核点",
                          "publicFeedback": "请检查复核点出现前的失败代价是否能够承受。",
                          "effects": {
                            "risk": 1,
                            "reversible": 1
                          }
                        },
                        {
                          "id": "continue-b",
                          "label": "继续方案B并设置退出条件",
                          "publicFeedback": "请检查退出条件是否清楚，以及何时重新讨论。",
                          "effects": {
                            "risk": 1,
                            "reversible": 2
                          }
                        },
                        {
                          "id": "pause-review",
                          "label": "暂缓决定，先补充关键证据",
                          "publicFeedback": "补证据会消耗窗口；请比较延误风险与错误行动风险。",
                          "effects": {
                            "time": -1,
                            "reliability": 2
                          }
                        }
                      ],
                      "metrics": [
                        {
                          "id": "risk",
                          "label": "失败代价",
                          "initial": 0,
                          "initialLabel": "待评估"
                        },
                        {
                          "id": "reversible",
                          "label": "调整空间",
                          "initial": 0,
                          "initialLabel": "待评估"
                        },
                        {
                          "id": "time",
                          "label": "时间变化",
                          "initial": 0,
                          "initialLabel": "待评估"
                        },
                        {
                          "id": "reliability",
                          "label": "证据可靠度",
                          "initial": 0,
                          "initialLabel": "待评估"
                        }
                      ],
                      "allowRepeat": false,
                      "prompt": "用两个不同方案检验失败代价、调整空间和证据可靠度。",
                      "roundPrompts": [
                        "第1轮：假设一项敌情判断有误，选择应对方式。",
                        "第2轮：假设行动窗口缩短，改选另一方案继续检验。"
                      ]
                    }
                  }
                ]
              },
              {
                "id": "decision-record-team-decision",
                "title": "记录小组决定与异议",
                "objective": "形成可执行的阶段选择，同时保护有证据的少数意见",
                "studentAction": "组内讨论后至少记录两条内容：阶段选择与理由、少数意见及其复核条件",
                "completionMode": "tool_result",
                "evidenceRequirement": "至少2条组内记录；一条明确小组阶段选择和依据，一条保留不同意见、核验办法或重新讨论触发点",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A05(团队投票与异议记录)",
                "next": "role-stage:task-3",
                "tools": [
                  {
                    "id": "team",
                    "module": "A05",
                    "name": "团队协作",
                    "icon": "users",
                    "output": "teamLog",
                    "config": {
                      "mode": "vote",
                      "prompt": "先记录小组选择及证据，再单独记录少数意见、复核办法和重新讨论条件；不要把课程投票写成历史事实。",
                      "minimumEntries": 3,
                      "roles": [
                        "记录人",
                        "复核人",
                        "风险提醒人"
                      ],
                      "recordTypes": [
                        "小组选择与证据",
                        "少数意见",
                        "复核或重议条件"
                      ],
                      "requiredRecordTypes": [
                        "小组选择与证据",
                        "少数意见",
                        "复核或重议条件"
                      ]
                    }
                  }
                ]
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "完成2个方案的五维比较 + 1条少数意见保护机制 + 小组提交阶段选择",
            "passCondition": "完成2个方案的五维比较 + 1条少数意见保护机制 + 小组提交阶段选择",
            "goals": "K5(遵义与苟坝), S5(决策矩阵), C1(实事求是), C4(民主与担当)",
            "toolType": "simulation",
            "image": "lessons/lesson_zhuhun_002/assets/tasks/decision-matrix.svg",
            "location": {
              "mode": "point",
              "legacyMode": "inherit_role",
              "name": "遵义会议与苟坝会议专题展陈区",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "中国共产党历史展览馆课程动线内",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-3",
            "roleStageId": "task-3",
            "name": "复决策",
            "phase": "Phase 2 展陈采证",
            "modules": "A01(文字输入), A02(反思表单)",
            "tools": [
              {
                "id": "text",
                "module": "A01",
                "name": "文字表单",
                "icon": "notebook-pen",
                "output": "fields",
                "config": {
                  "fields": [
                    {
                      "id": "observation",
                      "label": "观察记录",
                      "type": "long_text",
                      "required": true
                    }
                  ]
                }
              },
              {
                "id": "quiz",
                "module": "A02",
                "name": "答题评测",
                "icon": "list-checks",
                "output": "answers",
                "config": {
                  "type": "open_response",
                  "question": "",
                  "options": []
                }
              }
            ],
            "requirement": "阅读本轮开放的课程复核材料后，写出原方案保留、修改或放弃的部分；用“新证据—判断变化—责任安排”完成复盘",
            "guidanceSteps": [
              "完整查看本轮开放的课程复核卡，找出一条能够改变原判断的新信息",
              "把原判断、新证据、保留内容、修改内容、放弃内容和行动责任卡放入对应区域",
              "用“新证据—判断变化—责任安排”完成三段式复盘，并引用至少2条证据"
            ],
            "steps": [
              {
                "id": "decision-read-new-evidence",
                "title": "读取新增材料",
                "objective": "在任务2完成后获得用于复盘的新增课程推演材料",
                "studentAction": "完整查看本轮开放的课程复核卡，找出一条能够改变原判断的新信息",
                "completionMode": "tool_result",
                "evidenceRequirement": "完成材料查看；明确区分“课程推演信息”和“历史知识”，不把课程情境改写成历史人物直接引语",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A06(沉浸媒体)",
                "next": "step:decision-compare-version",
                "tools": [
                  {
                    "id": "media",
                    "module": "A06",
                    "name": "沉浸媒体",
                    "icon": "play",
                    "output": "playback",
                    "config": {
                      "type": "image",
                      "url": "lessons/lesson_zhuhun_002/assets/tasks/decision-review-card.svg",
                      "poster": "",
                      "title": "本轮新增课程材料｜复核与决策机制",
                      "requireCompletion": true,
                      "prompt": "材料在任务2完成后开放。阅读时寻找改变原方案前提的新信息，并保留课程推演标识。"
                    }
                  }
                ]
              },
              {
                "id": "decision-compare-version",
                "title": "整理判断变化",
                "objective": "保留原方案痕迹并区分保留、修改和放弃的内容",
                "studentAction": "把原判断、新证据、保留内容、修改内容、放弃内容和行动责任卡放入对应区域",
                "completionMode": "tool_result",
                "evidenceRequirement": "6张卡全部进入作品区；原判断不得删除，新证据与至少一项修改或放弃建立对应关系",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A03(版本对照搭建)",
                "next": "step:decision-write-revision",
                "tools": [
                  {
                    "id": "builder",
                    "module": "A03",
                    "name": "拼合搭建",
                    "icon": "blocks",
                    "output": "layout",
                    "config": {
                      "mode": "flow",
                      "items": [
                        {
                          "id": "original",
                          "label": "任务2·原阶段选择"
                        },
                        {
                          "id": "new-evidence",
                          "label": "新增课程材料中的关键信息"
                        },
                        {
                          "id": "keep",
                          "label": "仍然保留的判断"
                        },
                        {
                          "id": "change",
                          "label": "需要修改的判断"
                        },
                        {
                          "id": "drop",
                          "label": "需要放弃的判断"
                        },
                        {
                          "id": "responsibility",
                          "label": "统一行动与责任安排"
                        }
                      ],
                      "zones": [
                        {
                          "id": "before",
                          "label": "原判断"
                        },
                        {
                          "id": "trigger",
                          "label": "新信息"
                        },
                        {
                          "id": "after",
                          "label": "保留/修改/放弃"
                        },
                        {
                          "id": "action",
                          "label": "统一行动"
                        }
                      ],
                      "connections": [],
                      "prompt": "保留原判断，再按新信息整理保留、修改、放弃和责任安排。",
                      "bindings": {
                        "original": {
                          "taskId": "task-2",
                          "stepId": "decision-record-team-decision",
                          "toolId": "team",
                          "property": "entries",
                          "prefix": "原讨论："
                        }
                      }
                    }
                  }
                ]
              },
              {
                "id": "decision-write-revision",
                "title": "完成决策复盘",
                "objective": "用证据说明判断为什么改变，以及决定后怎样共同承担行动",
                "studentAction": "用“新证据—判断变化—责任安排”完成三段式复盘，并引用至少2条证据",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "三个字段完整；至少引用任务1现场材料和任务3新增材料各1条；明确一项统一行动安排，不把课程投票写成历史会议事实",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(文字表单)",
                "next": "role-stage:complete",
                "tools": [
                  {
                    "id": "text",
                    "module": "A01",
                    "name": "文字表单",
                    "icon": "notebook-pen",
                    "output": "fields",
                    "config": {
                      "fields": [
                        {
                          "id": "new-evidence",
                          "label": "新证据及来源",
                          "type": "long_text",
                          "required": true,
                          "placeholder": "至少引用两条不同阶段证据"
                        },
                        {
                          "id": "change",
                          "label": "判断变化",
                          "type": "long_text",
                          "required": true,
                          "placeholder": "原来认为……现在保留/修改/放弃……因为……"
                        },
                        {
                          "id": "responsibility",
                          "label": "统一行动与责任安排",
                          "type": "long_text",
                          "required": true,
                          "placeholder": "决定形成后，谁核验、谁执行、何时复盘"
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "三段式复盘完整 + 引用至少2条证据 + 明确1项统一行动安排",
            "passCondition": "三段式复盘完整 + 引用至少2条证据 + 明确1项统一行动安排",
            "goals": "K5(遵义与苟坝), S6(因果表达), C1(实事求是), C4(民主与担当)",
            "toolType": "text",
            "image": "lessons/lesson_zhuhun_002/assets/tasks/decision-matrix.svg",
            "location": {
              "mode": "point",
              "legacyMode": "inherit_role",
              "name": "遵义会议与苟坝会议专题展陈区",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "中国共产党历史展览馆课程动线内",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          }
        ],
        "cardImage": "lessons/lesson_zhuhun_002/assets/roles/role-card-decision-strategist.png",
        "badgeImage": "lessons/lesson_zhuhun_002/assets/roles/badge-decision-strategist.png"
      },
      {
        "id": "feint-strategist",
        "order": 4,
        "name": "示形参谋",
        "question": "怎样用可被敌方观察到的行动改变其部署，同时为真正目标创造窗口？",
        "selectionDescription": "负责拆解行动顺序和虚实关系，推演我方信号、敌方判断与兵力调动之间的连锁反应。",
        "location": "四渡赤水战术部署展区",
        "geofence": "中国共产党历史展览馆课程动线内",
        "type": "核心角色",
        "collectionItem": "行动层",
        "collectionItemImage": "lessons/lesson_zhuhun_002/assets/tokens/layer-action.png",
        "tasks": [
          {
            "id": "task-1",
            "roleStageId": "task-1",
            "name": "排行动",
            "phase": "Phase 2 展陈采证",
            "modules": "A01(拍照采集), A02(排序答题)",
            "tools": [
              {
                "id": "photo",
                "module": "A01",
                "name": "拍照采集",
                "icon": "camera",
                "output": "files",
                "config": {
                  "minCount": 1,
                  "maxCount": 6,
                  "accept": "image/*",
                  "recognition": "course-evidence"
                }
              },
              {
                "id": "quiz",
                "module": "A02",
                "name": "答题评测",
                "icon": "list-checks",
                "output": "answers",
                "config": {
                  "type": "ordering",
                  "question": "",
                  "options": []
                }
              }
            ],
            "requirement": "寻找四渡赤水战术部署展项，拍摄至少1处允许拍摄的展项说明；提取4张行动卡，按时间顺序排列，并给每张卡标注地点、可见信号和材料来源",
            "guidanceSteps": [
              "拍摄一张战术部署展项全景和一张包含日期、先后词或图例的局部照片",
              "根据现场材料排列四张行动逻辑卡，并为每一处相邻关系指出一条日期、先后词、地点或图例依据",
              "为四张行动逻辑卡分别填写现场线索，并标明照片编号或展项标题"
            ],
            "steps": [
              {
                "id": "feint-capture-deployment",
                "title": "采集部署展项",
                "objective": "获得可以支持行动顺序判断的现场展项来源",
                "studentAction": "拍摄一张战术部署展项全景和一张包含日期、先后词或图例的局部照片",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "至少2张照片；全景能够确认展项，局部至少呈现日期、先后词、地点或图例中的一项；不得拍摄未允许区域",
                "location": {
                  "mode": "inherit",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(拍照)",
                "next": "step:feint-order-actions",
                "tools": [
                  {
                    "id": "photo",
                    "module": "A01",
                    "name": "拍照采集",
                    "icon": "camera",
                    "output": "files",
                    "config": {
                      "minCount": 2,
                      "maxCount": 4,
                      "accept": "image/*",
                      "recognition": "deployment-sequence-source",
                      "prompt": "先拍展项全景，再拍能够支持先后顺序的日期、文字或图例局部。"
                    }
                  }
                ]
              },
              {
                "id": "feint-order-actions",
                "title": "排列行动逻辑",
                "objective": "在不提前打开完整史实路线的前提下建立行动影响的先后链",
                "studentAction": "根据现场材料排列四张行动逻辑卡，并为每一处相邻关系指出一条日期、先后词、地点或图例依据",
                "completionMode": "tool_result",
                "evidenceRequirement": "四张卡形成一条可解释的因果顺序；排序依据来自任务照片或展项先后词，不补写尚未解锁的渡口和[待学生探索]",
                "location": {
                  "mode": "inherit",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A02(排序答题)",
                "next": "step:feint-source-action-cards",
                "tools": [
                  {
                    "id": "quiz",
                    "module": "A02",
                    "name": "答题评测",
                    "icon": "list-checks",
                    "output": "answers",
                    "config": {
                      "type": "ordering",
                      "question": "根据现场材料，排列一条行动产生战略窗口的基本逻辑。",
                      "options": [
                        "敌方根据可见信号调整部署",
                        "原计划遇到新的现实约束",
                        "我方获得重新选择方向的窗口",
                        "我方采取可被观察的阶段行动"
                      ]
                    }
                  }
                ]
              },
              {
                "id": "feint-source-action-cards",
                "title": "补齐行动卡依据",
                "objective": "让行动链中的每一环都带有地点、可见信号或材料来源",
                "studentAction": "为四张行动逻辑卡分别填写现场线索，并标明照片编号或展项标题",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "四张卡均有来源；至少两张卡写出地点或可见信号；无法确认的行动细节明确标“待核”。",
                "location": {
                  "mode": "inherit",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(文字表单)",
                "next": "role-stage:task-2",
                "tools": [
                  {
                    "id": "text",
                    "module": "A01",
                    "name": "文字表单",
                    "icon": "notebook-pen",
                    "output": "fields",
                    "config": {
                      "fields": [
                        {
                          "id": "constraint-source",
                          "label": "现实约束卡｜现场线索与来源",
                          "type": "long_text",
                          "required": true
                        },
                        {
                          "id": "action-source",
                          "label": "可见行动卡｜地点或信号与来源",
                          "type": "long_text",
                          "required": true
                        },
                        {
                          "id": "reaction-source",
                          "label": "敌方反应卡｜材料依据或待核说明",
                          "type": "long_text",
                          "required": true
                        },
                        {
                          "id": "window-source",
                          "label": "新窗口卡｜材料依据或待核说明",
                          "type": "long_text",
                          "required": true
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "至少1张展项来源照片 + 4张行动卡 + 顺序、地点和来源完整",
            "passCondition": "至少1张展项来源照片 + 4张行动卡 + 顺序、地点和来源完整",
            "goals": "K3(四次渡河), S3(史料实证), S6(因果表达)",
            "toolType": "capture",
            "image": "lessons/lesson_zhuhun_002/assets/tasks/feint-route.svg",
            "location": {
              "mode": "point",
              "legacyMode": "inherit_role",
              "name": "四渡赤水战术部署展区",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "中国共产党历史展览馆课程动线内",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-2",
            "roleStageId": "task-2",
            "name": "辨虚实",
            "phase": "Phase 2 展陈采证",
            "modules": "A01(画板标注), A02(表单)",
            "tools": [
              {
                "id": "sketch",
                "module": "A01",
                "name": "画板标注",
                "icon": "pen-tool",
                "output": "image",
                "config": {
                  "width": 720,
                  "height": 420,
                  "brushColors": [
                    "#8d211f",
                    "#245c4f",
                    "#1f2937"
                  ],
                  "backgroundImage": ""
                }
              },
              {
                "id": "quiz",
                "module": "A02",
                "name": "答题评测",
                "icon": "list-checks",
                "output": "answers",
                "config": {
                  "type": "open_response",
                  "question": "",
                  "options": []
                }
              }
            ],
            "requirement": "选取相邻两次行动，分别标注“敌方能看到什么、敌方可能怎么判断、我方真正需要什么”；至少提出1种其他解释",
            "guidanceSteps": [
              "把四张关系卡分别放入“看见什么、可能怎么判断、我方需要什么、其他解释”四栏",
              "根据同一行动信号，分别写出敌方可能相信的解释、另一种解释和两种解释各自需要的证据",
              "选择一组能够支持“示形可能产生作用”的最低条件"
            ],
            "steps": [
              {
                "id": "feint-build-signal-chain",
                "title": "搭建信号链",
                "objective": "区分可见信号、敌方判断、我方需要和替代解释",
                "studentAction": "把四张关系卡分别放入“看见什么、可能怎么判断、我方需要什么、其他解释”四栏",
                "completionMode": "tool_result",
                "evidenceRequirement": "四张卡全部完成分类；“敌方判断”保持可能性表述，“其他解释”不得与原判断完全相同",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A03(分类搭建)",
                "next": "step:feint-add-alternative",
                "tools": [
                  {
                    "id": "builder",
                    "module": "A03",
                    "name": "拼合搭建",
                    "icon": "blocks",
                    "output": "layout",
                    "config": {
                      "mode": "flow",
                      "items": [
                        {
                          "id": "visible",
                          "label": "任务1·可被观察的行动信号"
                        },
                        {
                          "id": "enemy-judgment",
                          "label": "敌方可能形成的判断"
                        },
                        {
                          "id": "our-need",
                          "label": "我方希望获得的时间或空间窗口"
                        },
                        {
                          "id": "alternative",
                          "label": "同一信号的另一种解释"
                        }
                      ],
                      "zones": [
                        {
                          "id": "seen",
                          "label": "敌方看见什么"
                        },
                        {
                          "id": "judge",
                          "label": "敌方可能怎么判断"
                        },
                        {
                          "id": "need",
                          "label": "我方真正需要什么"
                        },
                        {
                          "id": "other",
                          "label": "替代解释"
                        }
                      ],
                      "connections": [],
                      "prompt": "把同一组行动线索拆成四栏，先区分信号和解释，再讨论真正需要。",
                      "bindings": {
                        "visible": {
                          "taskId": "task-1",
                          "stepId": "feint-source-action-cards",
                          "toolId": "text",
                          "fieldId": "action-source",
                          "prefix": "行动信号："
                        }
                      }
                    }
                  }
                ]
              },
              {
                "id": "feint-add-alternative",
                "title": "写出替代解释",
                "objective": "避免把敌方反应固定为单一路径",
                "studentAction": "根据同一行动信号，分别写出敌方可能相信的解释、另一种解释和两种解释各自需要的证据",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "两种解释不同；每种解释至少附1条当前证据或待核条件；使用“可能、如果”表述",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(文字表单)",
                "next": "step:feint-check-evidence",
                "tools": [
                  {
                    "id": "text",
                    "module": "A01",
                    "name": "文字表单",
                    "icon": "notebook-pen",
                    "output": "fields",
                    "config": {
                      "fields": [
                        {
                          "id": "interpretation-a",
                          "label": "解释A：敌方可能相信什么",
                          "type": "long_text",
                          "required": true
                        },
                        {
                          "id": "evidence-a",
                          "label": "解释A：依据或成立条件",
                          "type": "long_text",
                          "required": true
                        },
                        {
                          "id": "interpretation-b",
                          "label": "解释B：另一种可能",
                          "type": "long_text",
                          "required": true
                        },
                        {
                          "id": "evidence-b",
                          "label": "解释B：依据或待核条件",
                          "type": "long_text",
                          "required": true
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "id": "feint-check-evidence",
                "title": "检查虚实判断依据",
                "objective": "确认虚实判断需要信号、观察条件和敌方既有判断共同支持",
                "studentAction": "选择一组能够支持“示形可能产生作用”的最低条件",
                "completionMode": "tool_result",
                "evidenceRequirement": "正确识别信号可见、符合敌方已有判断、调动留下窗口三项条件",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A02(多选答题)",
                "next": "role-stage:task-3",
                "tools": [
                  {
                    "id": "quiz",
                    "module": "A02",
                    "name": "答题评测",
                    "icon": "list-checks",
                    "output": "answers",
                    "config": {
                      "type": "multiple_choice",
                      "question": "示形可能影响敌方判断，至少需要检查哪些条件？",
                      "options": [
                        "信号能够被敌方观察",
                        "信号符合敌方已有判断",
                        "敌方调动可能留下我方可利用窗口",
                        "行动最后成功，所以此前条件无需核验"
                      ]
                    }
                  }
                ]
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "完成三栏虚实图 + 1种替代解释 + 至少2条证据引用",
            "passCondition": "完成三栏虚实图 + 1种替代解释 + 至少2条证据引用",
            "goals": "K4(情报与信息差), K6(虚实行动链), S4(信息不对称分析), C2(战略思维)",
            "toolType": "sketch",
            "image": "lessons/lesson_zhuhun_002/assets/tasks/feint-route.svg",
            "location": {
              "mode": "point",
              "legacyMode": "inherit_role",
              "name": "四渡赤水战术部署展区",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "中国共产党历史展览馆课程动线内",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-3",
            "roleStageId": "task-3",
            "name": "演反应",
            "phase": "Phase 2 展陈采证",
            "modules": "A04(沙盘推演), A05(讨论记录)",
            "tools": [
              {
                "id": "simulation",
                "module": "A04",
                "name": "沙盘推演",
                "icon": "waves",
                "output": "rounds",
                "config": {
                  "rounds": 1,
                  "resources": {},
                  "choices": [],
                  "metrics": []
                }
              },
              {
                "id": "team",
                "module": "A05",
                "name": "团队协作",
                "icon": "users",
                "output": "teamLog",
                "config": {
                  "mode": "discussion",
                  "prompt": "",
                  "minimumEntries": 1,
                  "roles": []
                }
              }
            ],
            "requirement": "在路径推演器中提交“我方行动—敌方第一反应—我方后续窗口—失败风险”行动链，并运行至少2种敌方反应",
            "guidanceSteps": [
              "运行两轮推演，分别选择“敌方相信信号”和“敌方识破或不按预期行动”",
              "与同伴至少记录两条讨论结果：一条备用方案，一条停止或调整示形的触发条件",
              "填写“我方行动—敌方第一反应—我方后续窗口—失败风险”，再写出一项使行动链失效的新信息"
            ],
            "steps": [
              {
                "id": "feint-run-reactions",
                "title": "运行敌方反应",
                "objective": "通过不同敌方反应检验行动链的稳健性",
                "studentAction": "运行两轮推演，分别选择“敌方相信信号”和“敌方识破或不按预期行动”",
                "completionMode": "tool_result",
                "evidenceRequirement": "完成2轮不同分支；每轮保留我方窗口和暴露风险反馈，模拟记录不得标为史实",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A04(沙盘推演)",
                "next": "step:feint-discuss-fallback",
                "tools": [
                  {
                    "id": "simulation",
                    "module": "A04",
                    "name": "沙盘推演",
                    "icon": "waves",
                    "output": "rounds",
                    "config": {
                      "rounds": 2,
                      "resources": {
                        "行动卡": 4,
                        "备用出口": 1
                      },
                      "choices": [
                        {
                          "id": "believe",
                          "label": "敌方相信信号并调动兵力",
                          "publicFeedback": "可能出现行动窗口；仍需判断窗口长度和信号成本。",
                          "effects": {
                            "window": 2,
                            "exposure": 1
                          }
                        },
                        {
                          "id": "detect",
                          "label": "敌方识破信号并保留部署",
                          "publicFeedback": "原窗口缩小；需要备用方案、退出条件或新情报。",
                          "effects": {
                            "window": -2,
                            "exposure": 2
                          }
                        },
                        {
                          "id": "delay",
                          "label": "敌方迟疑并延后反应",
                          "publicFeedback": "局势仍不确定；时间消耗可能同时影响双方。",
                          "effects": {
                            "window": 0,
                            "time": -1
                          }
                        }
                      ],
                      "metrics": [
                        {
                          "id": "window",
                          "label": "行动窗口",
                          "initial": 0,
                          "initialLabel": "未形成"
                        },
                        {
                          "id": "exposure",
                          "label": "暴露风险",
                          "initial": 0,
                          "initialLabel": "待判断"
                        },
                        {
                          "id": "time",
                          "label": "时间变化",
                          "initial": 0,
                          "initialLabel": "待判断"
                        }
                      ],
                      "allowRepeat": false,
                      "prompt": "运行两个不同反应分支，检查行动链在不利条件下是否仍有出口。",
                      "roundPrompts": [
                        "第1轮：选择敌方对行动信号的一种反应。",
                        "第2轮：改选另一种反应，检查备用方案和退出条件。"
                      ]
                    }
                  }
                ]
              },
              {
                "id": "feint-discuss-fallback",
                "title": "讨论备用方案",
                "objective": "形成示形失效时的退出条件和备用行动原则",
                "studentAction": "与同伴至少记录两条讨论结果：一条备用方案，一条停止或调整示形的触发条件",
                "completionMode": "tool_result",
                "evidenceRequirement": "至少2条组内记录；分别包含备用方案与退出条件，并说明依据来自哪一轮推演",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A05(团队讨论)",
                "next": "step:feint-record-robustness",
                "tools": [
                  {
                    "id": "team",
                    "module": "A05",
                    "name": "团队协作",
                    "icon": "users",
                    "output": "teamLog",
                    "config": {
                      "mode": "discussion",
                      "prompt": "根据两轮运行记录，分别写下备用方案和退出条件；保留不同意见，不讨论现实冲突操作。",
                      "minimumEntries": 2,
                      "roles": [
                        "行动链说明人",
                        "风险提醒人",
                        "记录人"
                      ],
                      "recordTypes": [
                        "备用方案",
                        "退出条件",
                        "不同意见"
                      ],
                      "requiredRecordTypes": [
                        "备用方案",
                        "退出条件"
                      ]
                    }
                  }
                ]
              },
              {
                "id": "feint-record-robustness",
                "title": "归纳行动链边界",
                "objective": "形成带条件的四环行动链和风险结论",
                "studentAction": "填写“我方行动—敌方第一反应—我方后续窗口—失败风险”，再写出一项使行动链失效的新信息",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "四环完整；引用两轮模拟记录；至少包含1项失败风险和1项失效信息；不用必然性语言",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(文字表单)",
                "next": "role-stage:complete",
                "tools": [
                  {
                    "id": "text",
                    "module": "A01",
                    "name": "文字表单",
                    "icon": "notebook-pen",
                    "output": "fields",
                    "config": {
                      "fields": [
                        {
                          "id": "our-action",
                          "label": "我方行动信号",
                          "type": "long_text",
                          "required": true
                        },
                        {
                          "id": "enemy-reaction",
                          "label": "敌方可能的第一反应",
                          "type": "long_text",
                          "required": true
                        },
                        {
                          "id": "window",
                          "label": "我方可能获得的后续窗口",
                          "type": "long_text",
                          "required": true
                        },
                        {
                          "id": "failure-risk",
                          "label": "失败风险",
                          "type": "long_text",
                          "required": true
                        },
                        {
                          "id": "invalidating-info",
                          "label": "使行动链失效的新信息",
                          "type": "short_text",
                          "required": true
                        }
                      ]
                    }
                  }
                ]
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "1条四环行动链 + 2种敌方反应分支 + 1项失败风险 + 保留运行记录",
            "passCondition": "1条四环行动链 + 2种敌方反应分支 + 1项失败风险 + 保留运行记录",
            "goals": "K6(虚实行动链), S4(信息不对称分析), S5(决策矩阵), C2(战略思维)",
            "toolType": "simulation",
            "image": "lessons/lesson_zhuhun_002/assets/tasks/feint-route.svg",
            "location": {
              "mode": "point",
              "legacyMode": "inherit_role",
              "name": "四渡赤水战术部署展区",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "中国共产党历史展览馆课程动线内",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          }
        ],
        "cardImage": "lessons/lesson_zhuhun_002/assets/roles/role-card-feint-strategist.png",
        "badgeImage": "lessons/lesson_zhuhun_002/assets/roles/badge-feint-strategist.png"
      },
      {
        "id": "signaler",
        "order": 5,
        "name": "通讯兵",
        "question": "只收到局部命令、看不到全局时，一个人依据什么确认信息并可靠行动？",
        "selectionDescription": "负责从基层视角检查命令如何传递、确认和执行，记录全局战略在个人信息中留下的有限线索。",
        "location": "亲历者回忆与士兵生活展区",
        "geofence": "中国共产党历史展览馆课程动线内",
        "type": "核心角色",
        "collectionItem": "视角层",
        "collectionItemImage": "lessons/lesson_zhuhun_002/assets/tokens/layer-perspective.png",
        "tasks": [
          {
            "id": "task-1",
            "roleStageId": "task-1",
            "name": "收残讯",
            "phase": "Phase 2 展陈采证",
            "modules": "A01(拍照采集/语音), A07(扫码)",
            "tools": [
              {
                "id": "photo",
                "module": "A01",
                "name": "拍照采集",
                "icon": "camera",
                "output": "files",
                "config": {
                  "minCount": 1,
                  "maxCount": 6,
                  "accept": "image/*",
                  "recognition": "course-evidence"
                }
              },
              {
                "id": "audio",
                "module": "A01",
                "name": "语音记录",
                "icon": "mic",
                "output": "recording",
                "config": {
                  "minSeconds": 3,
                  "maxSeconds": 90,
                  "language": "zh-CN",
                  "transcribe": true
                }
              },
              {
                "id": "scanner",
                "module": "A07",
                "name": "扫码识别",
                "icon": "scan-line",
                "output": "scanResult",
                "config": {
                  "mode": "qr",
                  "allowManualEntry": true,
                  "prompt": ""
                }
              }
            ],
            "requirement": "寻找通信工具、口述回忆或士兵生活相关展项，拍摄至少2处允许拍摄的证据；记录一名基层行动者可能收到的信息和仍然不知道的信息",
            "guidanceSteps": [
              "拍摄一张通信工具、口述回忆或士兵生活展项全景，再拍一张对应说明牌局部",
              "把6张信息卡放入“基层可以确认、需要再次确认、当时无法知道”三个区域",
              "选择一组符合史料边界的基层信息记录"
            ],
            "steps": [
              {
                "id": "signal-capture-evidence",
                "title": "采集基层通信证据",
                "objective": "获得能够说明基层信息如何传递的物件或回忆材料证据",
                "studentAction": "拍摄一张通信工具、口述回忆或士兵生活展项全景，再拍一张对应说明牌局部",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "至少2张照片；全景能够确认展项类型，局部保留标题、用途、回忆来源或时间中的至少一项；不识别其他参观者身份",
                "location": {
                  "mode": "inherit",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(拍照)",
                "next": "step:signal-sort-known-unknown",
                "tools": [
                  {
                    "id": "photo",
                    "module": "A01",
                    "name": "拍照采集",
                    "icon": "camera",
                    "output": "files",
                    "config": {
                      "minCount": 2,
                      "maxCount": 4,
                      "accept": "image/*",
                      "recognition": "grassroots-communication-source",
                      "prompt": "先拍展项全景，再拍说明文字；照片用于判断基层能收到什么信息和还不知道什么。"
                    }
                  }
                ]
              },
              {
                "id": "signal-sort-known-unknown",
                "title": "区分已知与未知",
                "objective": "从基层视角区分执行当前行动所需信息和无法获得的全局信息",
                "studentAction": "把6张信息卡放入“基层可以确认、需要再次确认、当时无法知道”三个区域",
                "completionMode": "tool_result",
                "evidenceRequirement": "6张卡全部分类；“基层可以确认”和“当时无法知道”各至少2张；不能用全局战图替基层补信息",
                "location": {
                  "mode": "inherit",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A03(分类搭建)",
                "next": "step:signal-mark-evidence-boundary",
                "tools": [
                  {
                    "id": "builder",
                    "module": "A03",
                    "name": "拼合搭建",
                    "icon": "blocks",
                    "output": "layout",
                    "config": {
                      "mode": "evidence-wall",
                      "items": [
                        {
                          "id": "current-action",
                          "label": "当前需要完成的动作"
                        },
                        {
                          "id": "time-place",
                          "label": "命令中明确的时间或地点"
                        },
                        {
                          "id": "confirm-person",
                          "label": "可以确认信息的对象"
                        },
                        {
                          "id": "global-purpose",
                          "label": "行动的完整战略目的"
                        },
                        {
                          "id": "whole-route",
                          "label": "后续全部路线"
                        },
                        {
                          "id": "enemy-full-plan",
                          "label": "敌方完整部署与真实意图"
                        }
                      ],
                      "zones": [
                        {
                          "id": "known",
                          "label": "基层可以确认"
                        },
                        {
                          "id": "needs-confirmation",
                          "label": "需要再次确认"
                        },
                        {
                          "id": "unknown",
                          "label": "当时无法知道"
                        }
                      ],
                      "connections": [],
                      "prompt": "站在基层行动者当时的位置分类：哪些能直接确认，哪些要向上级核对，哪些属于全局信息。"
                    }
                  }
                ]
              },
              {
                "id": "signal-mark-evidence-boundary",
                "title": "检查叙述边界",
                "objective": "用可追溯语言描述基层视角，同时保留推断和未知",
                "studentAction": "选择一组符合史料边界的基层信息记录",
                "completionMode": "tool_result",
                "evidenceRequirement": "正确选择同时区分材料明确说明、合理推测和无法确认的表达",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A02(单选答题)",
                "next": "role-stage:task-2",
                "tools": [
                  {
                    "id": "quiz",
                    "module": "A02",
                    "name": "答题评测",
                    "icon": "list-checks",
                    "output": "answers",
                    "config": {
                      "type": "single_choice",
                      "question": "根据一件通信工具展项，哪种记录最符合证据边界？",
                      "options": [
                        "这名士兵一定知道全局计划，也完全理解每次转向原因",
                        "展项说明这种工具用于传递信息；基层能收到什么需结合具体命令，其他内容暂时未知",
                        "请AI补写一段士兵当时说过的话，让记录更生动"
                      ]
                    }
                  }
                ]
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "至少2张有效照片 + 1条展项来源 + “已知/未知”各至少2项",
            "passCondition": "至少2张有效照片 + 1条展项来源 + “已知/未知”各至少2项",
            "goals": "K4(情报与信息差), S3(史料实证), C5(多视角同理)",
            "toolType": "capture",
            "image": "lessons/lesson_zhuhun_002/assets/tasks/limited-message.svg",
            "location": {
              "mode": "point",
              "legacyMode": "inherit_role",
              "name": "亲历者回忆与士兵生活展区",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "中国共产党历史展览馆课程动线内",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-2",
            "roleStageId": "task-2",
            "name": "译行动",
            "phase": "Phase 2 展陈采证",
            "modules": "A02(表单), A05(组内讨论)",
            "tools": [
              {
                "id": "quiz",
                "module": "A02",
                "name": "答题评测",
                "icon": "list-checks",
                "output": "answers",
                "config": {
                  "type": "open_response",
                  "question": "",
                  "options": []
                }
              },
              {
                "id": "team",
                "module": "A05",
                "name": "团队协作",
                "icon": "users",
                "output": "teamLog",
                "config": {
                  "mode": "discussion",
                  "prompt": "",
                  "minimumEntries": 1,
                  "roles": []
                }
              }
            ],
            "requirement": "读取一张经过裁剪的命令卡，填写“要做什么、何时何地、向谁确认、缺什么信息、何时呼叫上级”；与同伴复述并核对差异",
            "guidanceSteps": [
              "完整查看课程提供的裁剪命令卡，只记录卡片明确出现的内容",
              "填写要做什么、何时何地、向谁确认、缺什么信息和何时呼叫上级五项",
              "用20至45秒向同伴复述命令，必须包含动作、时间地点、确认对象和一项未知",
              "让同伴复述刚才听到的内容，并至少记录两条核对结果：一条一致信息和一条差异或待确认信息"
            ],
            "steps": [
              {
                "id": "signal-read-command",
                "title": "阅读裁剪命令",
                "objective": "体验基层行动者只能获得局部命令的信息条件",
                "studentAction": "完整查看课程提供的裁剪命令卡，只记录卡片明确出现的内容",
                "completionMode": "tool_result",
                "evidenceRequirement": "完成命令卡查看；不得使用全局战图补出卡片中没有的行动原因和后续路线",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A06(沉浸媒体)",
                "next": "step:signal-extract-command",
                "tools": [
                  {
                    "id": "media",
                    "module": "A06",
                    "name": "沉浸媒体",
                    "icon": "play",
                    "output": "playback",
                    "config": {
                      "type": "image",
                      "url": "lessons/lesson_zhuhun_002/assets/tasks/limited-message.svg",
                      "poster": "",
                      "title": "课程推演局部命令卡｜只使用卡片当前可见信息",
                      "requireCompletion": true,
                      "prompt": "先独立阅读，不向其他角色索取全局答案；下一步再拆出执行字段。"
                    }
                  }
                ]
              },
              {
                "id": "signal-extract-command",
                "title": "拆出执行字段",
                "objective": "从局部命令中提取能够执行、需要确认和必须上报的信息",
                "studentAction": "填写要做什么、何时何地、向谁确认、缺什么信息和何时呼叫上级五项",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "五项均完成；命令卡没有写明的字段标“缺失/需确认”；至少1项明确不能自行猜测",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(文字表单)",
                "next": "step:signal-retell-command",
                "tools": [
                  {
                    "id": "text",
                    "module": "A01",
                    "name": "文字表单",
                    "icon": "notebook-pen",
                    "output": "fields",
                    "config": {
                      "fields": [
                        {
                          "id": "action",
                          "label": "要做什么",
                          "type": "long_text",
                          "required": true,
                          "placeholder": "只转述命令卡明确动作"
                        },
                        {
                          "id": "when-where",
                          "label": "何时、何地",
                          "type": "short_text",
                          "required": true,
                          "placeholder": "缺失时写“需确认”"
                        },
                        {
                          "id": "confirm-with",
                          "label": "向谁确认",
                          "type": "short_text",
                          "required": true
                        },
                        {
                          "id": "missing",
                          "label": "缺什么信息，不能自行猜测",
                          "type": "long_text",
                          "required": true
                        },
                        {
                          "id": "escalate",
                          "label": "何时呼叫上级或老师",
                          "type": "long_text",
                          "required": true
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "id": "signal-retell-command",
                "title": "口头复述命令",
                "objective": "检验局部命令经过一次口头传递后是否仍保留关键执行信息",
                "studentAction": "用20至45秒向同伴复述命令，必须包含动作、时间地点、确认对象和一项未知",
                "completionMode": "tool_result",
                "evidenceRequirement": "录音不少于20秒、不超过45秒；包含四类信息；不得添加命令卡中没有的历史人物原话",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(语音记录)",
                "next": "step:signal-compare-retelling",
                "tools": [
                  {
                    "id": "audio",
                    "module": "A01",
                    "name": "语音记录",
                    "icon": "mic",
                    "output": "recording",
                    "config": {
                      "minSeconds": 20,
                      "maxSeconds": 45,
                      "language": "zh-CN",
                      "transcribe": true,
                      "prompt": "像向同伴传达任务一样复述：动作、时间地点、确认对象，以及一项仍未知的信息。"
                    }
                  }
                ]
              },
              {
                "id": "signal-compare-retelling",
                "title": "核对传递差异",
                "objective": "发现命令在复述中可能出现的遗漏、改变和需要再次确认之处",
                "studentAction": "让同伴复述刚才听到的内容，并至少记录两条核对结果：一条一致信息和一条差异或待确认信息",
                "completionMode": "tool_result",
                "evidenceRequirement": "至少2条组内记录；包含1条一致项和1条差异或待确认项；关键地点、时间或对象有差异时标记“暂停并确认”",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A05(团队核对)",
                "next": "role-stage:task-3",
                "tools": [
                  {
                    "id": "team",
                    "module": "A05",
                    "name": "团队协作",
                    "icon": "users",
                    "output": "teamLog",
                    "config": {
                      "mode": "discussion",
                      "prompt": "记录同伴复述后的核对结果：先写一条一致信息，再写一条遗漏、改变或待确认信息。",
                      "minimumEntries": 2,
                      "roles": [
                        "原始复述者",
                        "同伴复述者",
                        "核对记录者"
                      ],
                      "recordTypes": [
                        "一致信息",
                        "遗漏或改变",
                        "待确认信息"
                      ],
                      "requiredRecordTypes": [
                        "一致信息",
                        "遗漏或改变"
                      ]
                    }
                  }
                ]
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "五项信息完整 + 完成1次同伴复述核对 + 标记至少1项不能自行猜测的内容",
            "passCondition": "五项信息完整 + 完成1次同伴复述核对 + 标记至少1项不能自行猜测的内容",
            "goals": "S4(信息不对称分析), C4(民主与担当), C5(多视角同理)",
            "toolType": "form",
            "image": "lessons/lesson_zhuhun_002/assets/tasks/limited-message.svg",
            "location": {
              "mode": "point",
              "legacyMode": "inherit_role",
              "name": "亲历者回忆与士兵生活展区",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "中国共产党历史展览馆课程动线内",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          },
          {
            "id": "task-3",
            "roleStageId": "task-3",
            "name": "写边界",
            "phase": "Phase 2 展陈采证",
            "modules": "A01(文字/语音), A02(证据标注)",
            "tools": [
              {
                "id": "audio",
                "module": "A01",
                "name": "语音记录",
                "icon": "mic",
                "output": "recording",
                "config": {
                  "minSeconds": 3,
                  "maxSeconds": 90,
                  "language": "zh-CN",
                  "transcribe": true
                }
              },
              {
                "id": "text",
                "module": "A01",
                "name": "文字表单",
                "icon": "notebook-pen",
                "output": "fields",
                "config": {
                  "fields": [
                    {
                      "id": "observation",
                      "label": "观察记录",
                      "type": "long_text",
                      "required": true
                    }
                  ]
                }
              },
              {
                "id": "quiz",
                "module": "A02",
                "name": "答题评测",
                "icon": "list-checks",
                "output": "answers",
                "config": {
                  "type": "single_choice",
                  "question": "",
                  "options": []
                }
              }
            ],
            "requirement": "以基层视角写一段80—150字行动记录，只写角色当时可能知道、看到或被告知的内容；每句话标记史料依据、合理推断或未知",
            "guidanceSteps": [
              "写一段80至150字的行动记录，只写角色当时可能知道、看到或被告知的内容",
              "将6张句子序号卡放入三种来源区域；不足6句时把多余卡放入“未使用”",
              "选择初稿提交前必须执行的全部检查项"
            ],
            "steps": [
              {
                "id": "signal-write-draft",
                "title": "完成基层记录初稿",
                "objective": "从基层有限视角形成有明确字数和证据边界的行动记录",
                "studentAction": "写一段80至150字的行动记录，只写角色当时可能知道、看到或被告知的内容",
                "completionMode": "ai_evaluation",
                "evidenceRequirement": "80至150字；至少引用任务1展项证据和任务2命令卡各1条；不生成真实历史人物直接引语、姓名或心理活动",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A01(文字表单)",
                "next": "step:signal-label-sentences",
                "tools": [
                  {
                    "id": "text",
                    "module": "A01",
                    "name": "文字表单",
                    "icon": "notebook-pen",
                    "output": "fields",
                    "config": {
                      "fields": [
                        {
                          "id": "draft",
                          "label": "基层行动记录（80—150字）",
                          "type": "long_text",
                          "required": true,
                          "minLength": 80,
                          "maxLength": 150,
                          "placeholder": "可以写“命令只说明……”“我无法确认……”；不要冒充真实人物口述。"
                        },
                        {
                          "id": "source-one",
                          "label": "证据1：展项或照片编号",
                          "type": "short_text",
                          "required": true
                        },
                        {
                          "id": "source-two",
                          "label": "证据2：局部命令卡字段",
                          "type": "short_text",
                          "required": true
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "id": "signal-label-sentences",
                "title": "逐句标记来源",
                "objective": "把初稿中的句子区分为史料依据、合理推断和未知",
                "studentAction": "将6张句子序号卡放入三种来源区域；不足6句时把多余卡放入“未使用”",
                "completionMode": "tool_result",
                "evidenceRequirement": "6张卡全部放置；史料依据、合理推断和未知三个区域均至少使用一次；未使用卡明确归档",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A03(分类搭建)",
                "next": "step:signal-check-boundary",
                "tools": [
                  {
                    "id": "builder",
                    "module": "A03",
                    "name": "拼合搭建",
                    "icon": "blocks",
                    "output": "layout",
                    "config": {
                      "mode": "evidence-wall",
                      "items": [
                        {
                          "id": "sentence-1",
                          "label": "第1句"
                        },
                        {
                          "id": "sentence-2",
                          "label": "第2句"
                        },
                        {
                          "id": "sentence-3",
                          "label": "第3句"
                        },
                        {
                          "id": "sentence-4",
                          "label": "第4句"
                        },
                        {
                          "id": "sentence-5",
                          "label": "第5句"
                        },
                        {
                          "id": "sentence-6",
                          "label": "第6句或未使用"
                        }
                      ],
                      "zones": [
                        {
                          "id": "evidence",
                          "label": "史料依据"
                        },
                        {
                          "id": "inference",
                          "label": "合理推断"
                        },
                        {
                          "id": "unknown",
                          "label": "未知"
                        },
                        {
                          "id": "unused",
                          "label": "未使用"
                        }
                      ],
                      "connections": [],
                      "prompt": "按初稿句子顺序分类；每句话只选一个当前最合适的来源标签。",
                      "bindings": {
                        "sentence-1": {
                          "taskId": "task-3",
                          "stepId": "signal-write-draft",
                          "toolId": "text",
                          "fieldId": "draft",
                          "split": "sentences",
                          "index": 0,
                          "prefix": "第1句："
                        },
                        "sentence-2": {
                          "taskId": "task-3",
                          "stepId": "signal-write-draft",
                          "toolId": "text",
                          "fieldId": "draft",
                          "split": "sentences",
                          "index": 1,
                          "prefix": "第2句："
                        },
                        "sentence-3": {
                          "taskId": "task-3",
                          "stepId": "signal-write-draft",
                          "toolId": "text",
                          "fieldId": "draft",
                          "split": "sentences",
                          "index": 2,
                          "prefix": "第3句："
                        },
                        "sentence-4": {
                          "taskId": "task-3",
                          "stepId": "signal-write-draft",
                          "toolId": "text",
                          "fieldId": "draft",
                          "split": "sentences",
                          "index": 3,
                          "prefix": "第4句："
                        },
                        "sentence-5": {
                          "taskId": "task-3",
                          "stepId": "signal-write-draft",
                          "toolId": "text",
                          "fieldId": "draft",
                          "split": "sentences",
                          "index": 4,
                          "prefix": "第5句："
                        },
                        "sentence-6": {
                          "taskId": "task-3",
                          "stepId": "signal-write-draft",
                          "toolId": "text",
                          "fieldId": "draft",
                          "split": "sentences",
                          "index": 5,
                          "prefix": "第6句："
                        }
                      },
                      "zoneMinimums": {
                        "evidence": 1,
                        "inference": 1,
                        "unknown": 1
                      }
                    }
                  }
                ]
              },
              {
                "id": "signal-check-boundary",
                "title": "完成边界检查",
                "objective": "在提交前排除虚构直接引语和越过基层视角的信息",
                "studentAction": "选择初稿提交前必须执行的全部检查项",
                "completionMode": "tool_result",
                "evidenceRequirement": "正确选择来源标记、信息范围、直接引语和未知保留四项检查",
                "location": {
                  "mode": "none",
                  "name": "",
                  "coordinates": null,
                  "radiusMeters": null,
                  "minDwellSeconds": 0,
                  "verification": "none"
                },
                "modules": "A02(多选答题)",
                "next": "role-stage:complete",
                "tools": [
                  {
                    "id": "quiz",
                    "module": "A02",
                    "name": "答题评测",
                    "icon": "list-checks",
                    "output": "answers",
                    "config": {
                      "type": "multiple_choice",
                      "question": "基层行动记录提交前，需要完成哪些检查？",
                      "options": [
                        "每句话标明史料依据、合理推断或未知",
                        "删除角色当时不可能知道的全局路线",
                        "没有可靠来源的历史人物直接引语改为转述或删除",
                        "允许保留“我无法确认”的信息边界",
                        "加入更多战场细节，让文本更像真实回忆"
                      ]
                    }
                  }
                ]
              }
            ],
            "completionMode": "tool_result",
            "evidenceRequirement": "达到字数 + 至少引用2条证据 + 三类边界标记完整 + 无虚构直接引语",
            "passCondition": "达到字数 + 至少引用2条证据 + 三类边界标记完整 + 无虚构直接引语",
            "goals": "S3(史料实证), S6(因果表达), C3(证据边界), C5(多视角同理)",
            "toolType": "audio",
            "image": "lessons/lesson_zhuhun_002/assets/tasks/limited-message.svg",
            "location": {
              "mode": "point",
              "legacyMode": "inherit_role",
              "name": "亲历者回忆与士兵生活展区",
              "coordinates": null,
              "radiusMeters": null,
              "geofence": "中国共产党历史展览馆课程动线内",
              "verification": "manual",
              "minDwellSeconds": 0,
              "inherited": true
            },
            "timing": {
              "suggestedSeconds": 900,
              "idleNudgeSeconds": 180,
              "nudgeCooldownSeconds": 120
            },
            "nudgePolicy": {
              "maxNudges": 2
            },
            "advanceMode": "auto_after_validation"
          }
        ],
        "cardImage": "lessons/lesson_zhuhun_002/assets/roles/role-card-signaler.png",
        "badgeImage": "lessons/lesson_zhuhun_002/assets/roles/badge-signaler.png"
      }
    ],
    "timeBank": {
      "enabled": true,
      "initialBalance": 0,
      "currencyUnit": "分钟",
      "earnRules": {
        "maxTotal": 15,
        "maxPerTask": 3,
        "tasksVisibleAtOnce": 3
      },
      "giftRules": {
        "allowGiftToSelf": false,
        "maxPerAction": 5,
        "minAmount": 1,
        "target": "same_group_only"
      },
      "tasks": [
        {
          "id": "tb-01",
          "type": "quiz",
          "question": "遵义会议召开于哪一年？",
          "options": [
            "1934",
            "1935",
            "1936"
          ],
          "answerType": "",
          "hint": "",
          "reward": 1,
          "unlockAfter": "phase2-start",
          "minLength": 0,
          "requiresText": false
        },
        {
          "id": "tb-02",
          "type": "quiz",
          "question": "四渡赤水主要发生在哪三省交界区域？",
          "options": [
            "川黔滇",
            "湘鄂赣",
            "陕甘宁"
          ],
          "answerType": "",
          "hint": "",
          "reward": 2,
          "unlockAfter": "phase2-start",
          "minLength": 0,
          "requiresText": false
        },
        {
          "id": "tb-03",
          "type": "quiz",
          "question": "哪一种表达更符合课程的数据边界？",
          "options": [
            "红军始终正好3万人",
            "红军约3万人且兵力随时点变化",
            "红军人数不重要"
          ],
          "answerType": "",
          "hint": "",
          "reward": 2,
          "unlockAfter": "phase2-start",
          "minLength": 0,
          "requiresText": false
        },
        {
          "id": "tb-04",
          "type": "quiz",
          "question": "分析历史决策时，应该优先使用哪类信息？",
          "options": [
            "当时可获得的证据",
            "已知的最终结果",
            "网络上最短的答案"
          ],
          "answerType": "",
          "hint": "",
          "reward": 2,
          "unlockAfter": "phase2-start",
          "minLength": 0,
          "requiresText": false
        },
        {
          "id": "tb-05",
          "type": "photo_checkpoint",
          "question": "找到一处长征路线地图或地形模型，并拍摄不含其他参观者正脸的局部照片",
          "options": [],
          "answerType": "",
          "hint": "遵守展馆当日拍摄规定，不使用闪光灯",
          "reward": 3,
          "unlockAfter": "phase2-start",
          "minLength": 0,
          "requiresText": false
        },
        {
          "id": "tb-06",
          "type": "photo_checkpoint",
          "question": "找到一项带有明确日期的长征展项，记录日期和展项标题",
          "options": [],
          "answerType": "",
          "hint": "照片之外再写一句文字，说明日期对应的事件",
          "reward": 2,
          "unlockAfter": "phase2-start",
          "minLength": 0,
          "requiresText": true
        },
        {
          "id": "tb-07",
          "type": "photo_checkpoint",
          "question": "找到一项通信、情报或电文相关展项，拍摄展项说明",
          "options": [],
          "answerType": "",
          "hint": "只拍允许拍摄的公开展项",
          "reward": 2,
          "unlockAfter": "phase2-start",
          "minLength": 0,
          "requiresText": false
        },
        {
          "id": "tb-08",
          "type": "location_checkin",
          "question": "到达中国共产党历史展览馆课程集合区域",
          "options": [],
          "answerType": "",
          "hint": "",
          "reward": 1,
          "unlockAfter": "phase2-start",
          "minLength": 0,
          "requiresText": false
        },
        {
          "id": "tb-09",
          "type": "quiz",
          "question": "写出一条你在展陈中看到的证据，并说明它属于史实、课程材料还是你的推断。",
          "options": [],
          "answerType": "open_ended",
          "hint": "",
          "reward": 3,
          "unlockAfter": "phase2-start",
          "minLength": 25,
          "requiresText": false
        },
        {
          "id": "tb-10",
          "type": "quiz",
          "question": "新证据出现后，你的小组改变过哪一个判断？为什么？",
          "options": [],
          "answerType": "open_ended",
          "hint": "",
          "reward": 3,
          "unlockAfter": "phase3-start",
          "minLength": 30,
          "requiresText": false
        }
      ]
    },
    "assets": {
      "cover": "lessons/lesson_zhuhun_002/assets/backgrounds/cover.png",
      "chat": "lessons/lesson_zhuhun_002/assets/backgrounds/chat-bg.png",
      "transition": "lessons/lesson_zhuhun_002/assets/backgrounds/phase-transition.png",
      "certificate": "lessons/lesson_zhuhun_002/assets/backgrounds/certificate-bg.png",
      "navigationMap": "lessons/lesson_zhuhun_002/assets/maps/museum-navigation.png",
      "importPlaceholder": "lessons/lesson_zhuhun_002/assets/videos/video-opening.jpg",
      "simulationPlaceholder": "lessons/lesson_zhuhun_002/assets/videos/video-strategy-table.jpg",
      "companionIdle": "/assets/video/xuxu-idle.webm",
      "companionTalk": "/assets/video/xuxu-talk.webm"
    }
  }
};
