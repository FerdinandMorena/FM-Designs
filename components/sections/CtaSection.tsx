"use client";

import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { siteConfig } from "@/lib/data";

export function CtaSection() {
  return (
    <section className="relative bg-[var(--background)] py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <RevealOnScroll className="relative overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] px-8 py-20 text-center sm:px-16 sm:py-28">
          <div className="noise-overlay opacity-[0.04]" />

          <h2 className="relative mx-auto max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-medium leading-[1.08] tracking-tight text-[var(--foreground)] sm:text-6xl">
            Let&apos;s build something worth remembering.
          </h2>
          <p className="relative mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[var(--foreground-muted)] sm:text-base">
            Tell us about the product you&apos;re building — we&apos;ll come back with a
            clear plan, a realistic timeline, and a straight answer.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-4">
            <MagneticButton href="/contact" variant="accent">
              Start a project
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton href={`mailto:${siteConfig.email}`} variant="outline">
              {siteConfig.email}
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
