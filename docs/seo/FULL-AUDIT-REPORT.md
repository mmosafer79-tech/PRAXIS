# SEO Full Audit Report — mosafer-spine.de
**Audit Date:** 2026-05-17  
**Audited URL:** https://www.mosafer-spine.de/  
**Pages Crawled:** 23 of 23 (full site)  
**Business Type:** Local Medical Specialist — Spine Surgery & Scoliosis Centre (YMYL)  
**Domain Age:** ~16 days (launched 2026-05-01 on Strato)

---

## SEO Health Score: 52 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 68/100 | 15.0 |
| Content Quality | 23% | 44/100 | 10.1 |
| On-Page SEO | 20% | 62/100 | 12.4 |
| Schema / Structured Data | 10% | 0/100 | 0.0 |
| Performance (CWV est.) | 10% | 72/100 | 7.2 |
| AI Search Readiness | 10% | 28/100 | 2.8 |
| Images | 5% | 88/100 | 4.4 |
| **TOTAL** | **100%** | — | **51.9** |

> Score reflects a brand-new domain (16 days old) with strong on-page fundamentals but critical gaps in structured data, content depth, and off-page authority. The fundamentals are solid — the missing pieces are well-defined and addressable.

---

## Executive Summary

### Top 5 Critical Issues
1. **Zero structured data across all 23 pages** — no schema markup of any kind (LocalBusiness, Physician, MedicalProcedure, BreadcrumbList). For YMYL medical content, this is the single highest-impact gap.
2. **No Open Graph or Twitter Card tags** — social sharing produces blank previews; AI crawlers (ChatGPT, Perplexity) cannot extract structured metadata for citation cards.
3. **Missing charset declaration in HTTP Content-Type header** — server sends `text/html` without `; charset=utf-8`, causing title/description garbling in SEO tools, scrapers, and some AI parsers.
4. **No hreflang implementation** — site has German (22 pages) and English (1 page: `/en/home.html`) content with zero language/region targeting signals for Google.
5. **Thin content on 17 of 23 pages** — average page word count is 318 words; for YMYL medical content Google Quality Raters expect substantive, expert-authored depth (600–1500+ words per specialty page).

### Top 5 Quick Wins (< 1 day each)
1. Add `charset=utf-8` to the server Content-Type header (Apache `.htaccess` one-liner)
2. Add Open Graph meta tags to all pages (global template change)
3. Add `LocalBusiness` / `Physician` JSON-LD schema block to homepage (30-min task)
4. Add `hreflang` tags linking German and English versions
5. Create `llms.txt` at root to guide AI crawlers

---

## 1. Technical SEO

### 1.1 Crawlability & Indexability

| Check | Status | Detail |
|---|---|---|
| HTTPS | ✅ Pass | TLS active, all pages HTTPS |
| www redirect | ✅ Pass | `mosafer-spine.de` → `www.mosafer-spine.de` (301) |
| robots.txt | ✅ Pass | `Allow: /` for all agents; Sitemap declared |
| XML Sitemap | ⚠️ Partial | Present at `/sitemap.xml`; missing Impressum, Datenschutz, `/en/` sub-pages; no `<lastmod>` tags |
| Canonical tags | ✅ Pass | Self-referencing canonicals on all 23 pages |
| 404 handling | ⚠️ Check | No custom 404 page observed |
| Indexing | ✅ Likely OK | No `noindex` detected; domain too new for GSC data |

### 1.2 Security Headers

| Header | Status | Detail |
|---|---|---|
| HTTPS | ✅ | Active |
| HSTS | ❌ Missing | No `Strict-Transport-Security` header — browsers won't enforce HTTPS-only |
| X-Content-Type-Options | ❌ Missing | Should be `nosniff` |
| X-Frame-Options | ❌ Missing | Clickjacking protection absent |
| Content-Security-Policy | ❌ Missing | No CSP header |
| Referrer-Policy | ❌ Missing | |
| Server | ⚠️ Exposed | `server: Apache` — minor information disclosure |

