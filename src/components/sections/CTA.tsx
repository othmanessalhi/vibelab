import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-primary">
          Ready to grow your brand?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/80">
          Let's create something amazing together. Get in touch to discuss your project.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="mailto:hello@vibelab.com">Let's Talk</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
