'use client';

import { getViewportWidth } from '@/lib/client-helpers';
import { TestimonialsSection } from '@/typings';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { MySwiper } from '../my-swiper/MySwiper';
import SectionTitle from '../section-title.tsx/SectionTitle';
import TestimonialCard from '../testimonial-card/TestimonialCard';

type Props = {
  testimonialsSection: TestimonialsSection;
};

export default function TestimonialsSection({ testimonialsSection }: Props) {
  const [slidesToShow, setSlidesToShow] = useState<number>(1);

  const { testimonials, title, subtitle } = testimonialsSection;

  useEffect(() => {
    const mediaWidth = getViewportWidth();

    if (mediaWidth == null) {
      setSlidesToShow(1);
      return;
    }

    if (mediaWidth >= 1024) {
      if (!testimonialsSection.testimonials?.length) return setSlidesToShow(1);
      if (testimonialsSection.testimonials?.length < 2)
        return setSlidesToShow(1);
      return setSlidesToShow(2);
    }
  }, []);

  useEffect(() => {
    if (
      !testimonialsSection.testimonials ||
      testimonialsSection.testimonials.length === 0
    ) {
      setSlidesToShow(1);
      return;
    }

    const numTestimonials = testimonialsSection.testimonials.length;

    const lowerWidth = window.matchMedia('(max-width: 1024px)');
    const upperWidth = window.matchMedia('(min-width: 1024px)');

    function handleLowerResize() {
      if (lowerWidth.matches) return setSlidesToShow(1);
    }

    function handleUpperResize() {
      if (upperWidth.matches) {
        if (numTestimonials < 2) return setSlidesToShow(1);
        return setSlidesToShow(2);
      }
    }

    lowerWidth.addEventListener('change', handleLowerResize);
    upperWidth.addEventListener('change', handleUpperResize);

    return () => {
      lowerWidth.removeEventListener('change', handleLowerResize);
      upperWidth.removeEventListener('change', handleUpperResize);
    };
  }, [testimonialsSection.testimonials]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '100px' }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle title={title || 'Reviews'} subtitle={subtitle || ''} />
      <MySwiper
        slidesPerView={slidesToShow}
        arrows={testimonials ? true : false}
      >
        {testimonials ? (
          testimonials.map((testimonial, idx) => (
            <SwiperSlide className='px-10' key={idx}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))
        ) : (
          <div className='flex-col text-center'>
            <SentimentVeryDissatisfiedIcon />
            <p>Nothing here yet...</p>
          </div>
        )}
      </MySwiper>
    </motion.div>
  );
}
