import { createTheme } from '@vanilla-extract/css';

export const [paletteClass, palette] = createTheme({
  gray: {
    '00': '#ffffff',
    '10': '#f5f5f5',
    '20': '#e6e6e6',
    '30': '#a3a3a3',
    '40': '#999999',
    '50': '#474747',
    '60': '#1f1f1f',
    '70': '#1a1a1a',
    '80': '#141414',
  },
  red: {
    '00': '#f02626',
    '10': '#ff2929',
  },
  pink: {
    '00': '#f54479',
    '10': '#ff477e',
  },
  blue: {
    '00': '#2289f0',
    '10': '#2491ff',
  },
  yellow: {
    '00': '#fac400',
    '10': '#ffc800',
  },
  green: {
    '00': '#11d674',
    '10': '#12eb7f',
  },
});

