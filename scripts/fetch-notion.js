/**
 * fetch-notion.js
 * Reads all Product & Volume Education pages from Notion and saves
 * a single JSON file at data/products.json for the static site.
 *
 * Requires env var: NOTION_API_KEY (Notion internal integration token)
 * Run: node scripts/fetch-notion.js
 */

const { Client } = require('@notionhq/client');
const fs = require('fs');
const path = require('path');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// ─── Page registry ────────────────────────────────────────────────────────────

const CATEGORY_PAGES = [
  { id: '12505649-7be3-4339-9459-f37dc83594b3', slug: 'oral-care',           title: '🦷 Oral Care' },
  { id: 'a0eaf9e4-7220-4068-964d-f44d27d39e11', slug: 'hair-care',           title: '💆 Hair Care' },
  { id: '17890788-9127-4d37-88e4-02c424b29238', slug: 'body-sun',            title: '🧴 Body & Sun Care' },
  { id: '18b81b2b-aacf-4705-be13-3fabcc6d45e7', slug: 'everyday-nutrition',  title: '🌿 Everyday Nutrition' },
  { id: '01215116-04d7-49ed-b9bc-fca170615320', slug: 'targeted-wellness',   title: '❤️ Targeted Wellness' },
  { id: '5c719493-c523-4c18-ade7-fec5dac1fef9', slug: 'sport-fitness',       title: '⚡ Sport & Fitness' },
  { id: 'fa6862b7-b07d-411b-b5a0-0fc37c9700b7', slug: 'skincare',            title: '✨ Skincare (Artistry)' },
  { id: 'b2a147d9-9195-4ce0-87ce-b3f68a0ce225', slug: 'cleaning',            title: '🧹 Cleaning' },
  { id: '4444b30d-6098-48a4-be55-cbc4f80ca3a7', slug: 'air-purifier',        title: '💨 Air Purifier' },
  { id: '3ee09d59-b16a-464e-8552-42a47ab73946', slug: 'water-purifier',      title: '💧 Water Purifier' },
  { id: '7734f3b5-7211-47d2-a320-01da4db9b5d3', slug: 'cookware',            title: '🍳 Cookware' },
];

const STRATEGY_PAGES = [
  { id: 'b091854b-9ec3-4927-9df8-450fcc54b8fe', slug: 'morning-routine',   title: '🌅 Morning Routine' },
  { id: 'a4182148-b63f-4524-89e4-a28bb27b0fab', slug: 'active-athletic',   title: '💪 Active & Athletic' },
  { id: '8eeacd48-5202-4cfe-bea0-412c7407b369', slug: 'health-concerns',   title: '🏥 Health Concerns' },
  { id: '0588a260-89ab-4ef9-95bd-d42ce224805d', slug: 'family-household',  title: '👨‍👩‍👧 Family & Household' },
  { id: '13b33367-702f-4234-8431-ae64f8cb42e3', slug: 'b2c-direct',        title: '🛍️ B2C Direct Sales' },
  { id: 'd358fc15-2f6d-4f6d-9e27-8ca19274485f', slug: 'b2b-professional',  title: '🏢 B2B Professional' },
];

// ─── Notion API helpers ───────────────────────────────────────────────────────

/** Fetch all child blocks for a block ID, handling pagination. */
async function getBlocks(blockId) {
  const blocks = [];
  let cursor;
  do {
    const resp = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 100,
      ...(cursor ? { start_cursor: cursor } : {}),
    });
    blocks.push(...resp.results);
    cursor = resp.has_more ? resp.next_cursor : null;
  } while (cursor);
  return blocks;
}

/** Extract plain text from a Notion rich text array. */
function toText(richText = []) {
  return richText.map((t) => t.plain_text || '').join('');
}

/** Extract the page mention from a cell's rich text array, if present. */
function extractMention(cellRichText = []) {
  const m = cellRichText.find(
    (t) => t.type === 'mention' && t.mention?.type === 'page'
  );
  if (m) {
    return { id: m.mention.page.id, name: m.plain_text };
  }
  return null;
}

/** Rate-limit between Notion API calls (~3 req/sec safe). */
const delay = (ms) => new Promise((r) => setTimeout(r, ms));

// ─── Page-type parsers ────────────────────────────────────────────────────────

/**
 * Fetch a page's top-level blocks, find the first callout and first table,
 * and return { intro, columns, rows }.
 * Each row = { name, detailId | null, cells: [string] }
 */
