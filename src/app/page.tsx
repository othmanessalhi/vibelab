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
      <AnimateIn>
        <WhoAreWe />
      </AnimateIn>
      <Services />
      <AnimateIn>
        <CaseStudies />
      </AnimateIn>
      <AnimateIn>
        <Testimonials />
      </AnimateIn>
      <MovingText />
      <AnimateIn>
        <CTA />
      </AnimateIn>
    </>
  );
}
