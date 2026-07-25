"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", "WordPress", "Full Stack", "Frontend"] as const;

export function WorkGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section className="section-paper relative py-16 sm:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-2 border-b border-[var(--border-soft)] pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-lg border px-4 py-1.5 text-xs font-semibold transition-colors",
                active === cat
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                  : "border-[var(--border-soft)] text-[var(--foreground-muted)] hover:text-[var(--foreground)]",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <Link
                  href={`/work/${project.slug}`}
                  data-cursor="grow"
                  className="group relative block overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-5"
                >
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-[var(--surface-muted)]">
                    <Image
                      src={project.cover ?? project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: project.color }}>
                        {project.category}
                      </p>
                      <h3 className="mt-1 text-base font-bold text-[var(--foreground)]">{project.title}</h3>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-[var(--foreground-muted)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-accent)]"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
