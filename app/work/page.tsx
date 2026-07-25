import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { AmbientGrid } from "@/components/ui/AmbientGrid";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from FM Designs — product design and full-stack engineering for real, shipped clients.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-16 md:pt-48">
        <AmbientGrid />
        <div className="container-px mx-auto max-w-7xl">
          <Eyebrow>Work</Eyebrow>
          <SplitHeading
            as="h1"
            trigger="load"
            className="max-w-2xl font-[family-name:var(--font-heading)] text-4xl font-medium leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-5xl"
          >
            Work built for real businesses, not a mockup.
          </SplitHeading>
        </div>
      </section>

      <WorkGrid />
      <CtaSection />
    </>
  );
}
