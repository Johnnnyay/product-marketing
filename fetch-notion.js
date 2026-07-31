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

const DATABASE_ID = '7e0a89db-f85d-4820-aa62-a278e0a2845c';        // Master Pricing Reference
const AREACOPY_DB_ID = '01b81650-0f64-4ca0-89f2-bc318b9465bb';     // Area Copy — Website Content
const PROTOCOL_DB_ID = '7d1e5d56-2a00-4680-b6f8-4c0f21f5eadc';     // 🧭 调理地图 Protocol Map
const AREAS_DB_ID    = 'c53bc81b-7eca-4b89-be33-dbd1869f89fa';     // 🎯 Areas of Support
const notion = new Client({ auth: process.env.NOTION_API_KEY });

const METAFILE = path.join(__dirname, 'meta.json');
const IMAGESFILE = path.join(__dirname, 'images.json');
const TILESFILE = path.join(__dirname, 'tile_images.json');
const DETAILSFILE = path.join(__dirname, 'details.json');
const PROTOFILE = path.join(__dirname, 'protocol.json');
const AREASFILE = path.join(__dirname, 'areas.json');
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

async function queryAll(database_id) {
  const rows = [];
  let cursor;
  do {
    const resp = await notion.databases.query({
      database_id,
      page_size: 100,
      ...(cursor ? { start_cursor: cursor } : {}),
    });
    rows.push(...resp.results);
    cursor = resp.has_more ? resp.next_cursor : null;
  } while (cursor);
  return rows;
}

