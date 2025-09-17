import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-section');
  
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div className="space-y-6">
             <p className="font-headline text-accent font-semibold">About us</p>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight">
              We create digital experiences that resonate.
            </h2>
            <div className="space-y-4 text-primary/70 text-lg">
              <p>
                VibeLab is a digital agency built on the foundation of creativity and technical excellence. We are a collective of designers, developers, and strategists dedicated to crafting beautiful and effective solutions for our clients.
              </p>
              <p>
                Our process is collaborative and transparent. We work closely with you to understand your vision and translate it into a digital reality that exceeds expectations and delivers tangible results.
              </p>
            </div>
            <Button asChild>
                <Link href="#services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
