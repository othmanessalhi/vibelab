import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-background py-24 sm:py-32 md:py-40">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-primary leading-tight">
          We grow brands with social media & content.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-primary/80">
          Trusted by industry leaders and innovative startups to create authentic connections and drive measurable growth.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#work">Explore Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
