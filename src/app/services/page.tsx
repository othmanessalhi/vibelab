
import { servicesData } from '@/lib/services-data';
import ImageReveal from '@/components/ui/image-reveal';

export default function ServicesPage() {
  const serviceImages = servicesData.map((service, index) => ({
    id: index + 1,
    src: service.image,
    alt: service.title,
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
            <ImageReveal images={serviceImages} />
        </div>
      </div>
    </div>
  );
}

    