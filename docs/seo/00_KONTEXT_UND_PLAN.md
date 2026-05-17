# Mosafer Spine — SEO Projekt-Kontext & Plan (Konsolidiert)

**Stand:** 17.05.2026 (vormittags — nach Phase 0 Abschluss)
**Projekt-Owner:** Dr. Mostafa Mosafer
**Domain:** https://www.mosafer-spine.de
**Standort aktuell:** Krankenhausstraße 20, 83569 Vogtareuth
**Standort ab Juli 2026:** Rosenheim (eigene Praxis Mosafer Spine)
**Klinik-Affiliation ab August 2026:** Chefarzt Klinikum Traunstein (Kinderorthopädie & Skoliose)

---

## 1. Business-Kontext (verbindlich)

### Karriere-Timeline
- **Aktuell bis Juli 2026:** Chefarzt Schön Klinik Vogtareuth (Backlink NICHT möglich)
- **Ab Juli 2026:** Eigene Praxis Mosafer Spine startet in Rosenheim
- **Ab August 2026:** Chefarzt Klinikum Traunstein (Backlink **realistisch** — SEO-Hebel Q3/Q4 2026)

### Spezialisierung & Brand
- **Praxis-Untertitel:** „Skoliosezentrum Rosenheim" (nicht „Wirbelsäulenzentrum")
- **Firmenname:** „Mosafer Spine"
- **USP:** Namentlicher Skoliose-Spezialist (Hauptkonkurrent Orthozentrum.net Rosenheim: 9 Ärzte, **kein** Skoliose-Spezialist)
- **Kernschwerpunkte:** Skoliose (Kinder + Erwachsene), VBT, MAGEC, NEMOST, Revision, minimalinvasiv, biologische Therapie (PRP/ACP)
- **24-Fragen-Zweitmeinungs-Methode** als Trust-Anker

### Zielgruppen
- Primär: Privatpatienten, Selbstzahler, Beihilfeberechtigte
- Sekundär: Internationale Patienten (DE/EN/AR/FA Site vorhanden)
- Tonalität: ruhig, angstnehmend, nicht verkäuferisch — verunsicherte Familien

## 2. Site-Status (Stand 2026-05-17)

### Tech-Stack
- Strato Hosting, SFTP-Deploy via `deploy-mosafer-spine.sh`
- GitHub Repo: `github.com/mmosafer79-tech/PRAXIS` (privat)
- **Git-Workflow Pflicht:** vor jedem Deployment committen
- **23 HTML-Seiten** live (siehe Page-Inventory unten)
- Static HTML/CSS, keine JS-Frameworks
- Tracking: nur Google Search Console (kein Cookie-Banner nötig)

### Deployment Credentials
- Server: `5019296278.ssh.w2.strato.hosting`, Port 22, User `su765082`
- Web-Root = `/`
- Lokal: `/Users/mostafamosafer/Desktop/MOSAFER_SPINE_EXTRACTED`
- ⚠️ **Strato-Passwort rotieren** — war in Session sichtbar

## 3. Tool-Status

| Tool | Status |
|---|---|
| Google Search Console | ✅ aktiv, Sitemap eingereicht 04.05.2026 |
| Google Business Profile | ✅ existiert |
| Jameda | ⏳ noch anzulegen |
| Doctolib | ✅ integriert |
| NotebookLM | ✅ Notebook „Mosafer Spine Content" mit 60 Quellen |
| Nano Banana Pro MCP | ✅ für medizinische Illustrationen |
| Ahrefs | ❌ **nicht empfohlen** — Sistrix Smart als günstigere DE-Alternative |

## 4. GSC Crawl-Stats Analyse (10.–15.05.2026)

| Metrik | Wert | Bewertung |
|---|---|---|
| Crawls / 6 Tage | 30 | ⚠️ Sehr niedrig |
| Status 301 | **23,33 %** | 🚨 Kritisch — Crawl Budget verbrannt |
| Status 404 | 3,33 % | ⚠️ Tote Links |
| Avg. Antwortzeit | 294–466 ms | ✅ |
| Spike 12.05. | 6.590 ms | 🚨 Server-Problem prüfen |
| „Auffindbarkeit" | nur 13,33 % | 🚨 Google entdeckt kaum Neues |

