"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { servicesData } from '@/lib/services-data';

const contentParentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const contentChildVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
};

interface SlideContentProps {
  index: number;
  slide: typeof servicesData[0];
  activeIndex: number;
}

const SlideContent: React.FC<SlideContentProps> = ({ index, slide, activeIndex }) => {
  const isActive = activeIndex === index;

  return (
    <motion.div
      className={`absolute inset-0 flex flex-col justify-center ${!isActive ? 'pointer-events-none' : ''}`}
      variants={contentParentVariants}
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
    >
      <div className="overflow-hidden">
        <motion.h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-primary" variants={contentChildVariants}>
            {slide.title}
        </motion.h2>
      </div>
      <div className="overflow-hidden mt-6">
        <motion.p className="text-lg md:text-xl max-w-md text-primary/80" variants={contentChildVariants}>
            {slide.description}
        </motion.p>
      </div>
      <div className="overflow-hidden mt-8">
        <motion.div variants={contentChildVariants}>
            <Button asChild size="lg">
                <Link href="/services">Learn More</Link>
            </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};


interface SlideImageProps {
  index: number;
  slide: typeof servicesData[0];
  activeIndex: number;
}

const SlideImage: React.FC<SlideImageProps> = ({ index, slide, activeIndex }) => {
  const isActive = activeIndex === index;

  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
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
    const newActiveIndex = Math.round(latest * (servicesData.length - 1));
    setActiveIndex(newActiveIndex);
  })

  const sectionHeight = servicesData.length * 80;

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
                {servicesData.map((_, index) => {
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
                {servicesData.map((slide, index) => (
                  <SlideContent key={index} index={index} slide={slide} activeIndex={activeIndex} />
                ))}
              </div>

            </div>

            {/* Right Column: Image Content with Grid Background */}
            <div className="hidden md:flex items-center justify-center p-8" style={gridPatternStyle}>
              <div className="relative w-[30rem] h-[30rem] rounded-2xl overflow-hidden shadow-2xl border-4 border-border/10">
                <div className="relative w-full h-full">
                  {servicesData.map((slide, index) => (
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
