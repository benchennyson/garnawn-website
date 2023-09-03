import React, { useRef } from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { Swiper as SwiperCore, SwiperOptions } from 'swiper/types';

import { themeColors } from '@/styles/styles';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './MySwiper.css';

type Props = {
  children?: React.ReactNode;
  arrows?: boolean;
} & SwiperOptions;

export const MySwiper = ({ children, arrows, slidesPerView }: Props) => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      pagination={{ clickable: true }}
      scrollbar={{ enabled: true, draggable: true }}
      spaceBetween={25}
      slidesPerView={slidesPerView || 1}
    >
      {children}
      {arrows && (
        <div className='navigation-buttons absolute z-10 mb-1 flex w-full flex-row justify-between'>
          <div onClick={() => swiperRef.current?.slidePrev()}>
            <ArrowCircleLeftIcon
              className={`h-9 w-9 cursor-pointer hover:brightness-75 ${themeColors.primaryVariant.text}`}
            />
          </div>
          <div onClick={() => swiperRef.current?.slideNext()}>
            <ArrowCircleRightIcon
              className={`h-9 w-9 cursor-pointer hover:brightness-75 ${themeColors.primaryVariant.text}`}
            />
          </div>
        </div>
      )}
    </Swiper>
  );
};
