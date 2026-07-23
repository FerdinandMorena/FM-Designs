import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { AmbientGrid } from "@/components/ui/AmbientGrid";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-32">
      <AmbientGrid />
      <div className="container-px mx-auto max-w-2xl text-center">
        <p className="font-[family-name:var(--font-heading)] text-7xl font-bold text-[var(--color-accent)] sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-[var(--foreground)]/65">
          The page you&apos;re looking for may have moved or never existed.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex justify-center">
          <MagneticButton href="/">
            <ArrowLeft size={15} />
            Back to Home
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
