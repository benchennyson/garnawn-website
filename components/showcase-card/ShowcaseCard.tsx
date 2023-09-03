import React from 'react';
import Image from 'next/image';
import { Showcase } from '@/typings';
import urlFor from '@/lib/urlFor';
import { themeColors } from '@/styles/styles';

export default function ShowcaseCard({
  showcase,
  index,
}: {
  showcase: Showcase;
  index: number;
}) {
  const { media, media_alt, title, caption, _id } = showcase;

  const isAlternate = index % 2 === 1;
  const bgColor = isAlternate
    ? themeColors.surface.bg
    : themeColors.primaryVariant.bg; // TODO: Not going to be alternate colours after using new design
  const titleColor = isAlternate
    ? themeColors.primaryVariant.text
    : themeColors.onPrimary.text;
  const captionColor = isAlternate
    ? themeColors.onBackground.text
    : themeColors.onPrimary.text;
  const showcaseMedia = index % 2 === 1 ? media : media_alt;

  return (
    <div
      key={_id}
      className={`grid h-64 grid-cols-1 grid-rows-10 rounded-lg p-4 drop-shadow-lg lg:h-80 ${bgColor}`}
    >
      <div className='relative row-span-5 mx-auto aspect-[5/4] h-full'>
        <Image
          src={urlFor(showcaseMedia.image).size(800, 640).quality(100).url()}
          alt={media.alt}
          fill
          sizes='33vw'
          className='object-contain'
        />
      </div>
      <div className='row-span-2 flex items-center justify-center py-1 xl:py-3'>
        <p
          className={`text-center text-xl font-bold leading-5.5 sm:text-1.5xl ${titleColor}`}
        >
          {title}
        </p>
      </div>
      <div
        className={`row-span-3 flex justify-center text-center text-sm leading-5.5 sm:text-base ${captionColor}`}
      >
        {caption}
      </div>
    </div>
  );
}