## 5. Page-Inventory (23 Seiten, alle mit nur 240–613 Wörtern — alle „thin")

| URL | Wörter | Status |
|---|---|---|
| `/` | 613 | ✅ ok |
| `/patienten/international.html` | 521 | ✅ ok |
| `/skoliose/erstdiagnose.html` | 433 | ⚠️ thin |
| `/skoliose/zweitmeinung.html` | 386 | ⚠️ thin |
| `/skoliose/operative-behandlung.html` | 372 | ⚠️ thin |
| `/wirbelsaeulenchirurgie/bandscheibenvorfall.html` | 338 | ⚠️ thin |
| `/skoliose/vbt.html` | 322 | ⚠️ thin |
| `/skoliose/korsett-therapie.html` | 315 | ⚠️ thin |
| 15 weitere Seiten | 239–306 | ❌ very thin |

**Durchschnitt: 318 Wörter/Seite** — für YMYL-Medizin viel zu wenig (Soll: 600–1.500).

## 6. Top-10 priorisierte Suchanfragen

| # | Suchanfrage | Intent | Priorität |
|---|---|---|---|
| 1 | skoliose spezialist kinder deutschland | Commercial | 10 |
| 2 | zweitmeinung wirbelsäulen op | Commercial | 10 |
| 3 | bester skoliose spezialist deutschland | Commercial | 9 |
| 4 | skoliose op methoden vergleich (VBT vs. Fusion) | Commercial | 9 |
| 5 | wirbelsäulenchirurg privatsprechstunde | Transactional | 9 |
| 6 | skoliose behandlung ohne op | Informational | 8 |
| 7 | skoliose op risiken und chancen | Informational | 8 |
| 8 | korsett bei skoliose wirksamkeit | Informational | 7 |
| 9 | kinderskoliose behandlung termin | Transactional | 7 |
| 10 | orthopäde privatpraxis rosenheim | Commercial | 7 |

## 7. Konsolidierter Aktionsplan (siehe 01_CROSS_CHECK.md für Details)

Der Plan setzt sich aus 2 parallelen Säulen zusammen:

### Säule A — Technisches Fundament (aus Claude-Code-Audit)
- Charset UTF-8, Schema-Markup, OG-Tags, hreflang, llms.txt, Security Headers
- Alle 23 Seiten technisch sauber bringen
- Score 52→65 in 2 Wochen

### Säule B — Strategischer Content + Authority (aus Cursor-Session)
- 3 neue Pillar Pages für Top-Keywords
- Bestehende thin Pages auf 600+ Wörter ausbauen
- PR / Editorial Outreach
- Klinikum Traunstein Backlink (Q3 2026)

## 8. Offene Punkte / Next Actions (priorisiert)

### Phase 0 — ERLEDIGT (Nacht 17.05.2026)
- [x] Charset UTF-8 in .htaccess
- [x] LocalBusiness + Physician Schema auf Startseite (Commit a3417ee)
- [x] OG-Tags global auf 23 Seiten
- [x] hreflang DE/EN/x-default
- [x] llms.txt
- [x] Security Headers (HSTS, X-Frame, X-Content-Type, Referrer-Policy)
- [x] docs/seo/ Schutz vor öffentlichem Zugriff (403 verified)
- [x] Strato-Deploy live
- [x] GSC manuelle Indexierung für 5 Hauptseiten angefordert
- [x] Single Source of Truth in docs/seo/ etabliert

