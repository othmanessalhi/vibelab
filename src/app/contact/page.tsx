
import { ContactForm } from '@/components/sections/ContactForm';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us in Agadir',
  description: 'Get in touch with Social Vibe for a free strategy call. Let\'s discuss your project and how our team in Agadir can help you grow.',
};


export default function ContactPage() {

  return (
    <main className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-primary">
              Let’s turn your brand into a growth engine in Morocco.
            </h1>
          </div>

          <div className="bg-secondary/30 p-6 sm:p-8 rounded-2xl">
             <h2 className="text-2xl font-bold text-primary font-headline mb-6">Claim Your Free Strategy Call</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
