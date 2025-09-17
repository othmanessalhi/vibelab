import { Megaphone, Palette, Users, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RevealImageList } from '../ui/reveal-images';

const services = [
  {
    icon: <Megaphone className="h-10 w-10 text-accent" />,
    title: 'Social Media Management',
    description: 'Building and managing a strong, engaged community around your brand.'
  },
  {
    icon: <Palette className="h-10 w-10 text-accent" />,
    title: 'Content Creation',
    description: 'Crafting visually stunning and compelling content that tells your brand\'s story.'
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: 'Influencer Marketing',
    description: 'Connecting you with authentic creators to amplify your message and reach.'
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-accent" />,
    title: 'Paid Advertising',
    description: 'Data-driven ad campaigns on social platforms to target and convert your ideal customer.'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center mb-12">
            <RevealImageList />
        </div>
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary tracking-tight">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/70">
            We offer a complete suite of services to help you grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border bg-background hover:border-accent/30">
              <CardHeader>
                <div className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
