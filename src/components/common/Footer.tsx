import Link from 'next/link';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="text-2xl font-bold font-headline text-primary">
            Social Vibe
          </Link>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Social Vibe. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
