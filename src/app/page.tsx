import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import AITool from "@/components/sections/AITool";
import CTA from "@/components/sections/CTA";
import AnimateIn from "@/components/common/AnimateIn";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-background">
        <AnimateIn>
          <About />
        </AnimateIn>
        <Services />
        <AnimateIn>
          <CaseStudies />
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
