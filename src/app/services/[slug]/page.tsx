
import { servicesData } from '@/lib/services-data';
import ServiceDetails from '@/components/sections/ServiceDetails';
import { notFound } from 'next/navigation';
import { type Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${service.title} Service in Agadir`,
    description: `${service.description} We offer expert ${service.title} services in Agadir, Morocco.`,
    openGraph: {
      title: `${service.title} | Social Vibe Agadir`,
      description: service.description,
      images: [
        {
          url: service.image, // Use the service-specific image for social sharing
          width: 1200,
          height: 630,
          alt: `${service.title} in Agadir`,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetails service={service} />;
}
