import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import AITool from "@/components/sections/AITool";
import CTA from "@/components/sections/CTA";
import AnimateIn from "@/components/common/AnimateIn";
import ScrollExpansionHero from "@/components/sections/ScrollExpansionHero";

export default function Home() {
  return (
    <>
      <ScrollExpansionHero />
      <AnimateIn>
        <About />
      </AnimateIn>
      <AnimateIn>
        <Services />
      </AnimateIn>
      <AnimateIn>
        <CaseStudies />
      </AnimateIn>
      <AnimateIn>
        <AITool />
      </AnimateIn>
      <AnimateIn>
        <CTA />
      </AnimateIn>
    </>
  );
}
