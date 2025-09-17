import { LinkPreview } from "@/components/ui/link-preview";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center items-start h-[20rem] flex-col px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight text-center mb-10 w-full">
                About Us
            </h2>
            <div className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto text-center">
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
      </div>
    </section>
  );
}
