/* Shared by the event pages: glow.html (the landing page and its admin view) and assess.html (the
   skin and hair check-ins).

   Answer options are [value, English, 中文]. The value is what gets saved, always English, so the
   admin view, the CSV and anything reading the store see one set of words whatever language the
   guest used. The language choice is kept under `intakeLang`, the same key the health assessment
   reads, so a guest who picks 中文 on the event page gets Chinese on all three check-ins. */
(function () {
  var LANGS = [{ code: 'en', label: 'English' }, { code: 'zh', label: '中文' }];

  function current() {
    var c = '';
    try { c = localStorage.getItem('intakeLang') || ''; } catch (e) {}
    if (!c) c = (navigator.language || '').slice(0, 2);
    return c === 'zh' ? 1 : 0;
  }

  var OPTS = {
    skin: {
      concerns: [
        ['Lines and wrinkles', 'Lines and wrinkles', '细纹和皱纹'],
        ['Pigmentation or dark spots', 'Pigmentation or dark spots', '色沉、色斑'],
        ['Dark under-eye circles', 'Dark under-eye circles', '黑眼圈'],
        ['Uneven texture and visible pores', 'Uneven texture and visible pores', '肤质不均、毛孔粗大'],
        ['Acne or blemishes', 'Acne or blemishes', '痘痘、瑕疵'],
        ['Redness', 'Redness', '泛红'],
      ],
      types: [
        ['Dry', 'Dry', '干性'],
        ['Normal or combination', 'Normal or combination', '中性或混合性'],
        ['Oily', 'Oily', '油性'],
        ["I don't know", "I don't know", '不确定'],
      ],
    },
    hair: {
      concerns: [
        ['Thinning or shedding', 'Thinning or shedding', '发量少、掉发'],
        ['Dandruff or flaky scalp', 'Dandruff or flaky scalp', '头皮屑多'],
        ['Oily scalp', 'Oily scalp', '头皮爱出油'],
        ['Dry or itchy scalp', 'Dry or itchy scalp', '头皮干痒'],
        ['Dryness or frizz', 'Dryness or frizz', '发丝干燥毛躁'],
        ['Breakage or damage', 'Breakage or damage', '易断、受损'],
      ],
      types: [
        ['Clean or normal', 'Clean or normal', '正常'],
        ['Oily', 'Oily', '偏油'],
        ['Damaged or sensitive', 'Damaged or sensitive', '受损或敏感'],
        ["I don't know", "I don't know", '不确定'],
      ],
    },
    chemical: [
      ['Yes, currently', 'Yes, currently', '目前有'],
      ['Yes, in the past', 'Yes, in the past', '以前有过'],
      ['Never', 'Never', '从来没有'],
    ],
    other: ['Something else', '其他'],
    otherPrefix: ['Other: ', '其他：'],
  };

  /* The label for a saved value, in language L. "Other: …" keeps what the guest typed. */
  function label(list, value, L) {
    if (/^Other(: |$)/.test(value || '')) {
      var rest = String(value).replace(/^Other:? ?/, '');
      return rest ? OPTS.otherPrefix[L] + rest : OPTS.other[L];
    }
    for (var i = 0; i < list.length; i++) if (list[i][0] === value) return list[i][1 + L] || list[i][1];
    return value;
  }

  /* A language menu in the header: <div class="lang-wrap" id="…"></div>. Calls onChange(L). */
  function menu(host, onChange) {
    if (!host) return;
    host.innerHTML = '<button type="button" class="pill ev-lang-btn" aria-haspopup="true"></button><div class="ev-lang-menu" hidden></div>';
    var btn = host.querySelector('.ev-lang-btn'), m = host.querySelector('.ev-lang-menu');
    function paint() {
      var L = current();
      btn.innerHTML = LANGS[L].label + ' <span class="ev-caret"></span>';
      m.innerHTML = LANGS.map(function (l, i) {
        return '<button type="button" class="ev-lang-opt' + (i === L ? ' on' : '') + '" data-i="' + i + '">' + l.label + '</button>';
      }).join('');
    }
    btn.onclick = function (e) { e.stopPropagation(); m.hidden = !m.hidden; };
    m.onclick = function (e) {
      var b = e.target.closest('.ev-lang-opt'); if (!b) return;
      try { localStorage.setItem('intakeLang', LANGS[+b.dataset.i].code); } catch (err) {}
      m.hidden = true; paint(); onChange(current());
    };
    document.addEventListener('click', function (e) { if (!host.contains(e.target)) m.hidden = true; });
    paint();
  }

  var css = document.createElement('style');
  css.textContent =
    '.lang-wrap{position:relative}' +
    '.ev-lang-btn{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.16);color:rgba(255,255,255,.88);font:inherit;font-size:12px;font-weight:600;padding:6px 11px;border-radius:18px;cursor:pointer;white-space:nowrap}' +
    '.ev-lang-btn:hover{background:rgba(255,255,255,.2)}' +
    '.ev-caret{width:0;height:0;border-left:3.5px solid transparent;border-right:3.5px solid transparent;border-top:4px solid currentColor;opacity:.65}' +
    '.ev-lang-menu{position:absolute;top:calc(100% + 7px);right:0;z-index:300;background:#fff;border:1px solid #E4E9E5;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.16);padding:5px;min-width:130px}' +
    '.ev-lang-menu[hidden]{display:none}' +
    '.ev-lang-opt{display:block;width:100%;background:none;border:0;border-radius:7px;padding:8px 10px;text-align:left;font:inherit;font-size:13.5px;color:#2A332D;cursor:pointer}' +
    '.ev-lang-opt:hover,.ev-lang-opt.on{background:#EDF2EE}';
  document.head.appendChild(css);

  window.EventI18n = { LANGS: LANGS, current: current, OPTS: OPTS, label: label, menu: menu };
})();
