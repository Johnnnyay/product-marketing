/**
 * check-images.js — asks the Amway CDN whether every product image still loads.
 *
 * The image URLs carry a signed `context` token. A single wrong character in that
 * token returns 403 rather than a broken-looking image, so a typo can sit unnoticed
 * until someone opens that one product. This catches it.
 *
 * Run: node scripts/check-images.js
 * Exits non-zero if anything fails, so it can gate a deploy.
 */
const fs = require('fs');
const path = require('path');

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'data', 'products.json'), 'utf8'));

const LIMIT = 12;

async function head(p) {
  try {
    const r = await fetch(p.imageUrl, { method: 'GET' });
    return { ...p, status: r.status };
  } catch (e) {
    return { ...p, status: 'ERR ' + e.message };
  }
}

(async () => {
  const queue = data.products.map((p) => ({ id: p.id, item: p.item, imageUrl: p.imageUrl }));
  const results = [];
  while (queue.length) {
    results.push(...await Promise.all(queue.splice(0, LIMIT).map(head)));
    process.stdout.write('.');
  }
  const bad = results.filter((r) => r.status !== 200);
  console.log(`\nchecked ${results.length} images, ${bad.length} failing`);
  bad.forEach((b) => console.log(`  ${b.status}  ${b.item || b.id}  ${b.id}`));
  process.exit(bad.length ? 1 : 0);
})();
