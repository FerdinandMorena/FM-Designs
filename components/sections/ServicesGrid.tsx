import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { services } from "@/lib/data";

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="relative py-24">
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
            <div
              key={service.title}
              className="group relative rounded-2xl border border-[var(--border-soft)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)]/50 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-accent)] text-white transition-transform duration-300 group-hover:scale-110">
                <service.icon size={19} />
              </div>
              <h3 className="mt-5 text-base font-bold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--foreground)]/65">
                {service.description}
              </p>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
