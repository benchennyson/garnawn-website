import PageBanner from '@/components/page-banner/PageBanner';
import ServicesSection from '@/components/services-list/ServicesList';
import { getServicesPage } from '@/lib/groqQueries';
import { client } from '@/lib/sanity.client';
import { ServicesPage } from '@/typings';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: "Auckland's top notch drainage crew",
};

export const revalidate = 30;

export default async function Page() {
  const servicesPage: ServicesPage = await client.fetch(getServicesPage, {});

  const { title, subtitle, media, showcases } = servicesPage;

  return (
    <div
      className={`container flex-col space-y-1 xs:space-y-2 lg:space-y-4 xl:flex`}
    >
      <PageBanner title={title} subtitle={subtitle} media={media} />
      {showcases ? (
        <ServicesSection showcases={showcases} />
      ) : (
        <div className='flex-col text-center'>
          <SentimentVeryDissatisfiedIcon />
          <p>Nothing here yet...</p>
        </div>
      )}
    </div>
  );
}
