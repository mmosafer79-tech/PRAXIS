# Pillar Page #1 — Vollständiges Content-Briefing

**Status:** Bereit zum Schreiben
**Erwartete Schreibdauer:** 8–12 Stunden (oder via KI-Assist 2–3 Stunden)
**Zielmonat:** Monat 1 der Roadmap

---

## Meta-Daten

| Feld | Wert |
|---|---|
| **URL** | `https://www.mosafer-spine.de/skoliose-spezialist.html` |
| **Datei-Pfad** | `MOSAFER_SPINE_EXTRACTED/skoliose-spezialist.html` (Top-Level) |
| **Title-Tag** (60 Zeichen) | `Skoliose Spezialist Deutschland · Dr. Mosafer Rosenheim` |
| **Meta-Description** (155 Zeichen) | `Spezialisierte Skoliose-Behandlung für Kinder, Jugendliche und Erwachsene. Konservativ und operativ. Strukturierte Zweitmeinung. Privat & international.` |
| **H1** | `Skoliose Spezialist: Diagnose, konservative und operative Behandlung` |
| **Ziel-Keyword (Primary)** | skoliose spezialist deutschland |
| **Sekundär-Keywords** | skoliose spezialist kinder, skoliose behandlung, skoliose erwachsene, skoliose op, cobb winkel, skoliose diagnostik |
| **Word-Count Ziel** | 3.500–4.500 Wörter |
| **Lesbarkeit** | Flesch-DE 50–65 |
| **Schema** | `MedicalWebPage` + `Physician` + `FAQPage` + `BreadcrumbList` |
| **Autor** | Dr. Mostafa Mosafer mit Autoren-Box, Facharzt-Titel, Approbations-Status, LinkedIn, letztes Review-Datum |
| **Hreflang** | `de` (Standard); später `en` Version unter `/en/scoliosis-specialist.html` |
| **Canonical** | Self-canonical |

---

## Sitemap-Eintrag

```xml
<url>
  <loc>https://www.mosafer-spine.de/skoliose-spezialist.html</loc>
  <lastmod>2026-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>1.0</priority>
</url>
```

---

## OG-Tags

```html
<meta property="og:type" content="article">
<meta property="og:site_name" content="Mosafer Spine">
<meta property="og:url" content="https://www.mosafer-spine.de/skoliose-spezialist.html">
<meta property="og:title" content="Skoliose Spezialist Deutschland · Dr. Mosafer Rosenheim">
<meta property="og:description" content="Spezialisierte Skoliose-Behandlung für Kinder, Jugendliche und Erwachsene. Konservativ und operativ. Strukturierte Zweitmeinung.">
<meta property="og:image" content="https://www.mosafer-spine.de/uploads/og-skoliose-spezialist.jpg">
<meta name="twitter:card" content="summary_large_image">
```

---

