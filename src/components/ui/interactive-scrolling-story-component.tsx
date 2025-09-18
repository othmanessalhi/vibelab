"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

// --- Data for each slide ---
const slidesData = [
  {
    title: "Social Media Management",
    description: "We craft and execute bespoke social media strategies that build authentic connections, foster engagement, and grow your brand's community.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop",
  },
  {
    title: "Paid Advertising",
    description: "Harness the power of data-driven paid advertising campaigns across all major platforms to maximize your reach, conversions, and ROI.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2612&auto=format&fit=crop",
  },
  {
    title: "Drone Videography",
    description: "Capture breathtaking aerial perspectives and cinematic footage that will elevate your brand's storytelling and leave a lasting impression.",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=2680&auto=format&fit=crop",
  },
  {
    title: "Website Design",
    description: "We design and build beautiful, responsive, and user-centric websites that not only look stunning but are also optimized for performance and conversions.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "Video Production",
    description: "From concept to final cut, our team produces high-quality video content that tells your story, engages your audience, and drives results.",
    image: "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop",
  },
];

interface SlideProps {
  index: number;
  slide: typeof slidesData[0];
  activeIndex: MotionValue<number>;
}

const SlideContent: React.FC<SlideProps> = ({ index, slide, activeIndex }) => {
  const y = useTransform(activeIndex, val => (val - index) * 100 + '%');
  const opacity = useTransform(activeIndex, val => (val === index ? 1 : 0));

  return (
    <motion.div
      className="absolute inset-0"
      style={{ y, opacity }}
      transition={{ duration: 0.5, ease: 'easeIn' }}
    >
      <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-primary">{slide.title}</h2>
      <p className="mt-6 text-lg md:text-xl max-w-md text-primary/80">{slide.description}</p>
    </motion.div>
  );
}

const SlideImage: React.FC<SlideProps> = ({ index, slide, activeIndex }) => {
  const y = useTransform(activeIndex, val => (val - index) * 100 + '%');
  const opacity = useTransform(activeIndex, val => (val === index ? 1 : 0));
  const scale = useTransform(activeIndex, val => (val === index ? 1 : 0.95));

  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      style={{ y, opacity, scale }}
      transition={{ duration: 0.5, ease: 'easeIn' }}
    >
      <img
        src={slide.image}
        alt={slide.title}
        className="h-full w-full object-cover"
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = `https://placehold.co/800x1200/e2e8f0/4a5568?text=Image+Not+Found`;
        }}
      />
    </motion.div>
  );
}


// --- Main App Component ---
export function ScrollingFeatureShowcase() {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const sectionHeight = slidesData.length * 100;

  const activeIndex = useTransform(scrollYProgress, (pos) => {
    return Math.floor(pos * slidesData.length);
  });

  const gridPatternStyle = {
    '--grid-color': 'hsl(var(--border))',
    backgroundImage: `
      linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
    `,
    backgroundSize: '3.5rem 3.5rem',
  };

  return (
    <div ref={targetRef} className="relative w-full" style={{ height: `${sectionHeight}vh` }}>
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-background text-foreground transition-colors duration-700 ease-in-out">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto">
            
            {/* Left Column: Text Content, Pagination & Button */}
            <div className="relative flex flex-col justify-center p-8 md:p-16 border-r border-border/50">
              {/* Pagination Bars */}
              <div className="absolute top-16 left-16 flex space-x-2">
                {slidesData.map((_, index) => {
                  const width = useTransform(activeIndex, val => (val === index ? '3rem' : '1.5rem'));
                  const backgroundColor = useTransform(activeIndex, val => val === index ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.2)');
                  return (
                    <motion.div
                        key={index}
                        className="h-1 rounded-full bg-primary/20"
                        style={{ width, backgroundColor }}
                        transition={{ duration: 0.5, ease: 'easeIn' }}
                    />
                  )
                })}
              </div>
              
              <div className="relative h-64 w-full overflow-hidden">
                {slidesData.map((slide, index) => (
                  <SlideContent key={index} index={index} slide={slide} activeIndex={activeIndex} />
                ))}
              </div>

              {/* Get Started Button */}
              <div className="absolute bottom-16 left-16">
                <Button asChild size="lg">
                  <Link href="#cta">Get Started</Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Image Content with Grid Background */}
            <div className="hidden md:flex items-center justify-center p-8" style={gridPatternStyle}>
              <div className="relative w-[50%] h-[80vh] rounded-2xl overflow-hidden shadow-2xl border-4 border-border/10">
                <div className="relative w-full h-full">
                  {slidesData.map((slide, index) => (
                    <SlideImage key={index} index={index} slide={slide} activeIndex={activeIndex} />
                  ))}
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
