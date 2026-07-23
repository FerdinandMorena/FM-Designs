"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { whyChooseUs } from "@/lib/data";

const statementLines = [
  "We don't just design interfaces —",
  "we engineer outcomes.",
  "Every decision is measured against",
  "one question: does it grow the business.",
];

export function WhyChooseUs() {
  const linesWrapRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const linesWrap = linesWrapRef.current;
    const list = listRef.current;
    if (!linesWrap || !list) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(".statement-line", linesWrap);
      gsap.set(lines, { opacity: 0.15 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: linesWrap,
          start: "top 85%",
          end: "center center",
          scrub: 0.6,
        },
      });
      lines.forEach((line) => {
        tl.to(line, { opacity: 1, duration: 1, ease: "none" }, "+=0.1");
      });

      const rows = gsap.utils.toArray<HTMLElement>(".why-row", list);
      rows.forEach((row) => {
        ScrollTrigger.create({
          trigger: row,
          start: "top 65%",
          end: "bottom 45%",
          toggleClass: { targets: row, className: "is-active" },
        });
      });
    }, linesWrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-24">
      <div className="container-px mx-auto max-w-7xl">
        <Eyebrow>Why choose us</Eyebrow>

        <div className="mt-6 grid gap-16 lg:grid-cols-2">
          <div ref={linesWrapRef}>
            <p className="font-[family-name:var(--font-heading)] text-3xl font-bold leading-[1.2] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {statementLines.map((line, i) => (
                <span key={i} className="statement-line block text-[var(--foreground)]">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <ul ref={listRef} className="divide-y divide-[var(--border-soft)] border-t border-[var(--border-soft)]">
            {whyChooseUs.map((item, i) => (
              <li
                key={item.title}
                className="why-row group flex items-baseline justify-between gap-6 py-4 transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-semibold text-[var(--foreground-muted)] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-bold transition-colors">{item.title}</h3>
                </div>
                <p className="hidden max-w-xs text-right text-xs leading-relaxed text-[var(--foreground-muted)] transition-opacity sm:block">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
