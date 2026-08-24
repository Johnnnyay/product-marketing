#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate intake-content.js from the canonical question set.

    python3 intake/build-intake.py

Sources, both hand edited:

  intake/questions.json  every question the form asks, in four languages, with a
                         version and a changelog. This is the file to edit.
  intake/chrome.json     UI strings and the page-one fields that questions.json
                         does not own.

Output:

  intake-content.js      generated, do not edit. The header says so.

Why generated at all: the question set is the thing Johnny reviews and revises,
and it needs to be readable, diffable and versioned on its own rather than buried
in a 170 KB JavaScript file next to CSS class names. Submissions record
formVersion, so two assessments taken either side of a change stay comparable.
"""

import json, io, os, sys, datetime

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

def load(name):
    return json.load(io.open(os.path.join(HERE, name), encoding='utf-8'))

def js(value, indent=0):
    """JSON is valid JavaScript. Emit it directly rather than hand rolling."""
    return json.dumps(value, ensure_ascii=False, indent=1)

def main():
    Q = load('questions.json')
    C = load('chrome.json')

    ver = Q['_meta']['version']

    # --- checks that must hold before anything is written -------------------
    problems = []
    items = [it for blk in ('groups', 'additive') for g in Q[blk] for it in g['items']]
    for it in items:
        if len(it) != 5:
            problems.append('item without four languages: %s' % it[0])
    for k in [it[0] for it in items]:
        if k not in Q['help']:
            problems.append('item without help text: %s' % k)
        elif len(Q['help'][k]) != 4:
            problems.append('help without four languages: %s' % k)
    for f in Q['diet']['frequency']:
        if len(f['l']) != 4:
            problems.append('diet question without four languages: %s' % f['id'])
    seen = {}
    for it in items:
        if it[0] in seen:
            problems.append('duplicate item key: %s' % it[0])
        seen[it[0]] = 1
    if problems:
        print('REFUSING TO BUILD:')
        for p in problems:
            print('  -', p)
        return 1

    core = sum(len(g['items']) for g in Q['groups'])
    add = sum(len(g['items']) for g in Q['additive'])

    out = []
    W = out.append
    W('/* GENERATED FILE, DO NOT EDIT.')
    W('   Built from intake/questions.json (v%s) and intake/chrome.json' % ver)
    W('   by intake/build-intake.py on %s.' % datetime.date.today().isoformat())
    W('')
    W('   Edit the question set in intake/questions.json and run the build again.')
    W('   Editing this file directly means the next build silently reverts you. */')
    W('')
    W("const FORM_VERSION = %s;" % json.dumps(ver))
    W('')
    W('const LANGS = [')
    W("  { code: 'en', label: 'English' },")
    W("  { code: 'zh', label: '中文' },")
    W("  { code: 'es', label: 'Español' },")
    W("  { code: 'hi', label: 'हिन्दी' }")
    W('];')
    W('')
    W('const UI = ' + js(C['UI']) + ';')
    W('')
    W('const SECTIONS = ' + js(C['SECTIONS']) + ';')
    W('')

    # FIELDS: chrome fields, plus the ones questions.json owns
    F = dict(C['FIELDS'])
    F['f-diet'] = {'t': 'textarea',
                   'l': Q['diet']['freeText']['l'],
                   'ph': Q['diet']['freeText']['ph'],
                   'h': Q['diet']['freeText']['h']}
    F['f-water'] = {'l': Q['diet']['water']['l'],
                    'h': Q['diet']['water']['h'],
                    'o': Q['diet']['water']['o']}
    F['f-smoking'] = {'l': Q['diet']['smoking']['l'],
                      'h': Q['diet']['smoking']['h'],
                      'o': Q['diet']['smoking']['o']}
    F['f-medication'] = {'t': 'textarea',
                         'l': Q['medication']['l'],
                         'ph': Q['medication']['ph'],
                         'h': Q['medication']['h']}
    F['f-diagnosedNote'] = {'t': 'textarea',
                            'l': Q['diagnoses']['followUp']['l'],
                            'ph': Q['diagnoses']['followUp']['ph']}
    # the diet frequency questions render as button rows, not selects
    W('const FIELDS = ' + js(F) + ';')
    W('')
    W('/* The two scales. Symptom bands are read by lib/dose.py; renaming one breaks')
    W('   stored data. Diet bands are compared across re-assessments, so they are')
    W('   equally fixed. Deliberately different from each other: "Never" is a real')
    W('   answer about food and meaningless about a symptom, and "N/A" the reverse. */')
    W('const SCALES = ' + js(Q['scales']) + ';')
    W('')
    W('const STAGE_SETTING = ' + js(Q['stageSetting']) + ';')
    W('')
    W('const MOTIVATION = ' + js(Q['motivation']) + ';')
    W('')
    W('/* Frequency questions for the diet section. `computes` records what each one')
    W('   feeds, so a question nobody acts on is visible as such. */')
    W('const DIET_FREQ = ' + js(Q['diet']['frequency']) + ';')
    W('')
    W('const DIET_SECTION = ' + js({'title': Q['diet']['sectionTitle'],
                                    'sub': Q['diet']['sectionSub']}) + ';')
    W('')
    W('const DIAGNOSES = ' + js({k: v for k, v in Q['diagnoses'].items()
                                 if k != 'followUp'}) + ';')
    W('')
    W('/* %d core items. Everyone answers all of them: age and sex only ever ADD,' % core)
    W('   never hide, so an early metabolic signal in a young person is still found. */')
    W('const SYMPTOM_GROUPS = ' + js(Q['groups']) + ';')
    W('')
    W('/* %d further items, shown only where `when` matches. */' % add)
    W('const ADDITIVE_GROUPS = ' + js(Q['additive']) + ';')
    W('')
    W('const SYMPTOM_HELP = ' + js(Q['help']) + ';')
    W('')
    W('if (typeof module !== \'undefined\') module.exports = {')
    W('  FORM_VERSION, LANGS, UI, SECTIONS, FIELDS, SCALES, STAGE_SETTING, MOTIVATION,')
    W('  DIET_FREQ, DIET_SECTION, DIAGNOSES, SYMPTOM_GROUPS, ADDITIVE_GROUPS, SYMPTOM_HELP')
    W('};')
    W('')

    path = os.path.join(ROOT, 'intake-content.js')
    io.open(path, 'w', encoding='utf-8').write('\n'.join(out))

    print('built intake-content.js  v%s' % ver)
    print('  core symptom items : %d' % core)
    print('  additive items     : %d' % add)
    print('  diet frequency     : %d' % len(Q['diet']['frequency']))
    print('  diagnoses          : %d' % len(Q['diagnoses']['o']))
    print('  fields             : %d' % len(F))
    print('  help entries       : %d' % len(Q['help']))
    print('  bytes              : %d' % os.path.getsize(path))
    return 0

if __name__ == '__main__':
    sys.exit(main())
