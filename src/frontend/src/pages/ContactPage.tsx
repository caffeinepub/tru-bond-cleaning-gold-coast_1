import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import { useMetaTags } from "@/hooks/useMetaTags";
import { CheckCircle2, Clock, DollarSign, Phone, Shield } from "lucide-react";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  propertySize: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  propertySize: "",
  message: "",
};

const serviceOptions = [
  { value: "End of Lease / Bond Clean", label: "End of Lease / Bond Clean" },
  { value: "Carpet Steam Cleaning", label: "Carpet Steam Cleaning" },
  { value: "Oven & Kitchen Deep Clean", label: "Oven & Kitchen Deep Clean" },
  { value: "Bathroom & Toilet Cleaning", label: "Bathroom & Toilet Cleaning" },
  { value: "Window Cleaning", label: "Window Cleaning" },
  {
    value: "Full Package (All Services)",
    label: "Full Package (All Services)",
  },
];

const propertySizeOptions = [
  { value: "Studio / 1 Bedroom", label: "Studio / 1 Bedroom" },
  { value: "2 Bedroom", label: "2 Bedroom" },
  { value: "3 Bedroom", label: "3 Bedroom" },
  { value: "4 Bedroom", label: "4 Bedroom" },
  { value: "5+ Bedrooms", label: "5+ Bedrooms" },
];

const trustPoints = [
  { icon: Clock, text: "We reply within the hour" },
  { icon: DollarSign, text: "Fixed price — no hidden fees" },
  { icon: Shield, text: "100% Bond Back Guarantee" },
  { icon: CheckCircle2, text: "REIQ checklist compliant" },
];

