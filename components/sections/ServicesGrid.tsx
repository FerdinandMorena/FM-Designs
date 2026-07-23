import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TiltCard } from "@/components/ui/TiltCard";
import { services } from "@/lib/data";

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="theme-dark-alt relative py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Everything a business needs to launch and grow online.
          </h2>
        </div>

        <RevealOnScroll
          stagger={0.08}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((service) => (
            <TiltCard key={service.title}>
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset] transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-[var(--color-accent)]/40 group-hover:shadow-[0_0_40px_-8px_var(--color-accent)]">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent)] text-white transition-transform duration-300 group-hover:scale-110">
                  <service.icon size={19} />
                </div>
                <h3 className="relative mt-5 text-base font-bold">{service.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-[var(--foreground-muted)]">
                  {service.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
