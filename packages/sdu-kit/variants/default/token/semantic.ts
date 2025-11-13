// semantic.ts
import { css } from "@linaria/core";

export const semanticLightCss = css`
  --semantic-label-strong: var(--palette-gray60);
  --semantic-label-normal: var(--palette-gray50);
  --semantic-label-weak: var(--palette-gray40);

  --semantic-container-even: var(--palette-gray10);
  --semantic-container-odd: var(--palette-gray00);

  --semantic-fill-normal: var(--palette-gray30-translucent16);
  --semantic-fill-weak: var(--palette-gray30-translucent8);

  --semantic-line-normal: var(--palette-gray30-translucent24);

  --semantic-black-static: var(--palette-gray80);
  --semantic-black-static-translucent64: var(--palette-gray80-translucent64);
  --semantic-black-variable: var(--palette-gray80);

  --semantic-white-static: var(--palette-gray00);
  --semantic-white-variable: var(--palette-gray00);
  --semantic-white-variable-translucent24: var(--palette-gray00-translucent24);
  --semantic-white-variable-translucent0: var(--palette-gray00-translucent0);

  --semantic-interaction-hover: var(--palette-gray30-translucent16);

  --semantic-accent-gray: var(--palette-gray80);
  --semantic-accent-gray-translucent: var(--palette-gray30-translucent16);
  --semantic-accent-red: var(--palette-tint-red00);
  --semantic-accent-red-translucent: var(--palette-tint-red00-translucent16);
  --semantic-accent-pink: var(--palette-tint-pink00);
  --semantic-accent-pink-translucent: var(--palette-tint-pink00-translucent16);
  --semantic-accent-blue: var(--palette-tint-blue00);
  --semantic-accent-blue-translucent: var(--palette-tint-blue00-translucent16);
  --semantic-accent-yellow: var(--palette-tint-yellow00);
  --semantic-accent-yellow-translucent: var(--palette-tint-yellow00-translucent16);
  --semantic-accent-green: var(--palette-tint-green00);
  --semantic-accent-green-translucent: var(--palette-tint-green00-translucent16);
`;

export const semanticDarkCss = css`
  --semantic-label-strong: var(--palette-gray00);
  --semantic-label-normal: var(--palette-gray20);
  --semantic-label-weak: var(--palette-gray40);

  --semantic-container-even: var(--palette-gray70);
  --semantic-container-odd: var(--palette-gray80);

  --semantic-fill-normal: var(--palette-gray30-translucent16);
  --semantic-fill-weak: var(--palette-gray30-translucent8);

  --semantic-line-normal: var(--palette-gray30-translucent24);

  --semantic-black-static: var(--palette-gray80);
  --semantic-black-static-translucent64: var(--palette-gray80-translucent64);
  --semantic-black-variable: var(--palette-gray00);

  --semantic-white-static: var(--palette-gray00);
  --semantic-white-variable: var(--palette-gray80);
  --semantic-white-variable-translucent24: var(--palette-gray80-translucent24);
  --semantic-white-variable-translucent0: var(--palette-gray80-translucent0);

  --semantic-interaction-hover: var(--palette-gray30-translucent16);

  --semantic-accent-gray: var(--palette-gray00);
  --semantic-accent-gray-translucent: var(--palette-gray30-translucent16);
  --semantic-accent-red: var(--palette-tint-red10);
  --semantic-accent-red-translucent: var(--palette-tint-red10-translucent16);
  --semantic-accent-pink: var(--palette-tint-pink10);
  --semantic-accent-pink-translucent: var(--palette-tint-pink10-translucent16);
  --semantic-accent-blue: var(--palette-tint-blue00);
  --semantic-accent-blue-translucent: var(--palette-tint-blue10-translucent16);
  --semantic-accent-yellow: var(--palette-tint-yellow10);
  --semantic-accent-yellow-translucent: var(--palette-tint-yellow10-translucent16);
  --semantic-accent-green: var(--palette-tint-green10);
  --semantic-accent-green-translucent: var(--palette-tint-green10-translucent16);
`;

export const semantic = {
  labelStrong: "var(--semantic-label-strong)",
  labelNormal: "var(--semantic-label-normal)",
  labelWeak: "var(--semantic-label-weak)",

  containerEven: "var(--semantic-container-even)",
  containerOdd: "var(--semantic-container-odd)",

  fillNormal: "var(--semantic-fill-normal)",
  fillWeak: "var(--semantic-fill-weak)",

  lineNormal: "var(--semantic-line-normal)",

  blackStatic: "var(--semantic-black-static)",
  blackStaticTranslucent64: "var(--semantic-black-static-translucent64)",
  blackVariable: "var(--semantic-black-variable)",

  whiteStatic: "var(--semantic-white-static)",
  whiteVariable: "var(--semantic-white-variable)",
  whiteVariableTranslucent24: "var(--semantic-white-variable-translucent24)",
  whiteVariableTranslucent0: "var(--semantic-white-variable-translucent0)",

  interactionHover: "var(--semantic-interaction-hover)",

  accentGray: "var(--semantic-accent-gray)",
  accentGrayTranslucent: "var(--semantic-accent-gray-translucent)",
  accentRed: "var(--semantic-accent-red)",
  accentRedTranslucent: "var(--semantic-accent-red-translucent)",
  accentPink: "var(--semantic-accent-pink)",
  accentPinkTranslucent: "var(--semantic-accent-pink-translucent)",
  accentBlue: "var(--semantic-accent-blue)",
  accentBlueTranslucent: "var(--semantic-accent-blue-translucent)",
  accentYellow: "var(--semantic-accent-yellow)",
  accentYellowTranslucent: "var(--semantic-accent-yellow-translucent)",
  accentGreen: "var(--semantic-accent-green)",
  accentGreenTranslucent: "var(--semantic-accent-green-translucent)",
} as const;

export type SemanticType = typeof semantic;
