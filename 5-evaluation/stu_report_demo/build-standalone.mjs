import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(root, "index.html");
const outputPath = join(root, "stu_report_demo_standalone.html");

const assets = [
  ["public/route-map.svg", "image/svg+xml"],
  ["public/s10-map.svg", "image/svg+xml"],
  ["public/tree-pic.svg", "image/svg+xml"],
  ["public/s05-p3.jpeg", "image/jpeg"],
];

let html = readFileSync(sourcePath, "utf8");

for (const [relativePath, mimeType] of assets) {
  if (!html.includes(relativePath)) {
    throw new Error(`index.html does not reference ${relativePath}`);
  }

  const encoded = readFileSync(join(root, relativePath)).toString("base64");
  html = html.split(relativePath).join(`data:${mimeType};base64,${encoded}`);
}

const remainingReferences = assets.filter(([relativePath]) => html.includes(relativePath));
if (remainingReferences.length > 0) {
  throw new Error("Standalone build still contains external asset references");
}

html = html.replace(
  "<!DOCTYPE html>",
  "<!DOCTYPE html>\n<!-- Generated from index.html by build-standalone.mjs. -->",
);

writeFileSync(outputPath, html);
console.log(`Created ${outputPath}`);
