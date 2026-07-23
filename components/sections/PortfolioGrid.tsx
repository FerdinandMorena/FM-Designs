"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", "WordPress", "Full Stack", "Frontend"] as const;

export function PortfolioGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    const list = active === "All" ? projects : projects.filter((p) => p.category === active);
    return limit ? list.slice(0, limit) : list;
  }, [active, limit]);

  return (
    <section className="relative py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Recent projects we&apos;re proud of.
            </h2>
          </div>

          {!limit && (
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors",
                    active === cat
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                      : "border-[var(--border-soft)] text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        <motion.div layout className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.button
                layout
                key={project.id}
                onClick={() => setSelected(project)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                data-cursor="grow"
                className="group relative overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 text-left"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: project.color }}
                    >
                      {project.category}
                    </p>
                    <h3 className="mt-1 text-base font-bold">{project.title}</h3>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-[var(--foreground)]/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-accent)]"
                  />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="glass w-full max-w-lg overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-video">
                <Image src={selected.image} alt={selected.title} fill sizes="512px" className="object-cover object-top" />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: selected.color }}
                    >
                      {selected.category}
                    </p>
                    <h3 className="mt-1 text-xl font-extrabold">{selected.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    aria-label="Close project details"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-soft)]"
                  >
                    <X size={14} />
                  </button>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[var(--foreground)]/70">
                  {selected.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {selected.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--border-soft)] px-3 py-1 text-[11px] font-medium text-[var(--foreground)]/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {selected.liveUrl && (
                    <a
                      href={selected.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-xs font-semibold text-white"
                    >
                      Live Demo <ExternalLink size={13} />
                    </a>
                  )}
                  {selected.githubUrl && (
                    <a
                      href={selected.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--border-soft)] px-5 py-2.5 text-xs font-semibold"
                    >
                      <GithubIcon width={13} height={13} /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
