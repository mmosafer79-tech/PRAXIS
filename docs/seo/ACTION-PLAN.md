# SEO Action Plan — mosafer-spine.de
**Generated:** 2026-05-17 | **Current Score:** 52/100 | **Target (6 months):** 74/100

---

## CRITICAL — Fix Immediately (this week)

### C1. Fix HTTP charset declaration
**Impact:** Technical / Encoding  
**Effort:** 5 minutes  
**Files:** Strato server config or `.htaccess`

The server sends `Content-Type: text/html` without specifying UTF-8. Titles and meta descriptions render as garbled text (`Â·` instead of `·`) in SEO tools, scrapers, and AI parsers.

```apache
# Add to .htaccess in web root
AddDefaultCharset UTF-8
```

---

### C2. Add JSON-LD schema to homepage
**Impact:** Schema (+10 pts), Local SEO, AI citations  
**Effort:** 1 hour  
**Files:** `index.html`

Add inside `<head>`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Physician"],
  "name": "Mosafer Spine — Skoliosezentrum Rosenheim",
  "url": "https://www.mosafer-spine.de/",
  "description": "Dr. med. Mostafa Mosafer — Wirbelsäulenspezialist & Skoliose-Experte in Rosenheim",
  "image": "https://www.mosafer-spine.de/uploads/logo.png",
  "telephone": "+49-XXXX-XXXXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Straße + Hausnummer]",
    "postalCode": "[PLZ]",
    "addressLocality": "Rosenheim",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.8571,
    "longitude": 12.1215
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://doctolib.de/praxis/vogtareuth/wirbelsaeulen-und-skoliosezentrum-dr-med-mostafa-mosafer"
  ],
  "medicalSpecialty": [
    "https://schema.org/Orthopedic",
    "https://schema.org/SpinalCordMedicine"
  ]
}
</script>
```

---

### C3. Add Open Graph meta tags (global)
**Impact:** On-Page (+4 pts), Social sharing, AI citation cards  
**Effort:** 2 hours  
**Files:** All 23 HTML files (template change)

Every page needs these 5 tags in `<head>`:
```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="Mosafer Spine">
<meta property="og:url" content="[page canonical URL]">
<meta property="og:title" content="[page title]">
<meta property="og:description" content="[page meta description]">
<meta property="og:image" content="https://www.mosafer-spine.de/uploads/og-default.jpg">
<meta name="twitter:card" content="summary_large_image">
```

Create one 1200×630px OG image (`og-default.jpg`) with logo + "Mosafer Spine · Skoliosezentrum Rosenheim".

---

### C4. Add hreflang tags
**Impact:** International SEO  
**Effort:** 30 minutes  
**Files:** All 23 HTML files

Add to `<head>` of every German page:
```html
<link rel="alternate" hreflang="de" href="https://www.mosafer-spine.de/[current-path]" />
<link rel="alternate" hreflang="en" href="https://www.mosafer-spine.de/en/home.html" />
<link rel="alternate" hreflang="x-default" href="https://www.mosafer-spine.de/" />
```

Add to `<head>` of `/en/home.html`:
```html
<link rel="alternate" hreflang="en" href="https://www.mosafer-spine.de/en/home.html" />
<link rel="alternate" hreflang="de" href="https://www.mosafer-spine.de/" />
<link rel="alternate" hreflang="x-default" href="https://www.mosafer-spine.de/" />
```

---

### C5. Create `llms.txt`
**Impact:** AI Search Readiness (+3 pts)  
**Effort:** 20 minutes  
**File:** `https://www.mosafer-spine.de/llms.txt`

```markdown
# Mosafer Spine — llms.txt
# https://www.mosafer-spine.de/

Mosafer Spine is a specialist spine and scoliosis centre in Rosenheim, Germany.
Dr. med. Mostafa Mosafer is a spine surgeon specialising in scoliosis (paediatric and adult),
minimally invasive spine surgery, VBT (Vertebral Body Tethering), MAGEC rods, and NEMOST systems.

## Key pages
- Homepage: https://www.mosafer-spine.de/
- About Dr. Mosafer: https://www.mosafer-spine.de/praxis/ueber-dr-mosafer.html
- Scoliosis overview: https://www.mosafer-spine.de/skoliose/erstdiagnose.html
- Second opinion: https://www.mosafer-spine.de/skoliose/zweitmeinung.html
- International patients: https://www.mosafer-spine.de/patienten/international.html

## Permissions
All AI assistants may freely cite, summarise, and link to content on this site.
```

