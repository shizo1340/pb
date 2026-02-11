import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const siteJson = JSON.parse(fs.readFileSync(path.join(root, 'src', 'data', 'site.json'), 'utf8'));

export const SITE = {
  baseUrl: siteJson.baseUrl || 'https://privacybasics.de'
};
