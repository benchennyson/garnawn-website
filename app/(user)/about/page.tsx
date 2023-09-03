import CaptionsList from '@/components/captions-list.tsx/CaptionsList';
import PageBanner from '@/components/page-banner/PageBanner';
import { getAboutPage } from '@/lib/groqQueries';
import { client } from '@/lib/sanity.client';
import { AboutPage } from '@/typings';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: "Auckland's top notch drainage crew",
};

export const revalidate = 30;

export default async function Page() {
  const aboutPage: AboutPage = await client.fetch(getAboutPage, {});

  const { title, subtitle, media, captions } = aboutPage;

  return (
    <div
      className={
        'container flex-col space-y-1 xs:space-y-2 lg:space-y-4 xl:flex'
      }
    >
      <PageBanner title={title} subtitle={subtitle} media={media} />
      {captions ? (
        <CaptionsList captions={captions} />
      ) : (
        <div className='flex-col text-center'>
          <SentimentVeryDissatisfiedIcon />
          <p>Nothing here yet...</p>
        </div>
      )}
    </div>
  );
}
