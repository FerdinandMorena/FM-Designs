"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function CtaSection() {
  const blobARef = useRef<HTMLDivElement>(null);
  const blobBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = blobARef.current?.parentElement;
    if (!stage) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const ax = gsap.quickTo(blobARef.current, "x", { duration: 1.2, ease: "power3.out" });
    const ay = gsap.quickTo(blobARef.current, "y", { duration: 1.2, ease: "power3.out" });
    const bx = gsap.quickTo(blobBRef.current, "x", { duration: 1.5, ease: "power3.out" });
    const by = gsap.quickTo(blobBRef.current, "y", { duration: 1.5, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      const rect = stage.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      ax(px * 40);
      ay(py * 30);
      bx(px * -30);
      by(py * -24);
    };

    stage.addEventListener("mousemove", onMove);
    return () => stage.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative py-24">
      <div className="container-px mx-auto max-w-7xl">
        <RevealOnScroll className="relative overflow-hidden rounded-[2.5rem] bg-[var(--color-primary)] px-8 py-20 text-center sm:px-16 sm:py-28">
          <div className="aurora-field">
            <div
              ref={blobARef}
              className="aurora-blob aurora-blob--a h-[420px] w-[420px] -translate-y-1/4 translate-x-[-10%]"
              style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)", opacity: 0.35 }}
            />
            <div
              ref={blobBRef}
              className="aurora-blob aurora-blob--b h-[380px] w-[380px] right-0 top-1/3 translate-x-[15%]"
              style={{ background: "radial-gradient(circle, var(--color-violet), transparent 70%)", opacity: 0.3 }}
            />
          </div>
          <div className="noise-overlay" />

          <h2 className="relative mx-auto max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
            Let&apos;s build something{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(120deg, var(--color-secondary), var(--color-violet))" }}
            >
              exceptional
            </span>
            .
          </h2>
          <p className="relative mx-auto mt-5 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
            Tell us about your business and we&apos;ll come back with a clear plan and quote.
          </p>
          <div className="relative mt-10 flex justify-center">
            <MagneticButton href="/contact" variant="glow" className="!bg-white !text-[var(--color-primary)] hover:!bg-white/90">
              Get a Free Quote
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
