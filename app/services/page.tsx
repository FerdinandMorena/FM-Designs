import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { AmbientGrid } from "@/components/ui/AmbientGrid";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, redesign, e-commerce, SEO, branding, and ongoing maintenance — everything a business needs online.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-10 md:pt-48">
        <AmbientGrid />
        <div className="container-px mx-auto max-w-7xl">
          <Eyebrow>Services</Eyebrow>
          <SplitHeading
            as="h1"
            trigger="load"
            className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl"
          >
            Everything needed to launch, grow, and maintain your website.
          </SplitHeading>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--foreground)]/70">
            From a first landing page to a full e-commerce platform — services
            are scoped around your business stage, not a fixed package.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <ProcessTimeline />
      <CtaSection />
    </>
  );
}
