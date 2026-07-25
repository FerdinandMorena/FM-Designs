import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { AmbientGrid } from "@/components/ui/AmbientGrid";
import { ServicesEditorial } from "@/components/sections/home/ServicesEditorial";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product design, UI/UX, full-stack and SaaS development, business systems, WordPress, AI-powered solutions, and brand strategy.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16 md:pt-48">
        <AmbientGrid />
        <div className="container-px mx-auto max-w-7xl">
          <Eyebrow>Services</Eyebrow>
          <SplitHeading
            as="h1"
            trigger="load"
            className="max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-medium leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-5xl"
          >
            Everything a product needs, from first sketch to production.
          </SplitHeading>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--foreground-muted)]">
            Services are scoped around what the product actually needs, not a
            fixed package — design and engineering under one roof.
          </p>
        </div>
      </section>

      <ServicesEditorial />
      <ProcessTimeline variant="dark" />
      <CtaSection />
    </>
  );
}
