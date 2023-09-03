'use client';

import { themeColors } from '@/styles/styles';
import { TitledCaption } from '@/typings';
import { motion } from 'framer-motion';

type Props = {
  captions: TitledCaption[];
};

export default function CaptionsList({ captions }: Props) {
  return (
    <div className='gap-x-8 space-y-8 pt-8 sm:space-y-16 lg:space-y-24'>
      {captions.map((caption: TitledCaption, idx) => (
        <motion.div
          initial={{ opacity: 0, x: '-100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          key={idx}
          className='flex h-auto flex-col space-y-6 overflow-auto'
        >
          <hr className={`w-24 border-2 ${themeColors.complementary.border}`} />
          <div
            className={`text-xl font-bold lg:text-3xl ${themeColors.primary.text}`}
          >
            {caption.title}
          </div>
          <div
            className={`text-sm font-medium sm:text-base lg:text-lg ${themeColors.onBackground.text}`}
          >
            {caption.caption}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
