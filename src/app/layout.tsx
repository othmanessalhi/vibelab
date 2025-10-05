import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/common/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: 'Social Vibe | Digital Marketing & Web Design Agency in Agadir, Morocco',
    template: '%s | Social Vibe',
  },
  description: 'Social Vibe is a creative agency in Agadir, Morocco, specializing in web design, web development, social media management, and video production. We grow brands with cutting-edge content and strategy.',
  keywords: ['Website design Morocco', 'Web development Agadir', 'Social media management Morocco', 'Video production Agadir', 'Drone videography Morocco', 'Digital marketing agency Agadir'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
