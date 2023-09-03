'use client';

export const getViewportWidth = (): number | null => {
  const hasWindow = typeof window !== 'undefined';
  if (!hasWindow) {
    return null;
  }
  return window.innerWidth;
};
