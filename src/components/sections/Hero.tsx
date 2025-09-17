import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ScrollIndicator from '@/components/common/ScrollIndicator';


export default function Hero() {
  return (
    <section className="relative bg-background py-32 sm:py-48 md:py-64 min-h-screen flex items-center justify-center">
       <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
       <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>

      <div className="container mx-auto px-4 md:px-6 text-center z-10">
        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-primary leading-tight uppercase">
          Digital Agency
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-primary/70">
          We create impactful digital experiences that help brands grow, innovate, and stand out.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="#work">Our Work</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#cta">Contact</Link>
          </Button>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