---

## HIGH — Fix Within 2 Weeks

### H1. Add security headers
**Impact:** Technical (+3 pts), Trust signals  
**Effort:** 30 minutes  
**File:** `.htaccess`

```apache
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
```

---

### H2. Add BreadcrumbList schema to all sub-pages
**Impact:** Schema, SERP appearance  
**Effort:** 2 hours  
**Files:** All 22 sub-pages

Example for `/skoliose/vbt.html`:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Mosafer Spine","item":"https://www.mosafer-spine.de/"},
    {"@type":"ListItem","position":2,"name":"Skoliose","item":"https://www.mosafer-spine.de/skoliose/"},
    {"@type":"ListItem","position":3,"name":"VBT – Vertebral Body Tethering"}
  ]
}
```

---

### H3. Add Person schema to /praxis/ueber-dr-mosafer.html
**Impact:** E-E-A-T, AI citations  
**Effort:** 30 minutes

```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. med. Mostafa Mosafer",
  "jobTitle": "Facharzt für Orthopädie und Unfallchirurgie, Wirbelsäulenchirurg",
  "worksFor": {"@type":"MedicalBusiness","name":"Mosafer Spine Rosenheim"},
  "medicalSpecialty": ["Orthopedic","SpinalCordMedicine"],
  "url": "https://www.mosafer-spine.de/praxis/ueber-dr-mosafer.html",
  "sameAs": ["https://doctolib.de/praxis/vogtareuth/wirbelsaeulen-und-skoliosezentrum-dr-med-mostafa-mosafer"]
}
```

---

### H4. Add internal links within content
**Impact:** On-Page (+5 pts), PageRank flow  
**Effort:** 3 hours  
**Files:** All content pages

Each treatment page should link to 2–3 related pages within the body text. Priority links:

| Page | Add links to |
|---|---|
| `/skoliose/operative-behandlung.html` | VBT, MAGEC-Stäbe, Zweitmeinung |
| `/skoliose/erstdiagnose.html` | Korsett-Therapie, Krankengymnastik, Zweitmeinung |
| `/wirbelsaeulenchirurgie/bandscheibenvorfall.html` | Minimalinvasiv, PRT, Konservativ |
| `/praxis/ueber-dr-mosafer.html` | Zweitmeinung, International patients |
| `/patienten/international.html` | Zweitmeinung, Über Dr. Mosafer |

---

### H5. Update sitemap with lastmod and missing pages
**Impact:** Technical  
**Effort:** 30 minutes  
**File:** `sitemap.xml`

- Add `<lastmod>2026-05-17</lastmod>` to all existing entries
- Add `impressum.html` and `datenschutz.html` entries
- Add `/en/home.html` with `hreflang` annotation

---

### H6. Submit site to Google Search Console
**Impact:** Indexing speed, data access  
**Effort:** 30 minutes

1. Add property for `https://www.mosafer-spine.de/`
2. Submit sitemap
3. Request indexing of homepage and top 5 pages
4. Monitor for crawl errors

---

### H7. Register on Jameda and DocFinder
**Impact:** Local SEO, Backlinks, E-E-A-T  
**Effort:** 2 hours per platform

Both are high-DA German medical directories that:
- Provide follow/nofollow backlinks
- Appear in Google local results for medical searches
- Build E-E-A-T trust signals for YMYL content

---

## MEDIUM — Fix Within 1 Month

### M1. Expand content depth on priority pages
**Impact:** Content Quality (+8 pts)  
**Effort:** 2–4 hours per page

Target pages for first expansion (highest search volume potential):

| Page | Current | Target | Content to add |
|---|---|---|---|
| `/skoliose/erstdiagnose.html` | 433 | 900 | Cobb-Winkel Tabelle, Diagnoseablauf Schritt-für-Schritt, häufige Fragen |
| `/wirbelsaeulenchirurgie/bandscheibenvorfall.html` | 338 | 900 | Symptome, konservativ vs. operativ Entscheidungsbaum, Genesungsdauer |
| `/skoliose/operative-behandlung.html` | 372 | 1000 | OP-Ablauf, Risiken, Erholungszeit, Fallbeispiele |
| `/praxis/ueber-dr-mosafer.html` | 240 | 700 | Ausbildung, Fallzahlen, Schwerpunkte, Publikationen |
| `/patienten/international.html` | 521 | 1000 | FAQ block, Reiseinfos Bayern, Kosten/Kostenerstattung |

