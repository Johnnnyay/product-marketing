/* Admin login for the pages on this site: the product page, the assessment and All reports.

   The passcode is checked by the API (POST /api/unlock), never in this file or in any page. The API
   answers with a signed session token; this file keeps the token in localStorage and sends it as
   `Authorization: Bearer <token>`. One login therefore covers all three pages. Changing the passcode
   on the server (IBO_UNLOCK_CODE in Vercel) makes every saved token stop working.

   AdminSession.has()               is a token saved on this device
   AdminSession.login(onSuccess)    show the sign-in dialog; calls onSuccess after a good passcode
   AdminSession.logout()            forget the token
   AdminSession.headers()           { Authorization } for a fetch to the API, or {}
   AdminSession.openReport(rid)     open a report in full in a new tab, locked or not
   AdminSession.t(key)              a label in the page's current language (all, admin, dots) */
(function () {
  var API = 'https://health-intake-api.vercel.app';
  var KEY = 'pv_admin_token';

  var STR = {
    en: { title: 'Admin login', label: 'Admin passcode', go: 'Sign in', cancel: 'Cancel', wrong: 'Incorrect passcode',
          fail: 'Could not sign in. Check the connection and try again.', all: 'All reports', admin: 'Admin ✓', out: 'Sign out of admin' },
    zh: { title: '管理员登录', label: '管理员密码', go: '登录', cancel: '取消', wrong: '密码不正确',
          fail: '登录失败，请检查网络后重试。', all: '全部报告', admin: '管理员 ✓', out: '退出管理员登录' },
    es: { title: 'Acceso de administrador', label: 'Código de administrador', go: 'Entrar', cancel: 'Cancelar', wrong: 'Código incorrecto',
          fail: 'No se pudo iniciar sesión. Revisa la conexión e inténtalo de nuevo.', all: 'Todos los informes', admin: 'Admin ✓', out: 'Salir de administrador' },
    hi: { title: 'एडमिन लॉगिन', label: 'एडमिन पासकोड', go: 'साइन इन', cancel: 'रद्द करें', wrong: 'गलत पासकोड',
          fail: 'साइन इन नहीं हो सका। कनेक्शन जाँचकर फिर कोशिश करें।', all: 'सभी रिपोर्ट', admin: 'एडमिन ✓', out: 'एडमिन से साइन आउट' }
  };
  function lang() { var l = (document.documentElement.lang || 'en').slice(0, 2); return STR[l] ? l : 'en'; }
  function t(k) { return STR[lang()][k]; }

  function get() { try { return localStorage.getItem(KEY) || ''; } catch (e) { return ''; } }
  function set(v) { try { if (v) localStorage.setItem(KEY, v); else localStorage.removeItem(KEY); } catch (e) {} }

  var box = null, onOk = null;
  function css() {
    if (document.getElementById('admin-session-css')) return;
    var s = document.createElement('style'); s.id = 'admin-session-css';
    s.textContent =
      '.as-modal{display:none;position:fixed;inset:0;z-index:100000;background:rgba(20,25,34,.45);align-items:flex-start;justify-content:center;padding-top:14vh}' +
      '.as-modal.open{display:flex}' +
      '.as-dialog{width:min(360px,92vw);background:#fff;border-radius:18px;padding:24px 24px 20px;box-shadow:0 24px 70px rgba(20,25,34,.35);font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#2A332D}' +
      '.as-title{font-size:17px;font-weight:700;margin-bottom:14px}' +
      '.as-dialog label{display:block;font-size:12.5px;color:#6E7B74;margin-bottom:6px}' +
      '.as-dialog input{width:100%;box-sizing:border-box;font:inherit;font-size:18px;letter-spacing:.2em;padding:11px 14px;border:1.5px solid #d1d5db;border-radius:10px;outline:none}' +
      '.as-dialog input:focus{border-color:#3D5A4C}' +
      '.as-err{min-height:18px;margin:8px 0 6px;font-size:12.5px;color:#b3261e}' +
      '.as-actions{display:flex;justify-content:flex-end;gap:10px}' +
      '.as-cancel{background:none;border:0;font:inherit;font-size:14px;color:#6E7B74;cursor:pointer;padding:12px 14px}' +
      '.as-go{background:#3D5A4C;color:#fff;border:0;border-radius:999px;padding:12px 26px;font:inherit;font-weight:600;font-size:14px;cursor:pointer}' +
      '.as-go:disabled{opacity:.6;cursor:default}';
    document.head.appendChild(s);
  }
  function build() {
    css();
    if (box) box.remove();
    box = document.createElement('div'); box.className = 'as-modal';
    box.innerHTML =
      '<form class="as-dialog" autocomplete="off">' +
        '<div class="as-title"></div><label for="as-code"></label>' +
        '<input id="as-code" type="password" inputmode="numeric" autocomplete="off" maxlength="12">' +
        '<div class="as-err" role="alert"></div>' +
        '<div class="as-actions"><button type="button" class="as-cancel"></button><button type="submit" class="as-go"></button></div>' +
      '</form>';
    box.querySelector('.as-title').textContent = t('title');
    box.querySelector('label').textContent = t('label');
    box.querySelector('.as-cancel').textContent = t('cancel');
    box.querySelector('.as-go').textContent = t('go');
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    box.querySelector('.as-cancel').addEventListener('click', close);
    box.querySelector('form').addEventListener('submit', submit);
    document.body.appendChild(box);
  }
  function close() { if (box) box.classList.remove('open'); }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

  function submit(ev) {
    ev.preventDefault();
    var input = box.querySelector('input'), go = box.querySelector('.as-go'), err = box.querySelector('.as-err');
    var code = input.value.trim(); if (!code) return;
    go.disabled = true; err.textContent = '';
    fetch(API + '/api/unlock', { method: 'POST', headers: { 'Content-Type': 'application/json' },
                                 body: JSON.stringify({ action: 'login', code: code }) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, status: r.status, j: j }; }); })
      .then(function (x) {
        go.disabled = false;
        if (x.ok && x.j.token) { set(x.j.token); close(); if (onOk) onOk(); return; }
        err.textContent = x.status === 401 ? t('wrong') : t('fail'); input.value = ''; input.focus();
      })
      .catch(function () { go.disabled = false; err.textContent = t('fail'); });
  }

  function login(cb) {
    onOk = cb || null; build(); box.classList.add('open');
    setTimeout(function () { box.querySelector('input').focus(); }, 40);
  }

  /* Open a report in a new tab with the admin session, so a locked report shows in full. The token
     goes in a form body to the API, which sets its own cookie and redirects to the report. */
  function openReport(rid) {
    var f = document.createElement('form');
    f.method = 'POST'; f.action = API + '/api/report'; f.target = '_blank'; f.style.display = 'none';
    [['token', get()], ['r', rid]].forEach(function (p) {
      var i = document.createElement('input'); i.type = 'hidden'; i.name = p[0]; i.value = p[1]; f.appendChild(i);
    });
    document.body.appendChild(f); f.submit(); f.remove();
  }

  window.AdminSession = {
    API: API,
    has: function () { return !!get(); },
    login: login,
    logout: function () { set(''); },
    headers: function () { var k = get(); return k ? { Authorization: 'Bearer ' + k } : {}; },
    openReport: openReport,
    t: t
  };
})();
