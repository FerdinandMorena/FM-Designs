"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { hero, stats } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageWrapRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    if (!section || !imageWrap || !image || !content) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageWrap,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out", delay: 0.15 },
      );

      gsap.registerPlugin(ScrollTrigger);

      // Cinematic exit: the image drifts and zooms slower than the page
      // scrolls past it, while the copy recedes — a depth cue rather than
      // a 1:1 scroll-follow.
      gsap.to(image, {
        yPercent: 12,
        scale: 1.14,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
      });

      gsap.to(content, {
        yPercent: -16,
        opacity: 0.35,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--background)] pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44"
    >
      <div className="noise-overlay opacity-[0.03]" />

      <div className="container-px relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-8">
        <div ref={contentRef} className="flex flex-col items-start text-left">
          <span className="mb-6 inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.16em] text-[var(--foreground-muted)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            {hero.eyebrow}
          </span>

          <SplitHeading
            as="h1"
            type="words"
            trigger="load"
            className="max-w-md font-[family-name:var(--font-heading)] text-4xl font-medium leading-[1.04] tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl lg:text-[3.4rem]"
          >
            {hero.headline}
          </SplitHeading>

          <p className="mt-6 max-w-sm text-base leading-relaxed text-[var(--foreground-muted)]">
            {hero.subhead}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href="/contact" variant="accent">
              Start a project
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton href="/work" variant="outline">
              See our work
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </MagneticButton>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4">
            {stats.slice(0, 3).map((s, i) => (
              <div
                key={s.label}
                className={cn(
                  "flex items-baseline gap-2",
                  i > 0 && "border-l border-[var(--border-soft)] pl-8",
                )}
              >
                <AnimatedCounter
                  value={s.value}
                  suffix={s.suffix}
                  className="font-[family-name:var(--font-heading)] text-xl font-medium text-[var(--foreground)] sm:text-2xl"
                />
                <span className="max-w-[6rem] text-xs leading-tight text-[var(--foreground-muted)]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={imageWrapRef}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-[16/10] lg:aspect-[4/3]"
        >
          <Image
            ref={imageRef}
            src="/images/hero.webp"
            alt="A precise architectural scale model and notebook on a walnut studio table, lit by warm natural light."
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(14,13,12,0.05) 0%, transparent 25%, transparent 75%, rgba(14,13,12,0.18) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
