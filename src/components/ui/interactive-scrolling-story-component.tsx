"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

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

interface SlideContentProps {
  index: number;
  slide: typeof slidesData[0];
  activeIndex: number;
}

const SlideContent: React.FC<SlideContentProps> = ({ index, slide, activeIndex }) => {
  const isActive = activeIndex === index;

  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: isActive ? 0 : 100, opacity: isActive ? 1 : 0 }}
      transition={{ duration: isActive ? 0.4 : 0.2, ease: [0.4, 0, 0.2, 1], delay: isActive ? 0.1 : 0 }}
    >
      <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-primary">{slide.title}</h2>
      <p className="mt-6 text-lg md:text-xl max-w-md text-primary/80">{slide.description}</p>
      <div className="mt-8">
        <Button asChild size="lg">
            <Link href="#cta">Get Started</Link>
        </Button>
      </div>
    </motion.div>
  );
};


interface SlideImageProps {
  index: number;
  slide: typeof slidesData[0];
  activeIndex: number;
}

const SlideImage: React.FC<SlideImageProps> = ({ index, slide, activeIndex }) => {
  const isActive = activeIndex === index;

  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], delay: isActive ? 0.1 : 0 }}
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
  const [activeIndex, setActiveIndex] = React.useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newActiveIndex = Math.round(latest * (slidesData.length - 1));
    setActiveIndex(newActiveIndex);
  })

  const sectionHeight = slidesData.length * 80;

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
                  return (
                    <motion.div
                        key={index}
                        className="h-1 rounded-full"
                        animate={{
                          width: activeIndex === index ? '3rem' : '1.5rem',
                          backgroundColor: activeIndex === index ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.2)',
                        }}
                        transition={{ duration: 0.5, ease: 'easeIn' }}
                    />
                  )
                })}
              </div>
              
              <div className="relative h-[30rem] w-full overflow-hidden">
                {slidesData.map((slide, index) => (
                  <SlideContent key={index} index={index} slide={slide} activeIndex={activeIndex} />
                ))}
              </div>

            </div>

            {/* Right Column: Image Content with Grid Background */}
            <div className="hidden md:flex items-center justify-center p-8" style={gridPatternStyle}>
              <div className="relative w-[30rem] h-[30rem] rounded-2xl overflow-hidden shadow-2xl border-4 border-border/10">
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
