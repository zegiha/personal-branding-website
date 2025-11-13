// Palette Color Tokens
// 기본 색상 팔레트 - 실제 색상 값

import { css } from "@linaria/core";

export const paletteCss = css`
  /* Tint Red */
  --palette-tint-red00: #f02626;
  --palette-tint-red00-translucent16: rgba(240, 38, 38, 0.16);
  --palette-tint-red10: #ff2929;
  --palette-tint-red10-translucent16: rgba(255, 41, 41, 0.16);

  /* Tint Pink */
  --palette-tint-pink00: #f54479;
  --palette-tint-pink00-translucent16: rgba(245, 68, 121, 0.16);
  --palette-tint-pink10: #ff477e;
  --palette-tint-pink10-translucent16: rgba(255, 71, 126, 0.16);

  /* Tint Blue */
  --palette-tint-blue00: #2289f0;
  --palette-tint-blue00-translucent16: rgba(34, 137, 240, 0.16);
  --palette-tint-blue10: #2491ff;
  --palette-tint-blue10-translucent16: rgba(36, 145, 255, 0.16);

  /* Tint Yellow */
  --palette-tint-yellow00: #fac400;
  --palette-tint-yellow00-translucent16: rgba(250, 196, 0, 0.16);
  --palette-tint-yellow10: #ffc800;
  --palette-tint-yellow10-translucent16: rgba(255, 200, 0, 0.16);

  /* Tint Green */
  --palette-tint-green00: #11d674;
  --palette-tint-green00-translucent16: rgba(17, 214, 116, 0.16);
  --palette-tint-green10: #12eb7f;
  --palette-tint-green10-translucent16: rgba(18, 235, 127, 0.16);

  /* Gray Scale */
  --palette-gray00: #ffffff;
  --palette-gray00-translucent0: rgba(255, 255, 255, 0);
  --palette-gray00-translucent24: rgba(255, 255, 255, 0.24);
  --palette-gray00-translucent64: rgba(255, 255, 255, 0.64);
  --palette-gray10: #f5f5f5;
  --palette-gray20: #e6e6e6;
  --palette-gray30: #a3a3a3;
  --palette-gray40: #999999;
  --palette-gray50: #474747;
  --palette-gray60: #1f1f1f;
  --palette-gray70: #1a1a1a;
  --palette-gray80: #141414;
  --palette-gray80-translucent0: rgba(20, 20, 20, 0);
  --palette-gray30-translucent8: rgba(163, 163, 163, 0.08);
  --palette-gray80-translucent24: rgba(20, 20, 20, 0.24);
  --palette-gray80-translucent64: rgba(20, 20, 20, 0.64);
  --palette-gray30-translucent16: rgba(163, 163, 163, 0.16);
  --palette-gray30-translucent24: rgba(163, 163, 163, 0.24);
`;

export const palette = {
  // Tint Red
  tintRed00: "var(--palette-tint-red00)",
  tintRed00Translucent16: "var(--palette-tint-red00-translucent16)",
  tintRed10: "var(--palette-tint-red10)",
  tintRed10Translucent16: "var(--palette-tint-red10-translucent16)",

  // Tint Pink
  tintPink00: "var(--palette-tint-pink00)",
  tintPink00Translucent16: "var(--palette-tint-pink00-translucent16)",
  tintPink10: "var(--palette-tint-pink10)",
  tintPink10Translucent16: "var(--palette-tint-pink10-translucent16)",

  // Tint Blue
  tintBlue00: "var(--palette-tint-blue00)",
  tintBlue00Translucent16: "var(--palette-tint-blue00-translucent16)",
  tintBlue10: "var(--palette-tint-blue10)",
  tintBlue10Translucent16: "var(--palette-tint-blue10-translucent16)",

  // Tint Yellow
  tintYellow00: "var(--palette-tint-yellow00)",
  tintYellow00Translucent16: "var(--palette-tint-yellow00-translucent16)",
  tintYellow10: "var(--palette-tint-yellow10)",
  tintYellow10Translucent16: "var(--palette-tint-yellow10-translucent16)",

  // Tint Green
  tintGreen00: "var(--palette-tint-green00)",
  tintGreen00Translucent16: "var(--palette-tint-green00-translucent16)",
  tintGreen10: "var(--palette-tint-green10)",
  tintGreen10Translucent16: "var(--palette-tint-green10-translucent16)",

  // Gray Scale
  gray00: "var(--palette-gray00)",
  gray00Translucent0: "var(--palette-gray00-translucent0)",
  gray00Translucent24: "var(--palette-gray00-translucent24)",
  gray00Translucent64: "var(--palette-gray00-translucent64)",
  gray10: "var(--palette-gray10)",
  gray20: "var(--palette-gray20)",
  gray30: "var(--palette-gray30)",
  gray40: "var(--palette-gray40)",
  gray50: "var(--palette-gray50)",
  gray60: "var(--palette-gray60)",
  gray70: "var(--palette-gray70)",
  gray80: "var(--palette-gray80)",
  gray80Translucent0: "var(--palette-gray80-translucent0)",
  gray30Translucent8: "var(--palette-gray30-translucent8)",
  gray80Translucent24: "var(--palette-gray80-translucent24)",
  gray80Translucent64: "var(--palette-gray80-translucent64)",
  gray30Translucent16: "var(--palette-gray30-translucent16)",
  gray30Translucent24: "var(--palette-gray30-translucent24)",
} as const;

export type PaletteType = typeof palette;
