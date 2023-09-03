'use client';

import { Banner } from '@/typings';
import Image from 'next/image';

import Button from '../button/Button';

import urlFor from '@/lib/urlFor';

import { getViewportWidth } from '@/lib/client-helpers';
import { getMaxImageDimensions } from '@/lib/helpers';
import { themeColors } from '@/styles/styles';
import { Skeleton } from '@mui/material';
import 'animate.css';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import './HomeBanner.css'; // banner.title-alt if needd for dark mode

type Props = {
  bannerData: Banner;
};

export function HomeBanner({ bannerData }: Props) {
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  }>();

  useEffect(() => {
    const mediaWidth = getViewportWidth();

    if (mediaWidth) {
      setImageDimensions(getMaxImageDimensions(mediaWidth, 16 / 10));
      return;
    }
  }, []);

  useEffect(() => {
    const mediaWidth = window.matchMedia('(max-width: 768px)');

    function handleResize() {
      if (mediaWidth.matches) {
        setImageDimensions(getMaxImageDimensions(768, 16 / 10));
      } else {
        setImageDimensions(getMaxImageDimensions(1920, 16 / 10));
      }
    }

    mediaWidth.addEventListener('change', handleResize);

    return () => mediaWidth.removeEventListener('change', handleResize);
  });

  const { media, buttonText, title } = bannerData;

  return (
    <div>
      <div className={`flex flex-col xl:flex-row xl:space-x-8`}>
        <div className='mb-4 flex flex-1 flex-col space-y-4 sm:mb-6 sm:space-y-6 lg:justify-around xl:mb-0'>
          <h1
            className={`banner-title text-center text-4xl font-semibold md:text-5xl lg:text-6xl xl:leading-tight 2xl:text-7xl desktop_large:text-center desktop_large:text-8xl`}
          >
            {title}
          </h1>
          <div className='flex justify-center'>
            <Button
              href={'/contact'}
              buttonText={buttonText}
              textColor={themeColors.onPrimary.text}
              customStyles={classNames(
                'hover:animate-pulse font-medium drop-shadow-lg',
                themeColors.primaryVariant.bg
              )}
            />
          </div>
        </div>
        {imageDimensions ? (
          <div className='relative aspect-[16/10] w-full overflow-hidden rounded-lg'>
            <Image
              src={urlFor(media.image)
                .size(
                  Math.floor(imageDimensions.width),
                  Math.floor(imageDimensions.height)
                )
                .quality(100)
                .url()}
              alt={media.alt}
              fill
              className='object-cover'
              priority
            />
          </div>
        ) : (
          <Skeleton className='aspect-[16/10] w-full transform-none' />
        )}
      </div>
    </div>
  );
}
