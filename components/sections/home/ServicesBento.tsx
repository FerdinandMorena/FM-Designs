import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TiltCard } from "@/components/ui/TiltCard";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

const spans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

export function ServicesBento() {
  const items = services.slice(0, 8);

  return (
    <section className="theme-dark-alt relative py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything a business needs to launch and grow online.
          </h2>
        </div>

        <RevealOnScroll
          stagger={0.06}
          className="mt-10 grid auto-rows-[110px] grid-flow-row-dense grid-cols-1 gap-3 sm:mt-14 sm:auto-rows-[130px] sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:auto-rows-[150px] lg:auto-rows-[170px] lg:gap-5"
        >
          {items.map((service, i) => {
            const featured = i === 0;
            return (
              <TiltCard key={service.title} className={cn(spans[i])}>
                <div
                  className={cn(
                    "relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-[var(--color-accent)] p-4 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset] transition-all duration-300 group-hover:shadow-[0_0_40px_-8px_var(--color-accent)] sm:p-5 md:p-6",
                    featured && "md:p-8 lg:p-10",
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 text-white sm:h-10 sm:w-10",
                        featured && "md:h-14 md:w-14 lg:h-16 lg:w-16",
                      )}
                    >
                      <service.icon size={16} />
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-white/60 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </div>

                  <div>
                    <h3
                      className={cn(
                        "text-xs font-bold text-white sm:text-sm",
                        featured && "md:text-xl lg:text-2xl",
                      )}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 hidden leading-relaxed text-white/70 md:block",
                        featured ? "md:text-sm" : "md:text-xs",
                      )}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </RevealOnScroll>
      </div>
    </section>
  );
}
