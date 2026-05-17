# Geplanter Commit — SEO Critical Fixes (2026-05-17)

**Repo:** https://github.com/mmosafer79-tech/PRAXIS.git  
**Branch:** main  
**Letzter Commit:** `e012ed7` — SEO: Nav erweitert, Meta-Descriptions gekürzt

---

## Geänderte Dateien (25 Dateien)

### Neue Dateien (2)
| Datei | Zweck |
|---|---|
| `llms.txt` | KI-Crawler-Leitfaden — ChatGPT, Perplexity, Claude können die Praxis korrekt zitieren |
| `.htaccess` *(erweitert)* | Charset UTF-8 + Sicherheitsheader (HSTS, X-Frame, Referrer-Policy) |

### Geänderte Dateien (23 HTML-Seiten)
Alle 23 Seiten erhalten im `<head>`:
- `<link rel="canonical">` — eindeutige URL für Google
- `<link rel="alternate" hreflang="de/en/x-default">` — Sprachzuordnung DE ↔ EN
- `<meta property="og:*">` — Vorschaubilder bei WhatsApp, LinkedIn, Social Media
- `<meta name="twitter:card">` — Twitter/X Vorschau

**Zusätzlich nur auf der Startseite (`index.html`):**
- JSON-LD Schema (`MedicalBusiness` + `Physician`) — Google zeigt Praxis-Infos direkt in der Suche

---

## Vorher → Nachher

| Signal | Vorher | Nachher |
|---|---|---|
| Schema-Markup | 0 Seiten | 1 Seite (Homepage) |
| Open Graph Tags | 0 Seiten | 23 Seiten |
| hreflang | 0 Seiten | 23 Seiten |
| HTTP Charset | fehlt | UTF-8 deklariert |
| Security Headers | 0 | 4 (HSTS, X-Frame, nosniff, Referrer) |
| llms.txt | fehlt | vorhanden |

---

## Risiko

**Gering.** Keine sichtbaren Layout-Änderungen. Nur `<head>`-Metadaten und Server-Konfiguration. Falls etwas nicht funktioniert: `.htaccess` löschen reicht, um den alten Zustand wiederherzustellen.

---

## Nächster Schritt

Nach deiner Bestätigung:
1. `git add` + `git commit` (lokal)
2. `git push` auf GitHub
3. Du lädst die Dateien per FTP auf Strato hoch (oder ich helfe beim Abgleich)
