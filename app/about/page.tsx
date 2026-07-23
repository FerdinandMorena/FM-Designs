import type { Metadata } from "next";
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
    "FM Designs is a full-stack web development studio focused on performance, modern UI, and results-driven design.",
};

const pillars = [
  {
    icon: Code2,
    title: "Full-stack, front-end first",
    description:
      "Comfortable across the stack, but every project starts from what the visitor sees and feels.",
  },
  {
    icon: Rocket,
    title: "Performance-focused",
    description:
      "Every build is measured against real performance budgets, not just how it looks on launch day.",
  },
  {
    icon: Users,
    title: "Agile & Scrum",
    description:
      "Work is planned in sprints with clear backlogs, so progress is visible from week one.",
  },
  {
    icon: ShieldCheck,
    title: "SEO-conscious by default",
    description:
      "Semantic markup, structured data, and clean URLs are part of the build, not an afterthought.",
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
            className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl"
          >
            A studio built around one job: websites that perform.
          </SplitHeading>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5 text-base leading-relaxed text-[var(--foreground)]/70">
              <p>
                FM Designs is a full-stack web development studio building
                modern, responsive, and performance-focused websites for
                businesses that want their online presence to match the
                quality of what they actually do.
              </p>
              <p>
                The work spans front-end specialism — modern UI, motion, and
                accessible interfaces — through to full-stack delivery with
                the MERN stack, Next.js, and TypeScript, backed by
                API integration and database development where a project
                needs it.
              </p>
              <p>
                Every engagement runs on Agile and Scrum foundations: a clear
                backlog, sprint planning, and a Definition of Done agreed on
                up front — so there&apos;s no ambiguity about what &ldquo;finished&rdquo;
                looks like.
              </p>
              <p>
                Responsive design, SEO-conscious markup, and clean, documented
                code are treated as non-negotiable parts of the build, not
                optional extras billed later.
              </p>
            </div>

            <div className="glass rounded-3xl p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
                At a glance
              </p>
              <div className="mt-5 grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <AnimatedCounter
                      value={s.value}
                      suffix={s.suffix}
                      className="font-[family-name:var(--font-heading)] text-2xl font-extrabold"
                    />
                    <p className="mt-1 text-xs text-[var(--foreground)]/60">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 border-t border-[var(--border-soft)] pt-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
                  Focus areas
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Frontend architecture",
                    "API integration",
                    "Database design",
                    "Responsive UI",
                    "SEO",
                  ].map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-[var(--border-soft)] px-3 py-1 text-[11px] font-medium text-[var(--foreground)]/70"
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

      <section className="theme-dark-alt relative py-24">
        <div className="container-px mx-auto max-w-7xl">
          <Eyebrow>How we operate</Eyebrow>
          <h2 className="max-w-lg text-3xl font-extrabold tracking-tight sm:text-4xl">
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
                <h3 className="mt-5 text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/65">
                  {p.description}
                </p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <TechStack />
      <CtaSection />
    </>
  );
}