async function main() {
  const { meta, solutions } = JSON.parse(fs.readFileSync(METAFILE, 'utf8'));
  const images = JSON.parse(fs.readFileSync(IMAGESFILE, 'utf8'));
  const tiles = JSON.parse(fs.readFileSync(TILESFILE, 'utf8'));
  const details = JSON.parse(fs.readFileSync(DETAILSFILE, 'utf8'));

  const rows = await queryAll(DATABASE_ID);

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
        imageUrl: text(P.Image_URL) || (m.id && images.byId[m.id]) || images.byId[slug(name)] ||
                  (text(P.Item) && images.byItem[text(P.Item)]) || m.imageUrl || null,
        areas: m.areas || [],
        iboOnly: !!m.iboOnly,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.cat.localeCompare(b.cat) || a.name.localeCompare(b.name));

  // Area Copy DB → { productId: { areaId: {tagline, advantage, who, ...} } }
  const nameToId = Object.fromEntries(products.map((p) => [p.name, p.id]));
  const areaCopy = {};
  try {
    const acRows = await queryAll(AREACOPY_DB_ID);
    acRows.forEach((page) => {
      const P = page.properties;
      const prodName = text(P.Product);
      const area = P.Area && P.Area.select ? P.Area.select.name : null;
      const pid = nameToId[prodName];
      if (!pid || !area) return;
      areaCopy[pid] = areaCopy[pid] || {};
      areaCopy[pid][area] = {
        tagline: text(P.Tagline), taglineZh: text(P.Tagline_ZH),
        advantage: text(P.Advantage), advantageZh: text(P.Advantage_ZH),
        who: text(P.Who), whoZh: text(P.Who_ZH),
      };
    });
  } catch (e) {
    console.warn('Area Copy DB not readable, skipping:', e.message);
  }


  // Areas of Support DB → tab labels, one-line blurbs, protocol overviews.
  // Notion owns this; scripts/areas.json is only a fallback snapshot.
  let areasOut = JSON.parse(fs.readFileSync(AREASFILE, 'utf8')).areas;
  try {
    const arRows = await queryAll(AREAS_DB_ID);
    const live = arRows
      .filter((pg) => check(pg.properties['Show on site']))
      .map((pg) => {
        const P = pg.properties;
        return {
          id: text(P.Area_ID),
          order: num(P.Order) || 999,
          name: text(P.Name),
          nameZh: text(P.Name_ZH),
          blurb: text(P.Blurb),
          blurbZh: text(P.Blurb_ZH),
          overview: text(P.Overview),
          overviewZh: text(P.Overview_ZH),
          sensitive: check(P.Sensitive),
        };
      })
      .filter((a) => a.id && a.name);
    if (live.length) areasOut = live;
    fs.writeFileSync(AREASFILE, JSON.stringify(
      { _note: JSON.parse(fs.readFileSync(AREASFILE, 'utf8'))._note, areas: areasOut }, null, 1));
  } catch (e) {
    console.warn('Areas DB not readable, using local snapshot:', e.message);
  }
  areasOut.sort((a, b) => a.order - b.order);
  const areas = areasOut.map((a) => ({
    id: a.id, name: a.name, nameZh: a.nameZh,
    blurb: a.blurb, blurbZh: a.blurbZh, sensitive: !!a.sensitive,
  }));
  const areaOverview = Object.fromEntries(
    areasOut.filter((a) => a.overview).map((a) => [a.id, [a.overview, a.overviewZh]]));


  // Protocol Map DB → { areaId: { overview, rows:[{stage, rank, route, productIds, why, whyEn}] } }
  // Stage headings and the per-area overview text live in scripts/protocol.json;
  // Notion owns the rows. Only rows with "Show on site" checked are published.
  const protoLocal = JSON.parse(fs.readFileSync(PROTOFILE, 'utf8'));
  const STAGE_KEY = { '清': 'clear', '调': 'regulate', '补': 'supplement', '养': 'sustain' };
  const ROUTE_KEY = { '内服': 'internal', '外用': 'external', '习惯': 'habit', '环境': 'environment' };
  const protocol = { stages: protoLocal.stages, areas: {} };
  try {
    const prRows = await queryAll(PROTOCOL_DB_ID);
    const relTitle = {};   // related page id -> product name, resolved lazily below
    for (const page of prRows) {
      const P = page.properties;
      if (!check(P['Show on site'])) continue;
      const areaOpt = P.Area && P.Area.select ? P.Area.select.name : '';
      const areaId = areaOpt.split(' ')[0];
      const stage = STAGE_KEY[(P.Stage && P.Stage.select ? P.Stage.select.name : '')[0]];
      if (!areaId || !stage) continue;
      const ids = [];
      for (const rel of (P.Product && P.Product.relation) || []) {
        if (!(rel.id in relTitle)) {
          try {
            const pg = await notion.pages.retrieve({ page_id: rel.id });
            relTitle[rel.id] = text(pg.properties.Name);
          } catch { relTitle[rel.id] = null; }
        }
        const pid = nameToId[relTitle[rel.id]];
        if (pid) ids.push(pid);
      }
      if (!ids.length) continue;
      const base = protoLocal.areas[areaId] || {};
      const ov = areaOverview[areaId] || [base.overview || '', base.overviewZh || ''];
      protocol.areas[areaId] = protocol.areas[areaId] ||
        { overview: ov[0], overviewZh: ov[1], rows: [] };
      protocol.areas[areaId].rows.push({
        stage,
        rank: num(P.Rank) || 9,
        route: ROUTE_KEY[(P.Route && P.Route.select ? P.Route.select.name : '')
          .replace(/ .*$/, '')] || 'internal',
        productIds: ids,
        why: text(P.Why),
        whyEn: text(P.Why_EN),
      });
    }
    Object.values(protocol.areas).forEach((a) => a.rows.sort((x, y) => x.rank - y.rank));
  } catch (e) {
    console.warn('Protocol Map not readable, using local snapshot:', e.message);
    Object.assign(protocol, protoLocal);
  }
  if (!Object.keys(protocol.areas).length) Object.assign(protocol, protoLocal);

  const out = {
    lastUpdated: new Date().toISOString().slice(0, 10),
    products,
    areas,
    solutions,
    areaCopy,
    tiles,
    details,
    protocol,
  };

  fs.mkdirSync(path.dirname(OUTFILE), { recursive: true });
  fs.writeFileSync(OUTFILE, JSON.stringify(out, null, 1));
  console.log(`Wrote ${products.length} products to data/products.json`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
