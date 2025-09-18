"use client";
import AnimateIn from '../common/AnimateIn';
import { Carousel } from "@/components/ui/carousel";

const servicesData = [
  {
    title: 'Social Media Management',
    button: "Learn More",
    src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Paid Advertising',
    button: "Learn More",
    src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2612&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Drone Videography',
    button: "Learn More",
    src: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Website Design',
    button: "Learn More",
    src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Video Production',
    button: "Learn More",
    src: 'https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop&ixlib-rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];


export default function Services() {
  return (
    <section id="services" className="bg-background py-20 md:py-32 overflow-hidden">
      <AnimateIn>
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight">
                What We Do
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/70">
                We specialize in creating impactful digital experiences. Click the slides to explore our services.
              </p>
            </div>
          </div>
      </AnimateIn>
      <div className="relative w-full h-full py-20">
        <Carousel slides={servicesData} />
      </div>
    </section>
  );
}