### Phase 1 — DIESE WOCHE
- [ ] Strato-Passwort rotieren (war in deploy-Script sichtbar)
- [ ] 301-Redirect-Quellen in GSC identifizieren und auflösen (23,33 % Crawl-Budget verbrannt)
- [ ] Den einen 404 in GSC fixen
- [ ] Server-Spike 12.05. (6.590 ms) mit Strato klären
- [ ] Jameda-Profil anlegen
- [ ] Online-Validatoren-Check: Rich Results, Open Graph, hreflang, securityheaders.com
- [x] BreadcrumbList Schema auf ALLE 21 Subseiten ✅ Spur 2 (zwei Runden), 17.05. vor-/mittags
- [x] Person/Physician Schema auf `/praxis/ueber-dr-mosafer.html` ✅ Spur 2, 17.05. vormittag
- [x] MedicalClinic Schema auf `/en/home.html` (englisch, internationale Patienten) ✅ Spur 2 Runde 2
- [x] Internal Linking Body-Content auf 9 Seiten (12 contextual Links gesetzt) ✅ Spur 2, 17.05. vormittag

### Phase 2 — MONAT 1 (offen)
- [ ] Pillar Page #1 „skoliose-spezialist.html" (3.500+ Wörter) — Briefing in 02_PILLAR_PAGE_1_BRIEFING.md
- [ ] Top-5 thin Pages auf 700–1.000 Wörter ausbauen:
  - `/skoliose/erstdiagnose.html` (433 → 900)
  - `/wirbelsaeulenchirurgie/bandscheibenvorfall.html` (338 → 900)
  - `/skoliose/operative-behandlung.html` (372 → 1.000)
  - `/praxis/ueber-dr-mosafer.html` (240 → 700)
  - `/patienten/international.html` (521 → 1.000)
- [ ] Adresse Juli 2026 vorbereiten (Impressum/Datenschutz/Index)
- [ ] Foto-Shooting Dr. Mosafer + Praxis

### Q3 2026 (nach Juli)
- [ ] Site-Update auf Rosenheim-Adresse
- [ ] Timeline-Banner wieder einbauen (Karriere-Wechsel)
- [ ] Klinikum Traunstein Backlink anfragen
- [ ] Munich Inquire Media Bewerbung Focus TOP-Mediziner

## 9. Live-Status der Site (Stand 17.05.2026 03:00)

| Signal | Status | Verifikation |
|---|---|---|
| Schema-Markup Startseite | ✅ live | Rich Results Test |
| BreadcrumbList Schema | ✅ live auf 22 Subseiten | Rich Results Test |
| Person Schema (Dr. Mosafer) | ✅ live auf Über-Seite | Rich Results Test |
| MedicalClinic Schema | ✅ live auf en/home.html | Rich Results Test |
| OG-Tags 23 Seiten | ✅ live | opengraph.xyz |
| hreflang DE/EN | ✅ live | im HTML head |
| Security Headers | ✅ live | securityheaders.com |
| llms.txt | ✅ live | https://www.mosafer-spine.de/llms.txt |
| docs/seo/ public-geschützt | ✅ 403 confirmed | direkter URL-Test |
| Sitemap in GSC | ✅ erfolgreich, 23 Seiten | GSC Sitemaps |
| Manuelle Indexierung | ✅ 5 URLs angefordert 17.05.2026 | GSC URL-Inspektion |

---

## Referenz-Dateien

- `00_KONTEXT_UND_PLAN.md` — diese Datei
- `01_CROSS_CHECK_CLAUDE_CODE.md` — kritischer Vergleich beider Pläne
- `02_PILLAR_PAGE_1_BRIEFING.md` — Detail-Briefing für ersten Pillar-Artikel (folgt)
- Externe Quellen:
  - Claude Code Full Audit: `~/Desktop/CLAUDE PRAXIS/FULL-AUDIT-REPORT.md`
  - Claude Code Action Plan: `~/Desktop/CLAUDE PRAXIS/ACTION-PLAN.md`
  - Claude Code Commit-Vorschlag: `~/Desktop/CLAUDE PRAXIS/SEO-COMMIT-ZUSAMMENFASSUNG.md`
  - Claude Code Memory: `~/.claude/projects/-Users-mostafamosafer-Desktop-CLAUDE-PRAXIS/memory/`
  - GSC Crawl Stats: `~/Desktop/gsc_crawl/`
