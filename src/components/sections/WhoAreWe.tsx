"use client";

import { LinkPreview } from "@/components/ui/link-preview";
import { TextParticle } from "@/components/ui/text-particle";

function WhoAreWeInternal() {
  return (
    <div className="flex flex-col gap-1 rounded-sm bg-background px-8 py-4 items-center">
      <div className="h-64 w-full max-w-4xl">
        <TextParticle
          text="Who are we?"
          fontSize={100}
          particleColor="hsl(var(--primary))"
          particleSize={1}
          particleDensity={5}
          className="font-black"
        />
      </div>
      <div className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto text-center mt-8">
        We are a creative agency that loves building amazing things. Check out{" "}
        <LinkPreview
            url="https://google.com"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-accent/70 to-accent"
        >
            our portfolio
        </LinkPreview>{" "}
        to see some of our favorite projects. We get inspired by the work of others, like the folks behind{" "}
        <LinkPreview
            url="https://github.com/firebase/genkit"
            imageSrc="https://avatars.githubusercontent.com/u/1335026?s=200&v=4"
            isStatic
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-accent/70 to-accent"
        >
            Genkit
        </LinkPreview>
        .
      </div>
    </div>
  );
}


export default function WhoAreWe() {
  return (
    <section id="about" className="flex items-center justify-center bg-background py-20">
      <WhoAreWeInternal />
    </section>
  );
}
