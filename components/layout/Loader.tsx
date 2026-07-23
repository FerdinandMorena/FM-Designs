"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

// useLayoutEffect only works client-side; falling back to useEffect keeps
// this component safe to import in a server-rendered tree.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : () => {};

export function Loader() {
  const [visible, setVisible] = useState(true);
  const wrapRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const panelTopRef = useRef<HTMLDivElement>(null);
  const panelBottomRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    // sessionStorage is a client-only API and must be read after mount.
    // Using a layout effect (rather than a plain effect) means this bail-out
    // resolves before the browser paints, so repeat visits never flash the
    // loader for a frame.
    if (sessionStorage.getItem("fm-loaded")) {
      setVisible(false);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const finish = () => {
      sessionStorage.setItem("fm-loaded", "1");
      document.body.style.overflow = previousOverflow;
      setVisible(false);
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      const tl = gsap.timeline({ delay: 0.3, onComplete: finish });
      tl.to(wrapRef.current, { opacity: 0, duration: 0.25 }).to(
        [panelTopRef.current, panelBottomRef.current],
        { opacity: 0, duration: 0.25 },
        "<",
      );
      return () => {
        tl.kill();
        document.body.style.overflow = previousOverflow;
      };
    }

    const counter = { value: 0 };
    const tl = gsap.timeline({ onComplete: finish });

    tl.from(markRef.current, {
      opacity: 0,
      y: 14,
      duration: 0.6,
      ease: "power3.out",
    })
      .to(
        counter,
        {
          value: 100,
          duration: 1.5,
          ease: "power2.inOut",
          onUpdate: () => {
            if (countRef.current) {
              countRef.current.textContent = String(
                Math.floor(counter.value),
              );
            }
            if (barRef.current) {
              barRef.current.style.width = `${counter.value}%`;
            }
          },
        },
        "-=0.2",
      )
      .to(
        wrapRef.current,
        { opacity: 0, y: -10, duration: 0.4, ease: "power2.in" },
        "+=0.2",
      )
      .to(
        panelTopRef.current,
        { yPercent: -100, duration: 0.9, ease: "expo.inOut" },
        "-=0.15",
      )
      .to(
        panelBottomRef.current,
        { yPercent: 100, duration: 0.9, ease: "expo.inOut" },
        "<",
      );

    return () => {
      tl.kill();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100]" aria-hidden="true">
      <div
        ref={panelTopRef}
        className="absolute inset-x-0 top-0 h-1/2 overflow-hidden bg-[var(--color-primary)]"
      >
        <div
          className="aurora-blob absolute -left-16 -top-24 h-[320px] w-[320px]"
          style={{
            background:
              "radial-gradient(circle, var(--color-violet), transparent 70%)",
            opacity: 0.24,
          }}
        />
        <div className="noise-overlay" />
      </div>
      <div
        ref={panelBottomRef}
        className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-[var(--color-primary)]"
      >
        <div
          className="aurora-blob absolute -bottom-24 -right-16 h-[360px] w-[360px]"
          style={{
            background:
              "radial-gradient(circle, var(--color-cyan), transparent 70%)",
            opacity: 0.18,
          }}
        />
        <div className="noise-overlay" />
      </div>

      <div
        ref={wrapRef}
        className="absolute inset-0 flex flex-col items-center justify-center gap-9 text-white"
      >
        <div
          className="pointer-events-none absolute h-56 w-56 rounded-full bg-[var(--color-accent)] opacity-20 blur-[80px] hero-glow-pulse"
          aria-hidden="true"
        />

        <div
          ref={markRef}
          className="relative flex flex-col items-center gap-4"
        >
          <Image
            src="/logo-icon.png"
            alt=""
            width={72}
            height={72}
            priority
            className="h-16 w-16"
          />
          <span className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight">
            FM<span className="text-[var(--color-accent)]">Designs</span>
          </span>
        </div>

        <div className="relative flex w-52 flex-col items-center gap-3">
          <div className="h-px w-full overflow-hidden rounded-full bg-white/10">
            <div
              ref={barRef}
              className="h-full w-0 rounded-full bg-[var(--color-accent)]"
            />
          </div>
          <div className="flex w-full items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            </span>
            <span>Loading</span>
            <span className="flex-1" />
            <span className="flex items-baseline gap-0.5 font-mono text-white/70">
              <span ref={countRef} className="tabular-nums">
                0
              </span>
              <span className="text-white/40">%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
