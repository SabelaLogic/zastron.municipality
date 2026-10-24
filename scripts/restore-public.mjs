#!/usr/bin/env node
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";

const root = join(import.meta.dirname, "..", "encoded-public");

async function walk(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  const files = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else files.push(path);
  }
  return files;
}

const files = await walk(root);
if (files.length === 0) {
  console.log("[restore-public] no encoded-public payloads \u2014 skipping");
  process.exit(0);
}

const groups = new Map();
for (const file of files) {
  const rel = relative(root, file);
  const part = rel.match(/^(.*)\.b64(?:\.(\d+))?$/);
  if (!part) continue;
  const key = part[1];
  const n = part[2] ? Number(part[2]) : 0;
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push({ n, file });
}

for (const [rel, parts] of groups) {
  parts.sort((a, b) => a.n - b.n);
  const b64 = (await Promise.all(parts.map((p) => readFile(p.file, "utf8")))).join("");
  const target = join(import.meta.dirname, "..", rel);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, Buffer.from(b64, "base64"));
  console.log("[restore-public]", rel);
}
