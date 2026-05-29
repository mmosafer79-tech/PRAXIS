# Crawl-Health-Fixes — mosafer-spine.de
**Stand:** 2026-05-29 | **Quelle:** Google Search Console → Indexierung → Seiten

---

## Problem-Analyse (GSC-Screenshot 2026-05-29)

| GSC-Fehler | Seiten | Ursache | Fix |
|---|---|---|---|
| Alternativer kanonischer Tag | 1 | `diagnostik.html` doppelt indexiert (HTTP + HTTPS) | 301-Redirect |
| 403 blockiert | 2 | `/docs/` von `.htaccess` gesperrt, aber nicht in robots.txt | `Disallow: /docs/` |
| Seite mit Weiterleitung | 2 | Alte URLs noch auf Strato-Server aktiv | 301-Redirects |
| Gefunden – nicht indexiert | 9 | Neue Seiten noch nicht gecrawlt | Sitemap einreichen |

---

## Implementierte Fixes (2026-05-29)

### Fix 1 — `.htaccess`: Legacy-URL-Redirects

Alte Seiten aus dem Strato-Ursprungs-Upload werden 301 auf neue Seitenstruktur geleitet:

```apache
RewriteRule ^diagnostik\.html$ /skoliose/erstdiagnose.html [R=301,L]
RewriteRule ^revisionschirurgie\.html$ /wirbelsaeulenchirurgie/revision.html [R=301,L]
RewriteRule ^operative-chirurgie\.html$ /skoliose/operative-behandlung.html [R=301,L]
```

**Mapping-Begründung:**
- `diagnostik.html` → `erstdiagnose.html`: Diagnoseprozess ist thematisch nächste Seite
- `revisionschirurgie.html` → `revision.html`: Exakte Entsprechung in neuer Struktur
- `operative-chirurgie.html` → `operative-behandlung.html`: OP-Übersicht passend zum Skoliosezentrum-Fokus

> **Hinweis:** Mappings basieren auf Dateinamen-Inferenz — die alten Seiten lagen nur
> auf Strato, nicht im Repo. Falls die alten Inhalte abweichen, Ziel anpassen.

### Fix 2 — `robots.txt`: `/docs/` blockieren

```
Disallow: /docs/
```

Verhindert, dass Google die intern gesperrten Docs-URLs crawlt und als 403-Fehler in GSC erscheinen.

---

## Offene Punkte nach diesem Fix

### Nach Deploy — In GSC manuell ausführen:

1. **URL-Prüfung** für `http://mosafer-spine.de/diagnostik.html` → "Indexierung beantragen"
2. **URL-Prüfung** für `https://www.mosafer-spine.de/diagnostik.html` → "Indexierung beantragen"  
3. **Sitemap neu einreichen** unter: GSC → Sitemaps → `sitemap.xml` → Erneut einreichen
4. **Core Web Vitals** prüfen (nach Indexierung)

### Noch offen (nächste Session):

- [ ] 9 "Gefunden – nicht indexiert" Seiten analysieren (welche URLs genau?)
- [ ] Sitemap mit `<lastmod>` ergänzen (H5 aus ACTION-PLAN)
- [ ] Altes `diagnostik.html` auf Strato-Server prüfen/löschen (nach Redirect-Bestätigung)
