import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMetaTags } from "@/hooks/useMetaTags";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Bath,
  CheckCircle2,
  Clock,
  Home,
  Layers,
  MapPin,
  Phone,
  Shield,
  Sofa,
  Sparkles,
  Star,
  Wind,
} from "lucide-react";
import type { SuburbData } from "./suburbData";

interface SuburbPageProps {
  suburb: SuburbData;
}

const serviceIcons = [Sparkles, Home, Sofa, Bath, Wind, Layers];

const testimonials = [
  {
    name: "Jessica M.",
    location: "Surfers Paradise",
    text: "Booked Tru Bond Cleaning last minute and they were amazing! Got every dollar of my bond back. Will absolutely use again.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    location: "Burleigh Heads",
    text: "Brilliant service, fair price, and they came back the next day to fix one tiny thing the agent picked up on. True professionals.",
    rating: 5,
  },
];

export default function SuburbPage({ suburb }: SuburbPageProps) {
  useMetaTags({
    title: suburb.metaTitle,
    description: suburb.metaDescription,
    keywords: suburb.keywords,
    ogTitle: suburb.metaTitle,
    ogDescription: suburb.metaDescription,
    ogImage: suburb.ogImage,
    ogType: "website",
    ogUrl: suburb.canonical,
    twitterCard: "summary_large_image",
    twitterTitle: suburb.metaTitle,
    twitterDescription: suburb.metaDescription,
    twitterImage: suburb.ogImage,
    canonical: suburb.canonical,
  });

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative gradient-hero overflow-hidden"
        aria-label={`Bond cleaning ${suburb.name} hero section`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: `url('${suburb.ogImage}')`,
          }}
          aria-hidden="true"
        />
        <div className="relative container-wide py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 text-sm font-semibold px-4 py-1">
              <MapPin size={13} className="mr-1 inline-block" />
              {suburb.name}, Gold Coast
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 text-balance">
              Bond Cleaning <span className="text-accent">{suburb.name}</span>
            </h1>
            <p className="text-xl text-white/85 font-semibold mb-3">
              {suburb.heroTagline}
            </p>
            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-2xl">
              {suburb.intro}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="suburb.whatsapp.primary_button"
                className="btn-whatsapp text-base"
                aria-label={`Get a free bond cleaning quote in ${suburb.name} via WhatsApp`}
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
                data-ocid="suburb.book.secondary_button"
              >
                <Link to="/contact">Book Online Now</Link>
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8">
              {[
                "100% Bond Back Guarantee",
                "REIQ Checklist Compliant",
                "Same-Day Available",
                "Fully Insured",
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

        {/* Decorative side image */}
        <div
          className="absolute right-0 top-0 bottom-0 w-2/5 hidden xl:block"
          aria-hidden="true"
        >
          <img
            src={suburb.ogImage}
            alt={`Bond cleaning service in ${suburb.name} Gold Coast`}
            className="w-full h-full object-cover opacity-35"
            width={600}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
        </div>
      </section>

      {/* ── SERVICES IN THIS SUBURB ── */}
      <section
        className="py-16 md:py-20 bg-background"
        aria-labelledby={`${suburb.slug}-services-heading`}
      >
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-secondary text-primary border-primary/20">
              What We Clean
            </Badge>
            <h2
              id={`${suburb.slug}-services-heading`}
              className="section-heading"
            >
              Our Services in {suburb.name}
            </h2>
            <p className="section-subheading max-w-2xl mx-auto">
              We offer a full range of bond cleaning services in {suburb.name}.
              Everything gets cleaned — nothing gets missed.
            </p>
          </div>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            data-ocid="suburb.services.list"
          >
            {suburb.servicesOffered.map((service, i) => {
              const Icon = serviceIcons[i] ?? Sparkles;
              return (
                <div
                  key={service}
                  data-ocid={`suburb.services.item.${i + 1}`}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-3">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground leading-snug">
                    {service}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 h-auto rounded-full text-base"
              data-ocid="suburb.services.view_all.button"
            >
              <Link to="/services">View All Services &amp; Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE TRU BOND IN THIS SUBURB ── */}
      <section
        className="py-16 md:py-20 gradient-section"
        aria-labelledby={`${suburb.slug}-why-heading`}
      >
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-accent/20 text-accent border-accent/30">
              Why Choose Us
            </Badge>
            <h2 id={`${suburb.slug}-why-heading`} className="section-heading">
              Why Choose Tru Bond in {suburb.name}?
            </h2>
            <p className="section-subheading max-w-2xl mx-auto">
              {suburb.whySection}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
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
                description: `We follow the exact checklist Queensland real estate agents use during ${suburb.name} final inspections.`,
                color: "text-primary",
              },
              {
                icon: Clock,
                title: "Same-Day Available",
                description: `Need us urgently in ${suburb.name}? We're available 7 days a week — call or WhatsApp us now.`,
                color: "text-accent",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  data-ocid={`suburb.why.item.${i + 1}`}
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
        className="py-16 md:py-20 bg-background"
        aria-labelledby={`${suburb.slug}-testimonials-heading`}
      >
        <div className="container-wide">
          <div className="text-center mb-10">
            <Badge className="mb-3 bg-gold/20 text-foreground border-gold/30">
              Customer Reviews
            </Badge>
            <h2
              id={`${suburb.slug}-testimonials-heading`}
              className="section-heading"
            >
              What Our Customers in {suburb.name} Say
            </h2>
            <p className="section-subheading max-w-xl mx-auto">
              Real reviews from Gold Coast tenants who got their full bond back.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
            data-ocid="suburb.testimonials.list"
          >
            {testimonials.map((t, i) => (
              <Card
                key={t.name}
                data-ocid={`suburb.testimonials.item.${i + 1}`}
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

      {/* ── LOCAL TIP ── */}
      <section
        className="py-12 md:py-16 bg-secondary/40"
        aria-labelledby={`${suburb.slug}-tip-heading`}
      >
        <div className="container-tight">
          <div className="bg-white rounded-2xl p-8 shadow-card border border-border">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
                <Award size={24} className="text-accent" />
              </div>
              <div>
                <Badge className="mb-3 bg-accent/10 text-accent border-accent/20 text-xs">
                  Pro Tip
                </Badge>
                <h2
                  id={`${suburb.slug}-tip-heading`}
                  className="text-xl font-bold text-foreground mb-3"
                >
                  Bond Cleaning Tip for {suburb.name} Renters
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {suburb.localTip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-16 md:py-20 gradient-cta"
        aria-labelledby={`${suburb.slug}-cta-heading`}
      >
        <div className="container-tight text-center">
          <h2
            id={`${suburb.slug}-cta-heading`}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to Get Your {suburb.name} Bond Back?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            {suburb.ctaText}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="suburb.cta.whatsapp.primary_button"
              className="btn-whatsapp text-base"
              aria-label={`WhatsApp Tru Bond Cleaning for ${suburb.name} bond clean quote`}
            >
              <Phone size={18} />
              WhatsApp 0488 841 883
            </a>
            <Button
              asChild
              variant="outline"
              className="bg-white/10 border-white/40 text-white hover:bg-white/20 font-semibold px-8 py-3 h-auto text-base rounded-full"
              data-ocid="suburb.cta.book.secondary_button"
            >
              <Link to="/contact">Fill In Booking Form</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── OTHER SUBURBS ── */}
      <section
        className="py-12 bg-background border-t border-border"
        aria-label="Other Gold Coast suburbs we service"
      >
        <div className="container-wide text-center">
          <p className="text-sm text-muted-foreground mb-2">
            We also service other Gold Coast suburbs:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              to="/"
              data-ocid="suburb.home.link"
              className="text-sm text-primary hover:underline font-medium"
            >
              ← Back to Home
            </Link>
            <span className="text-muted-foreground text-sm">|</span>
            <Link
              to="/services"
              data-ocid="suburb.services.link"
              className="text-sm text-primary hover:underline font-medium"
            >
              All Services
            </Link>
            <span className="text-muted-foreground text-sm">|</span>
            <Link
              to="/contact"
              data-ocid="suburb.contact.link"
              className="text-sm text-primary hover:underline font-medium"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
