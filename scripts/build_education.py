#!/usr/bin/env python3
"""Build the Education tab's lesson files from the raw transcripts.

    python3 scripts/build_education.py [SOURCE_DIR]

SOURCE_DIR defaults to DiamondA70/Volume/KNOWLEDGE in iCloud. Each series is a folder of
one .md transcript per lesson. Output, relative to the repo root:

    education/index.json          series and lesson titles (small, loaded when Education opens)
    education/<series>/NN.txt     one lesson, paragraphs separated by a blank line

Only presentation is changed. Removed: the '# title' and '_Source:' lines, the audio file name,
timestamps and speaker tags that begin a line, and the transcription tool's 'AI generated'
footer. Timestamps inside a sentence (7:30 pm) are content and are kept. Lines are regrouped into
paragraphs (very short ones joined to the next, very long ones split at a sentence end); a
check at the end proves no character of the talk was added or lost.

Speaker 2 in the transcripts is the recording picking up a video that played during the talk.
It is replaced by VIDEO_NOTE instead of publishing garbled text.
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEFAULT_SRC = os.path.expanduser("~/Library/Mobile Documents/com~apple~CloudDocs/DiamondA70/Volume/KNOWLEDGE")
SRC = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_SRC

VIDEO_NOTE = "（此处播放了一段视频，录音无法准确转写。）"
SERIES = [
    # id, folder, title, kind
    ("xzc52", "肖子程52健康课", "肖子程52健康课", "plain"),
    ("qtby", "清调补养", "清调补养", "speaker"),
]

TS_LINE = re.compile(r"^说话人(\d+)\s+\d{1,2}:\d{2}(?::\d{2})?\s*$")
TS_LEAD = re.compile(r"^\d{1,2}:\d{2}(?::\d{2})?(?=\D)")
AUDIO = re.compile(r"\.(mp3|m4a|wav|mp4)\s*$", re.I)
AI_FOOTER = "以上内容由AI生成，仅供参考"
SENT = re.compile(r"(?<=[。！？])")
SHORT, LONG, TARGET = 40, 320, 200


def parse_title(kind, h1):
    if kind == "speaker":
        m = re.match(r"^清调补养\s*(\d+)\.(.*)-([^-]+)$", h1)
        return int(m.group(1)), m.group(2).strip(), m.group(3).strip()
    m = re.match(r"^_?0*(\d+)\.?\s*(.*)$", h1)
    title = re.sub(r"\s*\d{4}-\d{2}-\d{2}\s+\d{2}_\d{2}_\d{2}\s*$", "", m.group(2))
    return int(m.group(1)), title.strip().rstrip("-").strip(), None


def kept_lines(raw):
    """(lines of the talk, count of video stretches). Scaffolding removed, nothing else."""
    lines = raw.replace("﻿", "").split("\n")
    body = lines[1:]
    while body and (not body[0].strip() or body[0].startswith("_Source:") or AUDIO.search(body[0])):
        body = body[1:]
    out, speaker, video = [], 1, False
    for line in body:
        line = line.strip()
        if not line or line == AI_FOOTER:
            continue
        m = TS_LINE.match(line)
        if m:
            speaker = int(m.group(1))
            continue
        line = TS_LEAD.sub("", line).strip()
        if not line:
            continue
        if speaker != 1:
            if not video:
                out.append(None)          # one note per stretch of video
            video = True
            continue
        video = False
        out.append(line)
    return out


def paragraphs(lines):
    paras, i = [], 0
    while i < len(lines):
        cur = lines[i]
        if cur is None:
            paras.append(VIDEO_NOTE); i += 1; continue
        while len(cur) < SHORT and i + 1 < len(lines) and lines[i + 1] is not None:
            i += 1; cur += lines[i]
        i += 1
        if len(cur) <= LONG:
            paras.append(cur); continue
        units = []
        for s in SENT.split(cur):
            # Lesson 07 has no punctuation at all, only spaces between phrases: break there.
            units += re.split(r"(?<= )", s) if len(s) > LONG and " " in s else [s]
        chunk = ""
        for s in units:
            if chunk and len(chunk) + len(s) > TARGET:
                paras.append(chunk); chunk = ""
            chunk += s
        if chunk:
            paras.append(chunk)
    return paras


def squash(x):
    return re.sub(r"\s+", "", x)


def main():
    index = {"series": []}
    for sid, folder, title, kind in SERIES:
        src = os.path.join(SRC, folder)
        out_dir = os.path.join(ROOT, "education", sid)
        os.makedirs(out_dir, exist_ok=True)
        lessons, videos = [], 0
        for name in sorted(os.listdir(src)):
            if not name.endswith(".md"):
                continue
            raw = open(os.path.join(src, name), encoding="utf-8").read()
            n, ltitle, speaker = parse_title(kind, raw.replace("﻿", "").split("\n")[0][2:].strip())
            lines = kept_lines(raw)
            paras = paragraphs(lines)
            said = [p for p in paras if p != VIDEO_NOTE]
            assert squash("".join(said)) == squash("".join(l for l in lines if l is not None)), \
                f"{name}: regrouping changed the text"
            videos += paras.count(VIDEO_NOTE)
            chars = len(squash("".join(said)))
            lid = f"{n:02d}"
            with open(os.path.join(out_dir, lid + ".txt"), "w", encoding="utf-8") as f:
                f.write("\n\n".join(paras) + "\n")
            entry = {"id": lid, "n": n, "title": ltitle, "mins": max(1, round(chars / 450))}
            if speaker:
                entry["speaker"] = speaker
            lessons.append(entry)
        lessons.sort(key=lambda e: e["n"])
        index["series"].append({"id": sid, "title": title, "lessons": lessons})
        print(f"{title}: {len(lessons)} lessons, {videos} video note(s)")
    os.makedirs(os.path.join(ROOT, "education"), exist_ok=True)
    with open(os.path.join(ROOT, "education", "index.json"), "w", encoding="utf-8") as f:
        json.dump(index, f, ensure_ascii=False, indent=1)
        f.write("\n")


if __name__ == "__main__":
    main()
