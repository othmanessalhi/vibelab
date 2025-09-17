"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
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
        <Image
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
}
