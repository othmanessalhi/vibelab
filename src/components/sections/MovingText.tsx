import React from 'react';
import TextMarquee from '@/components/ui/text-marque';

function MovingText() {
  return (
    <section className="py-20 md:py-32 bg-background">
        <TextMarquee
          delay={0}
          baseVelocity={-3}
          clasname='font-bold tracking-[-0.07em] leading-[90%] text-primary'
        >
          IGNITE YOUR BRAND'S POTENTIAL
        </TextMarquee>
        <TextMarquee
          delay={0}
          baseVelocity={3}
          clasname='font-bold tracking-[-0.07em] leading-[90%] text-primary'
        >
          - TRANSCEND THE NOISE
        </TextMarquee>
    </section>
  );
}

export default MovingText;
