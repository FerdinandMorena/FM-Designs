import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { AmbientGrid } from "@/components/ui/AmbientGrid";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with FM Designs for a free quote on your next website project.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 md:pt-48">
      <AmbientGrid />
      <div className="container-px mx-auto max-w-7xl">
        <Eyebrow>Contact</Eyebrow>
        <SplitHeading
          as="h1"
          trigger="load"
          className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl"
        >
          Let&apos;s talk about your next website.
        </SplitHeading>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--foreground)]/70">
          Send over a few details about your business and what you need, and
          we&apos;ll come back with next steps and a clear quote.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="grow"
              className="flex items-center gap-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--color-accent)]/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/15 text-green-500">
                <MessageCircle size={19} />
              </div>
              <div>
                <p className="text-sm font-bold">WhatsApp</p>
                <p className="text-xs text-[var(--foreground)]/60">Chat with us directly</p>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              data-cursor="grow"
              className="flex items-center gap-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--color-accent)]/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent)] text-white">
                <Mail size={19} />
              </div>
              <div>
                <p className="text-sm font-bold">Email</p>
                <p className="text-xs text-[var(--foreground)]/60">{siteConfig.email}</p>
              </div>
            </a>

            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              data-cursor="grow"
              className="flex items-center gap-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--color-accent)]/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent)] text-white">
                <Phone size={19} />
              </div>
              <div>
                <p className="text-sm font-bold">Phone</p>
                <p className="text-xs text-[var(--foreground)]/60">{siteConfig.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent)] text-white">
                <MapPin size={19} />
              </div>
              <div>
                <p className="text-sm font-bold">Location</p>
                <p className="text-xs text-[var(--foreground)]/60">{siteConfig.location}</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[var(--border-soft)]">
              <iframe
                title="FM Designs location map"
                src="https://www.google.com/maps?q=Polokwane,+South+Africa&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
