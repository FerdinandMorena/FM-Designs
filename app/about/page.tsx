import type { Metadata } from "next";
import Image from "next/image";
import { Code2, Rocket, ShieldCheck, Users } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AmbientGrid } from "@/components/ui/AmbientGrid";
import { CtaSection } from "@/components/sections/CtaSection";
import { TechStack } from "@/components/sections/TechStack";
import { stats } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "About",
  description:
    "FM Designs is a small, hands-on product and software studio building modern, performance-focused digital products.",
};

const pillars = [
  {
    icon: Code2,
    title: "Full-stack, product-first",
    description:
      "Comfortable across the entire stack, but every project starts from what the person using it sees and feels.",
  },
  {
    icon: Rocket,
    title: "Performance-focused",
    description:
      "Every build is measured against real performance budgets, not just how it looks on launch day.",
  },
  {
    icon: Users,
    title: "Agile & transparent",
    description:
      "Work runs in sprints with a visible backlog, so progress is never a black box between calls.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    description:
      "Semantic markup, structured data, and clean architecture — treated as the build, not an afterthought.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-20 md:pt-48">
        <AmbientGrid />
        <div className="container-px mx-auto max-w-7xl">
          <Eyebrow>About FM Designs</Eyebrow>
          <SplitHeading
            as="h1"
            trigger="load"
            className="max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-medium leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-5xl"
          >
            A studio built around one job: products that perform.
          </SplitHeading>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5 text-base leading-relaxed text-[var(--foreground-muted)]">
              <p>
                FM Designs is a product and software studio building modern,
                responsive, and performance-focused digital products for
                businesses that want their software to match the quality of
                what they actually do.
              </p>
              <p>
                The work spans product design — flows, interface, and motion
                — through to full-stack delivery with React, Next.js, Node,
                and TypeScript, backed by real API integration and database
                architecture where a project needs it.
              </p>
              <p>
                Every engagement runs on Agile foundations: a clear backlog,
                sprint planning, and a Definition of Done agreed on up front —
                so there&apos;s no ambiguity about what &ldquo;finished&rdquo; looks like.
              </p>
              <p>
                Responsive design, accessible markup, and clean, documented
                code are treated as non-negotiable parts of the build, not
                optional extras billed later.
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
                At a glance
              </p>
              <div className="mt-5 grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <AnimatedCounter
                      value={s.value}
                      suffix={s.suffix}
                      className="font-[family-name:var(--font-heading)] text-2xl font-medium text-[var(--foreground)]"
                    />
                    <p className="mt-1 text-xs text-[var(--foreground-muted)]">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 border-t border-[var(--border-soft)] pt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent)]">
                  Focus areas
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Product design",
                    "Frontend architecture",
                    "API integration",
                    "Database design",
                    "Accessibility",
                  ].map((tag) => (
                    <li
                      key={tag}
                      className="rounded-lg border border-[var(--border-soft)] px-3 py-1 text-[11px] font-medium text-[var(--foreground-muted)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[var(--background)] py-24">
        <div className="container-px mx-auto max-w-7xl">
          <RevealOnScroll y={40} className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-[var(--surface)]">
            <Image
              src="/images/about/studio-02.webp"
              alt="Two people reviewing a printed layout together at a studio table."
              fill
              sizes="100vw"
              className="object-cover"
            />
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-paper relative py-24">
        <div className="container-px mx-auto max-w-7xl">
          <Eyebrow>How we operate</Eyebrow>
          <h2 className="max-w-lg font-[family-name:var(--font-heading)] text-3xl font-medium tracking-tight text-[var(--foreground)] sm:text-4xl">
            The principles behind every project.
          </h2>

          <RevealOnScroll stagger={0.08} className="mt-14 grid gap-5 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent)] text-white">
                  <p.icon size={19} />
                </div>
                <h3 className="mt-5 text-base font-bold text-[var(--foreground)]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground-muted)]">
                  {p.description}
                </p>
              </div>
            ))}
          </RevealOnScroll>

          <RevealOnScroll y={40} className="relative mt-14 aspect-[16/6] overflow-hidden rounded-2xl bg-[var(--surface)]">
            <Image
              src="/images/about/studio-03.webp"
              alt="Premium material swatches — walnut, brushed steel, linen — arranged on a concrete surface."
              fill
              sizes="100vw"
              className="object-cover"
            />
          </RevealOnScroll>
        </div>
      </section>

      <TechStack />
      <CtaSection />
    </>
  );
}
