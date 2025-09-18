import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ContactForm } from '@/components/sections/ContactForm';

export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-primary">
          Have a project in mind?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary/70">
          Let's create something amazing together. Get in touch to discuss your project.
        </p>
        <div className="mt-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg">Let's Talk</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Contact Us</DialogTitle>
                <DialogDescription>
                  We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
                </DialogDescription>
              </DialogHeader>
              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
