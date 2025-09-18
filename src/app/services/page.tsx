
"use client";
import ImageReveal from "@/components/ui/image-reveal";
import { servicesData } from "@/lib/services-data";

export default function ServicesPage() {
  const imagesForReveal = servicesData.map((service, index) => ({
    id: index + 1,
    src: service.image,
    alt: service.title,
  }));

  return (
    <div className="bg-background text-primary min-h-screen flex flex-col items-center justify-center py-20 px-4">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-primary/70">
          We offer a complete suite of services to elevate your brand. Hover over an item to see more.
        </p>
      </div>
      <div className="w-full max-w-5xl">
        <ImageReveal images={imagesForReveal} />
      </div>
    </div>
  );
}
