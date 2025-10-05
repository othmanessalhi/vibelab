

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import Analytics from '@/components/common/Analytics';
import { servicesData } from '@/lib/services-data';
import { Suspense } from 'react';

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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Social Vibe",
  "image": `${siteUrl}/og-image.webp`,
  "@id": siteUrl,
  "url": siteUrl,
  "telephone": "+212-602-654321", // Example phone
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Creative Lane",
    "addressLocality": "Agadir",
    "postalCode": "80000",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.427755, // Example coordinates for Agadir
    "longitude": -9.598107
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://twitter.com/yourprofile",
    "https://instagram.com/yourprofile",
    "https://linkedin.com/company/yourprofile"
  ],
  "priceRange": "$$",
  "description": "A premier digital marketing and web design agency based in Agadir, Morocco.",
  "service": servicesData.map(service => ({
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "url": `${siteUrl}${service.link}`
  }))
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
       <head>
        <meta name="google-site-verification" content="r2hBnB-SpGb4Stmn6N2j2gSKh5nOzd8gQ4p0oDSMhks" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
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
        <Suspense>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
