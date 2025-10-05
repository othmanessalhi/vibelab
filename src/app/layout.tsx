import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import Analytics from '@/components/common/Analytics';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const siteUrl = 'https://socialvibe.studio';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Social Vibe | Digital Marketing & Web Design Agency in Agadir, Morocco',
    template: '%s | Social Vibe',
  },
  description: 'Social Vibe is a creative agency in Agadir, Morocco, specializing in web design, web development, social media management, and video production. We grow brands with cutting-edge content and strategy.',
  keywords: ['Website design Morocco', 'Web development Agadir', 'Social media management Morocco', 'Video production Agadir', 'Drone videography Morocco', 'Digital marketing agency Agadir'],
  openGraph: {
    title: 'Social Vibe | Digital Marketing & Web Design Agency in Agadir',
    description: 'We grow brands in Morocco with cutting-edge content and strategy.',
    url: siteUrl,
    siteName: 'Social Vibe',
    images: [
      {
        url: '/og-image.webp', // Assuming og-image.webp is in /public
        width: 1200,
        height: 630,
        alt: 'Social Vibe Agency Banner - Agadir, Morocco',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Vibe | Digital Marketing & Web Design Agency in Agadir',
    description: 'We grow brands in Morocco with cutting-edge content and strategy.',
    images: ['/og-image.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
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
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
