
"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { motion } from "framer-motion";
import { TextRotate } from "@/components/ui/text-rotate";
import Link from "next/link";

export default function Hero() {
  const headlines = [
    "Your Brand is Invisible.",
    "Competitors Steal Your Clicks.",
    "Your Story Goes Unheard.",
    "Struggling to Keep Up?",
    "Let's Change That.",
    "The Attention You Deserve.",
    "Unlock Your True Potential.",
    "Social Vibe Sees What's Next."
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
        className="h-24 mt-12"
      >
        <GooeyText
          texts={headlines}
          morphTime={2}
          cooldownTime={0.4}
          className="font-bold"
          textClassName="text-5xl md:text-[6rem] mt-12 md:mt-1 leading-none"
        />
      </motion.div>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        className="text-xl md:text-3xl font-semibold text-primary mt-12"
      >
        Morocco’s Experts in Website Solutions & Video Production for Businesses
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

