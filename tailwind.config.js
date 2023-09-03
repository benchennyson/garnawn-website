/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  important: true,
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#2C86C3', // brand color
      primaryVariant: '#00548D',
      secondary: '#68B2E4',
      secondaryVariant: '#DBF2FF',
      onPrimary: '#FAFAFA',
      onBackground: '#FAFAFA',
      onError: '#FAFAFA',
      onHover: '#68B2E4',
      onSurface: '#23252B', // on a light surface
      onSecondary: '#1E1E1E', // on a light surface
      active: '#EEEEEE', // active state - most likely gray
      disabled: '#CCCCCC', // disabled state - most likely gray
      darkGray: '#6b7280',
      background: '#F2F2F2', // light background color
      surface: '#FAFAFA', // slightly darker than background
      complementary: '#FFD434', // complementary to primary
      compltementaryVariant: '#E9B800',
      focus: '#2C86C3',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '3rem',
        lg: '5rem',
        xl: '7rem',
        '2xl': '10rem',
      },
    },
    extend: {
      width: {
        100: '25rem',
        108: '27rem',
        116: '29rem',
        128: '32rem',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      fontSize: {
        '1.5xl': '1.375rem',
        '2.5xl': '1.625rem',
      },
      spacing: {
        84: '21rem',
        90: '22.5rem',
        128: '32rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        red: colors.red,
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
      },
      lineHeight: {
        5.5: '1.375rem',
      },
    },
    screens: {
      xs: '480px',
      desktop_large: '1920px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
