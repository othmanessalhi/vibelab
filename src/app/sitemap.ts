import { MetadataRoute } from 'next';
import { servicesData } from '@/lib/services-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://socialvibe.studio';

  // Generate URLs for each service
  const serviceUrls = servicesData.map((service) => ({
    url: `${siteUrl}${service.link}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Define static pages
  const staticUrls = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  return [...staticUrls, ...serviceUrls];
}
