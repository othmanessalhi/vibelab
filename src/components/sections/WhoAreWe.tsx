"use client";

import { LinkPreview } from "@/components/ui/link-preview";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

function WhoAreWeInternal() {
  return (
    <div className="flex flex-col gap-8 rounded-sm bg-background px-8 py-4 items-center">
       <h2 className="text-3xl font-bold tracking-tight text-center md:text-5xl">
          We are a creative agency that loves building
          <PointerHighlight>
            <span className="text-accent"> amazing things</span>
          </PointerHighlight>
        </h2>
      <div className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto text-center">
        Check out{" "}
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
