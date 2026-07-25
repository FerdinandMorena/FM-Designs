"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { manifesto } from "@/lib/data";

export function Manifesto() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".manifesto-line", wrap);
      gsap.set(lines, { opacity: 0.12 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top 80%",
          end: "bottom 55%",
          scrub: 0.6,
        },
      });
      lines.forEach((line) => {
        tl.to(line, { opacity: 1, duration: 1, ease: "none" }, "+=0.1");
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-paper relative py-28 sm:py-36">
      <div className="container-px mx-auto max-w-5xl">
        <div ref={wrapRef}>
          <p className="font-[family-name:var(--font-heading)] text-3xl font-medium leading-[1.18] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            {manifesto.map((line, i) => (
              <span key={i} className="manifesto-line block text-[var(--foreground)]">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