async function parsePage(pageId) {
  const blocks = await getBlocks(pageId);

  // First callout → intro text
  const callout = blocks.find((b) => b.type === 'callout');
  const intro = callout ? toText(callout.callout.rich_text) : '';

  // First table block
  const tableBlock = blocks.find((b) => b.type === 'table');
  if (!tableBlock) return { intro, columns: [], rows: [] };

  // Fetch table rows (children of table)
  const rowBlocks = await getBlocks(tableBlock.id);
  if (rowBlocks.length === 0) return { intro, columns: [], rows: [] };

  // First row = header
  const headerRow = rowBlocks[0];
  const columns = (headerRow.table_row?.cells || []).map((cell) => toText(cell));

  // Data rows
  const rows = [];
  for (const rb of rowBlocks.slice(1)) {
    const cells = rb.table_row?.cells || [];
    if (cells.length === 0) continue;

    // Col 0: product name, possibly a page mention
    const col0 = cells[0] || [];
    const mention = extractMention(col0);
    const name = mention ? mention.name : toText(col0);

    // Skip empty / header-looking rows
    if (!name || name === columns[0]) continue;

    const cellStrings = cells.map((cell) => toText(cell));

    rows.push({
      name,
      detailId: mention ? mention.id : null,
      cells: cellStrings,
    });
  }

  return { intro, columns, rows };
}

/**
 * Fetch a product detail page and convert its blocks to a simple
 * array of { type, text } sections for the site renderer.
 */
async function fetchDetailSections(pageId) {
  let blocks;
  try {
    blocks = await getBlocks(pageId);
  } catch (err) {
    console.warn(`  ⚠️  Could not fetch detail page ${pageId}: ${err.message}`);
    return [];
  }

  const sections = [];
  for (const b of blocks) {
    let text = null;
    switch (b.type) {
      case 'callout':
        text = toText(b.callout.rich_text);
        if (text) sections.push({ type: 'callout', text });
        break;
      case 'heading_1':
        text = toText(b.heading_1.rich_text);
        if (text) sections.push({ type: 'heading_1', text });
        break;
      case 'heading_2':
        text = toText(b.heading_2.rich_text);
        if (text) sections.push({ type: 'heading_2', text });
        break;
      case 'heading_3':
        text = toText(b.heading_3.rich_text);
        if (text) sections.push({ type: 'heading_3', text });
        break;
      case 'paragraph':
        text = toText(b.paragraph.rich_text);
        if (text) sections.push({ type: 'paragraph', text });
        break;
      case 'bulleted_list_item':
        text = toText(b.bulleted_list_item.rich_text);
        if (text) sections.push({ type: 'bullet', text });
        break;
      case 'numbered_list_item':
        text = toText(b.numbered_list_item.rich_text);
        if (text) sections.push({ type: 'bullet', text });
        break;
      case 'quote':
        text = toText(b.quote.rich_text);
        if (text) sections.push({ type: 'quote', text });
        break;
      // divider, image, etc. — skip
    }
  }
  return sections;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  if (!process.env.NOTION_API_KEY) {
    console.error('❌ NOTION_API_KEY env var not set.');
    process.exit(1);
  }

  console.log('📥 Fetching category pages...');
  const categories = [];
  const detailPageIds = new Set();

  for (const config of CATEGORY_PAGES) {
    process.stdout.write(`  ${config.title} ...`);
    try {
      const { intro, columns, rows } = await parsePage(config.id);
      for (const r of rows) {
        if (r.detailId) detailPageIds.add(r.detailId);
      }
      categories.push({ slug: config.slug, title: config.title, intro, columns, rows });
      console.log(` ✓ (${rows.length} products)`);
    } catch (err) {
      console.log(` ✗ ${err.message}`);
    }
    await delay(380);
  }

  console.log('\n📥 Fetching strategy pages...');
  const strategies = [];

  for (const config of STRATEGY_PAGES) {
    process.stdout.write(`  ${config.title} ...`);
    try {
      const { intro, columns, rows } = await parsePage(config.id);
      for (const r of rows) {
        if (r.detailId) detailPageIds.add(r.detailId);
      }
      strategies.push({ slug: config.slug, title: config.title, intro, columns, rows });
      console.log(` ✓ (${rows.length} rows)`);
    } catch (err) {
      console.log(` ✗ ${err.message}`);
    }
    await delay(380);
  }

  console.log(`\n📥 Fetching ${detailPageIds.size} product detail pages...`);
  const productDetails = {};

  for (const pid of detailPageIds) {
    process.stdout.write(`  ${pid} ...`);
    const sections = await fetchDetailSections(pid);
    productDetails[pid] = sections;
    console.log(` ✓ (${sections.length} sections)`);
    await delay(380);
  }

  // Build output
  const output = {
    lastUpdated: new Date().toISOString(),
    categories,
    strategies,
    productDetails,
  };

  const outPath = path.join(__dirname, '..', 'data', 'products.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf8');

  console.log(`\n✅ Saved → data/products.json`);
  console.log(
    `   ${categories.length} categories, ${strategies.length} strategies, ${Object.keys(productDetails).length} product detail pages`
  );
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