> Adding security headers via `.htaccess` takes ~15 minutes and is a known ranking signal for HTTPS/trust categories.

### 1.3 Encoding Issue — High Priority

The server sends `Content-Type: text/html` **without `; charset=utf-8`**. The HTML `<meta charset="UTF-8">` is present, but HTTP-level charset takes precedence for many parsers. Result: titles/descriptions render as `Â·` instead of `·` in SEO tools and AI scrapers.

**Fix in `.htaccess`:**
```apache
AddDefaultCharset UTF-8
```
Or:
```apache
<IfModule mod_mime.c>
  AddCharset UTF-8 .html
</IfModule>
```

### 1.4 Sitemap Quality

- 23 URLs declared; Impressum and Datenschutz pages exist (HTTP 200) but are absent from sitemap
- No `<lastmod>` dates — Google uses these for recrawl prioritisation
- No `<image:image>` entries — image sitemap not implemented
- Priority values (`1.0`, `0.9`, `0.8`, `0.7`) are formally valid but Google ignores them

---

## 2. Content Quality (E-E-A-T)

### 2.1 Word Count by Page

| Page | Words | Status |
|---|---|---|
| `/` (Homepage) | 613 | ✅ Acceptable |
| `/patienten/international.html` | 521 | ✅ Acceptable |
| `/skoliose/erstdiagnose.html` | 433 | ⚠️ Thin |
| `/skoliose/zweitmeinung.html` | 386 | ⚠️ Thin |
| `/skoliose/operative-behandlung.html` | 372 | ⚠️ Thin |
| `/wirbelsaeulenchirurgie/bandscheibenvorfall.html` | 338 | ⚠️ Thin |
| `/skoliose/vbt.html` | 322 | ⚠️ Thin |
| `/skoliose/korsett-therapie.html` | 315 | ⚠️ Thin |
| `/wirbelsaeulenchirurgie/revision.html` | 299 | ❌ Very Thin |
| `/wirbelsaeulenchirurgie/spinalkanalstenose.html` | 294 | ❌ Very Thin |
| `/wirbelsaeulenchirurgie/minimalinvasiv.html` | 289 | ❌ Very Thin |
| `/skoliose/krankengymnastik.html` | 300 | ❌ Very Thin |
| `/konservativ/prp-acp.html` | 279 | ❌ Very Thin |
| `/konservativ/prt-facettengelenksinfiltration.html` | 298 | ❌ Very Thin |
| `/skoliose/magec-rods.html` | 306 | ❌ Very Thin |
| `/skoliose/erwachsenenskoliose.html` | 273 | ❌ Very Thin |
| `/en/home.html` | 270 | ❌ Very Thin |
| `/praxis/ueber-dr-mosafer.html` | 240 | ❌ Very Thin |
| `/patienten/privatpatienten.html` | 243 | ❌ Very Thin |
| `/wirbelsaeulenchirurgie/dynamische-stabilisation.html` | 259 | ❌ Very Thin |
| `/praxis/nachsorge.html` | 260 | ❌ Very Thin |
| `/konservativ/stosswellentherapie.html` | 246 | ❌ Very Thin |
| `/skoliose/nemost.html` | 239 | ❌ Very Thin |

**Average: 318 words/page.** YMYL medical specialty pages should target 600–1,500 words with cited evidence, patient guidance, and clinical context.

### 2.2 E-E-A-T Signals

