export const themeColors = {
  background: {
    bg: 'bg-background',
  },
  surface: { bg: 'bg-surface' },
  primary: {
    bg: 'bg-primary',
    text: 'text-primary',
    border: 'border-primary',
  },
  primaryVariant: {
    bg: 'bg-primaryVariant',
    text: 'text-primaryVariant',
    border: 'border-primaryVariant',
  },
  secondary: {
    bg: 'bg-secondary',
    text: 'text-secondary',
    border: 'border-secondary',
    hover: 'hover:text-secondary',
  },
  secondaryVariant: {
    bg: 'bg-secondaryVariant',
    text: 'text-secondaryVariant',
    border: 'border-secondaryVariant',
  },
  complementary: {
    bg: 'bg-complementary',
    text: 'text-complementary',
    border: 'border-complementary',
  },
  complementaryVariant: {
    bg: 'bg-complementaryVariant',
    text: 'text-complementaryVariant',
    border: 'border-complementaryVariant',
  },
  active: {
    bg: 'bg-active',
    border: 'border-active',
    active: 'active:bg-active',
    hover: 'hover:bg-active',
  },
  disabled: {
    bg: 'disabled:bg-disabled',
    text: 'disabled:text-darkGray',
  },
  darkGray: {
    bg: 'bg-darkGray',
    text: 'text-darkGray',
    border: 'border-darkGray',
  },
  onPrimary: { text: 'text-onPrimary' },
  onSecondary: { text: 'text-onSecondary' },
  onBackground: { bg: 'bg-onBackground', text: 'text-onBackground' },
  onSurface: { bg: 'bg-onSurface', text: 'text-onSurface' },
  onError: { text: 'text-onError' },
  onHover: {
    text: 'text-onHover',
    hover: 'hover:text-onHover',
  },
  focus: {
    outline: 'focus:outline-focus',
  },
  error: {
    bg: 'bg-red-600',
    text: 'text-red-600',
    border: 'border-red-600',
    outline: 'outline-red-600',
    focus: 'focus:outline-red-600',
  },
};

export const verticalPadding =
  'py-8 sm:py-12 md:py-16 lg:py-18 xl:py-20 2xl:py-24';

export const pagePadding = `${verticalPadding}`;

export const titleStyles = `text-2.5xl font-bold ${themeColors.primaryVariant.text} sm:text-4xl lg:text-5xl`;

export const subtitleStyles = `${themeColors.onBackground.text} font-medium sm:text-xl xl:text-2xl`;
