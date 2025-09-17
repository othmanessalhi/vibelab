'use client';

import { useEffect, useState } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const MediaContent = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-primary">
        Welcome to VibeLab
      </h2>
      <p className="text-lg mb-8 text-primary/80">
        This is a demonstration of an immersive hero section. As you scroll, the
        media expands to fill the screen, creating a dynamic and engaging
        experience for the user.
      </p>
    </div>
  );
};

export default function Hero() {
  const mediaType = 'video';
  const video = {
    src: 'https://www.youtube.com/watch?v=15urCMoUmHQ',
    poster: PlaceHolderImages.find(p => p.id === 'hero-video-poster')?.imageUrl || '',
    background: PlaceHolderImages.find(p => p.id === 'hero-video-bg')?.imageUrl || '',
    title: 'VibeLab Digital',
    date: 'Creative Agency',
    scrollToExpand: 'Scroll to Explore',
  };

  useEffect(() => {
    // Ensure the page is scrolled to the top on mount
    window.scrollTo(0, 0);

    // This event is for the component to reset its internal state if needed
    const resetEvent = new Event('resetSection');
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={video.src}
        posterSrc={video.poster}
        bgImageSrc={video.background}
        title={video.title}
        date={video.date}
        scrollToExpand={video.scrollToExpand}
        textBlend={true}
      >
        <MediaContent />
      </ScrollExpandMedia>
    </div>
  );
}
