
"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { motion } from "framer-motion";

export default function Hero() {
  const headlines = [
    "Your Website Feels Stale.",
    "Your Content Gets Ignored.",
    "Your Competitors Pull Ahead.",
    "It's Time for a New Vibe.",
    "We Build Digital Experiences.",
    "We Create Stories That Stick.",
    "Let's Grow Your Brand."
  ];

  const heroImage = {
    imageUrl: "/images/230327_r42093web-story.webp",
    description: "Animated dashboard showcasing Social Vibe's digital marketing results and web design projects.",
    imageHint: "abstract design"
  };

  const titleComponent = (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="h-24 mt-8 mb-4 md:mt-20 md:mb-16"
      >
        <GooeyText
          texts={headlines}
          morphTime={0.8}
          cooldownTime={1}
          className="font-bold"
          textClassName="text-4xl md:text-[6rem] leading-none"
        />
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="text-base md:text-2xl font-semibold text-primary mt-4"
      >
        Website Solutions & Video Production Experts in Morocco
      </motion.h2>
    </>
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
      <div className="absolute inset-0 -z-10 h-full w-full bg-background" />
      <ContainerScroll
        titleComponent={titleComponent}
      >
        <div
          className="w-full h-full"
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
        </div>
      </ContainerScroll>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
