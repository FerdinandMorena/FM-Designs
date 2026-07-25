import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function AboutTeaser() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <RevealOnScroll y={40} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--surface)] sm:aspect-[3/2]">
            <Image
              src="/images/about/studio-01.webp"
              alt="A bright, minimalist design studio workspace."
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </RevealOnScroll>

          <div>
            <Eyebrow>About the studio</Eyebrow>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-medium tracking-tight text-[var(--foreground)] sm:text-4xl">
              A small studio, built for close, hands-on work.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--foreground-muted)]">
              FM Designs stays deliberately small — one team across design and
              engineering, working directly with founders rather than through
              layers of account management. Based in South Africa, working
              with clients everywhere.
            </p>
            <a
              href="/about"
              data-cursor="grow"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] transition-colors hover:text-[var(--color-accent)]"
            >
              More about the studio
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
