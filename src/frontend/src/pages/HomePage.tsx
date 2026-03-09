import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMetaTags } from "@/hooks/useMetaTags";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  DollarSign,
  MapPin,
  Phone,
  Shield,
  Star,
} from "lucide-react";

const services = [
  {
    title: "End of Lease / Bond Cleaning",
    description:
      "A full, thorough clean of your entire rental property. We follow the REIQ checklist so nothing gets missed.",
    image: "/assets/generated/service-bond-cleaning.dim_600x400.jpg",
    alt: "Professional bond back cleaning service Gold Coast — spotless kitchen and living area",
    href: "/services" as const,
  },
  {
    title: "Carpet Steam Cleaning",
    description:
      "Deep hot water extraction cleaning that removes stains, odours, and bacteria from your carpets.",
    image: "/assets/generated/service-carpet-cleaning.dim_600x400.jpg",
    alt: "Professional carpet steam cleaning service Gold Coast — deep cleaning carpets",
    href: "/services" as const,
  },
  {
    title: "Oven & Kitchen Deep Clean",
    description:
      "We tackle baked-on grease, rangehood filters, cupboards inside and out, and every surface in the kitchen.",
    image: "/assets/generated/service-oven-cleaning.dim_600x400.jpg",
    alt: "Professional oven and kitchen deep cleaning Gold Coast — sparkling clean result",
    href: "/services" as const,
  },
  {
    title: "Bathroom & Toilet Cleaning",
    description:
      "Tiles, grout, shower screens, taps, and toilets — we scrub every bathroom until it sparkles.",
    image: "/assets/generated/service-bathroom-cleaning.dim_600x400.jpg",
    alt: "Immaculate bathroom after professional bond cleaning Gold Coast",
    href: "/services" as const,
  },
  {
    title: "Window & Glass Cleaning",
    description:
      "Streak-free window panes, cleaned sills, tracks, and sliding door glass — inside and ground floor exterior.",
    image: "/assets/generated/service-window-cleaning.dim_600x400.jpg",
    alt: "Streak-free window cleaning service Gold Coast — sparkling clean windows",
    href: "/services" as const,
  },
  {
    title: "Walls & Skirting Board Cleaning",
    description:
      "Scuffs, marks, and dust on walls and skirting boards removed with paint-safe cleaning solutions.",
    image: "/assets/generated/service-bond-cleaning.dim_600x400.jpg",
    alt: "Professional walls and skirting board cleaning Gold Coast — clean and spotless walls",
    href: "/services" as const,
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "100% Bond Back Guarantee",
    description:
      "We come back for free if your property manager finds anything we missed. No questions asked.",
    color: "text-accent",
  },
  {
    icon: CheckCircle2,
    title: "REIQ Checklist Compliant",
    description:
      "We follow the exact checklist Queensland real estate agents use during final inspections.",
    color: "text-primary",
  },
  {
    icon: Award,
    title: "Fully Insured Cleaners",
    description:
      "All our staff are background-checked and carry public liability insurance.",
    color: "text-gold",
  },
  {
    icon: Clock,
    title: "Same-Day Bookings",
    description:
      "Need us urgently? We're available 7 days a week across all Gold Coast suburbs.",
    color: "text-accent",
  },
  {
    icon: DollarSign,
    title: "Fixed Price Quotes",
    description:
      "We give you a fixed price upfront. No hidden fees. No surprises. Ever.",
    color: "text-primary",
  },
  {
    icon: Star,
    title: "5-Star Google Rated",
    description:
      "Hundreds of happy Gold Coast tenants have trusted us to get their full bond back.",
    color: "text-gold",
  },
];

const testimonials = [
  {
    name: "Jessica M.",
    location: "Surfers Paradise",
    text: "Booked Tru Bond Cleaning last minute and they were amazing! Got every dollar of my bond back. Will absolutely use again.",
    rating: 5,
  },
  {
    name: "Tom R.",
    location: "Robina",
    text: "The cleaners were so thorough — they even cleaned inside the cupboards and behind the oven. My property manager was impressed. Full bond refunded!",
    rating: 5,
  },
  {
    name: "Sarah K.",
    location: "Burleigh Heads",
    text: "Brilliant service, fair price, and they came back the next day to fix one tiny thing the agent picked up on. True professionals.",
    rating: 5,
  },
];

