# Parallel-Arbeitsplan — Cursor + Claude Code gleichzeitig

**Datum:** 17.05.2026
**Ziel:** Phase 1 + Phase 2 Start parallel abarbeiten ohne Merge-Konflikte

---

## Regeln für sauberes Parallel-Arbeiten

1. **Single Source of Truth bleibt `docs/seo/`** — beide Sessions lesen daraus, aktualisieren danach
2. **Disjunkte Dateibereiche** — Session A und Session B fassen NIE dieselben Dateien an
3. **Commits einzeln, klar gelabeled** — Präfix `[A]` oder `[B]` in Commit-Message
4. **Push nach jeder Session-Aufgabe** — damit die andere Session den Stand pullt
5. **Vor Beginn:** `git pull --rebase origin main` in beiden Sessions
6. **Bei Konflikten:** sofort stoppen, in `docs/seo/` dokumentieren, manuell mergen

---

## Aufteilung nach Konflikt-Risiko

### Zone A — Inhaltliche Neuanlagen (kein Risiko)
**Best für:** Lange Schreib-Sessions, KI-Generierung, Briefing-getrieben

| Aufgabe | Dateien | Konflikt-Risiko | Empfohlene Session |
|---|---|---|---|
| Pillar Page #1 schreiben | `skoliose-spezialist.html` (neu) | ❌ keiner | Claude Code (mehr Skills/Tools) |
| OG-Image generieren | `uploads/og-skoliose-spezialist.jpg` (neu) | ❌ keiner | Cursor + Nano Banana Pro |
| Pillar #2 Briefing schreiben | `docs/seo/04_PILLAR_PAGE_2_BRIEFING.md` (neu) | ❌ keiner | beide möglich |

### Zone B — Schema-Rollout (geringes Risiko bei Datei-Trennung)
**Best für:** systematische Bulk-Edits

| Aufgabe | Dateien | Konflikt-Risiko | Empfohlene Session |
|---|---|---|---|
| BreadcrumbList Schema Set 1 (Skoliose-Subseiten) | `skoliose/*.html` (9 Files) | ⚠️ nur in dieser Session | Claude Code |
| BreadcrumbList Schema Set 2 (WS-Chirurgie + Konservativ) | `wirbelsaeulenchirurgie/*.html` + `konservativ/*.html` (8 Files) | ⚠️ nur in dieser Session | Cursor |
| Person Schema | `praxis/ueber-dr-mosafer.html` | ❌ Einzeldatei | beide möglich |

### Zone C — Content-Ausbau bestehender thin Pages (Konflikt-frei wenn aufgeteilt)
**Best für:** fachliche Tiefe, braucht Dr. Mosafers Review

| Aufgabe | Datei | Empfohlene Session |
|---|---|---|
| Erstdiagnose ausbauen (433 → 900) | `skoliose/erstdiagnose.html` | Claude Code (NotebookLM-Quellen) |
| Bandscheibenvorfall ausbauen (338 → 900) | `wirbelsaeulenchirurgie/bandscheibenvorfall.html` | Cursor |
| Über Dr. Mosafer ausbauen (240 → 700) | `praxis/ueber-dr-mosafer.html` | Claude Code (Schön Klinik / Traunstein Kontext) |
| Operative Behandlung (372 → 1000) | `skoliose/operative-behandlung.html` | Claude Code (Fachtiefe) |
| International Patients (521 → 1000) | `patienten/international.html` | Cursor (Reise/Kostenerstattung Generic) |

### Zone D — Off-Site Aufgaben (komplett parallel, keine Git-Konflikte)
**Best für:** Du selbst, nicht im Code**

| Aufgabe | Wo | Wer |
|---|---|---|
| Jameda-Profil anlegen | jameda.de | Du, 30 Min |
| 301-Quellen in GSC identifizieren | search.google.com/search-console → Indexierung → Seiten → Filter "Weiterleitung" | Du, 30 Min |
| Strato-Passwort rotieren | strato.de Login | Du, 5 Min |
| Online-Validatoren ausführen | siehe Links in 00_KONTEXT_UND_PLAN.md | Du, 10 Min |
| Server-Spike Strato klären | Strato Support-Ticket | Du, 15 Min |

### Zone E — Hochrisiko, NUR EINE Session gleichzeitig
**Diese Dateien NIE parallel anfassen — Merge-Hölle:**

| Datei | Warum |
|---|---|
| `.htaccess` | Server-kritisch, jede Änderung wirkt global |
| `sitemap.xml` | Wird von beiden Sessions ggf. erweitert |
| `robots.txt` | Server-kritisch |
| `index.html` (Homepage) | Wird häufig von beiden Sessions geändert |
| `docs/seo/00_KONTEXT_UND_PLAN.md` | Status-Tracking, beide Sessions updaten |

**Konvention:** Bei Bedarf einer dieser Dateien — kurze Slack/Notiz/Memory-Eintrag „ich gehe an X, bitte 15 Min nicht parallel" über Obsidian-Session-Note oder direkt in `docs/seo/` als kurzer Marker.