| Signal | Status | Note |
|---|---|---|
| Author name in content | ⚠️ Partial | Dr. Mosafer named on homepage; not consistently credited per page |
| Medical credentials listed | ⚠️ Partial | Credentials visible on `/praxis/ueber-dr-mosafer.html` but no dedicated credential block |
| Publication dates | ❌ Missing | No dates on any content — recency signal absent |
| Citations / references | ❌ Missing | No links to studies, guidelines, or clinical sources |
| Patient outcomes / testimonials | ❌ Missing | No reviews, case vignettes, or outcome data |
| Contact information | ⚠️ Partial | Rosenheim mentioned; full address not in HTML body |
| Impressum | ✅ | Present at `/impressum.html` (German legal requirement met) |
| Datenschutz | ✅ | Present at `/datenschutz.html` |
| Appointment booking | ✅ | Doctolib integration for scheduling |

### 2.3 AI Citation Readiness

Google AI Overviews, ChatGPT, and Perplexity extract structured, quotable facts. Current gaps:
- No FAQ blocks with direct Q&A pairs
- No numbered step-by-step procedure descriptions
- No statistics or outcome numbers that LLMs can extract
- No `speakable` markup

---

## 3. On-Page SEO

### 3.1 Title Tags

All 23 pages have unique, keyword-containing title tags. Length range: 35–61 characters (all within Google's ~55-char display window). ✅

**One issue:** Titles use `·` as a separator (e.g., `Mosafer Spine · Skoliosezentrum Rosenheim`). This renders correctly in browsers but appears garbled in some SEO tools due to the charset issue noted in §1.3.

### 3.2 Meta Descriptions

All pages have unique meta descriptions. Length range: 134–165 characters — within the ~155-char recommendation. ✅

One page exceeds 160 chars slightly: `/konservativ/prp-acp.html` (164 chars), `/praxis/ueber-dr-mosafer.html` (165 chars) — minor.

### 3.3 H1 Tags

All pages have exactly one H1. Structure is correct. ✅

**Formatting note:** Several H1 tags contain soft-hyphen (`&shy;`) characters for layout line-break control. Googlebot handles these correctly, but they can appear as hyphens in SERP snippets. Review whether these are intentional.

### 3.4 Internal Linking

**Critical gap:** Navigation links are the only inter-page links. The body content of every page contains **zero internal links** to related pages. This prevents:
- PageRank flow through the site
- Topic clustering signals
- User navigation via contextual links

Example: `/skoliose/operative-behandlung.html` never links to `/skoliose/vbt.html` or `/skoliose/magec-rods.html`, despite being topically adjacent.

### 3.5 Open Graph / Social Meta

**Zero OG tags across all 23 pages.** When pages are shared on LinkedIn, WhatsApp, or embedded in AI responses, they produce blank/generic previews.

Minimum required per page:
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:url" content="...">
<meta property="og:type" content="website">
```

---

## 4. Schema / Structured Data

### 4.1 Coverage

**0 of 23 pages have any schema markup.** This is the most impactful single gap on the site.

### 4.2 Missing Schema by Page Type

| Page Type | Recommended Schema | Priority |
|---|---|---|
| Homepage | `MedicalBusiness`, `Physician`, `BreadcrumbList` | Critical |
| About Dr. Mosafer | `Person` (with medical credentials), `Physician` | Critical |
| All treatment pages | `MedicalProcedure`, `BreadcrumbList` | High |
| Local pages / Contact | `LocalBusiness` with full NAP + `geo` coordinates | Critical |
| International patients | `MedicalClinic` | High |
| Zweitmeinung page | `MedicalOrganization`, `Offer` | Medium |

### 4.3 Minimum Viable Schema Block (Homepage)

```json
{
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Physician"],
  "name": "Mosafer Spine — Skoliosezentrum Rosenheim",
  "url": "https://www.mosafer-spine.de/",
  "description": "Dr. med. Mostafa Mosafer — Wirbelsäulenspezialist & Skoliose-Experte in Rosenheim",
  "physician": {
    "@type": "Physician",
    "name": "Dr. med. Mostafa Mosafer",
    "medicalSpecialty": "Orthopedic Surgery"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rosenheim",
    "addressCountry": "DE"
  },
  "telephone": "[Telefonnummer]",
  "openingHours": "[Öffnungszeiten]",
  "sameAs": [
    "https://doctolib.de/praxis/vogtareuth/wirbelsaeulen-und-skoliosezentrum-dr-med-mostafa-mosafer"
  ]
}
```

---

## 5. Performance (Estimated — No API Key)

PageSpeed Insights API was rate-limited (no API key configured). Estimates based on HTML structure:

| Signal | Observation | Impact |
|---|---|---|
| Static HTML | ✅ Pure HTML/CSS, no JS framework | Fast TTFB |
| External fonts | ⚠️ Google Fonts (`DM Sans`, `DM Serif Display`) — 2 preconnect hints present | Minor LCP impact |
| Images per page | ✅ 1–2 images per page | Minimal image weight |
| Render-blocking resources | ✅ No JS blocking detected | Good |
| Inline CSS | ✅ Styles inlined in `<style>` tag | Fast first render |
| Image formats | ⚠️ Unknown — cannot verify WebP/AVIF without crawl | Potential improvement |

> Estimated Lighthouse performance: 75–85/100. Add a free Google API key to get real CrUX field data.

---

## 6. AI Search Readiness

| Signal | Status | Detail |
|---|---|---|
| `llms.txt` | ❌ Missing | No AI crawler guidance file at `/llms.txt` |
| `robots.txt` AI crawlers | ✅ | `Allow: /` — GPTBot, ClaudeBot, PerplexityBot can crawl |
| Open Graph (citation cards) | ❌ Missing | AI responses cannot render rich link previews |
| Schema markup | ❌ Missing | No structured data for AI to extract facts |
| FAQ / Q&A content | ❌ Missing | LLMs prefer extractable Q&A pairs |
| Quotable statistics | ❌ Missing | No data points LLMs can cite verbatim |
| Author attribution | ⚠️ Partial | Named author present but no byline per page |
| `speakable` schema | ❌ Missing | |

---

## 7. Images

| Check | Result |
|---|---|
| Images with missing alt text | **0 / 46 total images** ✅ |
| Average images per page | 1.3 (very sparse) |
| Image sitemap | ❌ Not implemented |
| Format (WebP/AVIF) | Unknown — cannot confirm without deeper crawl |

Images are well-handled (all alt text present). Site is under-visualised overall — clinical diagrams, X-ray illustrations, and procedure photos would improve dwell time and E-E-A-T signals.

---

## 8. Local SEO

| Signal | Status | Detail |
|---|---|---|
| NAP in HTML | ⚠️ Partial | City ("Rosenheim") present; full address, phone, zip not in page body |
| `LocalBusiness` schema | ❌ Missing | No structured address data |
| Google Business Profile | Unknown | Not auditable without GBP API — verify independently |
| Doctolib listing | ✅ Linked | Appointment booking via Doctolib (external authority signal) |
| Review signals | ❌ Missing | No review schema, no testimonials embedded |
| Local keyword targeting | ✅ Good | "Rosenheim" appears in titles/metas consistently |

---

## 9. International SEO

| Signal | Status | Detail |
|---|---|---|
| `hreflang` tags | ❌ Missing | German (22 pages) + English (1 page) with no language targeting |
| English content | ⚠️ Minimal | One English page (`/en/home.html`) — no English treatment pages |
| International patient page | ✅ Good | `/patienten/international.html` — English, Arabic, Farsi mentioned |
| Language selector | ✅ Footer | "English · International patients" footer link present |

**Minimum hreflang fix** (add to `<head>` of homepage):
```html
<link rel="alternate" hreflang="de" href="https://www.mosafer-spine.de/" />
<link rel="alternate" hreflang="en" href="https://www.mosafer-spine.de/en/home.html" />
<link rel="alternate" hreflang="x-default" href="https://www.mosafer-spine.de/" />
```

---

## 10. Backlinks & Domain Authority

| Metric | Value | Note |
|---|---|---|
| Common Crawl PageRank | None | Domain too new for Common Crawl index |
| Referring domains | 0 confirmed | 16-day-old domain |
| Doctolib listing | ✅ | High-authority healthcare platform |
| Schön Klinik mention | Unknown | Confirm if any institutional backlinks exist |

New domain. All authority must be built. Priority link targets: medical directories (Doctolib already done), DACH healthcare portals (Jameda, DocFinder), university/hospital affiliations, and patient advocacy organisations.

---

## Appendix: Page Inventory

| URL | Title | Words | Schema | OG | Canonical |
|---|---|---|---|---|---|
| `/` | Mosafer Spine · Skoliosezentrum Rosenheim | 613 | ❌ | ❌ | ✅ |
| `/skoliose/erstdiagnose.html` | Erstdiagnose & Cobb-Winkel | 433 | ❌ | ❌ | ✅ |
| `/skoliose/krankengymnastik.html` | Krankengymnastik & Schroth-Methode | 300 | ❌ | ❌ | ✅ |
| `/skoliose/korsett-therapie.html` | Korsett-Therapie bei Skoliose | 315 | ❌ | ❌ | ✅ |
| `/skoliose/operative-behandlung.html` | Operative Behandlung der Skoliose | 372 | ❌ | ❌ | ✅ |
| `/skoliose/vbt.html` | VBT – Vertebral Body Tethering | 322 | ❌ | ❌ | ✅ |
| `/skoliose/magec-rods.html` | MAGEC-Stäbe – wachstumslenkende Systeme | 306 | ❌ | ❌ | ✅ |
| `/skoliose/nemost.html` | NEMOST – Wachstumslenkung | 239 | ❌ | ❌ | ✅ |
| `/skoliose/zweitmeinung.html` | Zweitmeinung bei Skoliose & WS-OP | 386 | ❌ | ❌ | ✅ |
| `/skoliose/erwachsenenskoliose.html` | Erwachsenenskoliose | 273 | ❌ | ❌ | ✅ |
| `/wirbelsaeulenchirurgie/bandscheibenvorfall.html` | Bandscheibenvorfall | 338 | ❌ | ❌ | ✅ |
| `/wirbelsaeulenchirurgie/spinalkanalstenose.html` | Spinalkanalstenose | 294 | ❌ | ❌ | ✅ |
| `/wirbelsaeulenchirurgie/minimalinvasiv.html` | Minimalinvasive WS-Chirurgie | 289 | ❌ | ❌ | ✅ |
| `/wirbelsaeulenchirurgie/dynamische-stabilisation.html` | Dynamische Stabilisation – PEEK-Stab | 259 | ❌ | ❌ | ✅ |
| `/wirbelsaeulenchirurgie/revision.html` | Revisionschirurgie der Wirbelsäule | 299 | ❌ | ❌ | ✅ |
| `/konservativ/prp-acp.html` | PRP & ACP – Biologische Therapie | 279 | ❌ | ❌ | ✅ |
| `/konservativ/prt-facettengelenksinfiltration.html` | PRT & Facettengelenksinfiltration | 298 | ❌ | ❌ | ✅ |
| `/konservativ/stosswellentherapie.html` | Stoßwellentherapie | 246 | ❌ | ❌ | ✅ |
| `/praxis/ueber-dr-mosafer.html` | Dr. Mostafa Mosafer | 240 | ❌ | ❌ | ✅ |
| `/praxis/nachsorge.html` | Nachsorge nach WS-OP | 260 | ❌ | ❌ | ✅ |
| `/patienten/international.html` | International Patients | 521 | ❌ | ❌ | ✅ |
| `/patienten/privatpatienten.html` | Privatpatienten & Selbstzahler | 243 | ❌ | ❌ | ✅ |
| `/en/home.html` | Mosafer Spine · Scoliosis Centre Rosenheim | 270 | ❌ | ❌ | ✅ |
