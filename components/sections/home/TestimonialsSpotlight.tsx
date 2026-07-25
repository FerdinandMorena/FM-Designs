"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { testimonials } from "@/lib/data";

export function TestimonialsSpotlight() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => clearInterval(id);
  }, []);

  const active = testimonials[index];

  return (
    <section className="section-paper relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-4xl">
        <Eyebrow>Client feedback</Eyebrow>

        <div className="mt-10 min-h-[220px] sm:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Quote size={32} className="text-[var(--color-accent)]" strokeWidth={1.5} />
              <p className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-medium leading-[1.35] tracking-tight text-[var(--foreground)] sm:text-3xl lg:text-[2.25rem]">
                &ldquo;{active.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-white">
                  {active.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--foreground)]">{active.name}</p>
                  <p className="text-xs text-[var(--foreground-muted)]">{active.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center gap-4 border-t border-[var(--border-soft)] pt-6">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] text-[var(--foreground)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <ArrowLeft size={15} />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-soft)] text-[var(--foreground)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <ArrowRight size={15} />
          </button>
          <div className="ml-2 flex gap-1.5">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className="h-1.5 w-6 rounded-full transition-colors"
                style={{ backgroundColor: i === index ? "var(--color-accent)" : "var(--border-soft)" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