---

## Empfohlener Tages-Plan 17.05.2026

### Spur 1 (Claude Code, ~3 h)
1. **Pillar Page #1 schreiben** auf Basis von `02_PILLAR_PAGE_1_BRIEFING.md`
   - Aus Briefing alle 9 H2-Sections generieren
   - JSON-LD Schema einbauen
   - Interne Links setzen
   - Output: `skoliose-spezialist.html`
2. Nach Fertigstellung commit `[A] feat: Pillar Page Skoliose Spezialist (3.500 W)`
3. Push

### Spur 2 (Cursor, ~2 h, parallel)
1. **BreadcrumbList Schema Set 2** ausrollen (WS-Chirurgie + Konservativ, 8 Files)
2. **Person Schema** auf `/praxis/ueber-dr-mosafer.html`
3. **Internal Linking** im Body der 8 Dateien aus Schritt 1 ergänzen
4. Nach Fertigstellung commit `[B] feat: BreadcrumbList + Person Schema + Internal Links`
5. Push

### Spur 3 (Du, ~1,5 h, komplett off-code)
1. Jameda-Profil anlegen
2. GSC: 301-Quellen identifizieren, Liste in `docs/seo/05_CRAWL_HEALTH_FIXES.md` ablegen
3. Strato-Passwort rotieren
4. Validatoren-Check
5. Strato-Spike Support-Ticket

### Reconcile am Ende des Tages
- Beide Sessions pullen
- Status-Update in `docs/seo/00_KONTEXT_UND_PLAN.md` Sektion „Offene Punkte"
- Strato-Deploy via `bash deploy-mosafer-spine.sh` (du, im Terminal.app)

---

## Briefings für jede Session

### Brief Spur 1 (Claude Code)
> Lies `docs/seo/02_PILLAR_PAGE_1_BRIEFING.md` komplett. Schreibe daraufhin `skoliose-spezialist.html` als vollständige HTML-Datei mit allen 12 Sections, JSON-LD Schema (MedicalWebPage + Physician + FAQPage + BreadcrumbList), Open Graph Tags, hreflang. Word-Count Ziel 3.500–4.500. Nutze NotebookLM-Notebook „Mosafer Spine Content" für Fachquellen (S2k-Leitlinie, MAGEC-Studien, VBT-Literatur). Stil-Vorgabe aus `docs/seo/README.md`: ruhig, angstnehmend, nicht verkäuferisch. Output als neue Datei in Repo-Root. Nicht committen — Dr. Mosafer reviewt erst.

### Brief Spur 2 (Cursor)
> Pull origin main, dann arbeite parallel zu Claude Code (die schreibt Pillar Page #1).
> Aufgabe: BreadcrumbList JSON-LD Schema in folgende 8 Dateien einbauen:
> - wirbelsaeulenchirurgie/bandscheibenvorfall.html
> - wirbelsaeulenchirurgie/dynamische-stabilisation.html
> - wirbelsaeulenchirurgie/minimalinvasiv.html
> - wirbelsaeulenchirurgie/revision.html
> - wirbelsaeulenchirurgie/spinalkanalstenose.html
> - konservativ/prp-acp.html
> - konservativ/prt-facettengelenksinfiltration.html
> - konservativ/stosswellentherapie.html
>
> Schema-Template siehe ACTION-PLAN.md H2.
> Ausserdem: Person Schema auf `praxis/ueber-dr-mosafer.html` einbauen (Template H3).
> Internal Linking: in jeder dieser 8 Dateien mindestens 2–3 Links zu verwandten Seiten im Body-Content ergänzen.
> Branch: main direkt, kein Feature-Branch. Commit-Präfix `[B]`. Push nach Abschluss.

---

## Was wir damit gewinnen

**Sequentiell (alles in einer Session):** ~6 h
**Parallel (2 Sessions + du):** ~3 h Wandtime, gleicher Output

**Aber:** Nur wenn Disziplin bei Datei-Trennung. Sonst Merge-Hölle.

---

## Status-Tracking während der Parallelarbeit

Beide Sessions führen am Ende ihrer Arbeit folgendes Update in `00_KONTEXT_UND_PLAN.md` Sektion 8 durch:
- Erledigte Items von `[ ]` auf `[x]` setzen
- Neuen Eintrag in „Status-Log" (siehe unten)

### Status-Log (chronologisch, jede Session ergänzt)

| Zeitpunkt | Session | Aufgabe | Status |
|---|---|---|---|
| 17.05. 03:00 | beide | Phase 0 abgeschlossen | ✅ |
| 17.05. 12:30 | Cursor (Spur 2) | BreadcrumbList Schema auf 8 Subseiten + Person Schema + 12 contextual Internal Links | ✅ |
| 17.05. ? | Claude Code (Spur 1) | Pillar Page #1 `skoliose-spezialist.html` | ⏳ in Arbeit |
| | | | |
