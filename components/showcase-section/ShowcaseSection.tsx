'use client';

import { themeColors } from '@/styles/styles';
import { ShowcaseSection } from '@/typings';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { motion } from 'framer-motion';
import Button from '../button/Button';
import SectionTitle from '../section-title.tsx/SectionTitle';
import ShowcaseCard from '../showcase-card/ShowcaseCard';

type Props = {
  showcaseSection: ShowcaseSection;
  customStyles?: string;
};

export default function ShowcaseSection({
  showcaseSection,
  customStyles,
}: Props) {
  const { title, subtitle, showcases } = showcaseSection;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '200px' }}
      transition={{ duration: 0.8 }}
    >
      <div className={`${customStyles}`}>
        <SectionTitle title={title} subtitle={subtitle} />
        <div className='mt-2 grid gap-6 lg:grid-cols-2 2xl:grid-cols-4'>
          {showcases ? (
            showcases.map((showcase, idx) => (
              <ShowcaseCard showcase={showcase} key={idx} index={idx} />
            ))
          ) : (
            <div className='flex-col text-center'>
              <SentimentVeryDissatisfiedIcon />
              <p>Nothing here yet...</p>
            </div>
          )}
        </div>
        <div className='mt-6 flex flex-row justify-center md:mt-8 lg:mt-14 xl:mt-20'>
          <Button
            href={'/services'}
            buttonText={'Learn more'}
            textColor={themeColors.onPrimary.text}
            customStyles={`${themeColors.primaryVariant.bg} hover:animate-pulse font-medium drop-shadow-lg`}
          />
        </div>
      </div>
    </motion.div>
  );
}
