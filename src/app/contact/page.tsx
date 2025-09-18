import { ContactForm } from '@/components/sections/ContactForm';
import AnimateIn from '@/components/common/AnimateIn';

export default function ContactPage() {
  return (
    <div className="bg-background">
      <AnimateIn>
        <section id="contact" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-primary">
              Get In Touch
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/70">
              We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <div className="mt-12 max-w-xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </AnimateIn>
    </div>
  );
}