const serviceAreas = [
  "Surfers Paradise",
  "Southport",
  "Broadbeach",
  "Burleigh Heads",
  "Robina",
  "Varsity Lakes",
  "Coomera",
  "Helensvale",
  "Nerang",
  "Tweed Heads",
  "Mudgeeraba",
  "Elanora",
  "Palm Beach",
  "Labrador",
  "Biggera Waters",
  "Runaway Bay",
  "Hope Island",
  "Oxenford",
  "Molendinar",
  "Arundel",
];

const faqData = [
  {
    id: "faq-1",
    question: "What is bond cleaning and why is it required?",
    answer:
      "Bond cleaning is a thorough, professional clean of your rental property when you move out. It's also called end of lease cleaning or exit cleaning. In Queensland, you need to return your rental property in the same condition it was in when you first moved in — clean and tidy. If it's not clean enough, your landlord or property manager can use your bond money to pay for cleaning. Bond cleaning makes sure this doesn't happen to you. Think of it as the most important clean your home will ever get — and it directly affects whether you get your money back.",
  },
  {
    id: "faq-2",
    question: "Why is bond cleaning important?",
    answer:
      "Bond cleaning is important because it protects your money. When you moved into your rental, you paid a bond — usually 4 weeks' rent. That money sits in a trust account while you live there. When you move out, you need to prove the property is clean to get it back. If the property isn't clean, your landlord can claim money from your bond for cleaning costs. A professional bond clean is the safest way to make sure you get every dollar back. It also avoids arguments with your landlord and makes the whole moving-out process smoother and less stressful.",
  },
  {
    id: "faq-3",
    question: "How much does a bond clean cost?",
    answer:
      "Bond cleaning costs depend on the size of your property and its condition. Here's a rough guide for Gold Coast properties:\n\n• 1-bedroom unit: from $250–$320\n• 2-bedroom unit: from $320–$420\n• 3-bedroom house: from $420–$550\n• 4-bedroom house: from $550–$700+\n\nThese prices typically include all rooms, kitchen, bathrooms, windows, and skirting boards. Carpet steam cleaning is usually an add-on. Contact Tru Bond Cleaning Gold Coast for a fixed price quote — we won't surprise you with hidden charges.",
  },
  {
    id: "faq-4",
    question: "What is a full bond clean?",
    answer:
      "A full bond clean covers every part of your rental property from top to bottom. It includes the kitchen (oven, stovetop, rangehood, cupboards inside and out, benchtops, sink), all bathrooms and toilets, all bedrooms (vacuuming, mopping, dusting), living areas, laundry, windows and sills, window tracks, skirting boards, walls (spot cleaning), light fittings, exhaust fans, and cobweb removal. Some full bond cleans also include carpet steam cleaning (check if this is in your lease). A full bond clean follows the REIQ checklist — the same checklist your property manager uses during the final inspection.",
  },
  {
    id: "faq-5",
    question:
      "Which are the top-rated bond cleaning companies near me on the Gold Coast?",
    answer:
      "Here are five top-rated bond cleaning companies on the Gold Coast and Brisbane area:\n\n1. Fantastic Cleaners Gold Coast (fantasticcleaners.com.au) — A large, well-known cleaning company with a strong presence across Australia. They offer bond cleaning, carpet cleaning, and pest control with an online booking system.\n\n2. Jim's Cleaning Gold Coast (jimscleaning.com.au) — Part of the iconic Jim's Group franchise network. They have a large team of franchisees covering the Gold Coast. Bond cleaning, carpet cleaning, and general house cleaning are all available.\n\n3. Sunshine Eco Cleaning Services (sunshineecocleaningservices.com.au) — A Queensland-based cleaning company focused on eco-friendly products. Popular with environmentally conscious renters.\n\n4. Bond Cleaning in Gold Coast (bondcleaninginbris.com.au) — A specialist bond and end of lease cleaning service covering Gold Coast and Brisbane. They focus exclusively on bond cleaning.\n\n5. Tru Bond Cleaning Gold Coast (trubondcleaningbrisbane.com) — Gold Coast's trusted local bond cleaning specialist. We offer end of lease cleaning, carpet steam cleaning, oven deep cleaning, bathroom cleaning, window cleaning, and walls cleaning — all in one package. Our cleaners follow the REIQ checklist, we're fully insured, and we back every job with a 100% satisfaction guarantee. If your property manager isn't happy, we come back for free. Book today on WhatsApp 0488841883.",
  },
  {
    id: "faq-6",
    question: "Which cleaning products are best for bond cleaning?",
    answer:
      "For bond cleaning, you need products that are tough on grease and grime but safe on surfaces. Here are the best products for each area:\n\n• Oven & kitchen: Easy-Off Oven Cleaner, Selleys Sugar Soap, or White King Power Clean Degreaser\n• Bathrooms: Domestos Thick Bleach (for toilets), Exit Mould (for grout and shower tiles), Bar Keepers Friend (for limescale on taps)\n• Floors: Pledge Multi-Surface Floor Cleaner or Pine O Cleen Multipurpose Cleaner\n• Glass & windows: Windex Glass Cleaner or Method Glass + Surface Cleaner\n• General surfaces: Ajax Spray n' Wipe or Dettol All-Purpose Cleaner\n\nProfessional cleaners use commercial-strength versions of these products that aren't available in supermarkets — which is one reason professional results are much better than DIY.",
  },
  {
    id: "faq-7",
    question: "How much does professional bond cleaning typically cost?",
    answer:
      "Professional bond cleaning in Gold Coast typically costs between $250 and $700+, depending on the size and condition of the property. A small 1-bedroom apartment may start at $250. A large 4-bedroom family home in poor condition could cost $700 or more. Carpet steam cleaning is usually an extra $80–$200 depending on the number of rooms. Most reputable companies offer a fixed price quote upfront — so you know exactly what you're paying before the cleaners arrive. Always get a written quote and check what's included. Avoid companies that charge hourly — fixed price quotes protect you from blowouts.",
  },
  {
    id: "faq-8",
    question: "What products are best for bond cleaning carpets?",
    answer:
      "For carpet bond cleaning, professional steam cleaning (hot water extraction) is the gold standard and what most Queensland rental agreements require. For spot treatments before the steam clean:\n\n• Bissell Pet Stain & Odour Remover — Great for pet stains and odours\n• Resolve Carpet Cleaner — Good for general stains\n• Scotchgard Fabric & Carpet Cleaner — Protects fibres after cleaning\n• White King Carpet Stain Remover — Budget-friendly and effective\n\nFor best results, always follow up spot treatment with a professional hot water extraction clean. DIY carpet cleaning machines from hardware stores are not as powerful as professional equipment.",
  },
  {
    id: "faq-9",
    question: "How do I choose a reliable bond cleaner?",
    answer:
      "Choosing a reliable bond cleaner comes down to five key things:\n\n1. Look for a re-clean guarantee — A good bond cleaner will come back for free if the property manager finds a problem. Always ask about this before booking.\n2. Check reviews — Google reviews and Facebook reviews give you a real picture of a company's work. Look for companies with consistent 4.5+ stars and recent reviews.\n3. Ask if they follow the REIQ checklist — The REIQ (Real Estate Institute of Queensland) checklist is the industry standard. Any professional bond cleaner should know it and follow it.\n4. Get a fixed price quote — Avoid hourly-rate cleaners for bond cleaning. Fixed price means no nasty surprises.\n5. Check they're insured — Professional cleaners should carry public liability insurance. This protects you if anything gets damaged during the clean.\n\nTru Bond Cleaning Gold Coast ticks all five boxes. Contact us for a free quote today.",
  },
  {
    id: "faq-10",
    question:
      "Can I book a bond cleaning company online with a satisfaction guarantee?",
    answer:
      "Yes! You can book Tru Bond Cleaning Gold Coast right here on our website or by WhatsApp. We offer a 100% satisfaction guarantee — if your property manager identifies any cleaning issues covered by our service, we'll come back and fix them for free within 72 hours of the initial clean. Our online booking form is quick and easy — just fill in your details and we'll get back to you with a fixed price quote within the hour. Same-day and next-day bookings are available across Gold Coast. Book with confidence knowing your bond is in safe hands.",
  },
  {
    id: "faq-11",
    question: "How much is a cleaner per hour in Gold Coast?",
    answer:
      "General house cleaners in Gold Coast typically charge between $35 and $55 per hour. For bond cleaning, most reputable companies offer fixed-price packages rather than hourly rates — because hourly rates can blow out unpredictably. A professional bond clean for a standard 2-bedroom unit might take 4 to 6 hours for a two-person team. At an hourly rate, that could cost $280 to $660 — and you don't know the final price until they finish. Fixed price is always better for bond cleaning because you know exactly what you'll pay.",
  },
  {
    id: "faq-12",
    question: "How much is an end of lease clean in Australia?",
    answer:
      "End of lease (bond) cleaning across Australia typically costs:\n\n• Sydney / Melbourne: $350–$800 for a 3-bedroom home\n• Brisbane / Gold Coast: $300–$600 for a 3-bedroom home\n• Perth / Adelaide: $280–$550 for a 3-bedroom home\n\nPrices vary based on property size, condition, and what's included (e.g., carpet cleaning, pest control). Gold Coast is generally more affordable than Sydney or Melbourne. Always get at least two quotes and make sure a re-clean guarantee is included.",
  },
  {
    id: "faq-13",
    question: "How much should you pay a cleaner for 3 hours?",
    answer:
      "For a 3-hour general cleaning session in Gold Coast, expect to pay between $105 and $165 (based on typical rates of $35–$55 per hour). However, for bond cleaning specifically, a 3-hour session is usually not enough for a thorough end of lease clean — unless it's a very small studio apartment. Bond cleaning requires more time because every area needs to be spotless, not just tidy. A professional bond cleaning company will give you a fixed price based on your property, not a 3-hour window.",
  },
  {
    id: "faq-14",
    question: "What is the 20-minute cleaning rule?",
    answer:
      "The 20-minute cleaning rule is a popular home organisation tip that says: spend just 20 minutes cleaning each day to keep your home consistently tidy. It works for day-to-day maintenance. However, the 20-minute rule is definitely not enough for bond cleaning! A proper end of lease clean takes several hours — sometimes a full day — to complete thoroughly. Professional bond cleaners spend hours on the oven alone in some properties. Don't rely on the 20-minute rule for your final inspection. Book a professional team who will spend as long as it takes to get your home bond-ready.",
  },
  {
    id: "faq-15",
    question: "What is bond back cleaning?",
    answer:
      "Bond back cleaning is another name for bond cleaning, end of lease cleaning, or exit cleaning. It's a thorough, professional clean of your rental property at the end of your tenancy. The goal is simple: get the property clean enough that your landlord or property manager returns your full bond to you. 'Bond back' refers to getting your bond deposit back. Tru Bond Cleaning Gold Coast specialises in bond back cleaning — we've helped hundreds of tenants across the Gold Coast get their full bond refund.",
  },
  {
    id: "faq-16",
    question: "Is bond cleaning required in QLD?",
    answer:
      "Yes — in Queensland, you're required to return your rental property in the same condition it was in at the start of your tenancy (fair wear and tear excluded). While the law doesn't specifically say you must hire a professional cleaner, most rental agreements include a clause requiring professional carpet steam cleaning at the end of the lease. And practically speaking, getting the property to the required standard on your own is very difficult without professional help. Your property manager will conduct a thorough inspection and compare the property condition to the entry condition report. If the property isn't clean enough, they'll deduct cleaning costs from your bond. Professional bond cleaning is the safest, most reliable way to meet this requirement.",
  },
];

