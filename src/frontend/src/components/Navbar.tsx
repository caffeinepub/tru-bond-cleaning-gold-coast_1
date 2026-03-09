import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" as const },
  { label: "Services", href: "/services" as const },
  { label: "About", href: "/about" as const },
  { label: "Contact", href: "/contact" as const },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (href: string) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border shadow-xs">
      <nav className="container-wide flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          data-ocid="nav.link"
          aria-label="Tru Bond Cleaning Gold Coast — Home"
        >
          <img
            src="/assets/generated/logo-transparent.dim_400x120.png"
            alt="Tru Bond Cleaning Gold Coast logo"
            className="h-10 lg:h-14 w-auto"
            width={280}
            height={84}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              data-ocid={`nav.${link.label.toLowerCase()}.link`}
              className={`text-sm font-semibold transition-colors duration-150 ${
                isActive(link.href)
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/61488841883"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.whatsapp.button"
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            aria-label="Call or WhatsApp 0488841883"
          >
            <Phone size={16} className="text-primary" />
            <span>0488 841 883</span>
          </a>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6"
            data-ocid="nav.quote.primary_button"
          >
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-md text-foreground hover:text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          data-ocid="nav.mobile.toggle"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
              className={`block px-3 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                isActive(link.href)
                  ? "text-primary bg-secondary"
                  : "text-foreground hover:text-primary hover:bg-secondary"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 pb-1 border-t border-border mt-2 space-y-2">
            <a
              href="https://wa.me/61488841883"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.mobile.whatsapp.button"
              className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-foreground"
              aria-label="Call or WhatsApp 0488841883"
            >
              <Phone size={16} className="text-primary" />
              <span>0488 841 883</span>
            </a>
            <Button
              asChild
              className="w-full bg-primary text-primary-foreground font-semibold rounded-full"
              data-ocid="nav.mobile.quote.primary_button"
            >
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
