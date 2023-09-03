'use client';

import { getViewportWidth } from '@/lib/client-helpers';
import { sortBlogsByDate } from '@/lib/helpers';
import { Blog } from '@/typings';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from '@mui/lab';
import { ThemeProvider, createTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import BlogCard from '../blog-card/BlogCard';

type Props = {
  blogs: Blog[];
};

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#2C86C3',
    },
    secondary: {
      main: '#68B2E4',
    },
  },
});

export default function BlogsTimeline({ blogs }: Props) {
  const [position, setPosition] = useState<
    'left' | 'right' | 'alternate' | 'alternate-reverse'
  >('right');
  const [timelineSx, setTimelineSx] = useState<{
    flex: number | undefined;
    padding: number | undefined;
  }>({
    flex: 0,
    padding: 0,
  });

  useEffect(() => {
    const mediaWidth = getViewportWidth();

    if (mediaWidth && mediaWidth >= 768) {
      setPosition('alternate');
      setTimelineSx({
        flex: undefined,
        padding: undefined,
      });
    }
  }, []);

  useEffect(() => {
    const mediaWidth = window.matchMedia('(min-width: 768px)');

    const updatePosition = () => {
      if (mediaWidth.matches) {
        setPosition('alternate');
        setTimelineSx({
          flex: undefined,
          padding: undefined,
        });
      } else {
        setPosition('right');
        setTimelineSx({
          flex: 0,
          padding: 0,
        });
      }
    };

    mediaWidth.addEventListener('change', updatePosition);

    return () => {
      mediaWidth.removeEventListener('change', updatePosition);
    };
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: timelineSx,
        }}
        position={position}
      >
        {blogs.length > 0 ? (
          sortBlogsByDate(blogs).map((blog) => (
            <TimelineItem key={blog._id}>
              <TimelineSeparator className='md:px-4'>
                <TimelineConnector />
                <TimelineDot
                  className='drop-shadow-lg'
                  color='primary'
                ></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className='py-2'>
                <motion.div
                  initial={{ opacity: 0, y: '100%' }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className='mx-auto w-64 xs:w-96 sm:w-108 md:w-64 lg:w-84'
                >
                  <div className='duration-300 ease-in-out hover:scale-105'>
                    <BlogCard blog={blog} />
                  </div>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))
        ) : (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color='primary' />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex-col text-center'>
                <SentimentVeryDissatisfiedIcon />
                <p>Nothing here yet...</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        )}
      </Timeline>
    </ThemeProvider>
  );
}
