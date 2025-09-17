"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { BackgroundPaths } from "@/components/ui/background-paths";

export default function Hero() {
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
        <iframe
          src="https://www.youtube.com/embed/JKPmNy5ObPM?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=JKPmNy5ObPM"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full object-cover rounded-2xl"
          title="VibeLab Hero Video"
        ></iframe>
      </ContainerScroll>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
