
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
          <h1 className="font-headline text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white">
            {service.title}
          </h1>
          <p className="mt-4 max-w-3xl text-md md:text-xl text-white/80">
            {service.description}
          </p>
        </div>
      </div>

      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="flex-1 space-y-12">
              <div id="details">
                <h2 className="text-2xl md:text-3xl font-headline font-bold mb-6 text-primary">Service Details</h2>
                <div className="prose dark:prose-invert max-w-none text-primary/80 space-y-4">
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
                  <h2 className="text-2xl md:text-3xl font-headline font-bold mb-6 text-primary">Pricing Plans</h2>
                  
                  {/* Mobile Pricing View */}
                  <div className="space-y-6 md:hidden">
                    {pricing.tiers.map(tier => (
                      <div key={tier.name} className="border rounded-lg p-6 bg-secondary/30">
                        <h3 className="text-xl font-headline font-bold text-primary">{tier.name}</h3>
                        <p className="text-2xl font-bold my-2">{tier.price}</p>
                        <ul className="space-y-3 mt-4">
                          {pricing.features.map((feature, index) => (
                            <li key={feature} className="flex items-center gap-3">
                              {typeof tier.values[index] === 'boolean' ? (
                                tier.values[index] ? 
                                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" /> : 
                                    <XCircle className="h-5 w-5 text-muted-foreground shrink-0" />
                              ) : (
                                <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                              )}
                              <div>
                                <span className="font-medium text-sm">{feature}:</span>
                                {typeof tier.values[index] !== 'boolean' && (
                                  <p className="text-sm text-muted-foreground">{tier.values[index]}</p>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Desktop Pricing View */}
                  <div className="border rounded-lg overflow-hidden hidden md:block">
                      <Table>
                          <TableHeader>
                              <TableRow>
                                  <TableHead className="w-[200px] font-bold text-sm">Features</TableHead>
                                  {pricing.tiers.map(tier => <TableHead key={tier.name} className="text-center font-bold text-sm">{tier.name}</TableHead>)}
                              </TableRow>
                          </TableHeader>
                          <TableBody>
                              {pricing.features.map((feature, index) => (
                                  <TableRow key={feature}>
                                      <TableCell className="font-medium text-sm">{feature}</TableCell>
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
                              <TableRow className="bg-secondary/30">
                                  <TableHead className="font-bold text-sm">Price</TableHead>
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
            
            <aside className="w-full lg:w-1/4">
              <div className="sticky top-28 bg-secondary/50 p-6 rounded-lg">
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
