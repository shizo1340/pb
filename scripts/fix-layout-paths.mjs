import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const pagesDir = path.join(projectRoot, "src", "pages");
const layoutFile = path.join(projectRoot, "src", "layouts", "DocLayout.astro");

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.isFile() && entry.name.endsWith(".md")) out.push(p);
  }
  return out;
}

function patchFile(file) {
  const raw = fs.readFileSync(file, "utf8");
  const fmMatch = raw.match(/^\s*---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!fmMatch) return { changed: false, reason: "no frontmatter" };

  const fm = fmMatch[1];
  const rest = raw.slice(fmMatch[0].length);

  const rel = path.relative(path.dirname(file), layoutFile).replace(/\\/g, "/");
  const desiredLine = `layout: ${rel}`;

  let fm2;
  if (/^\s*layout:\s*.*$/m.test(fm)) {
    fm2 = fm.replace(/^\s*layout:\s*.*$/m, desiredLine);
  } else {
    fm2 = `${desiredLine}\n${fm}`;
  }

  const next = `---\n${fm2.trimEnd()}\n---\n${rest.replace(/^\n+/, "")}`;
  if (next === raw) return { changed: false };
  fs.writeFileSync(file, next, "utf8");
  return { changed: true, rel };
}

const files = walk(pagesDir);
let changed = 0;

for (const f of files) {
  const res = patchFile(f);
  if (res.changed) changed++;
}

console.log(`fix-layout-paths: patched ${changed} file(s)`);
