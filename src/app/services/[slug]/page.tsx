
import { servicesData } from '@/lib/services-data';
import ServiceDetails from '@/components/sections/ServiceDetails';
import { notFound } from 'next/navigation';

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
