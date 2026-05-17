# Cross-Check: Claude Code Plan vs. Cursor-Session Plan

**Datum:** 17.05.2026
**Methode:** Kritische Bewertung beider Pläne nebeneinander mit Stärken/Schwächen/Ergänzungen
**Quellen:**
- Claude Code: `FULL-AUDIT-REPORT.md` (376 Zeilen) + `ACTION-PLAN.md` (362 Zeilen) + `SEO-COMMIT-ZUSAMMENFASSUNG.md`
- Cursor-Session: vorheriger Chat mit Suchanfragen-Liste, 6-Monats-Roadmap, Pillar-Briefing, GSC-Crawl-Analyse

---

## Executive Summary der Bewertung

**Die beiden Pläne sind komplementär, nicht konkurrierend.**

- **Claude Code** ist stark in **on-page Technik** (Schema, OG, hreflang, Security, Charset) — 5 Sterne
- **Cursor-Session** ist stark in **Off-Page Strategie & Content-Architektur** (Pillar Pages, Keyword-Priorisierung, PR, Crawl-Health) — 4 Sterne
- **Beide haben blind spots**, die der jeweils andere füllt
- Endergebnis = beide Pläne **zusammen** umsetzen, nicht eines davon

---

## Stärken Claude Code Plan

### 1. Technische SEO-Tiefe — exzellent
- **Konkrete Code-Snippets** zum Copy-Paste (JSON-LD Schema, .htaccess-Regeln, OG-Tags)
- **Charset-Problem identifiziert** (HTTP `Content-Type: text/html` ohne UTF-8) — fundamentale Issue, die ich übersehen hatte
- **Security Headers** detailliert (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- **Schema-Strategie pro Page-Type** (`MedicalBusiness`, `Physician`, `MedicalProcedure`, `BreadcrumbList`, `Person`, `FAQPage`)
- **llms.txt Template** für AI-Crawler

### 2. Inventar-Analyse — sehr stark
- **Word-Count aller 23 Seiten** mit Klassifizierung (ok/thin/very thin)
- **Coverage-Tabelle pro Seite** (Schema/OG/Canonical Status)
- **Audit-Score 52/100** mit gewichteten Kategorien

### 3. Konkrete Quick Wins (< 1 Tag)
1. Charset UTF-8
2. OG-Tags global
3. Schema-Block Homepage
4. hreflang
5. llms.txt

### 4. Bereits umgesetzt (per 17.05.2026 commit pending)
- ✅ llms.txt erstellt
- ✅ Charset + 4 Security Headers in .htaccess
- ✅ Canonical + hreflang + OG + Twitter-Card auf 23 Seiten
- ✅ JSON-LD Schema (MedicalBusiness + Physician) auf Homepage

→ **Diese Arbeit ist bereits getan und muss nur committed + deployed werden.**

---

## Schwächen Claude Code Plan

### 1. Keine Keyword-Strategie 🚨
- Keine Suchanfragen-Liste, keine Intent-Klassifizierung
- Keine Priorisierung welche Begriffe ranken sollen
- Optimiert technisch, aber **wofür ranken** ist nicht definiert
- → **Cursor-Session ergänzt:** Top-10 Suchanfragen mit Intent + Priorität

### 2. Keine Pillar-Page-Architektur 🚨
- Plan denkt „bestehende thin Pages ausbauen" (M1)
- Keine **neuen Top-of-Funnel Ranking-Seiten** für commercial keywords
- Zielseite für „skoliose spezialist deutschland" fehlt
- → **Cursor-Session ergänzt:** 3 Pillar Pages (Skoliose-Spezialist, Kinderskoliose, Wirbelsäulenchirurgie) mit Hub-and-Spoke-Architektur

### 3. Off-Page / PR komplett vernachlässigt 🚨
- Nur 2 Erwähnungen: „Jameda + DocFinder" (H7) und „Klinikum Traunstein" als L6 Backlog
- **Kein** Editorial-Outreach
- **Kein** Focus TOP-Mediziner Bewerbungspfad
- **Kein** Pitch-Plan für Apotheken Umschau, Stern Gesund Leben, Eltern.de
- **Kein** Podcast / YouTube als Zweitkanal
- → **Cursor-Session ergänzt:** vollständiger 6-Monats-PR-Plan mit konkreten Outlets

### 4. Crawl-Health-Befund fehlt komplett 🚨
- Audit basiert auf statischem Crawl, nicht auf realen GSC-Crawl-Stats
- **23 % 301-Redirects** sind nicht erkannt → Crawl-Budget-Problem
- 3,33 % 404 nicht im Action Plan
- Server-Spike 12.05. (6.590 ms) nicht erkannt
- „Auffindbarkeit nur 13,33 %" nicht thematisiert
- → **Cursor-Session ergänzt:** 7 Sofort-Fixes basierend auf echten GSC-Daten

### 5. Karriere-Timing nicht im Plan integriert ⚠️
- Adresse Juli 2026 nur als „offener Punkt" 3 erwähnt — kein konkretes Datum
- Klinikum Traunstein Backlink ist **L6 / Backlog**, sollte aber **High Priority Q3 2026** sein
- Rebrand-Moment Juli 2026 wird nicht als SEO-Hebel genutzt (Pressemitteilung, lokale Presse Rosenheim)
- → **Cursor-Session ergänzt:** Q3 2026 als Meilenstein für lokale PR + Hospital-Backlink

### 6. Internationale Strategie schwach ⚠️
- Site ist 4-sprachig (DE/EN/AR/FA), aber Plan empfiehlt nur „L3: Expand English content"
- Health-Tourism-Plattformen (PlacidWay, Bookimed, MyMediTravel) nicht erwähnt
- → **Cursor-Session ergänzt:** internationale Patientenkanäle in Monat 5

### 7. Score-Projektion zu konservativ ⚠️
- Claude Code: 52 → 78/100 in 4–6 Monaten
- Mit echter Content-Strategie + Backlinks + Klinikum-Traunstein-Link ist **85+/100** realistisch
- Ceiling-Aussage „Off-page authority is primary ceiling beyond month 2" stimmt, aber Plan adressiert das kaum

---

## Stärken Cursor-Session Plan

### 1. Suchanfragen-Strategie ✅
- 20 Suchanfragen gruppiert nach Intent (Informational/Commercial/Transactional)
- Top-10 priorisiert nach Relevanz + Erwähnungschance
- Konkrete Begründungen pro Keyword
- Bewusst niedriger priorisierte Begriffe ausgeschlossen mit Begründung

### 2. GSC Crawl-Stats Analyse ✅
- Realdaten aus User-Export 10.–15.05.2026
- 7 konkrete Sofort-Fixes (301-Redirects auflösen, externe Links updaten, Sitemap einreichen, Server-Spike prüfen, Indexierung manuell anfordern)

### 3. Pillar-Page Briefing ✅
- Vollständiges Content-Briefing für `/skoliose-spezialist` mit:
  - Title-Tag (60 Zeichen), Meta-Description (155 Zeichen)
  - 9 H2-Sections mit Word-Counts pro Abschnitt (gesamt 3.500–4.500 Wörter)
  - Featured-Snippet-Targets formuliert
  - Schema-Strategie (`MedicalWebPage` + `Physician` + `FAQPage` + `BreadcrumbList`)
  - Interne Verlinkungs-Architektur

### 4. PR / Editorial Strategie ✅
- Konkrete Outlets: Focus TOP-Mediziner, Apotheken Umschau, Stern Gesund Leben, Eltern.de, Spiegel Wissen
- Monatlicher Pitch-Plan
- Munich Inquire Media als Pfad für Focus-Listen
- Podcast-Tour Empfehlungen
- HARO-Äquivalent: ExpertenAnfragen.de / SourceBottle DE

### 5. Tool-Stack-Empfehlung mit Budget ✅
- Klares Nein zu Ahrefs
- Sistrix Smart als DE-Standard-Alternative
- Gesamtkosten 6 Monate < 500 €

---

## Schwächen Cursor-Session Plan

### 1. Technische SEO-Tiefe oberflächlich ❌
- Schema-Markup nur namentlich erwähnt, keine Templates
- Charset-Problem nicht erkannt
- Security Headers nicht thematisiert
- OG-Tags / Twitter-Cards nicht thematisiert
- → **Claude Code ergänzt diese komplett**

### 2. Bestehende Seiten zu wenig berücksichtigt ⚠️
- Plan denkt zu sehr in „neuen Pillar Pages"
- Die 23 vorhandenen thin Pages (`/wirbelsaeulenchirurgie/bandscheibenvorfall.html` etc.) brauchen Ausbau
- → **Claude Code ergänzt** mit Word-Count-Inventory und M1-Plan

### 3. Page-Inventory fehlt ⚠️
- Cursor-Session hat nicht alle 23 Seiten erfasst
- → **Claude Code ergänzt** komplette Tabelle

### 4. AI Search Readiness Details schwach ⚠️
- `llms.txt` nur kurz erwähnt
- `speakable` Schema nicht thematisiert
- FAQ-Schema nur als Idee
- → **Claude Code ergänzt** mit konkreten Templates

---

## Konsolidierte Master-Roadmap

### Phase 0 — Sofort (diese Woche, < 4h Arbeit)

| # | Aktion | Quelle | Status |
|---|---|---|---|
| 0.1 | Claude-Code-Commit ausführen (llms.txt + 23 HTML-Updates) | Claude Code | bereit zum git commit |
| 0.2 | Strato-Passwort rotieren | Memory | offen |
| 0.3 | 301-Quellen identifizieren + externe Links aktualisieren | Cursor GSC-Analyse | offen |
| 0.4 | 404 fixen | Cursor GSC-Analyse | offen |
| 0.5 | Server-Spike 12.05. mit Strato klären | Cursor GSC-Analyse | offen |
| 0.6 | Jameda-Profil anlegen | beide | offen |
| 0.7 | Indexierung in GSC manuell anfordern für Hauptseiten | Cursor | offen |

### Phase 1 — Technisches Fundament komplettieren (Woche 2)

| # | Aktion | Quelle |
|---|---|---|
| 1.1 | BreadcrumbList Schema auf 22 Subseiten | Claude Code H2 |
| 1.2 | Person/Physician Schema auf `/praxis/ueber-dr-mosafer.html` | Claude Code H3 |
| 1.3 | Internal Linking ausbauen (mind. 2-3 Links pro Body) | Claude Code H4 |
| 1.4 | Sitemap mit `<lastmod>` + Impressum/Datenschutz | Claude Code H5 |
| 1.5 | GSC manuelle Indexierung der neuen Schema-Seiten | beide |

### Phase 2 — Content-Ausbau bestehender Seiten (Monat 1, parallel zu Pillar #1)

| Seite | Aktuell | Ziel | Inhalt zu ergänzen |
|---|---|---|---|
| `/skoliose/erstdiagnose.html` | 433 | 900 | Cobb-Tabelle, Diagnoseablauf Step-by-Step, FAQ |
| `/wirbelsaeulenchirurgie/bandscheibenvorfall.html` | 338 | 900 | Symptome, Entscheidungsbaum konservativ vs. operativ, Recovery |
| `/skoliose/operative-behandlung.html` | 372 | 1.000 | OP-Ablauf, Risiken, Erholungszeit, anonymisierte Fälle |
| `/praxis/ueber-dr-mosafer.html` | 240 | 700 | Ausbildung, Fallzahlen, Schwerpunkte, Publikationen, Person-Schema |
| `/patienten/international.html` | 521 | 1.000 | FAQ-Block, Reiseinfos Bayern, Kostenerstattung |

### Phase 3 — Neue Pillar Pages (Monat 1–3)

| Monat | Pillar | URL |
|---|---|---|
| M1 | Skoliose Spezialist Deutschland | `/skoliose-spezialist` |
| M2 | Kinderskoliose | `/kinderskoliose` |
| M3 | Wirbelsäulenchirurgie | `/wirbelsaeulenchirurgie/` (Hub stärken) |

### Phase 4 — PR / Editorial (parallel ab Monat 2)

| Monat | Outlet | Pitch |
|---|---|---|
| M2 | Apotheken Umschau | Skoliose bei Kindern — was Eltern wissen müssen |
| M2 | Eltern.de / Familie.de | Schulvorsorge & Skoliose-Screening |
| M3 | Stern Gesund Leben | VBT als minimalinvasive Alternative |
| M3 | Spiegel Wissen / Focus Gesundheit | Experteninterview moderne Wirbelsäulen-OPs |
| M2/3 | Munich Inquire Media | Bewerbung Focus TOP-Mediziner-Liste |
| M5 | NDR Visite / Drs. Anne Fleck Podcast | Gastauftritt |

### Phase 5 — Juli/August 2026 Rebrand-Moment nutzen

| Aktion | Zeitpunkt |
|---|---|
| Adresse Rosenheim auf Site | Juli 2026 |
| Timeline-Banner wieder einbauen | Juli 2026 |
| Pressemitteilung lokale Presse Rosenheim | Juli 2026 |
| Klinikum Traunstein Backlink anfragen | August 2026 |
| LocalBusiness Schema mit neuer Adresse | Juli 2026 |

---

## Was MEIN Plan dazulernen muss (Selbstkritik)

1. **Charset-Problem hätte ich erkennen müssen** — fundamentaler Tech-Bug
2. **Schema-Templates fehlen** in meinem Briefing → jetzt aus Claude-Code übernehmen
3. **Word-Count-Inventory aller 23 Seiten** war eine sehr gute Methode → übernehme ich
4. **Konkrete Code-Snippets** statt nur „Schema einbauen" → übernehme ich
5. **Score-Tracking** als Methode (52→58→65→72→78) → übernehme ich

## Was Claude-Code-Plan dazulernen sollte

1. **Keyword-Recherche vor Content-Optimierung** — wofür ranken wir eigentlich?
2. **Pillar-Page-Architektur** — neue ranking-fähige Top-of-Funnel-Seiten, nicht nur bestehende ausbauen
3. **Off-Page / PR Strategie** — Editorial Mentions als legitimer Backlink-Pfad
4. **GSC Crawl-Stats nutzen** — nicht nur statisches Audit, sondern reale Daten lesen
5. **Klinikum Traunstein Backlink hochpriorisieren** — von L6 auf H-Priority Q3 2026
6. **Karriere-Timeline als SEO-Hebel** — Juli/August 2026 Rebrand-Moment aktiv nutzen

---

## Empfehlung: Reihenfolge der Ausführung

1. **JETZT:** Claude-Code Commit pushen (Phase 0.1) — 5 Min
2. **Diese Woche:** Phase 0 komplett (Crawl-Health-Fixes + Jameda) — ~3 h
3. **Woche 2:** Phase 1 (BreadcrumbList + Person Schema + Internal Linking) — ~6 h
4. **Monat 1:** Phase 2 (Top-5 thin Pages ausbauen) + Phase 3 Pillar #1 — ~30 h Content
5. **Monat 2–6:** Phase 3 + 4 parallel
6. **Juli/August 2026:** Phase 5 Rebrand-Moment

## Kritische Bewertung in einem Satz

> Claude Code hat das technische Haus perfekt gebaut, aber niemand wohnt drin — Cursor hat den Bewohner und die Möbel mitgebracht, aber das Haus war noch nicht fertig. Zusammen wird es ein Zuhause.
