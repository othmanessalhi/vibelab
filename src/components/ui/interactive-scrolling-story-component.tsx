"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

// --- Main App Component ---
export function ScrollingFeatureShowcase() {
  // State to track the currently active slide index
  const [activeIndex, setActiveIndex] = useState(0);
  // Ref to the main scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // Ref to the sticky content panel
  const stickyPanelRef = useRef<HTMLDivElement>(null);

  // --- Scroll Handler ---
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollableHeight = container.scrollHeight - window.innerHeight;
      const stepHeight = scrollableHeight / slidesData.length;
      const newActiveIndex = Math.min(
        slidesData.length - 1,
        Math.floor(container.scrollTop / stepHeight)
      );
      setActiveIndex(newActiveIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Styles for the grid pattern on the right side
  const gridPatternStyle = {
    '--grid-color': 'hsl(var(--border))',
    backgroundImage: `
      linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
      linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
    `,
    backgroundSize: '3.5rem 3.5rem',
  };

  return (
    <div 
      ref={scrollContainerRef}
      className="h-screen w-full overflow-y-auto"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div style={{ height: `${slidesData.length * 100}vh` }}>
        <div ref={stickyPanelRef} className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-background text-foreground transition-colors duration-700 ease-in-out">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full max-w-7xl mx-auto">
            
            {/* Left Column: Text Content, Pagination & Button */}
            <div className="relative flex flex-col justify-center p-8 md:p-16 border-r border-border/50">
              {/* Pagination Bars */}
              <div className="absolute top-16 left-16 flex space-x-2">
                {slidesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                        const container = scrollContainerRef.current;
                        if(container){
                            const scrollableHeight = container.scrollHeight - window.innerHeight;
                            const stepHeight = scrollableHeight / slidesData.length;
                            container.scrollTo({ top: stepHeight * index, behavior: 'smooth' });
                        }
                    }}
                    className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
                      index === activeIndex ? 'w-12 bg-primary/80' : 'w-6 bg-primary/20'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="relative h-64 w-full">
                {slidesData.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === activeIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-primary">{slide.title}</h2>
                    <p className="mt-6 text-lg md:text-xl max-w-md text-primary/80">{slide.description}</p>
                  </div>
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
                <div 
                  className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateY(-${activeIndex * 100}%)` }}
                >
                  {slidesData.map((slide, index) => (
                    <div key={index} className="w-full h-full">
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}