import BlogsSection from '@/components/blogs-section/BlogsSection';
import { HomeBanner } from '@/components/home-banner/HomeBanner';
import TestimonialsSection from '@/components/testimonials-section/TestimonialsSection';
import ShowcaseSection from '@/components/showcase-section/ShowcaseSection';
import { getHomePage } from '@/lib/groqQueries';
import { client } from '@/lib/sanity.client';
import { HomePage } from '@/typings';
import { Metadata } from 'next';
import { cache } from 'react';

// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client));

export const revalidate = 30;

export const metadata: Metadata = {
  title: ' Garnawn',
  description: 'Web · Digital · Social',
};

export default async function IndexPage() {
  const homePageData: HomePage[] = await clientFetch(getHomePage);

  const { banner, showcaseSection, blogsSection, testimonialsSection } =
    homePageData[0];

  return (
    <div
      className={`lg:space-y-18 container space-y-8 sm:space-y-12 md:space-y-16 xl:space-y-20 2xl:space-y-24`}
    >
      {banner && <HomeBanner bannerData={banner} />}
      {showcaseSection && <ShowcaseSection showcaseSection={showcaseSection} />}
      {blogsSection && <BlogsSection blogsSection={blogsSection} />}
      {testimonialsSection && (
        <TestimonialsSection testimonialsSection={testimonialsSection} />
      )}
    </div>
  );
}
