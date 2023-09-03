'use client';

import urlFor from '@/lib/urlFor';
import { themeColors } from '@/styles/styles';
import { Showcase } from '@/typings';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  showcases: Showcase[];
};

function ServicesList({ showcases }: Props) {
  return (
    <div
      className={`grid gap-10 rounded-lg p-4 lg:space-y-0 2xl:auto-rows-fr 2xl:grid-cols-4`}
    >
      {showcases.map((showcase: Showcase) => (
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '300px' }}
          transition={{ duration: 0.8 }}
          key={showcase._id}
          className={`service flex flex-col justify-start space-y-1 lg:space-y-2 desktop_large:space-y-6`}
        >
          <hr
            className={`mb-2 w-24 self-center border-2 ${themeColors.complementary.border}`}
          />
          <div
            className={`text-center text-1.5xl font-bold  md:text-2xl desktop_large:text-3xl ${themeColors.primary.text}`}
          >
            {showcase.title}
          </div>
          <div className='relative h-32 lg:h-36 xl:h-40'>
            <Image
              src={urlFor(showcase.media.image).url()}
              alt={showcase.media.alt}
              fill
              className='object-contain'
            />
          </div>
          <div
            className={`lg:text-md text-sm font-medium sm:text-base ${themeColors.onBackground.text}`}
          >
            {showcase.description}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ServicesList;
