import { Block, Blog } from '@/typings';
import assert from 'assert';
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function camelCaseToNormalText(camelCaseString: string): string {
  // Replace all uppercase letters with a space followed by the lowercase letter
  const normalTextString = camelCaseString.replace(
    /([A-Z])/g,
    (str) => ` ${str.toLowerCase()}`
  );

  // Split the string into words, capitalize the first word, and join the words back together
  const words = normalTextString.split(' ');
  const firstWord = words.shift()?.toLowerCase();
  const capitalizedFirstWord = firstWord
    ? firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
    : '';
  const finalString = capitalizedFirstWord
    ? capitalizedFirstWord + ' ' + words.join(' ')
    : '';

  // Return the final string
  return finalString;
}
export function toPlainText(blocks: Block[] = []) {
  return (
    blocks
      // loop through each block
      .map((block) => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return '';
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map((child) => child.text).join('');
      })
      // join the paragraphs leaving split by two linebreaks
      .join('\n\n')
  );
}

export const sortBlogsByDate = (blogs: Blog[]) => {
  return blogs.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export function formatDateTime(isoDateTimeString: string) {
  const date = new Date(isoDateTimeString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}

export function formatShortDateTime(isoDateTimeString: string) {
  const date = new Date(isoDateTimeString);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pxToNumber(pxStr: string): number {
  assert(pxStr.endsWith('px'));
  pxStr = pxStr.substring(0, pxStr.length - 2);
  return parseInt(pxStr, 10);
}

export const getMaxImageDimensions = (
  viewportWidth: number,
  aspectRatio: number
): { height: number; width: number } => {
  if (viewportWidth == 0 || viewportWidth == undefined) {
    return {
      height: 1792 / aspectRatio,
      width: 1792,
    };
  }
  if (viewportWidth > 768) {
    return {
      height: 1792 / aspectRatio,
      width: 1792,
    };
  }
  if (viewportWidth > 640) {
    return {
      height: 1280 / aspectRatio,
      width: 1280,
    };
  }
  if (viewportWidth > 360) {
    return {
      height: 1024 / aspectRatio,
      width: 1024,
    };
  }
  return {
    height: 640 / aspectRatio,
    width: 640,
  };
};
