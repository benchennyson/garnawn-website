'use client';

import { getViewportWidth } from '@/lib/client-helpers';
import { formatShortDateTime, getMaxImageDimensions } from '@/lib/helpers';
import urlFor from '@/lib/urlFor';
import { subtitleStyles, themeColors, titleStyles } from '@/styles/styles';
import { Media } from '@/typings';
import { Skeleton } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  title: string;
  subtitle: string;
  date?: string;
  media: Media | null;
  aspectRatio?: number;
};

function PageBanner({
  title,
  subtitle,
  date,
  media,
  aspectRatio = 30 / 10,
}: Props) {
  const [stamp, setStamp] = useState<string>();
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  }>();

  useEffect(() => {
    if (date) {
      const formattedDate = formatShortDateTime(date);
      setStamp(formattedDate);
    }
  }, [date]);

  useEffect(() => {
    const viewportWidth = getViewportWidth();

    if (viewportWidth == null) {
      setImageDimensions(getMaxImageDimensions(1024, aspectRatio));
      return;
    }

    setImageDimensions(getMaxImageDimensions(viewportWidth, aspectRatio));
  }, []);

  useEffect(() => {
    const viewportWidth = getViewportWidth();

    const lowerWidth = window.matchMedia('(max-width: 1024px)');
    const upperWidth = window.matchMedia('(min-width: 1024px)');

    function handleLowerResize() {
      if (lowerWidth.matches) {
        if (viewportWidth == null) {
          setImageDimensions(getMaxImageDimensions(1024, aspectRatio));
          return;
        }
        setImageDimensions(getMaxImageDimensions(viewportWidth, aspectRatio));
      }
    }

    function handleUpperResize() {
      if (upperWidth.matches) {
        if (viewportWidth == null) {
          setImageDimensions(getMaxImageDimensions(1024, aspectRatio));
          return;
        }
        setImageDimensions(getMaxImageDimensions(viewportWidth, aspectRatio));
      }
    }

    lowerWidth.addEventListener('change', handleLowerResize);
    upperWidth.addEventListener('change', handleUpperResize);
  }, []);

  return (
    <div className='space-y-2 lg:space-y-4'>
      <div className={titleStyles}>{title}</div>
      <div className={subtitleStyles}>{subtitle}</div>
      {date && (
        <div
          className={`font-medium sm:text-xl xl:text-2xl ${themeColors.secondary.text}`}
        >
          {`Published: ${stamp}`}
        </div>
      )}
      {media && imageDimensions ? (
        <div className={`relative`}>
          <Image
            src={urlFor(media.image)
              .size(
                Math.floor(imageDimensions.width),
                Math.floor(imageDimensions.height)
              )
              .quality(100)
              .url()}
            alt={media.alt}
            height={imageDimensions.height}
            width={imageDimensions.width}
            className='mx-auto'
            priority
          />
        </div>
      ) : (
        <Skeleton className='mx-auto aspect-[30/10] w-[360] transform-none xs:w-[640] sm:w-[768] md:w-[1024]' />
      )}
    </div>
  );
}

export default PageBanner;
