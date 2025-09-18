"use client";

import React from "react";
import {
  Users,
  BadgeDollarSign,
  Camera,
  LayoutTemplate,
  Video,
  PenSquare,
} from "lucide-react";
import { useAnimate } from "framer-motion";
import { servicesData } from "@/lib/services-data";
import Image from "next/image";

export const ClipPathLinks = () => {
  // We'll map the first 5 services to the grid
  const service1 = servicesData[0];
  const service2 = servicesData[1];
  const service3 = servicesData[2];
  const service4 = servicesData[3];
  const service5 = servicesData[4];

  const iconMap = {
    "Social Media Management": Users,
    "Paid Advertising": BadgeDollarSign,
    "Drone Videography": Camera,
    "Website Design": LayoutTemplate,
    "Video Production": Video,
  };

  return (
    <div className="divide-y border divide-border border-border rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-border">
        <LinkBox 
          Icon={iconMap[service1.title as keyof typeof iconMap] || PenSquare} 
          title={service1.title} 
          description={service1.description}
          href="/services" 
        />
        <LinkBox 
          Icon={iconMap[service2.title as keyof typeof iconMap] || PenSquare} 
          title={service2.title}
          description={service2.description}
          href="/services" 
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-border">
        <LinkBox 
          Icon={iconMap[service3.title as keyof typeof iconMap] || PenSquare} 
          title={service3.title}
          description={service3.description}
          href="/services" 
        />
        <LinkBox 
          imgSrc={service4.image} 
          title={service4.title}
          description={service4.description}
          href="/services" 
        />
        <LinkBox 
          Icon={iconMap[service5.title as keyof typeof iconMap] || PenSquare} 
          title={service5.title}
          description={service5.description}
          href="/services" 
        />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href, imgSrc, title, description }: { Icon?: React.ElementType, href: string, imgSrc?: string, title: string, description: string, className?: string }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: React.MouseEvent) => {
    const box = (e.currentTarget as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left",
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right",
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top",
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom",
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side as keyof typeof ENTRANCE_KEYFRAMES],
    });
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side as keyof typeof EXIT_KEYFRAMES],
    });
  };

  const LinkContent = () => (
    <>
      {imgSrc ? (
        <Image
          src={imgSrc}
          alt={title}
          width={400}
          height={400}
          className="max-h-24 sm:max-h-28 md:max-h-32 w-auto object-contain pointer-events-none"
        />
      ) : (
        Icon && <Icon className="text-3xl sm:text-4xl md:text-5xl pointer-events-none" />
      )}
      <h3 className="mt-4 font-headline text-lg sm:text-xl font-semibold pointer-events-none">{title}</h3>
      <p className="mt-1 text-sm text-center max-w-xs pointer-events-none">{description}</p>
    </>
  )

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-48 w-full place-content-center sm:h-56 md:h-64 text-foreground bg-background p-4 text-center"
    >
      <div className="flex flex-col items-center pointer-events-none">
        <LinkContent />
      </div>

      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-primary text-primary-foreground p-4 text-center pointer-events-none"
      >
        <div className="flex flex-col items-center">
          <LinkContent />
        </div>
      </div>
    </a>
  );
};
