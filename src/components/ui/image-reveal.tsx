// component.tsx
'use client';

import { MoveUpRight, CheckCircle, XCircle } from 'lucide-react';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from './button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

// Inlined useMediaQuery hook to resolve import issue
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQueryList = window.matchMedia(query);
      const listener = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };
      setMatches(mediaQueryList.matches);
      mediaQueryList.addEventListener('change', listener);
      return () => mediaQueryList.removeEventListener('change', listener);
    }
  }, [query]);

  return matches;
};

export interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'blue-theme' | 'green-theme';
  size?: 'default' | 'compact' | 'expanded';
  asChild?: boolean;
  images: ImageData[];
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ variant = 'default', size = 'default', asChild, className, children, images, ...props }, ref) => {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    const [activeImage, setActiveImage] = useState<ImageData | null>(null);
    const [selectedService, setSelectedService] = useState<ImageData | null>(null);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [scale, setScale] = useState(0.5);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseMove = useCallback((e: MouseEvent) => {
      const { clientX, clientY } = e;
      setCursorPosition({ x: clientX, y: clientY });
    }, []);

    useEffect(() => {
      if (isDesktop) {
        window.addEventListener('mousemove', handleMouseMove);
      }
      return () => {
        if (isDesktop) {
          window.removeEventListener('mousemove', handleMouseMove);
        }
      };
    }, [handleMouseMove, isDesktop]);

    const handleImageHover = useCallback(
      (image: ImageData) => {
        if (activeImage !== image) {
          setActiveImage(image);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setOpacity(1);
            setScale(1);
          }, 50);
        } else {
          setOpacity(1);
          setScale(1);
        }
      },
      [activeImage]
    );

    const handleMouseLeave = useCallback(() => {
      setOpacity(0);
      setScale(0.5);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setActiveImage(null);
      }, 300);
    }, []);

    const handleServiceClick = (service: ImageData) => {
      setSelectedService(service);
      setIsSheetOpen(true);
    };
    
    // Dummy pricing data - can be expanded
    const pricingTiers = [
        { name: 'Basic', price: '$499/mo', features: [true, true, false, false] },
        { name: 'Pro', price: '$999/mo', features: [true, true, true, false] },
        { name: 'Enterprise', price: '$1,999/mo', features: [true, true, true, true] },
    ];
    const pricingFeatures = ['Feature One', 'Feature Two', 'Feature Three', 'Advanced Feature'];

    const variantClasses = {
      default: 'bg-transparent',
      'blue-theme': 'dark:bg-gradient-to-b from-blue-900 from-10% to-blue-950 to-100% bg-blue-100',
      'green-theme': 'dark:bg-gradient-to-b from-green-900 from-10% to-green-950 to-100% bg-green-100',
    };

    const sizeClasses = {
      default: 'p-4 text-xl sm:text-2xl md:text-5xl',
      compact: 'p-1 text-base sm:text-lg md:text-3xl',
      expanded: 'p-6 text-2xl sm:text-3xl md:text-6xl',
    };

    const h2SizeClasses = {
        default: 'text-xl sm:text-2xl md:text-5xl',
        compact: 'text-base sm:text-lg md:text-3xl',
        expanded: 'text-2xl sm:text-3xl md:text-6xl',
    };

    const commonClasses = cn(
      'relative w-full min-h-fit rounded-md',
      variantClasses[variant],
      className
    );

    if (asChild) {
      return React.isValidElement(children)
        ? React.cloneElement(children, {
            ref,
            className: cn(children.props.className, commonClasses),
            ...props,
          })
        : <div ref={ref} className={commonClasses} {...props}>{children}</div>;
    }

    return (
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <div
          ref={ref}
          className={commonClasses}
          onMouseLeave={isDesktop ? handleMouseLeave : undefined}
          {...props}
        >
          {images.map((image) => (
            <div
              key={image.id}
              className={cn(`cursor-pointer group relative sm:flex items-center justify-between border-b`, sizeClasses[size])}
              onMouseEnter={isDesktop ? () => handleImageHover(image) : undefined}
              onClick={() => handleServiceClick(image)}
            >
              <h2
                className={cn(
                  `newFont uppercase font-semibold sm:py-6 py-2 leading-[100%] relative text-primary`,
                  h2SizeClasses[size],
                  activeImage?.id === image.id && isDesktop
                    ? 'mix-blend-difference z-20'
                    : ''
                )}
              >
                {image.alt}
              </h2>
              <div
                className={cn(
                  `sm:block hidden p-4 rounded-full transition-all duration-300 ease-out`,
                  'group-hover:bg-primary group-hover:text-primary-foreground',
                  activeImage?.id === image.id && isDesktop
                    ? 'mix-blend-difference z-20 bg-white text-black'
                    : ''
                )}
              >
                <MoveUpRight className='w-8 h-8' />
              </div>
              <div
                className={`h-[2px] bg-primary absolute bottom-0 left-0 transition-all duration-300 ease-linear w-0 group-hover:w-full`}
              />
            </div>
          ))}
          {isDesktop && activeImage && (
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className={`fixed dark:bg-gray-950 bg-white object-cover pointer-events-none z-10 w-[240px] h-[320px] rounded-lg`}
              style={{
                left: `${cursorPosition.x}px`,
                top: `${cursorPosition.y}px`,
                transform: `translate(-50%, -50%) scale(${scale})`,
                opacity: opacity,
              }}
            />
          )}
        </div>
        
        {selectedService && (
            <SheetContent className="overflow-y-auto">
                <SheetHeader className="mb-8">
                <SheetTitle className="text-3xl font-headline font-bold tracking-tight">{selectedService.alt}</SheetTitle>
                <SheetDescription>
                    Detailed overview and pricing for our {selectedService.alt} service.
                </SheetDescription>
                </SheetHeader>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-headline font-semibold mb-4">Service Details</h3>
                        <p className="text-primary/70">
                            A more detailed description of the {selectedService.alt} service can go here. This section can elaborate on the process, deliverables, and the value we bring to your business through this service. It's a great place to showcase expertise and build trust.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-headline font-semibold mb-4">Pricing Plans</h3>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[150px]">Plan</TableHead>
                                    {pricingTiers.map(tier => <TableHead key={tier.name} className="text-center">{tier.name}</TableHead>)}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {pricingFeatures.map((feature, index) => (
                                    <TableRow key={feature}>
                                        <TableCell className="font-medium">{feature}</TableCell>
                                        {pricingTiers.map(tier => (
                                            <TableCell key={tier.name} className="text-center">
                                                {tier.features[index] ? 
                                                    <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                                                    <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableHead className="font-bold">Price</TableHead>
                                    {pricingTiers.map(tier => (
                                        <TableCell key={tier.name} className="text-center font-bold text-lg">
                                            {tier.price}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <Button size="lg" className="w-full">Get Started</Button>
                </div>
            </SheetContent>
        )}
      </Sheet>
    );
  }
);

Component.displayName = 'ImageReveal';

export default Component;

    