export default function HomePage() {
  useMetaTags({
    title:
      "Bond Back Cleaning Gold Coast | Tru Bond Cleaning | 100% Bond Refund Guaranteed",
    description:
      "Get your full bond back with Tru Bond Cleaning Gold Coast. Professional end of lease cleaning, carpet steam cleaning & more. Satisfaction guaranteed. Call 0488841883.",
    keywords:
      "bond cleaning Gold Coast, end of lease cleaning Gold Coast, bond back cleaning Gold Coast, carpet cleaning Gold Coast, exit cleaning Gold Coast",
    ogTitle:
      "Bond Back Cleaning Gold Coast | Tru Bond Cleaning | 100% Bond Refund Guaranteed",
    ogDescription:
      "Get your full bond back with Tru Bond Cleaning Gold Coast. Professional end of lease cleaning, carpet steam cleaning & more. Satisfaction guaranteed.",
    ogImage: "/assets/generated/hero-banner.dim_1200x600.jpg",
    ogType: "website",
    ogUrl: "https://trubondcleaningbrisbane.com",
    twitterCard: "summary_large_image",
    twitterTitle: "Bond Back Cleaning Gold Coast | Tru Bond Cleaning",
    twitterDescription:
      "Get your full bond back with Tru Bond Cleaning Gold Coast. Professional end of lease cleaning. Satisfaction guaranteed.",
    twitterImage: "/assets/generated/hero-banner.dim_1200x600.jpg",
    canonical: "https://trubondcleaningbrisbane.com",
  });

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative gradient-hero overflow-hidden"
        aria-label="Hero section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-banner.dim_1200x600.jpg')",
          }}
          aria-hidden="true"
        />
        <div className="relative container-wide py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 text-sm font-semibold px-4 py-1">
              Gold Coast's Most Trusted Bond Cleaners
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
              Get Your Full Bond Back —{" "}
              <span className="text-accent">Guaranteed!</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-4 max-w-2xl">
              Moving out is stressful. Packing boxes, organising removalists,
              chasing your landlord — it's a lot. The{" "}
              <strong className="text-white">LAST</strong> thing you want is to
              lose your bond over a dirty oven or dusty blinds.
            </p>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
              That's where we come in. Tru Bond Cleaning Gold Coast handles
              every corner of your home so your landlord says "yes" to a full
              refund. We follow the{" "}
              <strong className="text-white">REIQ cleaning checklist</strong> —
              so nothing gets missed.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.whatsapp.primary_button"
                className="btn-whatsapp text-base"
                aria-label="Get a free quote via WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get a Free Quote
              </a>
              <Button
                asChild
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold px-8 py-3 h-auto text-base rounded-full"
                data-ocid="hero.book.secondary_button"
              >
                <Link to="/contact">Book Online Now</Link>
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
              {[
                "100% Bond Back Guarantee",
                "REIQ Compliant",
                "Same-Day Available",
                "5-Star Rated",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-white/70 text-sm"
                >
                  <CheckCircle2 size={14} className="text-accent" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Hero image — decorative side panel */}
        <div
          className="absolute right-0 top-0 bottom-0 w-2/5 hidden xl:block"
          aria-hidden="true"
        >
          <img
            src="/assets/generated/hero-banner.dim_1200x600.jpg"
            alt=""
            className="w-full h-full object-cover opacity-40"
            width={600}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        className="py-16 md:py-24 bg-background"
        aria-labelledby="services-heading"
      >
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-secondary text-primary border-primary/20">
              Our Services
            </Badge>
            <h2 id="services-heading" className="section-heading">
              Everything Cleaned. Nothing Missed.
            </h2>
            <p className="section-subheading max-w-2xl mx-auto">
              We offer a complete range of bond cleaning services — all under
              one roof. Book one service or get the full package for maximum
              savings.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="services.list"
          >
            {services.map((service, i) => (
              <Link
                key={service.title}
                to={service.href}
                data-ocid={`services.item.${i + 1}`}
                className="group"
                aria-label={`Learn more about ${service.title}`}
              >
                <Card className="h-full card-hover shadow-card border-border overflow-hidden">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width={600}
                      height={400}
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <span className="text-primary text-sm font-semibold flex items-center gap-1">
                      Learn more <ArrowRight size={14} />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 h-auto rounded-full text-base"
              data-ocid="services.view_all.primary_button"
            >
              <Link to="/services">View All Services &amp; Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section
        className="py-16 md:py-24 gradient-section"
        aria-labelledby="why-heading"
      >
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-accent/20 text-accent border-accent/30">
              Why Tru Bond?
            </Badge>
            <h2 id="why-heading" className="section-heading">
              Why Gold Coast Tenants Choose Us
            </h2>
            <p className="section-subheading max-w-2xl mx-auto">
              We don't just clean — we give you peace of mind. Here's what makes
              us different.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  data-ocid={`why.item.${i + 1}`}
                  className="bg-white rounded-xl p-6 shadow-card border border-border"
                >
                  <div className={`mb-4 ${item.color}`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        className="py-16 md:py-24 bg-background"
        aria-labelledby="testimonials-heading"
      >
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-gold/20 text-foreground border-gold/30">
              Customer Reviews
            </Badge>
            <h2 id="testimonials-heading" className="section-heading">
              What Our Customers Say
            </h2>
            <p className="section-subheading max-w-xl mx-auto">
              Real reviews from real Gold Coast tenants who got their full bond
              back.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="testimonials.list"
          >
            {testimonials.map((t, i) => (
              <Card
                key={t.name}
                data-ocid={`testimonials.item.${i + 1}`}
                className="shadow-card border-border p-6"
              >
                <CardContent className="p-0">
                  <div className="flex gap-0.5 mb-4">
                    {[1, 2, 3, 4, 5].slice(0, t.rating).map((star) => (
                      <Star
                        key={star}
                        size={18}
                        className="text-gold"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-4 italic">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin size={12} /> {t.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section
        className="py-12 bg-secondary/50"
        aria-labelledby="areas-heading"
      >
        <div className="container-wide">
          <h2
            id="areas-heading"
            className="text-xl font-bold text-center text-foreground mb-6"
          >
            We Service All Gold Coast Suburbs
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="text-sm text-primary bg-white border border-border px-3 py-1.5 rounded-full font-medium shadow-xs"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="py-16 md:py-24 bg-background"
        aria-labelledby="faq-heading"
      >
        <div className="container-tight">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-secondary text-primary border-primary/20">
              FAQs
            </Badge>
            <h2 id="faq-heading" className="section-heading">
              Frequently Asked Questions
            </h2>
            <p className="section-subheading max-w-xl mx-auto">
              Everything you need to know about bond cleaning in Gold Coast and
              Queensland.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="space-y-3"
            data-ocid="faq.list"
          >
            {faqData.map((faq, i) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                data-ocid={`faq.item.${i + 1}`}
                className="bg-white border border-border rounded-xl px-4 shadow-xs"
              >
                <AccordionTrigger
                  className="text-left font-semibold text-foreground hover:text-primary py-4 text-sm md:text-base [&>svg]:text-primary"
                  data-ocid={`faq.toggle.${i + 1}`}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4 text-sm whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-16 md:py-20 gradient-cta"
        aria-labelledby="cta-heading"
      >
        <div className="container-tight text-center">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Get Your Bond Back?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Get a fixed price quote within the hour. Same-day bookings available
            across all Gold Coast suburbs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="cta.whatsapp.primary_button"
              className="btn-whatsapp text-base"
              aria-label="WhatsApp us for a free quote"
            >
              <Phone size={18} />
              WhatsApp 0488 841 883
            </a>
            <Button
              asChild
              variant="outline"
              className="bg-white/10 border-white/40 text-white hover:bg-white/20 font-semibold px-8 py-3 h-auto text-base rounded-full"
              data-ocid="cta.book.secondary_button"
            >
              <Link to="/contact">Fill In Booking Form</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
