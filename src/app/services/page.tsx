
import { RevealImageList } from '@/components/ui/reveal-images';
import { servicesData } from '@/lib/services-data';

export default function ServicesPage() {
  const items = servicesData.map((service, index) => ({
    text: service.title,
    images: [
      {
        src: service.image,
        alt: service.title,
      },
      {
        src: `https://picsum.photos/seed/service${index}/400/600`,
        alt: `Abstract for ${service.title}`,
      },
    ] as [{ src: string; alt: string; }, { src: string; alt: string; }],
  }));

  return (
    <div className="bg-background text-primary min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary/70">
            Hover over our services to see a glimpse of what we do. We offer a comprehensive suite of creative and technical services designed to help you stand out.
          </p>
        </div>
        <div className="flex justify-center">
            <RevealImageList items={items} />
        </div>
      </div>
    </div>
  );
}
