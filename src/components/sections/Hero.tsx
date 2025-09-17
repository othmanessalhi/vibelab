"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Image from "next/image";

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
        <Image
          src="/images/herocard.jpg"
          alt="Hero image"
          data-ai-hint="fashion model"
          fill
          className="w-full h-full object-cover rounded-2xl"
          priority
        />
      </ContainerScroll>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
