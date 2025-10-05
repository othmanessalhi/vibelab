"use client";

import { ScrollingFeatureShowcase } from "@/components/ui/interactive-scrolling-story-component";

export default function Services() {
  return (
    <section id="services" className="bg-background w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary tracking-tight">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/70">
            From strategy to execution, we offer a complete suite of services to elevate your brand.
          </p>
        </div>
      </div>
      <ScrollingFeatureShowcase />
    </section>
  );
}
