import urlFor from '@/lib/urlFor';
import { themeColors } from '@/styles/styles';
import { Testimonial } from '@/typings';
import { Avatar } from '@mui/material';
import React from 'react';

type Props = {
  testimonial: Testimonial;
};

function TestimonialCard({ testimonial }: Props) {
  const { name, title, media, text } = testimonial;

  return (
    <div
      className={`flex h-64 flex-col space-y-4 rounded-lg p-4 drop-shadow-lg sm:h-72 desktop_large:h-84 ${themeColors.secondaryVariant.bg}`}
    >
      <div className='flex space-x-4'>
        {media.image ? (
          <Avatar
            alt={media.alt}
            src={urlFor(media.image).size(80, 80).url()}
            className='h-20 w-20'
          />
        ) : (
          <Avatar />
        )}
        <div className='space-y-1'>
          <p className={`text-lg font-bold ${themeColors.primary.text}`}>
            {name}
          </p>
          <p className={`text-sm font-medium italic`}>{title}</p>
        </div>
      </div>
      <div
        className={`overflow-hidden text-sm font-medium italic ${themeColors.darkGray.text}`}
      >{`"${text}"`}</div>
    </div>
  );
}

export default TestimonialCard;
