import { buildLegacyTheme } from 'sanity';

const props = {
  'my-white': '#fff',
  'my-black': '#23252B',
  brand: '#2C86C3',
  'my-gray': '#d1d1d1',
};

export const theme = buildLegacyTheme({
  /* Base theme colours */
  '--black': props['my-black'],
  '--white': props['my-white'],

  '--gray': props['my-gray'],
  '--gray-base': props['my-gray'],

  '--component-bg': props['my-black'],
  '--component-text-color': props['my-white'],

  /* Brand colours */
  '--brand-primary': props['brand'],

  /* Default button */
  '--default-button-primary-color': props['brand'],

  /* State */
  '--state-info-color': props['brand'],

  /* Navbar */
  '--main-navigation-color': props['my-black'],
  '--main-navigation-color--inverted': props['my-white'],

  /* Focus */
  '--focus-color': props['brand'],
});
