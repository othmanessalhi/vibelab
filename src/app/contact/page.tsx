
import { ContactForm } from '@/components/sections/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

type ContactPageProps = {
  searchParams: {
    service?: string;
    budget?: string;
  };
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  const { service, budget } = searchParams;

  return (
    <main className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-primary">
                Get in Touch
              </h1>
              <p className="text-lg text-primary/70">
                Have a project in mind, a question about our services, or just want to say hello? We'd love to hear from you. Fill out the form or use the contact details below.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-accent" />
                <a href="mailto:hello@socialvibe.ma" className="text-primary/80 hover:text-primary transition-colors">
                  hello@socialvibe.ma
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-accent" />
                <a href="tel:+212602654219" className="text-primary/80 hover:text-primary transition-colors">
                  +212 602 654 219
                </a>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-primary">Visit Us</h3>
                  <p className="text-primary/80">Agadir, Morocco</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 p-6 sm:p-8 rounded-2xl">
             <h2 className="text-2xl font-bold text-primary font-headline mb-6">Send us a message</h2>
            <ContactForm preselectedService={service} preselectedBudget={budget} />
          </div>
        </div>
      </div>
    </main>
  );
}
