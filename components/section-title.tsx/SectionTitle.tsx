import { themeColors } from '@/styles/styles';
import React from 'react';

type Props = {
  title: string;
  subtitle: string;
};

function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className='flex flex-col space-y-2 pb-4 md:pb-6 lg:pb-12 xl:pb-16'>
      <h2
        className={`text-center text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl ${themeColors.primaryVariant.text}`}
      >
        {title}
      </h2>
      <p
        className={`mt-1 text-center text-sm font-medium md:text-lg lg:mt-2 lg:text-xl xl:mt-4 xl:text-2xl ${themeColors.onBackground.text}`}
      >
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;
