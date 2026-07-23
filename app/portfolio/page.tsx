import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { AmbientGrid } from "@/components/ui/AmbientGrid";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A selection of business, e-commerce, portfolio, and web application projects built by FM Designs.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-10 md:pt-48">
        <AmbientGrid />
        <div className="container-px mx-auto max-w-7xl">
          <Eyebrow>Portfolio</Eyebrow>
          <SplitHeading
            as="h1"
            trigger="load"
            className="max-w-2xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl"
          >
            Work built for real businesses, not just a mockup.
          </SplitHeading>
        </div>
      </section>

      <PortfolioGrid />
      <CtaSection />
    </>
  );
}
