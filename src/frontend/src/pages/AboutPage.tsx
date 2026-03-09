import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useMetaTags } from "@/hooks/useMetaTags";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Heart,
  Phone,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Honest, Transparent Pricing",
    description:
      "We give you a fixed price upfront. No hidden fees. No nasty surprises after the job. What we quote is what you pay.",
    color: "text-primary",
    bg: "bg-secondary",
  },
  {
    icon: CheckCircle2,
    title: "Thorough, REIQ-Compliant Cleaning",
    description:
      "Every job we do follows the REIQ cleaning checklist. We clean everything your property manager will check — and then some.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Heart,
    title: "Respect for Your Home & Time",
    description:
      "We show up on time, treat your home with care, and get the job done efficiently. Your moving-out day is stressful enough.",
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  {
    icon: Star,
    title: "A Guarantee That Means Something",
    description:
      "Our 100% satisfaction guarantee isn't just a marketing line. If your property manager finds a problem, we come back for free within 72 hours.",
    color: "text-gold",
    bg: "bg-gold/10",
  },
  {
    icon: Users,
    title: "Background-Checked Cleaners",
    description:
      "All our cleaners are background-checked and fully insured. You can open your door with complete confidence.",
    color: "text-primary",
    bg: "bg-secondary",
  },
  {
    icon: Zap,
    title: "Same-Day & Next-Day Availability",
    description:
      "Moving out tomorrow? No worries. We offer same-day and next-day bookings across all Gold Coast suburbs, 7 days a week.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

const stats = [
  { value: "500+", label: "Happy Customers" },
  { value: "98%", label: "Bond Back Success Rate" },
  { value: "7 Days", label: "Available Every Week" },
  { value: "5★", label: "Google Rating" },
];

export default function AboutPage() {
  useMetaTags({
    title:
      "About Tru Bond Cleaning Gold Coast | Local Bond Cleaners You Can Trust",
    description:
      "Meet the Tru Bond Cleaning team — Gold Coast's trusted bond back cleaners. Fully insured, experienced, and 100% committed to getting your bond back.",
    keywords:
      "about Tru Bond Cleaning Gold Coast, local bond cleaners Gold Coast, professional end of lease cleaners Gold Coast",
    canonical: "https://trubondcleaningbrisbane.com/#/about",
  });

  return (
    <>
      {/* Hero */}
      <section
        className="gradient-hero py-14 md:py-20"
        aria-label="About page hero"
      >
        <div className="container-wide text-center">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            Our Story
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            About Tru Bond Cleaning Gold Coast
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Gold Coast's trusted local bond back cleaners. We live here, work
            here, and care deeply about helping tenants get every dollar of
            their bond back.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-10" aria-label="Our track record">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="text-primary-foreground">
                <p className="text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/70 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section
        className="py-16 md:py-24 bg-background"
        aria-labelledby="story-heading"
      >
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary text-primary border-primary/20">
                Our Story
              </Badge>
              <h2
                id="story-heading"
                className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight"
              >
                We Started Because Tenants Deserved Better
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We started Tru Bond Cleaning Gold Coast because we knew there
                  had to be a better way. Too many Gold Coast tenants were
                  losing hundreds of dollars from their bond — not because they
                  were bad tenants, but because the cleaning wasn't done
                  properly. We set out to fix that.
                </p>
                <p>
                  Our team of professional cleaners knows exactly what
                  Queensland property managers look for during a final
                  inspection. We follow the REIQ cleaning checklist on every
                  single job. We use commercial-grade equipment and cleaning
                  products. And we back every job with a{" "}
                  <strong className="text-foreground">
                    100% satisfaction guarantee
                  </strong>{" "}
                  — if your property manager finds a problem, we come back for
                  free.
                </p>
                <p>
                  We're a local Gold Coast business. We live here, we work here,
                  and we care about our reputation in this community. Every
                  customer matters to us — whether you're in a studio apartment
                  in Surfers Paradise or a 5-bedroom house in Hope Island.
                </p>
                <p>
                  We're fully insured and all our cleaners are
                  background-checked. You can open your door to us with complete
                  confidence. When we say we'll get your bond back, we mean it.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="about.whatsapp.primary_button"
                  className="btn-whatsapp"
                  aria-label="Contact us via WhatsApp"
                >
                  <Phone size={16} />
                  Chat With Us
                </a>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-primary text-primary hover:bg-secondary"
                  data-ocid="about.services.secondary_button"
                >
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>

            {/* Team image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-hero">
                <img
                  src="/assets/generated/about-team.dim_800x500.jpg"
                  alt="Happy Gold Coast tenants getting their bond refund back after professional bond cleaning"
                  className="w-full h-full object-cover"
                  width={800}
                  height={500}
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card-hover p-4 border border-border">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={14}
                        className="text-gold"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    5-Star Rated
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  500+ happy Gold Coast tenants
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-16 md:py-24 gradient-section"
        aria-labelledby="values-heading"
      >
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-accent/20 text-accent border-accent/30">
              Our Values
            </Badge>
            <h2 id="values-heading" className="section-heading">
              What We Stand For
            </h2>
            <p className="section-subheading max-w-xl mx-auto">
              These aren't just words on a wall — they're how we operate on
              every single job.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  data-ocid={`about.values.item.${i + 1}`}
                  className="bg-white rounded-xl p-6 shadow-card border border-border"
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${value.bg} flex items-center justify-center mb-4`}
                  >
                    <Icon size={20} className={value.color} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guarantee section */}
      <section
        className="py-16 md:py-20 bg-background"
        aria-labelledby="guarantee-heading"
      >
        <div className="container-tight">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center shadow-hero">
            <Shield
              size={48}
              className="text-primary-foreground/80 mx-auto mb-4"
            />
            <h2
              id="guarantee-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Our 100% Bond Back Guarantee
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              If your property manager finds any issue with our cleaning work,
              we come back and fix it for free within 72 hours. No arguments, no
              fees, no hassle. We're that confident in our work — because we've
              proven it hundreds of times across the Gold Coast.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="about.guarantee.whatsapp.primary_button"
                className="btn-whatsapp text-base"
                aria-label="Book with our guarantee via WhatsApp"
              >
                <Phone size={18} />
                Book With Confidence
              </a>
              <Button
                asChild
                variant="outline"
                className="bg-white/10 border-white/40 text-white hover:bg-white/20 font-semibold px-8 py-3 h-auto text-base rounded-full"
                data-ocid="about.quote.secondary_button"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
