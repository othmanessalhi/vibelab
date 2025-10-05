import Hero from "@/components/sections/Hero";
import CaseStudies from "@/components/sections/CaseStudies";
import CTA from "@/components/sections/CTA";
import AnimateIn from "@/components/common/AnimateIn";
import WhoAreWe from "@/components/sections/WhoAreWe";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import MovingText from "@/components/sections/MovingText";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-12 bg-background text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            Digital Marketing, Website Design & Web Development in Agadir, Morocco
          </h2>
        </div>
      </section>
      <WhoAreWe />
      <Services />
      <AnimateIn>
        <CaseStudies />
      </AnimateIn>
      <AnimateIn>
        <Testimonials />
      </AnimateIn>
      <MovingText />
      <CTA />
    </>
  );
}
