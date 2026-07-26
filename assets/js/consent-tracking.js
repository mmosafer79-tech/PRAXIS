/*
 * Mosafer Spine — Consent-Banner (TDDDG § 25 / DSGVO) + Google Ads Conversion-Tracking
 *
 * Voraussetzung: Im <head> jeder Seite steht bereits der gtag.js-Block mit
 *   gtag('consent', 'default', { ... alle 'denied' ... });
 *   gtag('config', 'G-VQ4L0ZGEHG');   // GA4
 *   gtag('config', 'AW-18342120773'); // Google Ads
 *
 * Diese Datei ergänzt:
 *   1. Ein Consent-Banner, das den Consent Mode auf 'granted' hebt — erst nach aktiver Zustimmung.
 *   2. Conversion-Tracking für Terminbuchung (Doctolib), Anruf und E-Mail.
 *
 * Widerruf: window.mosaferConsent.reopen()  — im Datenschutztext verlinkt.
 */
(function () {
  'use strict';

  /* ---------------------------------------------------------------------
   * Google Ads Conversion-Labels
   * Aus Google Ads (Tools > Conversions) übernommen. Bei Änderung hier anpassen.
   * ------------------------------------------------------------------- */
  var ADS_ID = 'AW-18342120773';
  var CONVERSION_TERMIN = ADS_ID + '/tg0iCO_F1NYcEMWamqpE'; // Terminanfrage (Doctolib / E-Mail)
  var CONVERSION_ANRUF  = ADS_ID + '/P75yCI2cxtQcEMWamqpE'; // Telefonanruf

  var STORAGE_KEY = 'mosafer_consent_v1';
  var isEnglish = (document.documentElement.lang || 'de').toLowerCase().indexOf('en') === 0;

  var TXT = isEnglish ? {
    title: 'Privacy settings',
    body: 'We use cookies and similar technologies to measure how our website is used and how effective our ads are. These are only set with your consent. Necessary functions work without them.',
    accept: 'Accept all',
    reject: 'Necessary only',
    policy: 'Privacy policy',
    settings: 'Privacy settings'
  } : {
    title: 'Datenschutz-Einstellungen',
    body: 'Wir verwenden Cookies und vergleichbare Technologien, um die Nutzung unserer Website und die Wirksamkeit unserer Anzeigen zu messen. Diese werden ausschließlich mit Ihrer Einwilligung gesetzt. Die Website funktioniert auch ohne sie vollständig.',
    accept: 'Alle akzeptieren',
    reject: 'Nur notwendige',
    policy: 'Datenschutzerklärung',
    settings: 'Datenschutz-Einstellungen'
  };

  function gtagSafe() {
    if (typeof window.gtag === 'function') {
      window.gtag.apply(null, arguments);
    }
  }

  /* --- Consent lesen / schreiben ------------------------------------- */
  function readConsent() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function writeConsent(granted) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        granted: granted,
        timestamp: new Date().toISOString(),
        version: 1
      }));
    } catch (e) { /* localStorage blockiert — Consent gilt dann nur für diese Sitzung */ }
  }

  function applyConsent(granted) {
    var state = granted ? 'granted' : 'denied';
    gtagSafe('consent', 'update', {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state
    });
  }

  function hasConsent() {
    var stored = readConsent();
    return !!(stored && stored.granted);
  }

  /* --- Banner --------------------------------------------------------- */
  var STYLE = [
    '.ms-consent{position:fixed;left:0;right:0;bottom:0;z-index:2147483000;',
    'background:#fff;color:#1a2a4a;border-top:1px solid rgba(15,32,68,.12);',
    'box-shadow:0 -8px 32px rgba(15,32,68,.14);',
    'font-family:"DM Sans",system-ui,-apple-system,"Segoe UI",sans-serif;',
    'padding:20px 24px;transform:translateY(110%);transition:transform .32s ease}',
    '.ms-consent.is-open{transform:translateY(0)}',
    '.ms-consent__inner{max-width:1080px;margin:0 auto;display:flex;gap:28px;',
    'align-items:center;justify-content:space-between;flex-wrap:wrap}',
    '.ms-consent__text{flex:1 1 420px;min-width:280px}',
    '.ms-consent__title{font-size:16px;font-weight:700;margin:0 0 6px;color:#0f2044}',
    '.ms-consent__body{font-size:14px;line-height:1.55;margin:0;color:#4a5a7a}',
    '.ms-consent__body a{color:#2a5298;text-decoration:underline}',
    '.ms-consent__actions{display:flex;gap:12px;flex:0 0 auto;flex-wrap:wrap}',
    '.ms-consent__btn{font:inherit;font-size:14px;font-weight:600;cursor:pointer;',
    'padding:12px 26px;border-radius:6px;border:1px solid #2a5298;white-space:nowrap;',
    'transition:opacity .2s ease}',
    '.ms-consent__btn:hover{opacity:.85}',
    '.ms-consent__btn--accept{background:#2a5298;color:#fff}',
    '.ms-consent__btn--reject{background:#fff;color:#2a5298}',
    '.ms-consent__btn:focus-visible{outline:3px solid #c9a84c;outline-offset:2px}',
    '@media(max-width:640px){.ms-consent{padding:18px 16px}',
    '.ms-consent__inner{gap:16px}.ms-consent__actions{width:100%}',
    '.ms-consent__btn{flex:1 1 140px;text-align:center;padding:13px 16px}}'
  ].join('');

  function policyHref() {
    // Root-Seiten liegen flach, alle Unterseiten genau eine Ebene tiefer.
    var depth = window.location.pathname.replace(/\/+$/, '').split('/').length - 2;
    return (depth > 0 ? '../' : '') + 'datenschutz.html';
  }

  var bannerEl = null;

  function buildBanner() {
    var style = document.createElement('style');
    style.textContent = STYLE;
    document.head.appendChild(style);

    var el = document.createElement('div');
    el.className = 'ms-consent';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-label', TXT.title);
    el.innerHTML =
      '<div class="ms-consent__inner">' +
        '<div class="ms-consent__text">' +
          '<p class="ms-consent__title">' + TXT.title + '</p>' +
          '<p class="ms-consent__body">' + TXT.body + ' ' +
            '<a href="' + policyHref() + '">' + TXT.policy + '</a>' +
          '</p>' +
        '</div>' +
        '<div class="ms-consent__actions">' +
          '<button type="button" class="ms-consent__btn ms-consent__btn--reject" data-consent="reject">' + TXT.reject + '</button>' +
          '<button type="button" class="ms-consent__btn ms-consent__btn--accept" data-consent="accept">' + TXT.accept + '</button>' +
        '</div>' +
      '</div>';

    el.addEventListener('click', function (ev) {
      var choice = ev.target.getAttribute && ev.target.getAttribute('data-consent');
      if (!choice) return;
      var granted = choice === 'accept';
      writeConsent(granted);
      applyConsent(granted);
      closeBanner();
    });

    document.body.appendChild(el);
    // Nächster Frame, damit die Einblend-Transition greift.
    window.requestAnimationFrame(function () { el.classList.add('is-open'); });
    return el;
  }

  function openBanner() {
    if (!bannerEl) {
      bannerEl = buildBanner();
    } else {
      bannerEl.classList.add('is-open');
    }
  }

  function closeBanner() {
    if (bannerEl) bannerEl.classList.remove('is-open');
  }

  /* --- Conversion-Tracking -------------------------------------------- */
  function trackConversion(sendTo, eventName) {
    // Ohne Einwilligung wird nichts gesendet; Consent Mode würde zwar ohnehin
    // blocken, aber so entsteht gar kein Request.
    if (!hasConsent()) return;
    gtagSafe('event', 'conversion', { send_to: sendTo });
    gtagSafe('event', eventName); // zusätzlich als GA4-Ereignis
  }

  function bindConversions() {
    document.addEventListener('click', function (ev) {
      var link = ev.target.closest && ev.target.closest('a[href]');
      if (!link) return;
      var href = link.getAttribute('href') || '';

      if (href.indexOf('tel:') === 0) {
        trackConversion(CONVERSION_ANRUF, 'anruf_klick');
      } else if (href.indexOf('mailto:') === 0) {
        trackConversion(CONVERSION_TERMIN, 'email_klick');
      } else if (href.indexOf('doctolib') !== -1) {
        trackConversion(CONVERSION_TERMIN, 'termin_doctolib');
      }
    }, true);
  }

  /* --- Init ------------------------------------------------------------ */
  function init() {
    var stored = readConsent();
    if (stored) {
      applyConsent(stored.granted); // Auswahl aus früherem Besuch wiederherstellen
    } else {
      openBanner();
    }
    bindConversions();

    // Widerruf: window.mosaferConsent.reopen() oder <a href="#datenschutz-einstellungen">
    document.addEventListener('click', function (ev) {
      var link = ev.target.closest && ev.target.closest('a[href="#datenschutz-einstellungen"]');
      if (link) {
        ev.preventDefault();
        openBanner();
      }
    });
  }

  window.mosaferConsent = {
    reopen: openBanner,
    status: function () { return readConsent(); },
    revoke: function () {
      writeConsent(false);
      applyConsent(false);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
