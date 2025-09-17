import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-section');
  
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight">
              We're Social Vibe.
            </h2>
            <div className="space-y-4 text-primary/80 text-lg">
              <p>
                Founded on the belief that great marketing is about building relationships, Social Vibe helps brands connect with their audiences in meaningful ways. We're a team of strategists, creatives, and analysts passionate about the power of social media.
              </p>
              <p>
                Our approach is simple: we blend data-driven insights with creative storytelling to build campaigns that not only capture attention but also drive business results. From startups to established enterprises, we've helped our clients navigate the ever-changing digital landscape and achieve sustainable growth.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
