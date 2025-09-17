"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-image-fashion');

  return (
    <div className="flex flex-col overflow-hidden relative">
      <BackgroundPaths />
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-foreground">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                VibeLab
              </span>
            </h1>
          </>
        }
      >
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="w-full h-full object-cover rounded-2xl"
          />
        )}
      </ContainerScroll>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
