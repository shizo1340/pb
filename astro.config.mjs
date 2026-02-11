import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import rehypeAffiliateRel from './src/scripts/rehype-affiliate-rel.mjs';
import remarkAffiliateGuard from './src/scripts/remark-affiliate-guard.mjs';

// NOTE:
// JSON import assertions (`assert { type: 'json' }`) are not supported in some toolchains
// (e.g. when the config is loaded via a non-Node ESM pipeline). Using createRequire keeps
// the config compatible across environments while still treating site.json as the single
// source of truth.
const require = createRequire(import.meta.url);
const site = require('./src/data/site.json');

// Netcup Webhosting (klassisches Shared Hosting) kann in der Regel **kein**
// dauerhaftes Node-Server-Rendering ausführen.
// Daher: statischer Build + First-Party PHP Counter (in /public/analytics).
export default defineConfig({
  site: site.baseUrl,
  output: 'static',

  markdown: {
    // Keep editorial content clean: only auto-mark obvious affiliate URLs as sponsored.
    remarkPlugins: [remarkAffiliateGuard],
    rehypePlugins: [rehypeAffiliateRel],
  },

  // Konsistent mit deinen URL-Konventionen + .htaccess Trailing-Slash Redirects
  trailingSlash: 'always',

  // CSP-hardening: never inline JS/CSS as data: URLs (breaks script-src/style-src 'self')
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      assetsInlineLimit: 0,
    },
  },
});
