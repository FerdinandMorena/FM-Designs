"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export function Loader() {
  const [visible, setVisible] = useState(true);
  const wrapRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const panelTopRef = useRef<HTMLDivElement>(null);
  const panelBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // sessionStorage is a client-only API and must be read after mount,
    // so this genuinely needs an effect rather than render-time logic.
    if (sessionStorage.getItem("fm-loaded")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      return;
    }

    const counter = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("fm-loaded", "1");
        setVisible(false);
      },
    });

    tl.to(counter, {
      value: 100,
      duration: 1.4,
      ease: "power2.inOut",
      onUpdate: () => {
        if (countRef.current)
          countRef.current.textContent = String(Math.floor(counter.value));
        if (barRef.current) barRef.current.style.width = `${counter.value}%`;
      },
    })
      .to(wrapRef.current, { opacity: 0, duration: 0.3, delay: 0.1 }, "+=0")
      .to(
        panelTopRef.current,
        { yPercent: -100, duration: 0.7, ease: "power4.inOut" },
        "<",
      )
      .to(
        panelBottomRef.current,
        { yPercent: 100, duration: 0.7, ease: "power4.inOut" },
        "<",
      );

    return () => {
      tl.kill();
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100]" aria-hidden="true">
      <div
        ref={panelTopRef}
        className="absolute inset-x-0 top-0 h-1/2 bg-[var(--color-primary)]"
      />
      <div
        ref={panelBottomRef}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[var(--color-primary)]"
      />
      <div
        ref={wrapRef}
        className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-white"
      >
        <span className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-2xl font-bold tracking-tight">
          <Image
            src="/logo-icon.png"
            alt=""
            width={64}
            height={64}
            className="h-24 w-24"
          />
          FM<span className="text-[var(--color-accent)]">Designs</span>
        </span>
        <div className="h-px w-40 overflow-hidden bg-white/15">
          <div ref={barRef} className="h-full w-0 bg-[var(--color-accent)]" />
        </div>
        <span ref={countRef} className="font-mono text-sm text-white/60">
          0
        </span>
      </div>
    </div>
  );
}
