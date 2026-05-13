/* ============================================================
   YONGYEOKYO APAC 6N — Autonomous i18n Engine v2
   ============================================================
   FULLY DECOUPLED from monolith HTML/CSS.
   - Builds its own floating UI via JavaScript
   - All styles are inline (immune to monolith overrides)
   - Local JSON files only. NO external API calls.
   ============================================================ */

(function () {
  'use strict';

  /* ── Config ─────────────────────────────────────────────── */
  var SUPPORTED = [
    { code: 'en', label: 'EN' },
    { code: 'ko', label: 'KR' },
    { code: 'ja', label: 'JP' },
    { code: 'tw', label: 'TW' },
    { code: 'cn', label: 'CN' }
  ];
  var DEFAULT_LANG = 'en';
  var CACHE = {};

  /* ── Selector-based translation map ────────────────────── */
  var SELECTOR_MAP = {
    '.hero .eyebrow':                     'hero.eyebrow',
    '.hero h1':                           'hero.title',
    '.hero .cert-stamp':                  'hero.cert',
    '.hero .lead':                        'hero.lead',
    '.hero .sogo-primary-cta':            'hero.cta',
    '.hero .result-main':                 'hero.result_main',
    '.hero .result-sub':                  'hero.result_sub',
    '.yyk-contact-title':                 'contact.title',
    '.yyk-authority-entity':              'contact.entity',
    '.yyk-authority-meta':                'contact.meta',
    '#product-architecture .eyebrow':     'product.eyebrow',
    '#product-architecture h2':           'product.title',
    '#product-architecture .hint':        'product.hint',
    '#product-architecture .dense-card:nth-child(1) .card-title': 'product.core.title',
    '#product-architecture .dense-card:nth-child(1) .cert-stamp': 'product.core.cert',
    '#product-architecture .dense-card:nth-child(1) .card-text': 'product.core.text',
    '#product-architecture .dense-card:nth-child(1) .kv-row:nth-child(1) span:last-child': 'product.core.kv1',
    '#product-architecture .dense-card:nth-child(1) .kv-row:nth-child(2) span:last-child': 'product.core.kv2',
    '#product-architecture .dense-card:nth-child(2) .card-title': 'product.precision.title',
    '#product-architecture .dense-card:nth-child(2) .cert-stamp': 'product.precision.cert',
    '#product-architecture .dense-card:nth-child(2) .card-text': 'product.precision.text',
    '#product-architecture .dense-card:nth-child(2) .kv-row:nth-child(1) span:last-child': 'product.precision.kv1',
    '#product-architecture .dense-card:nth-child(2) .kv-row:nth-child(2) span:last-child': 'product.precision.kv2',
    '#product-architecture .dense-card:nth-child(3) .card-title': 'product.ultra.title',
    '#product-architecture .dense-card:nth-child(3) .cert-stamp': 'product.ultra.cert',
    '#product-architecture .dense-card:nth-child(3) .card-text': 'product.ultra.text',
    '#product-architecture .dense-card:nth-child(3) .kv-row:nth-child(1) span:last-child': 'product.ultra.kv1',
    '#product-architecture .dense-card:nth-child(3) .kv-row:nth-child(2) span:last-child': 'product.ultra.kv2',
    '#infrastructure-control .eyebrow':   'infra.eyebrow',
    '#infrastructure-control h2':         'infra.title',
    '#infrastructure-control .hint':      'infra.hint',
    '#supply-logistics-hubs .eyebrow':    'logistics.eyebrow',
    '#supply-logistics-hubs h2':          'logistics.title',
    '.yyk-audit-kicker':                  'panel.kicker',
    '#yykAuditModeTitle':                 'panel.title',
    '#yykAuditModeContext':               'panel.context',
    '.yyk-exec-kicker':                   'exec.kicker',
    '.yyk-exec-title':                    'exec.title',
    '.yyk-exec-sub':                      'exec.sub',
    '#yykAuditWorkTitle':                 'workspace.title',
    '#yykAuditWorkCopy':                  'workspace.copy',
    '.yyk-terminal-brand':                'nav.brand',
    '[data-yyk-mode="procurement"]':      'mode.procurement',
    '[data-yyk-mode="engineering"]':      'mode.engineering',
    '[data-yyk-mode="compliance"]':       'mode.compliance',
    '.yyk-arch-kicker':                   'arch.kicker',
    '.yyk-arch-title':                    'arch.title',
    '.trust-control-panel .eyebrow':      'trust.eyebrow'
  };

  var HTML_MODE_SELECTORS = { '.hero .lead': true };

  /* ── State ──────────────────────────────────────────────── */
  var ORIGINALS = {};
  var originalsStored = false;
  var panelButtons = [];

  /* ── Helpers ────────────────────────────────────────────── */
  function getCurrentLang() {
    return localStorage.getItem('yyk-lang') || DEFAULT_LANG;
  }

  function resolve(obj, key) {
    var parts = key.split('.');
    var val = obj;
    for (var i = 0; i < parts.length; i++) {
      if (val && typeof val === 'object' && parts[i] in val) val = val[parts[i]];
      else return undefined;
    }
    return val;
  }

  /* ── Build autonomous floating panel ───────────────────── */
  function buildFloatingPanel() {
    // Kill any old panel if exists
    var old = document.getElementById('yyk-float-i18n');
    if (old) old.remove();

    // Container — fixed position, top-right, immune to monolith
    var panel = document.createElement('div');
    panel.id = 'yyk-float-i18n';
    panel.setAttribute('style', [
      'all: initial',                       // Reset ALL inherited styles
      'position: fixed',
      'top: 8px',
      'right: 12px',
      'z-index: 2147483647',               // Maximum z-index
      'display: flex',
      'flex-direction: row',
      'align-items: center',
      'gap: 0',
      'background: rgba(10, 10, 14, 0.92)',
      'border: 1px solid rgba(201, 162, 39, 0.4)',
      'border-radius: 6px',
      'padding: 2px',
      'box-shadow: 0 2px 16px rgba(0,0,0,0.5), 0 0 1px rgba(201,162,39,0.3)',
      'font-family: "SF Mono", "Fira Code", "Cascadia Code", "Consolas", monospace',
      'font-size: 11px',
      'letter-spacing: 0.06em',
      'line-height: 1',
      'pointer-events: auto',
      'user-select: none',
      '-webkit-user-select: none',
      'backdrop-filter: blur(8px)',
      '-webkit-backdrop-filter: blur(8px)',
      'opacity: 1',
      'visibility: visible',
      'overflow: visible',
      'transform: none',
      'width: auto',
      'height: auto',
      'max-width: none',
      'max-height: none',
      'margin: 0',
      'float: none',
      'clip: auto',
      'clip-path: none'
    ].join(' !important; ') + ' !important;');

    var currentLang = getCurrentLang();

    SUPPORTED.forEach(function (item) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = item.label;
      btn.setAttribute('data-lang', item.code);

      var isActive = item.code === currentLang;

      applyButtonStyle(btn, isActive);

      btn.addEventListener('mouseenter', function () {
        if (btn.getAttribute('data-lang') !== getCurrentLang()) {
          btn.style.setProperty('background', 'rgba(201, 162, 39, 0.15)', 'important');
          btn.style.setProperty('color', '#fff', 'important');
        }
      });
      btn.addEventListener('mouseleave', function () {
        var active = btn.getAttribute('data-lang') === getCurrentLang();
        applyButtonStyle(btn, active);
      });
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        setLanguage(item.code);
      });

      panelButtons.push(btn);
      panel.appendChild(btn);
    });

    // Inject into body (outside ALL monolith containers)
    document.body.appendChild(panel);
  }

  function applyButtonStyle(btn, isActive) {
    btn.setAttribute('style', [
      'all: unset',
      'display: inline-flex',
      'align-items: center',
      'justify-content: center',
      'min-width: 32px',
      'height: 24px',
      'padding: 0 7px',
      'margin: 0',
      'border: none',
      'border-radius: 4px',
      'cursor: pointer',
      'font-family: "SF Mono", "Fira Code", "Cascadia Code", "Consolas", monospace',
      'font-size: 11px',
      'font-weight: ' + (isActive ? '700' : '400'),
      'letter-spacing: 0.06em',
      'line-height: 1',
      'color: ' + (isActive ? '#fff' : 'rgba(255,255,255,0.5)'),
      'background: ' + (isActive ? 'rgba(201, 162, 39, 0.28)' : 'transparent'),
      'text-shadow: ' + (isActive ? '0 0 6px rgba(201,162,39,0.7)' : 'none'),
      'transition: all 0.15s ease',
      'pointer-events: auto',
      'visibility: visible',
      'opacity: 1',
      'position: static',
      'float: none',
      'transform: none',
      'overflow: visible',
      'text-decoration: none',
      'box-shadow: none',
      'outline: none',
      'white-space: nowrap'
    ].join(' !important; ') + ' !important;');
  }

  function updateButtons(lang) {
    panelButtons.forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      applyButtonStyle(btn, active);
    });
  }

  /* ── Translation loading ───────────────────────────────── */
  function loadTranslation(lang, callback) {
    if (lang === DEFAULT_LANG) { callback(null); return; }
    if (CACHE[lang]) { callback(CACHE[lang]); return; }
    if (window['YYK_I18N_DATA_' + lang]) {
      CACHE[lang] = window['YYK_I18N_DATA_' + lang];
      callback(CACHE[lang]);
      return;
    }

    // Set up JSONP-like callback
    window.YYK_I18N_ONLOAD = function(loadedLang) {
      if (loadedLang === lang) {
        CACHE[lang] = window['YYK_I18N_DATA_' + lang];
        callback(CACHE[lang]);
      }
    };

    var script = document.createElement('script');
    script.src = 'lang/' + lang + '.js';
    script.onerror = function () {
      console.error('[i18n] Script load error for', lang);
      callback(null);
    };
    document.head.appendChild(script);
  }

  /* ── Originals store ───────────────────────────────────── */
  function storeOriginals() {
    if (originalsStored) return;
    Object.keys(SELECTOR_MAP).forEach(function (sel) {
      var el = document.querySelector(sel);
      if (!el) return;
      var key = SELECTOR_MAP[sel];
      if (HTML_MODE_SELECTORS[sel]) ORIGINALS[key] = { html: el.innerHTML };
      else ORIGINALS[key] = { text: el.textContent };
    });
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!ORIGINALS[key]) ORIGINALS[key] = { text: el.textContent };
    });
    originalsStored = true;
  }

  /* ── Apply translations ────────────────────────────────── */
  function applyTranslation(data) {
    // Selector-based
    Object.keys(SELECTOR_MAP).forEach(function (sel) {
      var el = document.querySelector(sel);
      if (!el) return;
      var key = SELECTOR_MAP[sel];
      if (data === null) {
        if (ORIGINALS[key]) {
          if (ORIGINALS[key].html !== undefined) el.innerHTML = ORIGINALS[key].html;
          else el.textContent = ORIGINALS[key].text;
        }
        return;
      }
      var val = resolve(data, key);
      if (val !== undefined) {
        if (HTML_MODE_SELECTORS[sel]) el.innerHTML = val;
        else el.textContent = val;
      }
    });

    // data-i18n attribute-based
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      // Skip our own floating panel buttons
      if (el.closest('#yyk-float-i18n')) return;

      var key = el.getAttribute('data-i18n');
      if (data === null) {
        if (ORIGINALS[key]) el.textContent = ORIGINALS[key].text;
        return;
      }
      var val = resolve(data, key);
      if (val !== undefined) el.textContent = val;
    });
  }

  /* ── Set language ──────────────────────────────────────── */
  function setLanguage(lang) {
    if (!SUPPORTED.some(function (s) { return s.code === lang; })) return;

    storeOriginals();
    loadTranslation(lang, function (data) {
      applyTranslation(data);
      purgeGhosts();  // Re-hide ghost elements after translation
      document.documentElement.lang = lang;
      localStorage.setItem('yyk-lang', lang);
      updateButtons(lang);

      // Update body class for CSS hooks
      document.body.classList.remove('lang-en', 'lang-ko', 'lang-ja', 'lang-cn', 'lang-tw');
      var cls = (lang === 'tw') ? 'lang-cn' : 'lang-' + lang;
      document.body.classList.add(cls);
    });
  }

  /* ── Purge ghost elements ────────────────────────────────
     The auto-translate script wrapped HTML comments and dev
     markers in <span data-i18n> — making invisible content
     visible. This function hides them on load.
     ─────────────────────────────────────────────────────── */
  var GHOST_PATTERNS = [
    /^HTML$/,
    /^<!DOCTYPE/i,
    /^<!-/,                              // HTML comments made visible
    /SAP\/TRADING-DESK/i,
    /YYK[-_]D\d+/i,                     // D27, D25 markers
    /ARCHITECTURE[-_]PLACEMENT/i,
    /GUARDIAN.*CANONICAL/i,
    /HYBRID.*CANONICAL/i,
    /INPLACE_FIX/i,
    /BACKEND.*START$/i,
    /BACKEND.*END$/i,
    /LOCK-SCRIPT/i,
    /^\/Stage\s/i,                       // "/Stage 2.4..."
    /^\/YYK\s/i,                         // "/YYK RFQ..."
    /^\/용역교/,                           // "/용역교 v3.2"
    /^\/ヨンギョキョ/,                      // JP: "/ヨンギョキョ"
    /^\/永易教/,                           // CN/TW
    /제어판 — SAP/,                       // KR: "제어판 — SAP/TRADING-DESK"
    /コントロール パネル — SAP/,             // JP
    /UX 안전 계층/,                        // KR: "2.3단계 UX 안전 계층"
    /UX 시각적 수정/,                      // KR: "2.4단계 UX 시각적 수정"
    /UX セーフティ/i,                      // JP
    /UX 安全/,                            // CN/TW
    /D25_RSI/i,                          // D25_RSI_LIVE_BACKEND etc.
    /D25_REAL/i,                         // D25_REAL_BACKEND...
    /RFQ-LOCK-SCRIPT/i,                  // YYK-배치-백엔드-RFQ-LOCK-SCRIPT
    /배치-백엔드/,                          // KR: batch-backend

    /* ── v2.1 additions: architecture notes & dev instructions ── */
    /SVG BATCH FLOW/i,                   // SVG animation debug marker
    /^Hybrid section assembled/i,        // Architecture placement note
    /controls remain canonical from File/i, // Dev file-reference note
    /^This block replaces/i,             // Dev consolidation instruction
    /^All repeated recommendations/i,    // Dev consolidation instruction
    /^This content is restricted to VDR/i, // VDR access restriction note
    /KYC.*sanctions.*CoA.*tolerance gate/i, // Internal gate description
    /^A controlled, additive integration/i, // Dev architecture note
    /^This framework applies to YONGYEOKYO/i, // Dev framework note
    /^Placed after Product Passport/i,   // Dev placement instruction
    /^Placed immediately after/i,        // Dev placement instruction
    /^This is a frontend-ready API/i,    // Dev API contract note
    /real deployment can connect/i,      // Dev deployment note
    /Static HTML runs the monitoring/i,  // Dev simulation note
    /Do not create separate recommendation/i, // Dev instruction
    /ENHANCED_MATRIX_REMOVED/i,          // Architecture removal marker
    /PHASE.*INTEGRATION.*SUITE/i,        // Phase integration dev marker
    /SELF.HEAL/i,                        // Self-healing dev marker
    /AI.Guardian.Tracker/i               // AI tracker dev marker
  ];

  function purgeGhosts() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      // Skip our floating panel
      if (el.closest('#yyk-float-i18n')) return;

      var txt = (el.textContent || '').trim();
      if (!txt) return;

      for (var i = 0; i < GHOST_PATTERNS.length; i++) {
        if (GHOST_PATTERNS[i].test(txt)) {
          el.style.setProperty('display', 'none', 'important');
          el.style.setProperty('visibility', 'hidden', 'important');
          el.style.setProperty('height', '0', 'important');
          el.style.setProperty('overflow', 'hidden', 'important');
          el.setAttribute('aria-hidden', 'true');
          break;
        }
      }
    });

    // Hide debug dump elements (e.g. #OUT_1 pre blocks)
    ['OUT_1', 'OUT_2', 'OUT_3'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) {
        el.style.setProperty('display', 'none', 'important');
        el.setAttribute('aria-hidden', 'true');
      }
    });
  }

  /* ── Init ───────────────────────────────────────────────── */
  function init() {
    // Hide the old monolith language nav (if it exists)
    var oldNav = document.getElementById('yyk-i18n-nav');
    if (oldNav) oldNav.style.setProperty('display', 'none', 'important');

    // Purge dev-comment ghost elements
    purgeGhosts();

    // Build our autonomous panel
    buildFloatingPanel();

    // Restore saved language
    var saved = getCurrentLang();
    if (saved !== DEFAULT_LANG) setLanguage(saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  /* ── Public API ─────────────────────────────────────────── */
  window.YYKi18n = {
    setLanguage: setLanguage,
    getCurrentLang: getCurrentLang,
    SUPPORTED_LANGS: SUPPORTED.map(function (s) { return s.code; })
  };

})();
