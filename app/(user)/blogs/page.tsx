import BlogsTimeline from '@/components/blogs-timeline/BlogsTimeline';
import PageBanner from '@/components/page-banner/PageBanner';
import { getBlogsPage } from '@/lib/groqQueries';
import { client } from '@/lib/sanity.client';
import { BlogsPage } from '@/typings';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs',
  description: "Auckland's top notch drainage crew",
};

export const revalidate = 30;

export default async function Page() {
  const blogsPage: BlogsPage = await client.fetch(getBlogsPage, {});

  const { title, subtitle, media, blogs } = blogsPage;

  return (
    <div className={'container space-y-4'}>
      <PageBanner title={title} subtitle={subtitle} media={media} />
      {blogs ? (
        <BlogsTimeline blogs={blogs} />
      ) : (
        <div className='flex-col text-center'>
          <SentimentVeryDissatisfiedIcon />
          <p>Nothing here yet...</p>
        </div>
      )}
    </div>
  );
}
