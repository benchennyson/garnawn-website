import { getAllBlogs } from '@/lib/groqQueries';
import { client } from '@/lib/sanity.client';
import { Blog } from '@/typings';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs: Blog[] = await client.fetch(getAllBlogs);

  const blogUrls = blogs.map((blog) => {
    return {
      url: `https://garnawn.com/blogs/${blog.slug.current}`,
      lastModified: new Date(blog._updatedAt),
    };
  });

  return [
    {
      url: 'https://garnawn.com',
      lastModified: new Date(),
    },
    {
      url: 'https://garnawn.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://garnawn.com/services',
      lastModified: new Date(),
    },
    {
      url: 'https://garnawn.com/blogs',
      lastModified: new Date(),
    },
    {
      url: 'https://garnawn.com/contact',
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}