---

### M2. Add MedicalProcedure schema to treatment pages
**Impact:** Schema, Rich results  
**Effort:** 3 hours

Example for `/skoliose/vbt.html`:
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Vertebral Body Tethering (VBT)",
  "procedureType": "https://schema.org/SurgicalProcedure",
  "description": "Wachstumserhaltende Skoliose-OP mittels anteriorer Verankerung und Kordel",
  "bodyLocation": "Wirbelsäule",
  "followup": "Rehabilitationsprogramm, 12 Monate Nachsorge",
  "recognizingAuthority": {"@type":"MedicalOrganization","name":"Mosafer Spine"}
}
```

---

### M3. Add FAQ schema to top 5 pages
**Impact:** Rich results, AI citations  
**Effort:** 1 hour per page

Write 3–5 Q&A pairs per page based on common patient questions. Add `FAQPage` JSON-LD schema.

Example for homepage:
- Q: "Was kostet eine Zweitmeinung bei Wirbelsäulen-OP?" → A: ...
- Q: "Nimmt Dr. Mosafer Kassenpatienten?" → A: ...
- Q: "Wie lange dauert eine Skoliose-OP?" → A: ...

---

### M4. Create a dedicated Kontakt page
**Impact:** Local SEO, User experience  
**Effort:** 1 hour  
**New file:** `kontakt.html`

Include:
- Full NAP (Name, Address, Phone)
- Embedded Google Maps
- Appointment booking (Doctolib iframe or link)
- Contact form or email
- `LocalBusiness` schema with full address

Add to sitemap.

---

### M5. Add `<lastmod>` and image sitemap
**Impact:** Technical  
**Effort:** 1 hour

Create `sitemap_images.xml` with all image URLs and their alt texts. Submit separately to Google Search Console.

---

### M6. Set up Google API key (free)
**Impact:** Monitoring — enables real CrUX data and PageSpeed tracking  
**Effort:** 30 minutes

1. Create project in Google Cloud Console (free)
2. Enable PageSpeed Insights API + CrUX API
3. Generate API key, no billing required for these two APIs
4. Add to `~/.config/claude-seo/google-api.json`

This unlocks real Core Web Vitals field data for future audits.

---

## LOW — Backlog

### L1. Add publication dates to content
Add `<time datetime="2026-05-XX">` to pages and include `datePublished`/`dateModified` in schema. Google uses this for freshness signals.

### L2. Add a blog or Patientenratgeber section
A blog with 4–6 articles/year (e.g., "Wann braucht ein Kind mit Skoliose ein Korsett?") builds topical authority, attracts long-tail search queries, and creates linkable assets.

### L3. Expand English content
Add English versions of the top 3 treatment pages (Scoliosis, VBT, Second Opinion) to serve the international patients audience properly. Each page pairs with the German version via `hreflang`.

### L4. Add Twitter/X card tags
After OG tags are implemented, add `<meta name="twitter:card" content="summary_large_image">` for X sharing.

### L5. Verify and optimise image formats
Check if images are served as WebP or AVIF. If still JPEG/PNG, convert to WebP for ~25–35% size reduction.

### L6. Consider Klinikum Traunstein cross-linking
When Dr. Mosafer becomes Chefarzt (July 2026), explore whether the Klinikum Traunstein website can link to mosafer-spine.de. A hospital backlink is extremely high-value for YMYL medical SEO.

---

## Score Projection

| Milestone | Est. Score | Timeline |
|---|---|---|
| After Critical fixes (C1–C5) | 58/100 | Week 1 |
| After High fixes (H1–H7) | 65/100 | Week 2–3 |
| After Medium fixes (M1–M6) | 72/100 | Month 2 |
| After Low + content growth | 78/100 | Month 4–6 |

> Off-page authority (backlinks) is the primary ceiling beyond month 2. Domain authority growth is organic — directory listings (H7) and institutional links (L6) are the fastest legitimate paths.
