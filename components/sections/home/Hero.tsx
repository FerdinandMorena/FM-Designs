"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Hero() {
  const stageRef = useRef<HTMLElement>(null);
  const blobARef = useRef<HTMLDivElement>(null);
  const blobBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;

    const ax = gsap.quickTo(blobARef.current, "x", {
      duration: 1.3,
      ease: "power3.out",
    });
    const ay = gsap.quickTo(blobARef.current, "y", {
      duration: 1.3,
      ease: "power3.out",
    });
    const bx = gsap.quickTo(blobBRef.current, "x", {
      duration: 1.6,
      ease: "power3.out",
    });
    const by = gsap.quickTo(blobBRef.current, "y", {
      duration: 1.6,
      ease: "power3.out",
    });

    const onMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      ax(px * 50);
      ay(py * 35);
      bx(px * -35);
      by(py * -25);
    };

    stage.addEventListener("mousemove", onMove);
    return () => stage.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={stageRef}
      className="relative overflow-hidden bg-[var(--color-primary)]"
    >
      <Image
        src="/hero-visual.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%] opacity-95"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,12,23,0.98) 0%, rgba(7,12,23,0.94) 30%, rgba(7,12,23,0.55) 60%, rgba(7,12,23,0.4) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,12,23,0.6) 0%, rgba(7,12,23,0.12) 30%, rgba(7,12,23,0.25) 70%, rgba(7,12,23,0.8) 100%)",
        }}
      />

      <div className="aurora-field">
        <div
          ref={blobARef}
          className="aurora-blob aurora-blob--a h-[360px] w-[360px] -translate-x-[10%] translate-y-[-15%]"
          style={{
            background:
              "radial-gradient(circle, var(--color-violet), transparent 70%)",
            opacity: 0.28,
          }}
        />
        <div
          ref={blobBRef}
          className="aurora-blob aurora-blob--b right-0 top-1/4 h-[420px] w-[420px] translate-x-[20%]"
          style={{
            background:
              "radial-gradient(circle, var(--color-cyan), transparent 70%)",
            opacity: 0.22,
          }}
        />
      </div>
      <div className="noise-overlay" />

      <div className="container-px relative z-10 mx-auto flex max-w-7xl flex-col items-start pt-36 pb-24 text-left sm:pt-44 sm:pb-32">
        <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-white/60 backdrop-blur-md">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          </span>
          Web development studio · Polokwane, South Africa
        </div>

        <SplitHeading
          as="h1"
          type="words"
          trigger="load"
          className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white [text-shadow:0_4px_30px_rgba(0,0,0,0.4)] sm:text-5xl lg:text-[4.25rem]"
        >
          Websites Engineered Like Products.
        </SplitHeading>

        <p className="mt-7 max-w-lg text-base font-light leading-relaxed tracking-wide text-white/55 sm:text-lg">
          We design and build modern websites that help businesses generate more
          customers, more sales, and a stronger online presence.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <MagneticButton
            href="/contact"
            variant="glow"
            className="!bg-white !text-[var(--color-primary)] hover:!bg-white/90"
          >
            Get a Free Quote
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </MagneticButton>
          <MagneticButton
            href="/portfolio"
            variant="outline"
            className="!border-white/20 !text-white hover:!border-[var(--color-accent)]"
          >
            View Portfolio
          </MagneticButton>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={cn(
                "flex items-baseline gap-2",
                i > 0 && "sm:border-l sm:border-white/15 sm:pl-8",
              )}
            >
              <AnimatedCounter
                value={s.value}
                suffix={s.suffix}
                className="font-[family-name:var(--font-heading)] text-xl font-bold text-white sm:text-2xl"
              />
              <span className="text-xs text-white/50">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
