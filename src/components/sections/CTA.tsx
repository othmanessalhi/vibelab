
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const handleCTAClick = () => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'cta_click',
      cta_text: "Let's Talk",
      cta_location: 'CTA Section',
    });
  }
};

export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-32 bg-background isolate z-10 relative">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-primary">
          Have a project in mind?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/70">
          Let's create something amazing together. Get in touch to discuss your project.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild onClick={handleCTAClick}>
            <Link href="/contact">Let's Talk</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
