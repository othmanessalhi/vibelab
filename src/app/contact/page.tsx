
import { ContactForm } from '@/components/sections/ContactForm';

export default function ContactPage() {
  return (
    <main className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-primary">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-primary/70">
              We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
