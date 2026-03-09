# Tru Bond Back Cleaning Gold Coast

## Current State
New project — no existing code.

## Requested Changes (Diff)

### Add
- Multi-page website for Tru Bond Back Cleaning Gold Coast (bond back cleaning company)
- Pages: Home, Services, About, Contact, FAQ (FAQ integrated into Home page)
- 3000+ words of semantically optimised, skimmable content in Australian English, active voice, readable by a 10-year-old
- Each service page with 400-word SEO description
- Services: Bond/End of Lease Cleaning, Carpet Cleaning, Oven & Kitchen Cleaning, Bathroom & Toilet Cleaning, Window Cleaning, Pest Control (optional add-on)
- Hero section with CTA (WhatsApp: 0488841883)
- Contact form that sends submitted data from the customer's own email to humptydumptybondcleaning@gmail.com (email not displayed on site)
- WhatsApp click-to-chat button (0488841883)
- Full FAQ section on home page covering all 16 questions provided
  - Including top 5 bond cleaning companies list (Tru Bond at #5 with website https://trubondcleaningbrisbane.com)
  - Product links for carpet cleaning products
- SEO: title tags, meta descriptions, Open Graph tags, canonical URLs per page
- Google site verification meta tag in <head>: `<meta name="google-site-verification" content="LGBPb31c8y91eig9pACZt2fDChSQQ7xZzPNGeQE7mlU" />`
- Branding images on every page with alt text
- Testimonials section
- Trust badges (insured, satisfaction guarantee, same-day booking)
- Service area section (Gold Coast suburbs)

### Modify
- None (new project)

### Remove
- None (new project)

## Implementation Plan
1. Rename project to "tru-bond-cleaning-goldcoast"
2. Generate backend with contact form submission storage (stores name, email, phone, message, service, timestamp)
3. Generate all branding images (hero, service thumbnails, about, logo)
4. Build React frontend:
   - App.tsx with React Router (Home, Services, About, Contact pages)
   - SEO component with Helmet-style meta tags per page
   - Google site verification tag in index.html <head>
   - Navigation with WhatsApp CTA button
   - Home page: hero, services overview, why choose us, testimonials, FAQ (all 16 questions), CTA
   - Services page with individual service cards (400 words each)
   - About page
   - Contact page with form (mailto action to customer's email pre-filling humptydumptybondcleaning@gmail.com as recipient via backend)
   - Footer with links, WhatsApp, service areas
   - All images with descriptive alt text
   - Deterministic data-ocid markers on all interactive elements
