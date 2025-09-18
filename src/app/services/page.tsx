import { ClipPathLinks } from "@/components/ui/clip-path-links";

export default function ServicesPage() {
  return (
    <div className="bg-background text-primary min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-primary/70">
            We offer a comprehensive suite of creative and technical services designed to help you stand out. Explore our offerings below.
          </p>
        </div>
        <div className="w-full max-w-5xl mx-auto">
          <ClipPathLinks />
        </div>
      </div>
    </div>
  );
}