// Obscured destination — never exposed as plain text in rendered UI
const DEST = atob("aHVtcHR5ZHVtcHR5Ym9uZGNsZWFuaW5nQGdtYWlsLmNvbQ==");

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { actor } = useActor();

  useMetaTags({
    title: "Contact Tru Bond Cleaning Gold Coast | Get a Free Quote Today",
    description:
      "Contact Tru Bond Cleaning Gold Coast for a free bond cleaning quote. WhatsApp 0488841883 or fill in our online form. Fast response guaranteed.",
    keywords:
      "contact bond cleaning Gold Coast, bond cleaning quote Gold Coast, book bond clean Gold Coast",
    canonical: "https://trubondcleaningbrisbane.com/#/contact",
  });

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const buildMailtoBody = (f: FormData): string => {
    return [
      `Name: ${f.name}`,
      `Email: ${f.email}`,
      `Phone: ${f.phone}`,
      `Service Required: ${f.service}`,
      `Property Size: ${f.propertySize}`,
      `Message: ${f.message || "No additional message"}`,
      "",
      "--- Sent via Tru Bond Cleaning Gold Coast website ---",
    ].join("\n");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.service ||
      !form.propertySize
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Store in backend
      if (actor) {
        await actor.submitEnquiry({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: `${form.service} — ${form.propertySize}`,
          message: form.message,
        });
      }

      // Open user's email client pre-filled — email appears to come from customer
      const subject = encodeURIComponent(
        `Bond Cleaning Enquiry from ${form.name}`,
      );
      const body = encodeURIComponent(buildMailtoBody(form));
      const mailtoUrl = `mailto:${DEST}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;

      setSubmitted(true);
      toast.success("Enquiry submitted! Check your email app to send it.");
      setForm(initialForm);
    } catch {
      toast.error("Something went wrong. Please try WhatsApp or try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section
        className="gradient-hero py-14 md:py-20"
        aria-label="Contact page hero"
      >
        <div className="container-wide text-center">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Get Your Free Bond Cleaning Quote
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Fill in the form below and we'll get back to you with a fixed price
            quote within the hour. Available 7 days a week across all Gold Coast
            suburbs.
          </p>
        </div>
      </section>

      <section
        className="py-16 md:py-24 bg-background"
        aria-label="Contact form"
      >
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <aside
              className="lg:col-span-1 space-y-6"
              aria-label="Contact information"
            >
              {/* WhatsApp CTA */}
              <div className="bg-[oklch(0.18_0.06_142)] rounded-2xl p-6 text-white">
                <h2 className="font-bold text-lg mb-2">Prefer to Chat?</h2>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  WhatsApp us directly for the fastest response. We're available
                  7 days a week.
                </p>
                <a
                  href="https://wa.me/61488841883"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.sidebar.whatsapp.primary_button"
                  className="btn-whatsapp w-full justify-center text-sm"
                  aria-label="WhatsApp 0488841883"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp 0488 841 883
                </a>
              </div>

              {/* Trust points */}
              <div className="bg-white rounded-2xl p-6 shadow-card border border-border">
                <h3 className="font-bold text-foreground mb-4">
                  Why Book With Us?
                </h3>
                <ul className="space-y-3">
                  {trustPoints.map((point) => {
                    const Icon = point.icon;
                    return (
                      <li
                        key={point.text}
                        className="flex items-center gap-3 text-sm text-foreground"
                      >
                        <Icon size={16} className="text-accent flex-shrink-0" />
                        <span>{point.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Pricing guide */}
              <div className="bg-secondary rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-foreground mb-3">
                  Rough Pricing Guide
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    ["Studio / 1 Bed", "from $250"],
                    ["2 Bedroom", "from $320"],
                    ["3 Bedroom", "from $420"],
                    ["4 Bedroom", "from $550"],
                    ["5+ Bedrooms", "from $700"],
                  ].map(([size, price]) => (
                    <li key={size} className="flex justify-between">
                      <span className="text-muted-foreground">{size}</span>
                      <span className="font-semibold text-primary">
                        {price}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mt-3">
                  * Carpet cleaning is an add-on. All prices are indicative —
                  contact us for your exact quote.
                </p>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div
                  data-ocid="contact.form.success_state"
                  className="bg-white rounded-2xl shadow-card border border-border p-10 text-center"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Enquiry Submitted!
                  </h2>
                  <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-6">
                    Your enquiry has been submitted. Your email app should have
                    opened with your enquiry ready to send. We'll get back to
                    you with a fixed price quote within the hour.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="https://wa.me/61488841883"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid="contact.success.whatsapp.primary_button"
                      className="btn-whatsapp"
                      aria-label="Follow up via WhatsApp"
                    >
                      <Phone size={16} />
                      WhatsApp Us
                    </a>
                    <Button
                      variant="outline"
                      className="rounded-full border-primary text-primary hover:bg-secondary"
                      onClick={() => setSubmitted(false)}
                      data-ocid="contact.success.another.secondary_button"
                    >
                      Submit Another Enquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-card border border-border p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Request a Free Quote
                  </h2>
                  <p className="text-muted-foreground text-sm mb-6">
                    Fill in your details below. We'll send you a fixed price
                    quote within the hour. All fields marked with{" "}
                    <span className="text-destructive">*</span> are required.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    aria-label="Bond cleaning enquiry form"
                    data-ocid="contact.form.panel"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="contact-name"
                          className="text-sm font-semibold text-foreground"
                        >
                          Full Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="contact-name"
                          type="text"
                          placeholder="e.g. Jessica Smith"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          autoComplete="name"
                          data-ocid="contact.name.input"
                          aria-required="true"
                          className="rounded-lg border-input"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="contact-email"
                          className="text-sm font-semibold text-foreground"
                        >
                          Email Address{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="e.g. jessica@email.com"
                          value={form.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          required
                          autoComplete="email"
                          data-ocid="contact.email.input"
                          aria-required="true"
                          className="rounded-lg border-input"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="contact-phone"
                          className="text-sm font-semibold text-foreground"
                        >
                          Phone Number{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="contact-phone"
                          type="tel"
                          placeholder="e.g. 0412 345 678"
                          value={form.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          required
                          autoComplete="tel"
                          data-ocid="contact.phone.input"
                          aria-required="true"
                          className="rounded-lg border-input"
                        />
                      </div>

                      {/* Service */}
                      <div className="space-y-1.5">
                        <Label
                          htmlFor="contact-service"
                          className="text-sm font-semibold text-foreground"
                        >
                          Service Required{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={form.service}
                          onValueChange={(val) => handleChange("service", val)}
                        >
                          <SelectTrigger
                            id="contact-service"
                            data-ocid="contact.service.select"
                            className="rounded-lg"
                            aria-required="true"
                          >
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value}>
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Property Size */}
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label
                          htmlFor="contact-size"
                          className="text-sm font-semibold text-foreground"
                        >
                          Property Size{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Select
                          value={form.propertySize}
                          onValueChange={(val) =>
                            handleChange("propertySize", val)
                          }
                        >
                          <SelectTrigger
                            id="contact-size"
                            data-ocid="contact.property_size.select"
                            className="rounded-lg"
                            aria-required="true"
                          >
                            <SelectValue placeholder="Select property size" />
                          </SelectTrigger>
                          <SelectContent>
                            {propertySizeOptions.map((opt) => (
                              <SelectItem key={opt.value} value={opt.value}>
                                {opt.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label
                          htmlFor="contact-message"
                          className="text-sm font-semibold text-foreground"
                        >
                          Your Message / Special Requests
                        </Label>
                        <Textarea
                          id="contact-message"
                          placeholder="Tell us about your property, any special requirements, preferred date, or anything else we should know..."
                          value={form.message}
                          onChange={(e) =>
                            handleChange("message", e.target.value)
                          }
                          rows={4}
                          data-ocid="contact.message.textarea"
                          className="rounded-lg border-input resize-none"
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-3">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        data-ocid="contact.form.submit_button"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 h-auto text-base rounded-full"
                        aria-label="Submit bond cleaning enquiry"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2 justify-center">
                            <svg
                              className="animate-spin h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          "Send My Enquiry & Get a Quote"
                        )}
                      </Button>
                      <p className="text-xs text-muted-foreground text-center leading-relaxed">
                        By submitting this form, your email app will open so you
                        can send your enquiry directly. We'll reply with a fixed
                        price quote within the hour.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
