"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { services } from "@/lib/data";

export function ServicesEditorial() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>("li", list);
      gsap.set(rows, { y: 36, opacity: 0 });
      rows.forEach((row) => {
        gsap.to(row, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 90%", once: true },
        });
      });
    }, list);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-paper relative overflow-hidden py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Product, design, and engineering — under one roof.
          </h2>
        </div>

        <div className="relative mt-14 sm:mt-16">
          <ul
            ref={listRef}
            className="divide-y divide-[var(--border-soft)] border-t border-[var(--border-soft)]"
          >
            {services.map((service, i) => (
              <li
                key={service.title}
                className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 py-5 transition-colors sm:grid-cols-[3rem_minmax(0,18rem)_1fr_2.5rem] sm:items-center sm:gap-x-8 sm:py-6"
              >
                <span className="font-[family-name:var(--font-heading)] text-xs font-medium tabular-nums text-[var(--foreground-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-medium tracking-tight text-[var(--foreground)] transition-colors sm:text-2xl group-hover:text-[var(--color-accent)]">
                  {service.title}
                </h3>
                <p className="col-span-2 mt-2 max-w-lg text-sm leading-relaxed text-[var(--foreground-muted)] sm:col-span-1 sm:mt-0">
                  {service.description}
                </p>
                <ArrowUpRight
                  size={18}
                  className="col-span-2 mt-2 hidden text-[var(--foreground-muted)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-accent)] sm:col-span-1 sm:mt-0 sm:flex"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
