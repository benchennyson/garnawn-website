'use client';

import { getViewportWidth } from '@/lib/client-helpers';
import { sortBlogsByDate } from '@/lib/helpers';
import { themeColors } from '@/styles/styles';
import { BlogsSection } from '@/typings';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import BlogCard from '../blog-card/BlogCard';
import Button from '../button/Button';
import { MySwiper } from '../my-swiper/MySwiper';
import SectionTitle from '../section-title.tsx/SectionTitle';

type Props = {
  blogsSection: BlogsSection;
};

export default function BlogsSection({ blogsSection }: Props) {
  const [dots, setDots] = useState<boolean>(false);
  const [slidesToShow, setSlidesToShow] = useState<number>(1);

  useEffect(() => {
    const mediaWidth = getViewportWidth();

    if (mediaWidth == null) {
      setDots(false);
      setSlidesToShow(1);
      return;
    }

    if (mediaWidth >= 768 && mediaWidth <= 1280) {
      setDots(true);
      if (!blogsSection.blogs?.length) return setSlidesToShow(1);
      if (blogsSection.blogs?.length < 2) return setSlidesToShow(1);
      return setSlidesToShow(2);
    }

    if (mediaWidth >= 1280) {
      setDots(true);
      if (!blogsSection.blogs?.length) return setSlidesToShow(1);
      if (blogsSection.blogs?.length < 2) return setSlidesToShow(1);
      if (blogsSection.blogs?.length === 2) return setSlidesToShow(2);
      return setSlidesToShow(3);
    }
  }, []);

  useEffect(() => {
    if (!blogsSection.blogs || blogsSection.blogs.length === 0) {
      setSlidesToShow(1);
      return;
    }

    const numBlogs = blogsSection.blogs.length;

    const lowerWidth = window.matchMedia('(max-width: 768px)');
    const middleWidth = window.matchMedia(
      '(min-width: 768px) and (max-width: 1280px)'
    );
    const upperWidth = window.matchMedia('(min-width: 1280px)');

    function handleLowerResize() {
      if (lowerWidth.matches) {
        setDots(false);
        setSlidesToShow(1);
      }
    }

    function handleMiddleResize() {
      if (middleWidth.matches) {
        setDots(true);
        if (numBlogs < 2) return setSlidesToShow(1);
        setSlidesToShow(2);
      }
    }

    function handleUpperResize() {
      if (upperWidth.matches) {
        setDots(true);
        if (numBlogs < 2) return setSlidesToShow(1);
        if (numBlogs === 2) return setSlidesToShow(2);
        return setSlidesToShow(3);
      }
    }

    lowerWidth.addEventListener('change', handleLowerResize);
    middleWidth.addEventListener('change', handleMiddleResize);
    upperWidth.addEventListener('change', handleUpperResize);

    return () => {
      lowerWidth.removeEventListener('change', handleLowerResize);
      middleWidth.removeEventListener('change', handleMiddleResize);
      upperWidth.removeEventListener('change', handleUpperResize);
    };
  }, [blogsSection.blogs]);

  const { title, subtitle, blogs } = blogsSection;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '100px' }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle title={title} subtitle={subtitle} />
      <MySwiper slidesPerView={slidesToShow} arrows={blogs ? true : false}>
        {blogs ? (
          sortBlogsByDate(blogs).map((blog, idx) => (
            <SwiperSlide className='px-10' key={idx}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))
        ) : (
          <div className='flex-col text-center'>
            <SentimentVeryDissatisfiedIcon />
            <p>Nothing here yet...</p>
          </div>
        )}
      </MySwiper>
      <div className='mt-4 flex flex-row justify-center md:mt-8 lg:mt-14 xl:mt-20'>
        <Button
          href={'/blogs'}
          buttonText={'See more'}
          textColor={themeColors.onPrimary.text}
          customStyles={classNames(
            'hover:animate-pulse font-medium drop-shadow-lg',
            themeColors.primaryVariant.bg
          )}
        />
      </div>
    </motion.div>
  );
}
