# Tru Bond Cleaning Gold Coast

## Current State
- React/TypeScript frontend with 4 pages: Home, Services, About, Contact
- TanStack Router with hash-based routing
- useMetaTags hook for per-page SEO (title, description, keywords, OG, Twitter, canonical)
- HomePage lists 20 service areas as plain text badges (no links)
- Layout includes Navbar, Footer, WhatsAppFloat
- No suburb-specific landing pages exist

## Requested Changes (Diff)

### Add
- 20 dedicated suburb pages, one for each Gold Coast suburb currently listed on the homepage:
  - Surfers Paradise, Southport, Broadbeach, Burleigh Heads, Robina, Varsity Lakes, Coomera, Helensvale, Nerang, Tweed Heads, Mudgeeraba, Elanora, Palm Beach, Labrador, Biggera Waters, Runaway Bay, Hope Island, Oxenford, Molendinar, Arundel
- Each suburb page:
  - ~400 words of unique, semantically optimised, skimmable content in Australian English
  - Active voice throughout
  - Reading level suitable for a 10-year-old (short sentences, simple words, subheadings)
  - SEO meta title tag: "Bond Cleaning [Suburb] | Tru Bond Cleaning Gold Coast"
  - SEO meta description (150–160 chars)
  - SEO keywords meta tag
  - OG / Twitter card tags
  - Canonical URL
  - Hero section with suburb name, short intro
  - Key service list (skimmable bullets)
  - Why choose Tru Bond section
  - CTA (WhatsApp + Book Online)
  - Structured with H1, H2, H3 headings for semantic hierarchy
- A single reusable SuburbPage component (parameterised) to avoid code duplication
- Routes added for all 20 suburbs: /suburbs/[suburb-slug]
- Homepage service areas section: convert plain badges into clickable internal links pointing to each suburb page (SEO internal linking)
- Footer: add a "Service Areas" section with links to all suburb pages

### Modify
- App.tsx: add 20 suburb routes
- HomePage.tsx: convert serviceAreas badges to Link components pointing to /suburbs/[slug]
- Footer.tsx: add suburb links section

### Remove
- Nothing removed

## Implementation Plan
1. Create SuburbPage.tsx — reusable component accepting suburb config (name, slug, intro paragraph, unique content sections, meta tags)
2. Create suburbData.ts — data file with all 20 suburb configs (name, slug, 400-word content, meta title, description, keywords, canonical)
3. Add 20 routes to App.tsx (/suburbs/surfers-paradise, /suburbs/southport, etc.)
4. Update HomePage.tsx service areas section to use Link components to suburb pages
5. Update Footer.tsx to include suburb page links grid
6. Validate (typecheck + lint + build)
