import ImageAutoSlider from '@/components/ui/image-auto-slider';

export default function CaseStudies() {
  return (
    <section id="work" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight">Our Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/70">
            A glimpse into the success stories we've helped write.
          </p>
        </div>
      </div>
      <ImageAutoSlider />
    </section>
  );
}