## Schema-Markup (JSON-LD im `<head>`)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "url": "https://www.mosafer-spine.de/skoliose-spezialist.html",
  "name": "Skoliose Spezialist Deutschland",
  "description": "Spezialisierte Skoliose-Behandlung für Kinder, Jugendliche und Erwachsene durch Dr. Mostafa Mosafer in Rosenheim.",
  "lastReviewed": "2026-MM-DD",
  "reviewedBy": {
    "@type": "Physician",
    "name": "Dr. med. Mostafa Mosafer",
    "medicalSpecialty": ["Orthopedic", "SpinalCordMedicine"],
    "url": "https://www.mosafer-spine.de/praxis/ueber-dr-mosafer.html"
  },
  "mainEntity": {
    "@type": "MedicalCondition",
    "name": "Skoliose",
    "alternateName": "Wirbelsäulenverkrümmung",
    "code": {
      "@type": "MedicalCode",
      "code": "M41",
      "codingSystem": "ICD-10"
    }
  },
  "about": [
    {"@type": "MedicalProcedure", "name": "Korsett-Therapie"},
    {"@type": "MedicalProcedure", "name": "Schroth-Therapie"},
    {"@type": "MedicalProcedure", "name": "Vertebral Body Tethering"},
    {"@type": "MedicalProcedure", "name": "Spondylodese"},
    {"@type": "MedicalProcedure", "name": "MAGEC Wachstumssystem"}
  ],
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Mosafer Spine","item":"https://www.mosafer-spine.de/"},
      {"@type":"ListItem","position":2,"name":"Skoliose Spezialist","item":"https://www.mosafer-spine.de/skoliose-spezialist.html"}
    ]
  }
}
</script>
```

Zusätzlich ein **FAQPage**-Schema-Block am Seitenende (FAQ-Sektion automatisch markup-fähig — siehe Section 11).

---

## Inhaltsstruktur mit Word-Counts und Featured-Snippet-Targets

### Section 1 — Hero / Intro (150 Wörter)
**Featured-Snippet-Target (erste 100 Wörter):**

> Ein Skoliose-Spezialist ist ein Orthopäde mit zusätzlicher Subspezialisierung auf Wirbelsäulendeformitäten. Er beherrscht sowohl die konservative Behandlung (Schroth-Therapie, Korsett-Anpassung) als auch operative Korrekturen (Spondylodese, VBT, wachstumslenkende Systeme wie MAGEC oder NEMOST) und betreut Patienten von der Erstdiagnose über die Behandlungsphase bis zur Langzeit-Nachsorge. In Deutschland gibt es nur eine Handvoll Wirbelsäulenchirurgen, die diesen vollen Behandlungspfad — von Kinderskoliose bis Erwachsenenskoliose — durchgehend persönlich abdecken.

**CTA-Block:** Termin · Zweitmeinung · Internationale Patienten

### Section 2 — H2: Wann brauche ich einen Skoliose-Spezialisten? (350 Wörter)

- **H3: Warnzeichen, die einen Spezialisten erfordern**
  - Cobb-Winkel über 20° bei Wachstum
  - Cobb-Winkel über 30° bei Erwachsenen mit Schmerzen
  - Sichtbare asymmetrische Schulter-/Hüftlinie
  - Rippenbuckel bzw. Lendenwulst beim Vorbeugen (Adams-Test positiv)
  - Bestehende OP-Empfehlung → Zweitmeinung sinnvoll
- **H3: Allgemein-Orthopäde vs. Wirbelsäulenspezialist — die Unterschiede**
  - Tabelle: Diagnostik-Tiefe, OP-Volumen, Verfahrenspalette, Nachsorge

**Featured-Snippet-Target:** „Wann brauche ich einen Skoliose-Spezialisten?"

**Interner Link:** → `/skoliose/zweitmeinung.html`

### Section 3 — H2: Skoliose verstehen — die Grundlagen (500 Wörter)

- **H3: Was ist eine Skoliose?**
  - Definition: dreidimensionale Wirbelsäulendeformität, nicht nur seitliche Verbiegung
  - Cobb-Winkel als Standard-Messgröße ab 10°
  - **Featured-Snippet-Target** für „was ist skoliose"
- **H3: Skoliose-Formen**
  - Idiopathische Skoliose (ca. 80 %)
  - Kongenitale Skoliose (angeboren)
  - Neuromuskuläre Skoliose
  - Degenerative Erwachsenenskoliose
- **H3: Altersgruppen und Risikoprofile**
  - Early-Onset (< 10 Jahre)
  - Juvenil (3–9 Jahre)
  - Adoleszent (10–18 Jahre) — häufigste Form
  - Erwachsene (> 18 Jahre)

**Interner Link:** → `/skoliose/erstdiagnose.html`

### Section 4 — H2: Diagnostik beim Spezialisten (400 Wörter)

- **H3: Klinische Untersuchung**
  - Adams-Test (Vorbeugung)
  - Lotaufnahme
  - Messung der Beinlängendifferenz
  - Hautveränderungen (Café-au-lait, Hypertrichose)
- **H3: Bildgebung — wann was?**
  - Wirbelsäulen-Ganzaufnahme stehend a.p. + seitlich (Standard)
  - EOS-System (strahlenarm, 3D)
  - MRT-Indikationen (atypischer Verlauf, neurologische Symptome)
  - CT bei OP-Planung
- **H3: Cobb-Winkel richtig messen**
  - Schritt-für-Schritt-Erklärung
  - Häufige Mess-Fehler

**Interner Link:** → `/skoliose/erstdiagnose.html`

### Section 5 — H2: Konservative Skoliose-Behandlung (550 Wörter)

- **H3: Physiotherapie nach Schroth**
  - Atemorientierte 3D-Korrektur
  - Indikationen, Frequenz
- **H3: Korsett-Therapie — Indikationsstellung**
  - Cobb 20–45° bei Wachstum
  - Tragezeiten (16–23 h/Tag)
  - Cheneau, Boston, Rigo-Konzept
- **H3: Schmerzmanagement bei Erwachsenenskoliose**
  - Physiotherapie, manuelle Therapie
  - PRT, Facetteninfiltration
  - Multimodale Schmerztherapie

**Tabelle — Cobb-Winkel × Therapie-Entscheidung**

| Cobb-Winkel | Wachstum | Empfehlung |
|---|---|---|
| < 20° | aktiv | Beobachtung + Schroth |
| 20–30° | aktiv | Schroth + ggf. Korsett |
| 30–45° | aktiv | Korsett-Therapie konsequent |
| > 45° | aktiv | OP-Indikation prüfen |
| < 40° | abgeschlossen | Konservativ + Schmerzkontrolle |
| > 50° | abgeschlossen | OP-Diskussion |

**Interne Links:** → `/skoliose/korsett-therapie.html`, → `/skoliose/krankengymnastik.html`, → `/konservativ/`

### Section 6 — H2: Operative Skoliose-Behandlung (700 Wörter)

- **H3: Wann ist eine OP wirklich indiziert?**
  - Cobb > 45° im Wachstum mit Progression
  - Cobb > 50° beim Erwachsenen mit Symptomen
  - Funktionseinschränkung, kardiopulmonale Auswirkungen bei hochgradiger Kurve
- **H3: Wachstumslenkende Systeme für Kinder**
  - MAGEC (magnetisch elongierbar)
  - NEMOST (Memory-Metall)
  - Indikationen Early-Onset Skoliose
- **H3: Vertebral Body Tethering (VBT)**
  - Bewegungserhaltende Alternative zur Versteifung
  - Indikationen: skelettal unreife Patienten, Cobb 40–65°
  - Vorteile/Limitationen
- **H3: Spondylodese — Goldstandard bei Erwachsenen**
  - Posteriore Instrumentation
  - Schrauben, Stäbe, Knochenwachstum
  - Erholungszeit, Reha
- **H3: Revisionseingriffe**
  - Indikationen
  - Höherer Anspruch, geringes Volumen weltweit
  - 24-Fragen-Methode für Indikationsstellung

**Interne Links:** → `/skoliose/magec-rods.html`, → `/skoliose/nemost.html`, → `/skoliose/vbt.html`, → `/skoliose/operative-behandlung.html`, → `/wirbelsaeulenchirurgie/revision.html`, → `/skoliose/zweitmeinung.html`

### Section 7 — H2: Kinderskoliose — Besonderheiten (450 Wörter)

- **H3: Skoliose-Screening**
  - Empfehlung Adams-Test ab 8 Jahren
  - Vorsorge U10/J1 bei Kinderärzten
- **H3: Early-Onset-Skoliose (< 10 Jahre)**
  - Höhere Progressionswahrscheinlichkeit
  - Lungenfunktion-Risiko bei Versteifung
  - Wachstumslenkende Systeme als Standard
- **H3: Adoleszente idiopathische Skoliose**
  - Häufigste Form
  - Mädchen 8× häufiger betroffen als Jungen
  - Korsett oft erste Wahl
- **H3: Was Eltern wissen müssen**
  - Realistische Prognose
  - Therapie-Adhärenz Korsett
  - Sport, Schule, Alltag

*Hinweis: Hier später Pillar Page #2 verlinken → `/kinderskoliose.html`*

### Section 8 — H2: Strukturierte Zweitmeinung vor einer Skoliose-OP (300 Wörter)

- Die 24-Fragen-Methode kurz erklärt
- Warum unabhängige Zweitmeinung wichtig ist
- Ablauf in 5 Schritten
- Was an Unterlagen benötigt wird
- Dauer und Honorarrahmen (GOÄ-Hinweis)

**Großer CTA-Button:** → `/skoliose/zweitmeinung.html`

### Section 9 — H2: Behandlung in Rosenheim — auch für internationale & Privatpatienten (250 Wörter)

- **H3: Standort & Anfahrt**
  - Rosenheim — zentrale Lage Oberbayern
  - Anfahrt München (60 km), Salzburg (90 km), Innsbruck (110 km)
- **H3: Privatsprechstunde**
  - GOÄ-Abrechnung
  - PKV, Beihilfe, Selbstzahler
  - Wahlarztleistungen
- **H3: Internationale Patienten**
  - 4 Sprachen (DE/EN/AR/FA)
  - Video-Zweitmeinung
  - Vorab-Begutachtung digital

**Interne Links:** → `/patienten/privatpatienten.html`, → `/patienten/international.html`

### Section 10 — H2: Über Dr. Mosafer (200 Wörter)

- Werdegang, Fellowships
- Approbations-Bezirk, Fachgesellschaften (DWG, EUROSPINE, BVOU)
- OP-Volumen-Bereich
- Klinische Verantwortung (ab August 2026 Chefarzt Klinikum Traunstein, Kinderorthopädie & Skoliose)
- Persönliche Behandlungsphilosophie

**Interner Link:** → `/praxis/ueber-dr-mosafer.html`

### Section 11 — H2: Häufige Fragen (FAQ — 400 Wörter mit FAQPage Schema)

Jede Frage als H3, Antwort 40–80 Wörter, alle mit FAQPage-Schema markiert:

1. **Ab welchem Cobb-Winkel muss operiert werden?**
   Bei skeletal unreifen Patienten ab ca. 45–50°; bei Erwachsenen ab ca. 50° in Kombination mit Symptomen. Die Entscheidung hängt aber nicht nur vom Winkel ab, sondern auch von Progression, Symptomatik und Lebensqualität.

2. **Was kostet eine Skoliose-Behandlung privat?**
   Konservative Konsultationen werden nach GOÄ abgerechnet (Erstgespräch typischerweise 150–300 €). OP-Kosten variieren stark je nach Verfahren und Klinik. Vor jedem Eingriff erstellen wir einen schriftlichen Kostenvoranschlag.

3. **Wie lange dauert die Reha nach einer Skoliose-OP?**
   Stationäre Anschlussheilbehandlung typischerweise 3 Wochen. Ambulante Nachbehandlung 3–6 Monate. Vollbelastung im Sport meist nach 6–12 Monaten möglich, je nach Eingriff und Heilungsverlauf.

4. **Wächst eine Skoliose im Erwachsenenalter weiter?**
   Ja, eine bestehende Skoliose kann im Erwachsenenalter weiter zunehmen, besonders nach den Wechseljahren bei Frauen. Jährliche Progression von 0,5–3° pro Jahr ist möglich. Regelmäßige Verlaufskontrollen sind daher sinnvoll.

5. **Welche OP-Methode hat die geringsten Risiken?**
   Es gibt keine pauschal „risikoärmste" Methode — die Wahl hängt vom Befund ab. VBT ist bei jungen Patienten mit verbleibendem Wachstum bewegungserhaltend; Spondylodese ist robust bei stabilen Befunden. Eine individuelle Indikationsstellung ist entscheidend.

6. **Übernimmt die PKV/Beihilfe die Behandlung?**
   Private Krankenversicherungen und Beihilfe übernehmen medizinisch indizierte Skoliose-Behandlungen vollständig nach GOÄ. Vor geplanten Eingriffen empfehlen wir eine vorherige schriftliche Kostenzusage einzuholen.

7. **Kann eine Skoliose ohne OP behandelt werden?**
   Ja, in den allermeisten Fällen. Cobb-Winkel bis ca. 45° im Wachstum sind häufig konservativ stabilisierbar durch Schroth-Therapie und Korsett. Erwachsenenskoliose ist oft langfristig konservativ führbar.

8. **Wie finde ich einen guten Skoliose-Spezialisten?**
   Achten Sie auf: subspezialisierte Wirbelsäulen-Ausbildung, Mitgliedschaft in DWG/EUROSPINE, hohes OP-Volumen (> 100 Skoliose-OPs/Jahr für komplexe Fälle), persönliche Betreuung statt Team-Rotation, Bereitschaft zur Zweitmeinung.

### Section 12 — CTA-Block (Footer-Bereich, ~50 Wörter)

- **„Termin vereinbaren"** → Doctolib
- **„Zweitmeinung anfordern"** → `/skoliose/zweitmeinung.html`
- **„Für internationale Patienten"** → `/patienten/international.html`
- **Telefon, E-Mail, Praxis-Adresse**

---

## Bilder / Visuals (Nano Banana Pro generieren)

| # | Position | Motiv | Format |
|---|---|---|---|
| 1 | Hero | Wirbelsäulen-Anatomie schematisch (3D-Render, Off-White/Navy/Gold) | 16:9, 1920×1080, WebP |
| 2 | Section 3 (Grundlagen) | Cobb-Winkel-Diagramm | 4:3, PNG |
| 3 | Section 4 (Diagnostik) | Adams-Test-Illustration | 4:3, PNG |
| 4 | Section 5 (Konservativ) | Korsett-Anpassung | 3:2, PNG |
| 5 | Section 6 (OP) | VBT vs. Spondylodese Vergleich | 16:9, PNG |
| 6 | OG-Image | „Skoliose Spezialist · Mosafer Spine" Branding | 1200×630, JPG |

**Alle Bilder:** `alt`-Text mit Long-Tail-Keywords, `loading="lazy"`, WebP wenn möglich.

---

## Internal Linking Übersicht

Mindestens **8 ausgehende Links** zu eigenen Subseiten + **3 Conversion-Links**:

**Sub-Page-Links:**
1. `/skoliose/erstdiagnose.html`
2. `/skoliose/korsett-therapie.html`
3. `/skoliose/krankengymnastik.html`
4. `/skoliose/vbt.html`
5. `/skoliose/magec-rods.html`
6. `/skoliose/nemost.html`
7. `/skoliose/operative-behandlung.html`
8. `/wirbelsaeulenchirurgie/revision.html`
9. `/konservativ/` (Hub)
10. `/praxis/ueber-dr-mosafer.html`

**Conversion-Links:**
1. `/skoliose/zweitmeinung.html` (3× im Text)
2. Doctolib-Termin (2× CTA-Buttons)
3. `/patienten/privatpatienten.html` (1×)
4. `/patienten/international.html` (1×)

---

## External Authority Links (für E-E-A-T)

3–5 ausgehende Links zu **medizinischen Autoritätsquellen** mit `rel="noopener"` (kein nofollow — wir wollen Trust signalisieren):

- **S2k-Leitlinie Idiopathische Skoliose** (AWMF) — https://register.awmf.org/
- **Deutsche Wirbelsäulengesellschaft (DWG)** — https://www.dwg.org/
- **Scoliosis Research Society (SRS)** — https://www.srs.org/
- **PubMed-Artikel zu VBT-Langzeitergebnissen** — konkrete DOI-Verlinkung
- **EUROSPINE** — https://www.eurospine.org/

---

## SEO-Technik-Checkliste (vor Veröffentlichung)

- [ ] URL final entschieden und in Sitemap
- [ ] Title-Tag ≤ 60 Zeichen, primary keyword vorne
- [ ] Meta-Description ≤ 155 Zeichen mit CTA
- [ ] H1 enthält primary keyword
- [ ] H2-Struktur logisch und ohne Sprünge
- [ ] Alle Bilder mit alt-Text + lazy-load + WebP
- [ ] JSON-LD Schema validiert via [Schema.org Validator](https://validator.schema.org/) und [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Open Graph + Twitter Card geprüft
- [ ] Canonical + hreflang gesetzt
- [ ] Mindestens 8 interne Links zu eigenen Sub-Pages
- [ ] 3–5 externe Authority-Links (Leitlinien, Fachgesellschaften)
- [ ] FAQ-Block mit FAQPage-Schema
- [ ] Word-Count ≥ 3.500
- [ ] Lesbarkeit Flesch-DE 50–65
- [ ] PageSpeed Insights LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] Indexierung in GSC manuell anfordern nach Go-Live
- [ ] Autor-Box mit Foto + Credentials + Review-Datum

---

## Writing-Workflow Empfehlung

**Option A — Manuell (8–12h):**
1. Outline final machen (1h)
2. Section 1–4 schreiben (3h)
3. Section 5–8 schreiben (3h)
4. Section 9–12 schreiben (2h)
5. Schema + Meta + Links (1h)
6. Bildgenerierung Nano Banana Pro (1h)
7. Review + Validierung (1h)

**Option B — KI-Assist via Claude Code oder Cursor (2–3h):**
1. Briefing diesem Dokument als Kontext geben
2. Sektion für Sektion generieren lassen
3. Fachliche Aussagen von Dr. Mosafer prüfen lassen (Dauer: 1–2h Review)
4. HTML-Markup + Schema dazu generieren
5. Bilder per Nano Banana Pro
6. In `MOSAFER_SPINE_EXTRACTED/skoliose-spezialist.html` deployen

→ **Wenn du sagst „schreib"**, generiere ich Option B vollständig.

---

## Nach Go-Live — Promotion

1. GSC: URL-Inspection → Indexierung anfordern
2. Bing Webmaster: gleiche Anfrage
3. Interne Verlinkung von Homepage prominent
4. Sub-Pages mit Backlink zur Pillar updaten
5. Social-Share LinkedIn (Dr. Mosafer Profil)
6. NotebookLM-Notebook „Mosafer Spine Content" um Pillar ergänzen
7. Nach 30 Tagen: GSC-Performance prüfen, ggf. Title/Description A/B-testen

---

## Status

**Letzte Aktualisierung:** 17.05.2026
**Nächster Schritt:** User-Go für Schreiben (Option A oder B)
