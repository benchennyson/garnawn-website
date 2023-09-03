import { getBlogBySlug } from '@/lib/groqQueries';
import { formatShortDateTime } from '@/lib/helpers';
import { client } from '@/lib/sanity.client';
import urlFor from '@/lib/urlFor';
import { Blog } from '@/typings';
import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export const alt = 'Garnawn Blog';
export const size = {
  height: 480,
  width: 768,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {
  const blog: Blog = await client.fetch(getBlogBySlug, { slug: params.slug });

  const { media, subtitle, title, date } = blog;

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          display: 'flex',
        }}
      >
        <img
          style={{
            filter: 'brightness(0.5)',
          }}
          src={urlFor(media.image).size(768, 480).url()}
          alt={media.alt}
        />
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: '1.5rem',
          }}
          className={`absolute z-10 flex w-full space-y-4 p-6`}
        >
          <h1
            style={{
              fontSize: '1.875rem',
              lineHeight: '2.25rem',
              fontWeight: 'bold',
              color: '#ffffff',
            }}
          >
            {title}
          </h1>
          <h3
            style={{
              fontSize: '1.5rem',
              lineHeight: '2rem',
              fontWeight: 600,
              color: '#ffffff',
            }}
          >
            {formatShortDateTime(date)}
          </h3>
          <h3
            style={{
              fontSize: '1.5rem',
              lineHeight: '2rem',
              fontWeight: 600,
              color: '#ffffff',
            }}
          >
            {subtitle}
          </h3>
        </div>
      </div>
    ),
    {
      width: 768,
      height: 480,
    }
  );
}
