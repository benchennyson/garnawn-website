import React from 'react';
import Link from 'next/link';
import { themeColors } from '@/styles/styles';
import { cn } from '@/lib/helpers';

type Props = {
  href?: string;
  buttonText: string;
  textColor?: string;
  customStyles?: string;
  buttonCallback?: () => void;
};

export default function Button({
  href,
  buttonText,
  textColor,
  customStyles,
  buttonCallback,
}: Props) {
  return (
    <div
      onClick={buttonCallback}
      className={cn(
        'flex h-10 w-36 cursor-pointer flex-col items-center justify-center rounded-lg hover:brightness-95 sm:h-12 sm:w-40 lg:h-14 lg:w-48',
        customStyles
      )}
    >
      <Link className='lg:text-lg xl:text-xl' href={href ? href : '#'}>
        <p className={textColor || themeColors.onPrimary.text}>{buttonText}</p>
      </Link>
    </div>
  );
}
