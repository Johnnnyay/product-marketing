# English editions of the Education lessons

Each Chinese lesson `education/<series>/NN.txt` may have an English edition
`education/<series>/NN.en.txt`. The site shows the English edition when the reader's language
is English and the file exists; otherwise it shows the Chinese text.

## File format

```
# Lesson title in English

First paragraph.

Second paragraph.
```

- Line 1: `# ` and the English title. No speaker name, no lesson number.
- Then paragraphs separated by one blank line. No markdown headings inside the body, no bullet
  lists, no bold. Plain paragraphs only.
- UTF-8, LF line endings.

## What a good edition is

This is an edition, not a transliteration. The Chinese files are transcripts of spoken lessons
by nutrition teachers. The English reader should get the same lesson, in the register of a
well-edited health course written by a professional: clear, warm, specific, and confident, the
way a good textbook chapter or a Harvard Health article reads.

Do:
- Keep every teaching point, example, number, and case story the speaker gives, in the order
  given. Keep the first person ("I", "we", "my daughter") because these are their talks.
- Merge the spoken filler, false starts, and repeated phrases into clean sentences. "对吧",
  "大家看", "那么", "各位" and greetings are dropped or folded in.
- Translate idioms into what they mean to an English reader, not word for word. 万病始于肠 is
  "most disease begins in the gut", not "ten thousand diseases start in the intestine".
- Keep product names as Amway sells them in the US (Nutrilite Double X, Protein Powder,
  Vitamin C Extended Release, Fiber Powder, Probiotic, Omega-3, Lecithin-E, Cal Mag D). Keep
  a Chinese-only product's name in pinyin with the Chinese in a bubble the first time.
- Keep the speaker's compliance framing (foods, not drugs; see a doctor for disease). Never add a
  health claim the speaker did not make, and never strengthen one.
- Use "and", commas and periods. No em-dashes anywhere.

Do not:
- Summarize, shorten a story, or drop a section. Length should be similar to a faithful edit,
  roughly 60 to 80 percent of the Chinese character count in English words.
- Add your own medical advice, corrections, or commentary in the text. If the speaker says
  something you believe is wrong, translate what they said and put the question in a bubble.
- Invent a citation.

## Bubbles: terms that need explaining or sourcing

For a term, framework, or claim an educated English reader may not know, or that you had to
research to translate well, mark it once, the first time it appears, like this:

```
[[term as it appears in the sentence|one or two sentence note|https://source.url]]
```

- The first part is the exact words in the running sentence (the reader sees these).
- The note is what a footnote would say: the Chinese term, what it means, and where it comes
  from. Written for a reader, not for a translator.
- The URL is optional but strongly preferred, and must be a real page you actually looked at:
  a peer-reviewed paper, NIH ODS, WHO, Harvard Health, Mayo Clinic, Examine.com, or an
  official Amway/Nutrilite page. Never Direct Selling News, never a blog, never a page you did
  not open.

Use a bubble for things like: 清调补养 (the four-stage framework), 子午流注 (the meridian clock),
隐性饥饿 (hidden hunger), 亚健康 (sub-health), 脾胃 as a TCM concept, 阳气, a named
supplement's active ingredient, a statistic the speaker cites, a study the speaker refers to.
Two to eight bubbles per lesson is typical. Do not bubble ordinary words.

Example:

```
Most disease begins in the gut. The old saying [["all illness starts in the gut"|万病始于肠, a
traditional Chinese medicine principle now echoed by research on the gut microbiome and
systemic inflammation.|https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4425030/]] is one my
teacher Liu Jianjun returns to in every class.
```

## Titles

Translate the title so it reads as a chapter title, not a slogan. 万病始于肠 becomes
"Most Disease Begins in the Gut". Keep it under 60 characters.
