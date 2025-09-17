"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Image from "next/image";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

export default function Hero() {
  const headlines = [
    "Unleash Your Vibe",
    "Create Amazing Content",
    "Grow Your Brand",
    "Engage Your Audience",
    "We See What's Next",
    "Your Audience is Waiting",
    "Stop Blending In",
    "Welcome to VibeLab",
  ];

  return (
    <div className="flex flex-col overflow-hidden relative">
      <BackgroundPaths />
      <ContainerScroll
        titleComponent={
          <div className="h-24">
            <GooeyText
              texts={headlines}
              morphTime={2}
              cooldownTime={0.4}
              className="font-bold"
              textClassName="text-4xl md:text-[6rem] mt-1 leading-none"
            />
          </div>
        }
      >
        <Image
          src="/images/herocard.jpg"
          alt="Hero image"
          data-ai-hint="fashion model"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          priority
        />
      </ContainerScroll>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
