import { RevealImageList } from "@/components/ui/reveal-images";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/20">
        <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/70">
                We offer a range of services to help your brand grow.
            </p>
        </div>
        <div className="flex items-center justify-center">
            <RevealImageList />
        </div>
    </section>
  );
}
