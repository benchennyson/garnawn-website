'use client';

import { formatShortDateTime } from '@/lib/helpers';
import urlFor from '@/lib/urlFor';
import { themeColors } from '@/styles/styles';
import { Blog } from '@/typings';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BlogCard({ blog }: { blog: Blog }) {
  const [stamp, setStamp] = useState<string>('');

  const { media, title, subtitle, date, slug, _id } = blog;

  useEffect(() => {
    const formattedDate = formatShortDateTime(date);
    setStamp(formattedDate);
  }, [date]);

  return (
    <Link className='mx-auto' key={_id} href={`blogs/${slug.current}`}>
      <div key={_id} className={`flex aspect-[10/8] w-full drop-shadow-lg`}>
        <div className='absolute  aspect-[10/8] h-full w-auto overflow-hidden'>
          <Image
            src={urlFor(media.image).quality(100).url()}
            sizes='(max-width: 768px) 100vw, 75vw'
            alt={media.alt}
            fill
          />
        </div>
        <div
          className={classNames(
            'z-10 w-full space-y-1 self-end bg-opacity-90 p-4',
            themeColors.surface.bg
          )}
        >
          <p
            className={classNames(
              'truncate font-bold sm:text-lg',
              themeColors.primaryVariant.text
            )}
          >
            {title}
          </p>
          <p
            className={classNames(
              'text-bold truncate text-sm font-semibold italic sm:text-base',
              themeColors.darkGray.text
            )}
          >
            {stamp}
          </p>
          <p className='text-sm font-medium sm:text-base'>{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
