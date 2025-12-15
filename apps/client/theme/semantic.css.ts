import {createTheme, createThemeContract, globalStyle} from '@vanilla-extract/css';
import { palette } from './palette.css';

export const semantic = createThemeContract({
  label: {
    strong: null,
    normal: null,
    weak: null,
  },
  container: {
    even: null,
    odd: null,
  },
  fill: {
    normal: null,
    weak: null,
  },
  line: {
    normal: null,
  },
  black: {
    static: null,
    static64: null,
    variable: null,
  },
  white: {
    static: null,
    variable: null,
    variable00: null,
    variable24: null,
  },
  interaction: {
    hover: null,
    active: null,
  },
  accent: {
    gray: null,
    red: null,
    pink: null,
    blue: null,
    yellow: null,
    green: null,
  },
  accentTranslucent: {
    gray: null,
    red: null,
    pink: null,
    blue: null,
    yellow: null,
    green: null,
  },
})

export const semanticLightCss = createTheme(semantic, {
  label: {
    strong: palette.gray['60'],
    normal: palette.gray['50'],
    weak: palette.gray['40'],
  },
  container: {
    even: palette.gray['10'],
    odd: palette.gray['00'],
  },
  fill: {
    normal: `color-mix(in srgb, ${palette.gray['30']} 16%, transparent)`,
    weak: `color-mix(in srgb, ${palette.gray['30']} 8%, transparent)`,
  },
  line: {
    normal: `color-mix(in srgb, ${palette.gray['30']} 24%, transparent)`,
  },
  black: {
    static: palette.gray['80'],
    static64: `color-mix(in srgb, ${palette.gray['80']} 64%, transparent)`,
    variable: palette.gray['80'],
  },
  white: {
    static: palette.gray['00'],
    variable: palette.gray['00'],
    variable00: `color-mix(in srgb, ${palette.gray['00']} 0%, transparent)`,
    variable24: `color-mix(in srgb, ${palette.gray['00']} 24%, transparent)`,
  },
  interaction: {
    hover: `color-mix(in srgb, ${palette.gray['40']} 20%, transparent)`,
    active: `color-mix(in srgb, ${palette.gray['40']} 28%, transparent)`,
  },
  accent: {
    gray: palette.gray['80'],
    red: palette.red['00'],
    pink: palette.pink['00'],
    blue: palette.blue['00'],
    yellow: palette.yellow['00'],
    green: palette.green['00'],
  },
  accentTranslucent: {
    gray: `color-mix(in srgb, ${palette.gray['30']} 16%, transparent)`,
    red: `color-mix(in srgb, ${palette.red['00']} 16%, transparent)`,
    pink: `color-mix(in srgb, ${palette.pink['00']} 16%, transparent)`,
    blue: `color-mix(in srgb, ${palette.blue['00']} 16%, transparent)`,
    yellow: `color-mix(in srgb, ${palette.yellow['00']} 16%, transparent)`,
    green: `color-mix(in srgb, ${palette.green['00']} 16%, transparent)`,
  },
});

export const semanticDarkCss = createTheme(semantic, {
  label: {
    strong: palette.gray['00'],
    normal: palette.gray['20'],
    weak: palette.gray['40'],
  },
  container: {
    even: palette.gray['70'],
    odd: palette.gray['80'],
  },
  fill: {
    normal: `color-mix(in srgb, ${palette.gray['30']} 16%, transparent)`,
    weak: `color-mix(in srgb, ${palette.gray['30']} 8%, transparent)`,
  },
  line: {
    normal: `color-mix(in srgb, ${palette.gray['30']} 24%, transparent)`,
  },
  black: {
    static: palette.gray['80'],
    static64: `color-mix(in srgb, ${palette.gray['80']} 64%, transparent)`,
    variable: palette.gray['00'],
  },
  white: {
    static: palette.gray['00'],
    variable: palette.gray['80'],
    variable00: `color-mix(in srgb, ${palette.gray['80']} 0%, transparent)`,
    variable24: `color-mix(in srgb, ${palette.gray['80']} 24%, transparent)`,
  },
  interaction: {
    hover: `color-mix(in srgb, ${palette.gray['50']} 20%, transparent)`,
    active: `color-mix(in srgb, ${palette.gray['50']} 28%, transparent)`,
  },
  accent: {
    gray: palette.gray['00'],
    red: palette.red['10'],
    pink: palette.pink['10'],
    blue: palette.blue['10'],
    yellow: palette.yellow['10'],
    green: palette.green['10'],
  },
  accentTranslucent: {
    gray: `color-mix(in srgb, ${palette.gray['30']} 16%, transparent)`,
    red: `color-mix(in srgb, ${palette.red['10']} 16%, transparent)`,
    pink: `color-mix(in srgb, ${palette.pink['10']} 16%, transparent)`,
    blue: `color-mix(in srgb, ${palette.blue['10']} 16%, transparent)`,
    yellow: `color-mix(in srgb, ${palette.yellow['10']} 16%, transparent)`,
    green: `color-mix(in srgb, ${palette.green['10']} 16%, transparent)`,
  },
});

