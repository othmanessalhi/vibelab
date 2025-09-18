"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  CardHoverReveal,
  CardHoverRevealContent,
  CardHoverRevealMain,
} from '@/components/ui/reveal-on-hover';
import { Badge } from '@/components/ui/badge';
import AnimateIn from '../common/AnimateIn';

const SLIDES = [
  {
    id: 'slide-1',
    title: 'Social Media Management',
    description:
      "Crafting your brand's voice and building a strong online presence through strategic content and community engagement.",
    services: ['strategy', 'content', 'community'],
    type: 'Social',
    imageUrl:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'slide-2',
    title: 'Paid Advertising',
    description:
      'Driving targeted traffic and conversions with data-driven paid campaigns across various platforms.',
    services: ['PPC', 'Social Ads', 'Analytics'],
    type: 'Advertising',
    imageUrl:
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2612&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'slide-3',
    title: 'Drone Videography',
    description:
      'Capturing breathtaking aerial footage that provides a unique and cinematic perspective for your projects.',
    services: ['4K Video', 'Editing', 'Aerial Shots'],
    type: 'Video',
    imageUrl:
      'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=2680&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'slide-4',
    title: 'Website Design',
    description:
      'Creating beautiful, functional, and responsive websites that offer an exceptional user experience.',
    services: ['UI/UX', 'Web Dev', 'Responsive'],
    type: 'Design',
    imageUrl:
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2670&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'slide-5',
    title: 'Video Production',
    description:
      'Telling your brand’s story through high-quality video content, from concept to final edit.',
    services: ['Storyboarding', 'Filming', 'Post-Production'],
    type: 'Production',
    imageUrl:
      'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateIn>
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight">
              What We Do
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/70">
              We specialize in creating impactful digital experiences. Swipe to explore our services.
            </p>
          </div>
        </AnimateIn>
      </div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {SLIDES.map(slide => (
            <CarouselItem key={slide.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <CardHoverReveal className="h-[500px] shadow-xl border rounded-xl">
                  <CardHoverRevealMain>
                    <img
                      alt={slide.title}
                      src={slide.imageUrl}
                      className="size-full aspect-video object-cover"
                    />
                  </CardHoverRevealMain>
                  <CardHoverRevealContent className="space-y-4 rounded-b-xl bg-black/50 backdrop-blur-md p-4 border-t border-white/10">
                    <div className="space-y-2">
                      <h3 className="text-sm text-white/80">Service Type</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="capitalize rounded-full bg-accent text-accent-foreground">
                          {slide.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm text-white/80">Includes</h3>
                      <div className="flex flex-wrap gap-2">
                        {slide.services.map(service => (
                          <Badge
                            key={service}
                            className="capitalize rounded-full"
                            variant={'secondary'}
                          >
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 mt-2">
                      <h3 className="text-white capitalize font-medium text-lg">
                        {slide.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {slide.description}
                      </p>
                    </div>
                  </CardHoverRevealContent>
                </CardHoverReveal>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
