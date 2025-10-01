
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

type PricingTier = {
    name: string;
    price: string;
    values: (string | boolean)[];
}

type Service = {
  title: string;
  slug: string;
  description: string;
  image: string;
  link: string;
  pricing?: {
    features: string[];
    tiers: PricingTier[];
  }
};

interface ServiceDetailsProps {
  service: Service;
}

export default function ServiceDetails({ service }: ServiceDetailsProps) {
  const { pricing } = service;

  return (
    <main className="bg-background">
      <div className="relative h-[60vh] min-h-[400px]">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 md:px-6 relative h-full flex flex-col justify-end pb-12 md:pb-20">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white">
            {service.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl text-white/80">
            {service.description}
          </p>
        </div>
      </div>

      <div className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div id="details">
                <h2 className="text-3xl font-headline font-bold mb-6 text-primary">Service Details</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-primary/80 space-y-4">
                  <p>
                    Dive deep into what makes our {service.title} offering exceptional. We provide a comprehensive suite of solutions designed to elevate your brand and deliver measurable results. Our approach combines cutting-edge technology with creative strategies to ensure your business stands out.
                  </p>
                  <p>
                    From initial consultation to final delivery, our team works closely with you to understand your unique needs and goals. We believe in building partnerships, not just projects. This collaborative process allows us to tailor our services precisely to your requirements, ensuring maximum impact and return on investment.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Comprehensive strategy development</li>
                    <li>Dedicated account management</li>
                    <li>Detailed performance analytics and reporting</li>
                    <li>Scalable solutions for growing businesses</li>
                  </ul>
                </div>
              </div>

              {pricing && (
                <div id="pricing">
                  <h2 className="text-3xl font-headline font-bold mb-6 text-primary">Pricing Plans</h2>
                  <div className="border rounded-lg overflow-hidden">
                      <Table>
                          <TableHeader>
                              <TableRow>
                                  <TableHead className="w-[200px] font-bold">Features</TableHead>
                                  {pricing.tiers.map(tier => <TableHead key={tier.name} className="text-center font-bold text-lg">{tier.name}</TableHead>)}
                              </TableRow>
                          </TableHeader>
                          <TableBody>
                              {pricing.features.map((feature, index) => (
                                  <TableRow key={feature}>
                                      <TableCell className="font-medium">{feature}</TableCell>
                                      {pricing.tiers.map(tier => (
                                          <TableCell key={tier.name} className="text-center">
                                              {typeof tier.values[index] === 'boolean' ? (
                                                  tier.values[index] ? 
                                                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                                                      <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />
                                              ) : (
                                                <span className="text-sm">{tier.values[index]}</span>
                                              )}
                                          </TableCell>
                                      ))}
                                  </TableRow>
                              ))}
                              <TableRow>
                                  <TableHead className="font-bold">Price</TableHead>
                                  {pricing.tiers.map(tier => (
                                      <TableCell key={tier.name} className="text-center font-bold text-lg">
                                          {tier.price}
                                      </TableCell>
                                  ))}
                              </TableRow>
                          </TableBody>
                      </Table>
                  </div>
                </div>
              )}
            </div>
            
            <aside className="md:col-span-1">
              <div className="sticky top-24 bg-secondary/50 p-6 rounded-lg">
                <h3 className="text-xl font-headline font-bold mb-4 text-primary">Ready to Start?</h3>
                <p className="text-primary/70 mb-6">
                  Let's discuss how our {service.title} service can help you achieve your goals.
                </p>
                <Button size="lg" className="w-full" asChild>
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </main>
  );
}
