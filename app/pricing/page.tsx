import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { AmbientGrid } from "@/components/ui/AmbientGrid";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PricingSection } from "@/components/sections/PricingSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent starting pricing for starter, business, e-commerce, and enterprise website projects.",
};

const faqs = [
  {
    q: "Why do most tiers say “Request a Quote” instead of a fixed price?",
    a: "Business, e-commerce, and enterprise projects vary too much in scope — page count, integrations, and content — to quote fairly without a short discovery call.",
  },
  {
    q: "What's included in the Starter Website price?",
    a: "Up to 5 pages, a mobile-responsive build, a working contact form, and basic on-page SEO — enough to get a business online properly.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes — most projects are split into a deposit and a launch payment, with larger builds staged across milestones.",
  },
  {
    q: "Is hosting included?",
    a: "Hosting isn't bundled into the build price, but setup and ongoing hosting assistance are available as an add-on.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-10 md:pt-48">
        <AmbientGrid />
        <div className="container-px mx-auto max-w-7xl">
          <Eyebrow>Pricing</Eyebrow>
          <SplitHeading
            as="h1"
            trigger="load"
            className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl"
          >
            Clear starting points, scoped to your project.
          </SplitHeading>
        </div>
      </section>

      <PricingSection />

      <section className="relative py-24">
        <div className="container-px mx-auto max-w-4xl">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Pricing, answered.
          </h2>

          <RevealOnScroll stagger={0.06} className="mt-12 divide-y divide-[var(--border-soft)] rounded-2xl border border-[var(--border-soft)]">
            {faqs.map((f) => (
              <div key={f.q} className="p-6">
                <h3 className="text-sm font-bold">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/65">{f.a}</p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
