import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Shield, Star } from "lucide-react";

const allSuburbs = [
  { name: "Surfers Paradise", slug: "surfers-paradise" },
  { name: "Southport", slug: "southport" },
  { name: "Broadbeach", slug: "broadbeach" },
  { name: "Burleigh Heads", slug: "burleigh-heads" },
  { name: "Robina", slug: "robina" },
  { name: "Varsity Lakes", slug: "varsity-lakes" },
  { name: "Coomera", slug: "coomera" },
  { name: "Helensvale", slug: "helensvale" },
  { name: "Nerang", slug: "nerang" },
  { name: "Tweed Heads", slug: "tweed-heads" },
  { name: "Mudgeeraba", slug: "mudgeeraba" },
  { name: "Elanora", slug: "elanora" },
  { name: "Palm Beach", slug: "palm-beach" },
  { name: "Labrador", slug: "labrador" },
  { name: "Biggera Waters", slug: "biggera-waters" },
  { name: "Runaway Bay", slug: "runaway-bay" },
  { name: "Hope Island", slug: "hope-island" },
  { name: "Oxenford", slug: "oxenford" },
  { name: "Molendinar", slug: "molendinar" },
  { name: "Arundel", slug: "arundel" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-navy text-navy-foreground">
      {/* Trust bar */}
      <div className="border-b border-white/10 py-4">
        <div className="container-wide flex flex-wrap items-center justify-center gap-6 text-sm">
          <span className="flex items-center gap-2 text-white/80">
            <Shield size={16} className="text-accent" />
            Fully Insured
          </span>
          <span className="flex items-center gap-2 text-white/80">
            <Star size={16} className="text-gold" fill="currentColor" />
            5-Star Rated
          </span>
          <span className="flex items-center gap-2 text-white/80">
            <Shield size={16} className="text-accent" />
            100% Bond Back Guarantee
          </span>
          <span className="flex items-center gap-2 text-white/80">
            <Shield size={16} className="text-accent" />
            REIQ Checklist Compliant
          </span>
        </div>
      </div>

      <div className="container-wide py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img
            src="/assets/generated/logo-transparent.dim_400x120.png"
            alt="Tru Bond Cleaning Gold Coast logo"
            className="h-12 w-auto mb-4 brightness-0 invert"
            width={200}
            height={60}
          />
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            Gold Coast's most trusted bond back cleaning service. We get your
            full bond back — guaranteed.
          </p>
          <a
            href="https://wa.me/61488841883"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white font-semibold hover:text-accent transition-colors"
            data-ocid="footer.whatsapp.button"
            aria-label="WhatsApp Tru Bond Cleaning Gold Coast"
          >
            <Phone size={16} />
            <span>0488 841 883</span>
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { label: "Home", href: "/" as const },
              { label: "Our Services", href: "/services" as const },
              { label: "About Us", href: "/about" as const },
              { label: "Get a Quote", href: "/contact" as const },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  data-ocid={`footer.${link.label.toLowerCase().replace(/\s/g, "_")}.link`}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>End of Lease / Bond Cleaning</li>
            <li>Carpet Steam Cleaning</li>
            <li>Oven &amp; Kitchen Deep Clean</li>
            <li>Bathroom &amp; Toilet Cleaning</li>
            <li>Window &amp; Glass Cleaning</li>
            <li>Walls &amp; Skirting Board Cleaning</li>
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
            <span className="flex items-center gap-2">
              <MapPin size={14} /> Service Areas
            </span>
          </h3>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
            {allSuburbs.map((suburb, i) => (
              <Link
                key={suburb.slug}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                to={`/suburbs/${suburb.slug}` as any}
                data-ocid={`footer.suburbs.item.${i + 1}`}
                className="text-xs text-white/60 hover:text-white transition-colors truncate"
                aria-label={`Bond cleaning in ${suburb.name}`}
              >
                {suburb.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>
            © {year} Tru Bond Cleaning Gold Coast. All rights reserved. Gold
            Coast, QLD, Australia.
          </p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
