import PageBanner from '@/components/page-banner/PageBanner';
import { RichTextComponents } from '@/components/rich-text-components/RichTextComponents';
import { getAllBlogs, getBlogBySlug } from '@/lib/groqQueries';
import { client } from '@/lib/sanity.client';
import { Blog } from '@/typings';
import { PortableText } from '@portabletext/react';
import { Metadata } from 'next';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug;

  const blog: Blog = await client.fetch(getBlogBySlug, { slug: slug });

  return {
    title: blog.title,
    description: blog.subtitle,
  };
}

export async function generateStaticParams() {
  const blogs: Blog[] = await client.fetch(getAllBlogs);

  const slugRoutes = blogs.map((blog) => blog.slug.current);

  return slugRoutes.map((slug) => ({
    slug: slug,
  }));
}

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30;

export default async function Page({ params: { slug } }: Props) {
  const blog: Blog = await client.fetch(getBlogBySlug, { slug: slug });

  const { media, subtitle, title, date, body } = blog;

  return (
    <div
      className={'container flex flex-col space-y-1 xs:space-y-2 lg:space-y-4'}
    >
      <div className='gap-x-8 space-y-4 pt-1 2xl:columns-2'>
        <PageBanner
          title={title}
          subtitle={subtitle}
          date={date}
          media={media}
          aspectRatio={16 / 10}
        />
        <PortableText value={body} components={RichTextComponents} />
      </div>
    </div>
  );
}
