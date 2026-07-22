# stu_report_demo

故宫研学「数龙官 · 学生报告」弧形屏 demo 静态页。

## 本地预览

直接用浏览器打开 `index.html`，或在目录下运行：

```bash
python3 -m http.server 3000
```

然后访问 http://localhost:3000

## 修改线上内容

1. 编辑 `index.html`（或替换 `public/` 中的图片）
2. 运行 `node build-standalone.mjs` 更新单文件演示版
3. 提交并推送：

```bash
git add .
git commit -m "更新报告内容"
git push
```

Vercel 会自动重新部署。

## Vercel 配置

- Framework Preset: **Other**
- Build Command: 留空
- Output Directory: 留空（或 `.`）
- Install Command: 留空

## 目录说明

| 路径 | 说明 |
|------|------|
| `index.html` | 主页面（线上入口） |
| `public/` | 页面使用的报告插图与实景素材 |
| `stu_report_demo_standalone.html` | 已内嵌全部在用图片的单文件演示版 |
| `build-standalone.mjs` | 重新生成 standalone 文件的脚本 |
