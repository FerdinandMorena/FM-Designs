import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { ServicesBento } from "@/components/sections/home/ServicesBento";
import { ProjectsShowcase } from "@/components/sections/home/ProjectsShowcase";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TestimonialsHorizontal } from "@/components/sections/home/TestimonialsHorizontal";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  description:
    "FM Designs builds modern, high-converting websites for businesses — from landing pages to full e-commerce stores.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesBento />
      <ProjectsShowcase />
      <ProcessTimeline />
      <WhyChooseUs />
      <TestimonialsHorizontal />
      <CtaSection />
    </>
  );
}
