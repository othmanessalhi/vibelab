import Hero from "@/components/sections/Hero";
import CaseStudies from "@/components/sections/CaseStudies";
import AITool from "@/components/sections/AITool";
import CTA from "@/components/sections/CTA";
import AnimateIn from "@/components/common/AnimateIn";
import WhoAreWe from "@/components/sections/WhoAreWe";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-background">
        <WhoAreWe />
        <AnimateIn>
          <Services />
        </AnimateIn>
        <AnimateIn>
          <CaseStudies />
        </AnimateIn>
        <AnimateIn>
          <Testimonials />
        </AnimateIn>
        <AnimateIn>
          <AITool />
        </AnimateIn>
        <AnimateIn>
          <CTA />
        </AnimateIn>
      </div>
    </>
  );
}
