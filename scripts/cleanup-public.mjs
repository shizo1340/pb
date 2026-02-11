import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const publicDir = path.join(root, 'public');

const remove = [
  'sitemap.txt',
  'humans.txt',
];

let removed = 0;
for (const f of remove) {
  const p = path.join(publicDir, f);
  try {
    if (fs.existsSync(p)) {
      fs.unlinkSync(p);
      removed++;
    }
  } catch {}
}

if (removed) console.log(`cleanup-public: removed ${removed} file(s)`);
