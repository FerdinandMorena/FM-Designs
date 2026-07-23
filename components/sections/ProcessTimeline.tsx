"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { processSteps } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProcessTimeline({ variant = "base" }: { variant?: "base" | "alt" }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".process-step").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0.2, x: -16, scale: 0.94 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            transformOrigin: "left center",
            scrollTrigger: { trigger: item, start: "top 78%", end: "top 45%", scrub: true },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className={cn("relative py-24", variant === "alt" && "theme-dark-alt")}>
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A clear process, from first call to launch day.
          </h2>
        </div>

        <div ref={sectionRef} className="relative mt-16 pl-14 sm:pl-16">
          <div className="absolute left-5 top-0 h-full w-px bg-[var(--border-soft)]" />
          <div
            ref={lineRef}
            className="absolute left-5 top-0 h-full w-px origin-top bg-[var(--color-accent)]"
          />

          <ol className="space-y-10">
            {processSteps.map((step, i) => (
              <li key={step.title} className="process-step relative">
                <span className="absolute -left-14 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--color-accent)] ring-1 ring-[var(--border-soft)] sm:-left-16">
                  <step.icon size={14} />
                </span>
                <p className="text-[11px] font-semibold tracking-wide text-[var(--foreground-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 text-base font-bold">{step.title}</h3>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-[var(--foreground-muted)]">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
