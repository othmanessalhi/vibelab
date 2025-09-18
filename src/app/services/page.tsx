import { servicesData } from '@/lib/services-data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="bg-background text-primary">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary/70">
            Discover how VibeLab can elevate your brand. We offer a comprehensive suite of creative and technical services designed to help you stand out and achieve your goals.
          </p>
        </div>

        <div className="grid gap-12 md:gap-16">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-row-dense' : ''}`}
            >
              <div className={`relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-border/10 ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight">{service.title}</h2>
                <p className="mt-4 text-lg text-primary/80">
                  {service.description}
                </p>
                <div className="mt-8">
                    <h3 className="font-headline text-xl font-semibold mb-4">Pricing Plans</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="border border-border/50 rounded-lg p-6">
                            <h4 className="font-semibold text-lg">Basic</h4>
                            <p className="text-primary/70 mt-2">Starts at $499</p>
                        </div>
                        <div className="border-2 border-accent rounded-lg p-6 relative">
                            <div className="absolute top-0 -translate-y-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
                            <h4 className="font-semibold text-lg">Pro</h4>
                            <p className="text-primary/70 mt-2">Starts at $999</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="#cta">Request a Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
