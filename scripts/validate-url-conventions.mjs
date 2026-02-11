#!/usr/bin/env node
/**
 * Validate URL/path naming conventions for Astro pages.
 *
 * Rules (binding):
 * - lowercase
 * - kebab-case (a-z0-9-)
 * - no umlauts / ß
 * - no spaces / underscores
 * - no .html endings
 */

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const pagesDir = path.join(root, 'src', 'pages');

const allowedSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const allowSpecialFile = new Set(['index', '404']);
const allowExtensions = new Set(['.md', '.mdx', '.astro']);

const errors = [];
const warnings = [];

function hasUmlaut(s) {
  return /[äöüÄÖÜß]/.test(s);
}

function isAsciiSafeSlug(s) {
  // Only allow basic latin letters, numbers, dash.
  return /^[a-z0-9-]+$/.test(s);
}

function checkSegment(name, relPath, kind) {
  if (hasUmlaut(name)) {
    errors.push(`${kind} contains umlaut/ß: ${relPath}`);
    return;
  }
  if (name !== name.toLowerCase()) {
    errors.push(`${kind} must be lowercase: ${relPath}`);
  }
  if (!isAsciiSafeSlug(name)) {
    errors.push(`${kind} contains invalid chars (only a-z0-9- allowed): ${relPath}`);
    return;
  }
  if (!allowedSlug.test(name)) {
    errors.push(`${kind} must be kebab-case: ${relPath}`);
  }
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const abs = path.join(dir, ent.name);
    const rel = path.relative(pagesDir, abs).split(path.sep).join('/');

    if (ent.isDirectory()) {
      // Validate directory name (except root)
      if (rel) checkSegment(ent.name, rel, 'Folder');
      walk(abs);
      continue;
    }

    const ext = path.extname(ent.name);
    const base = path.basename(ent.name, ext);

    if (ext === '.html') {
      errors.push(`.html pages are not allowed: ${rel}`);
      continue;
    }

    // Only validate potential page files (md/mdx/astro)
    if (!allowExtensions.has(ext)) continue;

    if (!allowSpecialFile.has(base)) {
      checkSegment(base, rel, 'File');
    }
  }
}

try {
  walk(pagesDir);
} catch (e) {
  console.error('URL convention validator crashed:', e);
  process.exit(2);
}

if (warnings.length) {
  console.log('\nURL conventions: warnings');
  for (const w of warnings) console.log('  - ' + w);
}

if (errors.length) {
  console.error('\nURL conventions: errors');
  for (const er of errors) console.error('  - ' + er);
  console.error(`\nFailed: ${errors.length} error(s).`);
  process.exit(1);
}

console.log('URL conventions: OK');
