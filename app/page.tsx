import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { Manifesto } from "@/components/sections/home/Manifesto";
import { ServicesEditorial } from "@/components/sections/home/ServicesEditorial";
import { FeaturedWork } from "@/components/sections/home/FeaturedWork";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TestimonialsSpotlight } from "@/components/sections/home/TestimonialsSpotlight";
import { AboutTeaser } from "@/components/sections/home/AboutTeaser";
import { TechStack } from "@/components/sections/TechStack";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  description:
    "FM Designs is a product and software studio — we design and engineer digital products, platforms, and brands for ambitious founders and organizations.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <ServicesEditorial />
      <FeaturedWork />
      <ProcessTimeline variant="paper" />
      <WhyChooseUs />
      <TestimonialsSpotlight />
      <AboutTeaser />
      <TechStack />
      <CtaSection />
    </>
  );
}
