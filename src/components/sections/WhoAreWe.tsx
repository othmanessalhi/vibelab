"use client";

import { LinkPreview } from "@/components/ui/link-preview";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

function WhoAreWeInternal() {
  return (
    <div className="flex flex-col gap-8 rounded-sm bg-background px-8 py-4 items-center">
       <h2 className="text-3xl font-bold tracking-tight text-center md:text-4xl">
          We are a creative agency that loves building
          <PointerHighlight>
            <span className="text-accent"> amazing things</span>
          </PointerHighlight>
        </h2>
      <div className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto text-center">
        Dive into{" "}
        <LinkPreview
            url="/#work"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-accent/70 to-accent"
        >
            our portfolio
        </LinkPreview>{" "}
        to witness the success stories we've crafted, and explore{" "}
        <LinkPreview
            url="/#services"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-accent/70 to-accent"
        >
            our services
        </LinkPreview>
        {" "}to see how we can elevate your brand. We are driven by creativity and results, turning bold ideas into tangible success.
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
