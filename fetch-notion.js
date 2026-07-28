/**
 * fetch-notion.js — refreshes data/products.json from the Notion Master Pricing DB.
 *
 * Source of truth (Notion, database 7e0a89db-f85d-4820-aa62-a278e0a2845c):
 *   Name, Item, Category, IBO_Price, Retail_Price, PV, Days_Supply, One_Time, Image_URL
 * Enrichment (scripts/meta.json, checked into repo):
 *   id/slug, Chinese name, taglines, brand, areas-of-support mapping, solutions presets
 *
 * Add a product in Notion → it appears on the site with sensible defaults.
 * Edit a price/PV/days/image in Notion → site updates on next run.
 *
 * Requires env var: NOTION_API_KEY. Run: node scripts/fetch-notion.js
 */

const { Client } = require('@notionhq/client');
const fs = require('fs');
const path = require('path');

const DATABASE_ID = '7e0a89db-f85d-4820-aa62-a278e0a2845c';
const notion = new Client({ auth: process.env.NOTION_API_KEY });

const METAFILE = path.join(__dirname, 'meta.json');
const OUTFILE = path.join(__dirname, '..', 'data', 'products.json');

// Notion Category select → site category bucket
const CAT_MAP = {
  'Everyday Nutrition': 'nutrition',
  'Targeted Wellness': 'nutrition',
  'XS Sport & Fitness': 'sports',
  'Skincare': 'beauty',
  'Oral Care': 'care',
  'Hair Care': 'care',
  'Body & Sun': 'care',
  'Cleaning': 'home',
  'Air Purifier': 'home',
  'Water Purifier': 'home',
  'Cookware': 'home',
  'Solutions': 'solutions',
};

const slug = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const num = (p) => (p && p.type === 'number' ? p.number : null);
const text = (p) => {
  if (!p) return null;
  if (p.type === 'title') return p.title.map((t) => t.plain_text).join('') || null;
  if (p.type === 'rich_text') return p.rich_text.map((t) => t.plain_text).join('') || null;
  if (p.type === 'url') return p.url || null;
  return null;
};
const check = (p) => !!(p && p.type === 'checkbox' && p.checkbox);

async function main() {
  const { meta, areas, solutions } = JSON.parse(fs.readFileSync(METAFILE, 'utf8'));

  // Page through the pricing database
  const rows = [];
  let cursor;
  do {
    const resp = await notion.databases.query({
      database_id: DATABASE_ID,
      page_size: 100,
      ...(cursor ? { start_cursor: cursor } : {}),
    });
    rows.push(...resp.results);
    cursor = resp.has_more ? resp.next_cursor : null;
  } while (cursor);

  const products = rows
    .map((page) => {
      const P = page.properties;
      const name = text(P.Name);
      if (!name) return null;
      const m = meta[name] || {};
      const notionCat = P.Category && P.Category.select ? P.Category.select.name : null;
      return {
        id: m.id || slug(name),
        item: text(P.Item),
        name,
        nameZh: m.nameZh || name,
        brand: m.brand || 'Amway',
        cat: m.cat || CAT_MAP[notionCat] || 'nutrition',
        tagline: m.tagline || '',
        taglineZh: m.taglineZh || m.tagline || '',
        iboPrice: num(P.IBO_Price),
        retailPrice: num(P.Retail_Price),
        pv: num(P.PV),
        daysSupply: num(P.Days_Supply),
        oneTime: check(P.One_Time),
        imageUrl: text(P.Image_URL) || m.imageUrl || null,
        areas: m.areas || [],
        iboOnly: !!m.iboOnly,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.cat.localeCompare(b.cat) || a.name.localeCompare(b.name));

  const out = {
    lastUpdated: new Date().toISOString().slice(0, 10),
    products,
    areas,
    solutions,
  };

  fs.mkdirSync(path.dirname(OUTFILE), { recursive: true });
  fs.writeFileSync(OUTFILE, JSON.stringify(out, null, 1));
  console.log(`Wrote ${products.length} products to data/products.json`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
