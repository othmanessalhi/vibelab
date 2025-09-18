"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Image from "next/image";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

export default function Hero() {
  const headlines = [
    "Your Brand is Invisible.",
    "Competitors Steal Your Clicks.",
    "Your Story Goes Unheard.",
    "Struggling to Keep Up?",
    "Let's Change That.",
    "The Attention You Deserve.",
    "Unlock Your True Potential.",
    "VibeLab Sees What's Next."
  ];

  const heroImage = {
    imageUrl: "https://images.unsplash.com/photo-1690767571878-36653774a77e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A person in a futuristic, metallic outfit stands against a vibrant red background, embodying an avant-garde fashion statement.",
    imageHint: "avant-garde fashion"
  };

  const titleComponent = (
    <div className="h-24">
      <GooeyText
        texts={headlines}
        morphTime={2}
        cooldownTime={0.4}
        className="font-bold"
        textClassName="text-4xl md:text-[6rem] mt-12 md:mt-1 leading-none"
      />
    </div>
  );

  return (
    <div id="home" className="flex flex-col overflow-hidden relative">
      <div
        className="absolute inset-0 z-20"
        style={{
          mixBlendMode: "screen",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      >
      </div>
      <BackgroundPaths />
      <ContainerScroll
        titleComponent={titleComponent}
      >
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            priority
          />
        )}
      </ContainerScroll>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
