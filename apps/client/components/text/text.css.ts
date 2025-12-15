import { style } from "@vanilla-extract/css";

export const textSizeByType = {
  display: {
    large: style({
      fontSize: '48px',
    }),
  },
  headline: {
    large: style({
      fontSize: '32px',
    }),
    medium: style({
      fontSize: '28px',
    }),
    small: style({
      fontSize: '20px',
    }),
  },
  label: {
    large: style({
      fontSize: '18px',
    }),
    medium: style({
      fontSize: '16px',
    }),
    small: style({
      fontSize: '14px',
    }),
  },
  caption: {
    medium: style({
      fontSize: '14px',
    }),
    small: style({
      fontSize: '12px',
    }),
  },
};

export const textLineHeightByType = {
  display: {
    large: style({
      lineHeight: '72px',
    }),
  },
  headline: {
    large: style({
      lineHeight: '48px',
    }),
    medium: style({
      lineHeight: '42px',
    }),
    small: style({
      lineHeight: '30px',
    }),
  },
  label: {
    large: style({
      lineHeight: '28px',
    }),
    medium: style({
      lineHeight: '24px',
    }),
    small: style({
      lineHeight: '22px',
    }),
  },
  caption: {
    medium: style({
      lineHeight: '22px',
    }),
    small: style({
      lineHeight: '18px',
    }),
  },
};

export const textWeight = {
  regular: style({
    fontWeight: 400,
  }),
  medium: style({
    fontWeight: 500,
  }),
  bold: style({
    fontWeight: 700,
  }),
}
