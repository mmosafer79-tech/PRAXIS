# SEO Documentation — Mosafer Spine

Dieser Ordner enthält die strategische SEO-Dokumentation für `mosafer-spine.de`.
Er ist die **Single Source of Truth** für die SEO-Arbeit und wird von **beiden** Assistenten (Cursor und Claude Code) gelesen, fortgeführt und aktualisiert.

---

## ⚠️ Pfad-Information für KI-Sessions

**Arbeitsverzeichnis (Git-Repo) ist:**
```
/Users/mostafamosafer/Desktop/MOSAFER_SPINE_EXTRACTED
```

**NICHT** `/Users/mostafamosafer/Desktop/CLAUDE PRAXIS/` (das ist nur Claude-Codes Audit-Snapshot-Ordner, kein Repo).

**Jede Session als erstes:**
```bash
cd /Users/mostafamosafer/Desktop/MOSAFER_SPINE_EXTRACTED
git pull --rebase origin main
```

**Deploy-Skript:** `/Users/mostafamosafer/Desktop/deploy-mosafer-spine.sh` (außerhalb Repo)

---

## Dateien

| Datei | Zweck | Status |
|---|---|---|
| `00_KONTEXT_UND_PLAN.md` | Vollständiger Projekt-Kontext, Business, Karriere-Timeline, Tool-Stack, Page-Inventory, Top-10 Keywords, konsolidierter Aktionsplan | Aktiv |
| `01_CROSS_CHECK_CLAUDE_CODE.md` | Kritischer Vergleich der Pläne von Claude Code (Tech-Audit) und Cursor (Strategie/Content), konsolidierte Master-Roadmap | Aktiv |
| `02_PILLAR_PAGE_1_BRIEFING.md` | Vollständiges Content-Briefing für die erste Pillar Page `/skoliose-spezialist.html` (3.500+ Wörter) | Bereit zum Schreiben |
| `FULL-AUDIT-REPORT.md` | Claude-Code SEO-Audit vom 17.05.2026 (Score 52/100) — Referenz | Snapshot |
| `ACTION-PLAN.md` | Claude-Code Action Plan mit Critical/High/Medium/Low — Referenz | Snapshot |
| `SEO-COMMIT-ZUSAMMENFASSUNG.md` | Beschreibung des pending Claude-Code Commits (llms.txt + 23 HTML-Updates) | Snapshot |

---

## Empfohlene Arbeitsweise für zukünftige Sessions

### Wenn du als KI-Assistent diesen Ordner liest:

1. **Erst lesen:** `00_KONTEXT_UND_PLAN.md` (Vollkontext)
2. **Dann lesen:** `01_CROSS_CHECK_CLAUDE_CODE.md` (Master-Roadmap)
3. **Vor jeder größeren Änderung:** Status der offenen Punkte aktualisieren in `00_KONTEXT_UND_PLAN.md` Abschnitt 8
4. **Bei strategischen Änderungen:** `01_CROSS_CHECK_CLAUDE_CODE.md` aktualisieren
5. **Snapshots NICHT überschreiben** — wenn neue Audits/Pläne entstehen, neue Datei mit Datum anlegen

### Wenn du als User mit einer neuen Session beginnst:

> „Lies den Ordner `docs/seo/` — dort findest du den vollständigen Kontext zum SEO-Projekt für mosafer-spine.de."

Reicht aus. Beide Assistenten (Cursor und Claude Code) haben dann denselben Stand.

---

## Aktualisierungs-Protokoll

| Datum | Was | Wer |
|---|---|---|
| 2026-05-17 | Initiale Anlage mit Kontext, Cross-Check, Pillar-Briefing | Cursor |
| | | |

---

## Wichtige Constraint-Reminder

1. **Git-Pflicht:** Vor jedem Deployment committen (User-Feedback dokumentiert)
2. **Karriere-Timing:** Ab Juli 2026 Adresse → Rosenheim; ab August 2026 Klinikum Traunstein
3. **Brand-Konventionen:**
   - „Skoliosezentrum Rosenheim" (nicht „Wirbelsäulenzentrum")
   - „Mosafer Spine" als Firmenname
   - „Konsil" mit s (lat. consilium)
   - Tonalität: ruhig, angstnehmend, nicht verkäuferisch
4. **Tracking:** nur Google Search Console (kein Cookie-Banner)
5. **Backlinks:**
   - Schön Klinik NICHT (kein aktives Verhältnis ab Juli)
   - Klinikum Traunstein REALISTISCH (ab August 2026)
