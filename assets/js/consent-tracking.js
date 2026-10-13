/*
 * Mosafer Spine — Consent-Banner (TDDDG § 25 / DSGVO) + Google Ads Conversion-Tracking
 *
 * Das Google-Tag (GA4 + Google Ads) steht NICHT mehr im <head> der Seiten. Es wird erst hier
 * geladen, und zwar ausschließlich nach aktiver Zustimmung ("Alle akzeptieren", auch aus der
 * gespeicherten Auswahl eines früheren Besuchs). Ohne Zustimmung geht kein Request an Google.
 * Reihenfolge beim Laden: consent default (denied) -> consent update (granted) -> js -> config
 * -> Script-Tag, damit schon der erste Seitenaufruf nach der Zustimmung vollständig gemessen wird.
 *
 * Diese Datei enthält:
 *   1. Ein Consent-Banner, das den Google-Tag erst nach aktiver Zustimmung lädt.
 *   2. Conversion-Tracking für Terminbuchung (Doctolib), Anruf und E-Mail (nur mit Zustimmung).
 *   3. Aktivierung der Matomo-Heatmaps nach Zustimmung.
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
  var CONVERSION_TERMIN = ADS_ID + '/tg0iCO_F1NYcEMWamqpE'; // Terminanfragen (Doctolib / Terminseite), primär
  var CONVERSION_ANRUF  = ADS_ID + '/kSGsCK_z3ZodEMWamqpE'; // Anruf-Klick Website (sekundär, seit 13.10.2026)
  var CONVERSION_EMAIL  = ADS_ID + '/YQaBCKzz3ZodEMWamqpE'; // E-Mail-Klick Website (sekundär, seit 13.10.2026)

  var STORAGE_KEY = 'mosafer_consent_v1';
  var HEATMAP_ENDE = new Date('2026-11-11T00:00:00+01:00'); // Ende der Heatmap-Testphase: 10.11.2026
  var isEnglish = (document.documentElement.lang || 'de').toLowerCase().indexOf('en') === 0;

  var TXT = isEnglish ? {
    title: 'Privacy settings',
    body: 'With “Accept all”, we load Google Analytics and Google Ads (Google Ireland, transfer to the US possible), set cookies and enable the Matomo heatmap to measure usage and ad effectiveness. With “Necessary only”, none of this happens and the website works fully. Cookieless Matomo visit measurement runs regardless.',
    accept: 'Accept all',
    reject: 'Necessary only',
    policy: 'Privacy policy',
    settings: 'Privacy settings'
  } : {
    title: 'Datenschutz-Einstellungen',
    body: 'Mit „Alle akzeptieren“ laden wir Google Analytics und Google Ads (Google Ireland, Übermittlung in die USA möglich), setzen Cookies und aktivieren die Heatmap mit Matomo, um Nutzung und Anzeigenwirksamkeit zu messen. Mit „Nur notwendige“ geschieht davon nichts; die Website funktioniert vollständig. Die cookielose Matomo-Reichweitenmessung läuft unabhängig davon.',
    accept: 'Alle akzeptieren',
    reject: 'Nur notwendige',
    policy: 'Datenschutzerklärung',
    settings: 'Datenschutz-Einstellungen'
  };

  /* --- Google-Tag: wird erst nach Einwilligung geladen ----------------- */
  var GA_ID = 'G-VQ4L0ZGEHG';
  var googleLoaded = false;   // Tag wurde in DIESER Seitenansicht aktiviert
  var consentGranted = null;  // In-Memory-Stand, falls localStorage blockiert ist

  function ensureGtag() {
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== 'function') {
      // gtag muss das arguments-Objekt in den dataLayer schieben (kein Array).
      window.gtag = function () { window.dataLayer.push(arguments); };
      // Voreinstellung: alles abgelehnt. ad_personalization bleibt auch nach Zustimmung aus,
      // da wir nur messen (Datenschutzerklärung Ziffer 9 und 10), nicht personalisieren.
      window.gtag('consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied'
      });
    }
  }

  function gtagSafe() {
    ensureGtag();
    window.gtag.apply(null, arguments);
  }

  function googleScriptPresent() {
    return !!document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
  }

  function loadGoogleTag() {
    if (googleLoaded) return;
    googleLoaded = true;
    // Eine noch gecachte alte Seitenversion lädt das Tag selbst im <head>: nichts doppelt laden.
    if (googleScriptPresent()) return;
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
    window.gtag('config', ADS_ID);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  function deleteGoogleCookies() {
    var host = window.location.hostname;
    var parts = host.split('.');
    var domains = ['', host, '.' + host, '.' + parts.slice(-2).join('.')];
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (!/^(_ga|_gid|_gat|_gcl_|_gac_)/.test(name)) return;
      domains.forEach(function (d) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' +
          (d ? '; domain=' + d : '');
      });
    });
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
    consentGranted = granted;
    try {
      ensureGtag();
      if (granted) {
        // Reihenfolge ist wichtig: erst die Einwilligung melden, dann Tag laden und konfigurieren.
        window.gtag('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'denied',
          analytics_storage: 'granted'
        });
        loadGoogleTag();
      } else {
        window.gtag('consent', 'update', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied'
        });
      }
    } catch (e) { /* Das Google-Tag darf Banner und Heatmap-Logik nie blockieren. */ }

    // Matomo-Heatmaps (nur Klick-/Scroll-Karten): ausschließlich nach Einwilligung.
    // Standard ist AUS (Snippet der jeweiligen Seite); Widerruf wirkt ab dem nächsten Seitenaufruf.
    // Zusätzliche Sicherung: Nach Ende der Testphase (10.11.2026, Datenschutzerklärung Ziffer 11)
    // wird die Heatmap auch bei Zustimmung nicht mehr aktiviert, selbst wenn sie in Matomo noch läuft.
    if (window._paq) {
      var heatmapAn = granted && new Date() < HEATMAP_ENDE;
      window._paq.push([heatmapAn ? 'HeatmapSessionRecording::enable' : 'HeatmapSessionRecording::disable']);
    }

    // Ablehnung/Widerruf: Google-Cookies entfernen, auch Reste aus früheren Besuchen mit Zustimmung
    // (z. B. vor Einführung des Nachladens). Neu geladen wird nur, wenn das Tag in dieser
    // Seitenansicht schon aktiv war, damit keine weiteren Meldungen an Google gehen.
    // (Beim Seitenstart mit gespeicherter Ablehnung ist googleLoaded false, daher kein Neuladen.)
    if (!granted) {
      try { deleteGoogleCookies(); } catch (e) { /* ignorieren */ }
      if (googleLoaded) window.location.reload();
    }
  }

  function hasConsent() {
    if (consentGranted !== null) return consentGranted;
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
    // Matomo läuft cookielos (disableCookies + setDoNotTrack) und misst
    // Seitenaufrufe bereits ohne Einwilligung. Dieses Ereignis liegt daher
    // konsistent VOR dem Consent-Gate — nur so taugt es als google-unabhängige
    // Zweitmessung. Es werden dabei keine Cookies gesetzt.
    if (window._paq) window._paq.push(['trackEvent', 'Termin', eventName]);

    // Ab hier nur mit Einwilligung: Google Ads / GA4. Ohne Einwilligung ist das
    // Google-Tag gar nicht geladen, es entsteht also kein Request.
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
        trackConversion(CONVERSION_EMAIL, 'email_klick');
      } else if (href.indexOf('doctolib') !== -1 || href.indexOf('termin.html') !== -1) {
        // termin.html ist die eigene Weiterleitungsseite zu Doctolib (seit 72314a1,
        // 14.09.2026). Ohne diese Bedingung feuert die Termin-Conversion nicht mehr.
        trackConversion(CONVERSION_TERMIN, 'termin_doctolib');
      }
    }, true);
  }

  /* --- Link "Datenschutz-Einstellungen" im Footer jeder Seite ------------- */
  function addSettingsLink() {
    // Widerruf muss so einfach sein wie die Einwilligung (Art. 7 Abs. 3 DSGVO).
    if (document.querySelector('footer a[href="#datenschutz-einstellungen"]')) return;
    var list = document.querySelector('footer .footer-links');
    if (!list) return;
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#datenschutz-einstellungen';
    a.textContent = TXT.settings;
    li.appendChild(a);
    var policy = list.querySelector('a[href$="datenschutz.html"]');
    var policyLi = policy && policy.parentNode;
    if (policyLi && policyLi.parentNode === list) {
      list.insertBefore(li, policyLi.nextSibling);
    } else {
      list.appendChild(li);
    }
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
    addSettingsLink();

    // Widerruf in einem anderen Tab oder bei Rückkehr aus dem Browser-Cache (Zurück-Taste):
    // War das Google-Tag hier schon geladen, neu laden, damit es nicht weiterläuft.
    function recheckConsent() {
      var s = readConsent();
      if (googleLoaded && s && s.granted === false) {
        try { deleteGoogleCookies(); } catch (e) { /* ignorieren */ }
        window.location.reload();
      }
    }
    window.addEventListener('pageshow', function (e) { if (e.persisted) recheckConsent(); });
    window.addEventListener('storage', function (e) { if (e.key === STORAGE_KEY) recheckConsent(); });

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
