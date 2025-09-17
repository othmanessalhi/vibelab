import { RevealImageList } from "@/components/ui/reveal-images"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <RevealImageList />
      </div>
    </section>
  );
}