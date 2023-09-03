import urlFor from '@/lib/urlFor';
import { themeColors } from '@/styles/styles';
import Image from 'next/image';
import Link from 'next/link';

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div>
        <Image
          className='relative rounded-lg object-contain'
          src={urlFor(value).url()}
          alt='blog post image'
          fill
        />
      </div>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      if (value.href === undefined)
        return (
          <span
            className={`underline decoration-primary ${themeColors.secondary.hover}`}
          >
            {children}
          </span>
        );
      const rel = !value.href.startsWith('/')
        ? 'noopener noreferrer'
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className={`underline decoration-primary ${themeColors.secondary.hover}`}
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className='list-disc pl-4'>{children}</ul>
    ),
    number: ({ children }: any) => <ol className='list-decimal'>{children}</ol>,
    checkmarks: ({ children }: any) => (
      <ol className='m-auto text-lg'>{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className='text-5xl font-bold'>{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h1 className='text-4xl font-bold'>{children}</h1>
    ),
    h3: ({ children }: any) => (
      <h1 className='text-3xl font-bold'>{children}</h1>
    ),
    h4: ({ children }: any) => (
      <h1 className='text-2xl font-bold'>{children}</h1>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className='text-2xl italic'>{children}</blockquote>
    ),
  },
};
