import { style, styleVariants } from '@vanilla-extract/css';
import { articleTokens } from '../../tokens';

// Base styles for each typography variant
export const headlineLarge = style({
  fontSize: articleTokens.typography.headline.large.fontSize,
  lineHeight: articleTokens.typography.headline.large.lineHeight,
  fontWeight: articleTokens.typography.fontWeight.bold,
  color: articleTokens.typography.color.strong,
  margin: 0,
});

export const headlineMedium = style({
  fontSize: articleTokens.typography.headline.medium.fontSize,
  lineHeight: articleTokens.typography.headline.medium.lineHeight,
  fontWeight: articleTokens.typography.fontWeight.bold,
  color: articleTokens.typography.color.strong,
  margin: 0,
});

export const headlineSmall = style({
  fontSize: articleTokens.typography.headline.small.fontSize,
  lineHeight: articleTokens.typography.headline.small.lineHeight,
  fontWeight: articleTokens.typography.fontWeight.bold,
  color: articleTokens.typography.color.weak,
  margin: 0,
});

export const labelMedium = style({
  fontSize: articleTokens.typography.label.medium.fontSize,
  lineHeight: articleTokens.typography.label.medium.lineHeight,
  fontWeight: articleTokens.typography.fontWeight.medium,
  color: articleTokens.typography.color.normal,
  margin: 0,
});

export const captionMedium = style({
  fontSize: articleTokens.typography.caption.medium.fontSize,
  lineHeight: articleTokens.typography.caption.medium.lineHeight,
  fontWeight: articleTokens.typography.fontWeight.regular,
  color: articleTokens.typography.color.weak,
  margin: 0,
});

// Color variant modifiers
export const colorVariant = styleVariants({
  strong: { color: articleTokens.typography.color.strong },
  normal: { color: articleTokens.typography.color.normal },
  weak: { color: articleTokens.typography.color.weak },
});

// Font weight variant modifiers
export const fontWeightVariant = styleVariants({
  regular: { fontWeight: articleTokens.typography.fontWeight.regular },
  medium: { fontWeight: articleTokens.typography.fontWeight.medium },
  bold: { fontWeight: articleTokens.typography.fontWeight.bold },
});
