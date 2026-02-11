#!/usr/bin/env node
/**
 * Hash & version static assets in /public/assets and write a manifest for Astro layouts.
 *
 * Why: allow long-term caching without stale CSS/JS after deploy.
 *
 * Generates:
 *   public/assets/<name>.<hash>.<ext>
 *   src/data/asset-manifest.json
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const projectRoot = process.cwd();
const assetsDir = path.join(projectRoot, "public", "assets");
const manifestOut = path.join(projectRoot, "src", "data", "asset-manifest.json");

const inputs = [
  { key: "styles", file: "styles.css" },
  { key: "nav", file: "nav.js" },
  { key: "search", file: "search.js" },
  { key: "pfad", file: "pfad.js" },
  { key: "toc", file: "toc.js" },
  { key: "anbieter", file: "anbieter.js" },
  // Provider detail pages: mobile KV-cards enhancer
  { key: "anbieterKvCards", file: "anbieter-kv-cards.js" },
];

function sha256_8(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex").slice(0, 8);
}

function cleanOldHashedVariants(stem, ext) {
  // Remove older hashed outputs like styles.1234abcd.css
  const rx = new RegExp(`^${stem}\\.[0-9a-f]{8}\\${ext}$`);
  for (const entry of fs.readdirSync(assetsDir, { withFileTypes: true })) {
    if (!entry.isFile()) continue;
    if (rx.test(entry.name)) {
      fs.unlinkSync(path.join(assetsDir, entry.name));
    }
  }
}



function rewrite404(manifest) {
  const p404 = path.join(projectRoot, "public", "404.html");
  if (!fs.existsSync(p404)) return;
  let html = fs.readFileSync(p404, "utf8");
  // Replace styles link (supports existing hashed or unhashed)
  if (manifest.styles) {
    html = html.replace(/href="\/assets\/styles(?:\.[0-9a-f]{8})?\.css"/g, `href="${manifest.styles}"`);
  }
  if (manifest.nav) {
    html = html.replace(/src="\/assets\/nav(?:\.[0-9a-f]{8})?\.js"/g, `src="${manifest.nav}"`);
  }
  if (manifest.search) {
    html = html.replace(/src="\/assets\/search(?:\.[0-9a-f]{8})?\.js"/g, `src="${manifest.search}"`);
  }
  fs.writeFileSync(p404, html, "utf8");
}

function main() {
  if (!fs.existsSync(assetsDir)) {
    console.error(`assetsDir not found: ${assetsDir}`);
    process.exit(1);
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
  };

  for (const item of inputs) {
    const inPath = path.join(assetsDir, item.file);
    if (!fs.existsSync(inPath)) {
      console.error(`Missing input asset: ${inPath}`);
      process.exit(1);
    }

    const buf = fs.readFileSync(inPath);
    const hash = sha256_8(buf);

    const parsed = path.parse(inPath);
    // Clean old variants before writing the new one
    cleanOldHashedVariants(parsed.name, parsed.ext);

    const outName = `${parsed.name}.${hash}${parsed.ext}`;
    const outPath = path.join(assetsDir, outName);
    fs.writeFileSync(outPath, buf);

    manifest[item.key] = `/assets/${outName}`;
  }

  fs.writeFileSync(manifestOut, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  rewrite404(manifest);
  console.log("✅ Hashed assets written and manifest updated:");
  console.log(manifest);
}

main();
