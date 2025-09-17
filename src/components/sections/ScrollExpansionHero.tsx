'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleReset = () => {
      setScrollProgress(0);
      setShowContent(false);
      setMediaFullyExpanded(false);
    }
    window.addEventListener('resetSection', handleReset);
    
    return () => {
      window.removeEventListener('resetSection', handleReset);
    }
  }, []);

  useEffect(() => {
    let wheelListener: ((e: globalThis.WheelEvent) => void) | null = null;
    let touchStartListener: ((e: globalThis.TouchEvent) => void) | null = null;
    let touchMoveListener: ((e: globalThis.TouchEvent) => void) | null = null;
    let touchEndListener: (() => void) | null = null;
    let scrollListener: (() => void) | null = null;

    if (sectionRef.current) {
        wheelListener = (e: globalThis.WheelEvent) => {
            if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
                setMediaFullyExpanded(false);
                e.preventDefault();
            } else if (!mediaFullyExpanded) {
                e.preventDefault();
                const scrollDelta = e.deltaY * 0.0009;
                const newProgress = Math.min(
                    Math.max(scrollProgress + scrollDelta, 0),
                    1
                );
                setScrollProgress(newProgress);

                if (newProgress >= 1) {
                    setMediaFullyExpanded(true);
                    setShowContent(true);
                } else if (newProgress < 0.75) {
                    setShowContent(false);
                }
            }
        };

        touchStartListener = (e: globalThis.TouchEvent) => {
            setTouchStartY(e.touches[0].clientY);
        };

        touchMoveListener = (e: globalThis.TouchEvent) => {
            if (!touchStartY) return;

            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;

            if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
                setMediaFullyExpanded(false);
                e.preventDefault();
            } else if (!mediaFullyExpanded) {
                e.preventDefault();
                const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
                const scrollDelta = deltaY * scrollFactor;
                const newProgress = Math.min(
                    Math.max(scrollProgress + scrollDelta, 0),
                    1
                );
                setScrollProgress(newProgress);

                if (newProgress >= 1) {
                    setMediaFullyExpanded(true);
                    setShowContent(true);
                } else if (newProgress < 0.75) {
                    setShowContent(false);
                }

                setTouchStartY(touchY);
            }
        };

        touchEndListener = (): void => {
            setTouchStartY(0);
        };
        
        scrollListener = (): void => {
            if (!mediaFullyExpanded) {
                window.scrollTo(0, 0);
            }
        };

        const currentSection = sectionRef.current;
        currentSection.addEventListener('wheel', wheelListener as EventListener, { passive: false });
        currentSection.addEventListener('touchstart', touchStartListener as EventListener, { passive: false });
        currentSection.addEventListener('touchmove', touchMoveListener as EventListener, { passive: false });
        currentSection.addEventListener('touchend', touchEndListener as EventListener);
        window.addEventListener('scroll', scrollListener);
    }
    
    return () => {
        if (sectionRef.current) {
            if (wheelListener) sectionRef.current.removeEventListener('wheel', wheelListener as EventListener);
            if (touchStartListener) sectionRef.current.removeEventListener('touchstart', touchStartListener as EventListener);
            if (touchMoveListener) sectionRef.current.removeEventListener('touchmove', touchMoveListener as EventListener);
            if (touchEndListener) sectionRef.current.removeEventListener('touchend', touchEndListener as EventListener);
        }
        if (scrollListener) window.removeEventListener('scroll', scrollListener);
    };
}, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden'
    >
      <section className='relative flex flex-col items-center justify-center min-h-[100dvh]'>
        <div className='relative w-full flex flex-col items-center min-h-[calc(100dvh-5rem)]'>
          <motion.div
            className='absolute inset-0 z-0 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt='Background'
              width={1920}
              height={1080}
              className='w-screen h-screen'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              priority
            />
            <div className='absolute inset-0 bg-black/10' />
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-center relative z-10 h-full flex-grow'>
            <div className='flex flex-col items-center justify-center w-full h-full relative'>
              <div
                className='absolute z-0 left-1/2 transform -translate-x-1/2 transition-none rounded-2xl'
                style={{
                  top: '80%',
                  transform: 'translate(-50%, -50%)',
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <div className='relative w-full h-full pointer-events-none'>
                      <iframe
                        width='100%'
                        height='100%'
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc +
                              (mediaSrc.includes('?') ? '&' : '?') +
                              'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('/watch?v=', '/embed/') +
                              '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                              mediaSrc.split('v=')[1]
                        }
                        className='w-full h-full rounded-xl'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      />
                      <div
                        className='absolute inset-0 z-10'
                        style={{ pointerEvents: 'none' }}
                      ></div>

                      <motion.div
                        className='absolute inset-0 bg-black/30 rounded-xl'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  ) : (
                    <div className='relative w-full h-full pointer-events-none'>
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload='auto'
                        className='w-full h-full object-cover rounded-xl'
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div
                        className='absolute inset-0 z-10'
                        style={{ pointerEvents: 'none' }}
                      ></div>

                      <motion.div
                        className='absolute inset-0 bg-black/30 rounded-xl'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )
                ) : (
                  <div className='relative w-full h-full'>
                    <Image
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      width={1280}
                      height={720}
                      className='w-full h-full object-cover rounded-xl'
                    />

                    <motion.div
                      className='absolute inset-0 bg-black/50 rounded-xl'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                <div className='flex flex-col items-center text-center relative z-10 mt-4 transition-none'>
                  {date && (
                    <p
                      className='text-2xl text-primary/80'
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className='text-primary/80 font-medium text-center'
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`flex items-center justify-center text-center gap-4 w-full relative z-10 transition-none flex-col ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >
                <motion.h2
                  className='text-4xl md:text-5xl lg:text-6xl font-bold text-primary transition-none'
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </motion.h2>
                <motion.h2
                  className='text-4xl md:text-5xl lg:text-6xl font-bold text-center text-primary transition-none'
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  {restOfTitle}
                </motion.h2>
              </div>
            </div>

            <motion.section
              className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const MediaContentDisplay = ({ mediaType }: { mediaType: 'video' | 'image' }) => {
  const sampleMediaContent: MediaContentCollection = {
    video: {
      src: 'https://www.youtube.com/watch?v=15urCMoUmHQ',
      poster: PlaceHolderImages.find(p => p.id === 'hero-video-poster')?.imageUrl,
      background: PlaceHolderImages.find(p => p.id === 'hero-video-bg')?.imageUrl,
      title: 'VibeLab Digital',
      date: 'We Grow Brands',
      scrollToExpand: 'Scroll to Expand',
      about: {
        overview:
          'This is a demonstration of the ScrollExpandMedia component with a video. As you scroll, the video expands to fill more of the screen, creating an immersive experience. This component is perfect for showcasing video content in a modern, interactive way.',
        conclusion:
          'The ScrollExpandMedia component provides a unique way to engage users with your content through interactive scrolling. Try switching between video and image modes to see different implementations.',
      },
    },
    image: {
      src: PlaceHolderImages.find(p => p.id === 'hero-image-main')?.imageUrl,
      background: PlaceHolderImages.find(p => p.id === 'hero-image-bg')?.imageUrl,
      title: 'VibeLab Digital',
      date: 'We Grow Brands',
      scrollToExpand: 'Scroll to Expand',
      about: {
        overview:
          'This is a demonstration of the ScrollExpandMedia component with an image. The same smooth expansion effect works beautifully with static images, allowing you to create engaging visual experiences without video content.',
        conclusion:
          'The ScrollExpandMedia component works equally well with images and videos. This flexibility allows you to choose the media type that best suits your content while maintaining the same engaging user experience.',
      },
    },
  };
  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div className='max-w-4xl mx-auto'>
      <h2 className='font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight mb-6'>
        About This Component
      </h2>
      <div className='space-y-4 text-primary/70 text-lg'>
        <p>
          {currentMedia.about.overview}
        </p>
        <p>
          {currentMedia.about.conclusion}
        </p>
      </div>
    </div>
  );
};


const ScrollExpansionHero = () => {
    const [mediaType, setMediaType] = useState('video');
    const heroVideoPoster = PlaceHolderImages.find(p => p.id === 'hero-video-poster');
    const heroVideoBg = PlaceHolderImages.find(p => p.id === 'hero-video-bg');
    const heroImageMain = PlaceHolderImages.find(p => p.id === 'hero-image-main');
    const heroImageBg = PlaceHolderImages.find(p => p.id === 'hero-image-bg');

    const sampleMediaContent: MediaContentCollection = {
        video: {
            src: 'https://www.youtube.com/watch?v=15urCMoUmHQ',
            poster: heroVideoPoster?.imageUrl,
            background: heroVideoBg?.imageUrl,
            title: 'VibeLab Digital',
            date: 'We Grow Brands',
            scrollToExpand: 'Scroll to Expand',
            about: {
                overview: 'This is a demonstration of the ScrollExpandMedia component with a video. As you scroll, the video expands to fill more of the screen, creating an immersive experience. This component is perfect for showcasing video content in a modern, interactive way.',
                conclusion: 'The ScrollExpandMedia component provides a unique way to engage users with your content through interactive scrolling. Try switching between video and image modes to see different implementations.',
            },
        },
        image: {
            src: heroImageMain?.imageUrl,
            background: heroImageBg?.imageUrl,
            title: 'VibeLab Digital',
            date: 'We Grow Brands',
            scrollToExpand: 'Scroll to Expand',
            about: {
                overview: 'This is a demonstration of the ScrollExpandMedia component with an image. The same smooth expansion effect works beautifully with static images, allowing you to create engaging visual experiences without video content.',
                conclusion: 'The ScrollExpandMedia component works equally well with images and videos. This flexibility allows you to choose the media type that best suits your content while maintaining the same engaging user experience.',
            },
        },
    };

    const currentMedia = sampleMediaContent[mediaType];

    useEffect(() => {
        window.scrollTo(0, 0);

        const resetEvent = new Event('resetSection');
        window.dispatchEvent(resetEvent);
    }, [mediaType]);

    if (!currentMedia.background) return null;

    return (
        <div className='min-h-screen bg-background'>
            <div className='fixed top-24 right-4 z-50 flex gap-2'>
                <button
                    onClick={() => setMediaType('video')}
                    className={`px-4 py-2 rounded-lg ${mediaType === 'video'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-background/50 text-primary border border-primary/30'
                        }`}
                >
                    Video
                </button>

                <button
                    onClick={() => setMediaType('image')}
                    className={`px-4 py-2 rounded-lg ${mediaType === 'image'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-background/50 text-primary border border-primary/30'
                        }`}
                >
                    Image
                </button>
            </div>

            <ScrollExpandMedia
                mediaType={mediaType as 'video' | 'image'}
                mediaSrc={currentMedia.src}
                posterSrc={mediaType === 'video' ? currentMedia.poster : undefined}
                bgImageSrc={currentMedia.background}
                title={currentMedia.title}
                date={currentMedia.date}
                scrollToExpand={currentMedia.scrollToExpand}
            >
                <MediaContentDisplay mediaType={mediaType as 'video' | 'image'} />
            </ScrollExpandMedia>
        </div>
    );
};

export default ScrollExpansionHero;

    