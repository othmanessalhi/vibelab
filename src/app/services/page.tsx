
"use client";
import { FlowingMenu } from "@/components/ui/flowing-menu";
import { servicesData } from "@/lib/services-data";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ServicesPage() {
  const { setTheme } = useTheme();

  // The new component has its own light/dark mode styling which conflicts with the theme provider.
  // We'll force the light theme on this page for consistent styling.
  useEffect(() => {
    setTheme("light");
  }, [setTheme]);
  
  const menuItems = servicesData.map(service => ({
    text: service.title,
    image: service.image,
    link: service.link,
  }));

  return (
    <div className="bg-background text-primary min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-12 px-4">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-primary/70">
          Hover over our services to see what we can do for you.
        </p>
      </div>
      <div
        className="relative shadow-xl rounded-lg overflow-hidden mx-auto"
        style={{ height: '600px', width: '100%', maxWidth: '450px' }}
      >
        <FlowingMenu items={menuItems} />
      </div>
    </div>
  );
}
