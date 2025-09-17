import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowUpRight } from 'lucide-react';

const caseStudiesData = [
  {
    id: 'case-study-1',
    title: 'E-commerce Growth Hack',
    category: 'Paid Advertising',
  },
  {
    id: 'case-study-2',
    title: 'Tech Startup Brand Launch',
    category: 'Content Creation',
  },
  {
    id: 'case-study-3',
    title: 'Fashion Brand Viral Campaign',
    category: 'Influencer Marketing',
  },
];

export default function CaseStudies() {
  const images = PlaceHolderImages.filter(p => caseStudiesData.map(cs => cs.id).includes(p.id));

  return (
    <section id="work" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight">Our Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/80">
            A glimpse into the success stories we've helped write.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study) => {
            const image = images.find(img => img.id === study.id);
            return (
              <Link href="#" key={study.id}>
                <Card className="group overflow-hidden rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-2xl">
                  <div className="relative">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight className="h-5 w-5 text-primary"/>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-accent font-semibold">{study.category}</p>

                    <h3 className="font-headline text-xl font-bold mt-2 text-primary">{study.title}</h3>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
