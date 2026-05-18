# White Dove Cleaning Services — Project Summary

**Client:** Elisha Costa
**Business:** White Dove Cleaning Services
**Location:** Indianapolis, IN 46231
**Domain:** whitedovecleaningservices.com
**Phone:** (317) 793-2172
**Email:** whitedovecleaningco@gmail.com

---

## Project Overview

Built a modern, mobile-responsive single-page lead-generation website for White Dove Cleaning Services — a woman-owned residential and commercial cleaning company serving the greater Indianapolis area. The site replaces/complements Elisha's existing WordPress site hosted on WP Engine.

## Linear Tracking

All work tracked in **Davidaisolutions (DAV)** team under the **White Dove Cleaning** project.

| Issue | Title | Labels | Status |
|-------|-------|--------|--------|
| DAV-516 | Build initial White Dove Cleaning website | Feature, Content, Technical | Done |
| DAV-517 | Set up GitHub Pages deployment pipeline | Feature, Technical | Done |
| DAV-518 | Update branding to match White Dove Cleaning Services | Improvement, Content | Done |
| DAV-519 | Replace placeholder content with real business data from WP site | Feature, Content | Done |
| DAV-520 | Wire quote form to Formsubmit.co, add SEO and analytics tracking | Feature, SEO, Technical | Done |
| DAV-521 | Apply client feedback: photo, hours, auto-reply, and copy updates | Improvement, Content | Done |

---

## What Was Built

### Site Structure (Single Page)
- **Hero** — Full-width background with CTAs (Request Estimate + Call)
- **Services** — 6 service cards: Residential, Commercial, Deep Clean, Move-In/Out, Post-Construction, Specialty
- **What's Included** — Standard cleaning checklist with image
- **Why White Dove** — 4-point differentiator grid (Woman-Owned, Tailored Service, Reliable, Community Focused)
- **About / Meet the Owner** — Elisha's photo, bio, and mission statement
- **Testimonials** — 3 client reviews (Sarah M./Carmel, Linda T./Plainfield, James R./Indianapolis)
- **Service Areas** — 7 locations: Indianapolis, Avon, Plainfield, Danville, Brownsburg, Zionsville, Carmel
- **Quote Form** — Full estimate request form with service type, property type, and details
- **Contact Bar** — Location, phone, email, hours
- **Footer** — Brand, nav links, copyright

### Tech Stack
- **Frontend:** Pure HTML, CSS, JavaScript — no frameworks, no build step
- **Fonts:** Google Fonts (Playfair Display headings, Inter body)
- **Icons:** Inline SVGs (zero external dependencies)
- **Hosting:** GitHub Pages with automated deployment
- **Form backend:** Formsubmit.co (AJAX submission)

### Lead Capture
- Quote form POSTs to Formsubmit.co → delivers to whitedovecleaningco@gmail.com
- Honeypot spam protection
- Custom email subject: "New Estimate Request — White Dove Cleaning"
- Auto-reply to leads: "Thank you for contacting White Dove Cleaning! We've received your request and will get back to you shortly."
- AJAX submission with loading state + success confirmation
- Error fallback prompts visitors to call

### SEO & Structured Data
- Open Graph tags (title, description, image, URL)
- Twitter Card (summary_large_image)
- Canonical URL
- `sitemap.xml` with homepage
- `robots.txt` with sitemap reference
- JSON-LD LocalBusiness schema:
  - Business name, phone, email, address
  - 7 service areas
  - Founder: Elisha Costa
  - Price range indicator

### Analytics
- Google Tag Manager (GTM-TF7P76ZJ) installed in head + noscript fallback
- Ready for GA4, conversion tracking, remarketing pixels

### Design
- Warm color palette: ivory, cream, gold accents
- Fully responsive (mobile hamburger menu, stacked layouts)
- Sticky header with scroll-aware state
- Scroll-triggered entrance animations (Intersection Observer)
- Smooth scroll navigation with header offset

### Deployment
- GitHub Actions workflow (`.github/workflows/deploy.yml`)
- Auto-deploys on every push to `main`
- Concurrency group prevents overlapping builds

---

## Content Source

All real content extracted from Elisha's existing WordPress site on WP Engine (whitedoveclean). Includes:
- Owner bio and mission statement
- Service descriptions and categories
- Service area list
- Contact information
- Logo variants (white, black, original)
- Cleaning photos and hero imagery
- Elisha's headshot

---

## Client Feedback Applied

Per Elisha's direct feedback:
- Added her headshot to the About section
- Updated hours: Mon-Fri 8am-6pm, Sat & Sun by request only
- Changed experience language to "over a decade"
- Updated trust badge to "Fully Insured"
- Added Formsubmit auto-reply for immediate lead acknowledgment

---

## Files

```
index.html              Main page (all sections)
styles.css              Full stylesheet (~800 lines)
script.js               Interactivity (sticky header, mobile menu, smooth scroll, form AJAX, scroll animations)
sitemap.xml             SEO sitemap
robots.txt              Crawler directives
favicon.ico             Browser tab icon
images/
  logo.jpeg             Original logo
  logo-white.png        White logo variant (header, footer)
  logo-black.png        Dark logo variant (scrolled header)
  elisha.jpg            Owner headshot
  hero-bg.webp          Hero section background
  cta-bg.webp           CTA section background
  clean-floors.jpeg     Hardwood floors photo (What's Included)
  clean-bathroom.jpeg   Bathroom photo
  star-ratings.png      Star rating graphic
.github/workflows/
  deploy.yml            GitHub Pages auto-deployment
```

---

## Status

**Complete.** Site is live, form is functional, SEO is in place, analytics tracking is wired up. All work logged in Linear as DAV-516 through DAV-521, all marked Done.
