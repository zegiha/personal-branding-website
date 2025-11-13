import { styled } from "@linaria/react";

type ArticleTypoColor = "strong" | "normal" | "weak";
type ArticleTypoFontWeight = "regular" | "medium" | "bold";

type StyledTypoProps = {
  $color?: ArticleTypoColor;
  $fontWeight?: ArticleTypoFontWeight;
};

// Headline components
const HeadlineLarge = styled.h1<StyledTypoProps>`
  font-size: var(--article-typo-headline-large-font-size);
  line-height: var(--article-typo-headline-large-line-height);
  font-weight: var(--article-typo-font-weight-bold);
  color: ${({$color}) => $color ? `var(--article-typo-color-${$color})` : "var(--article-typo-color-strong)"};

  ${({ $fontWeight }) =>
    $fontWeight ? `font-weight: var(--article-typo-font-weight-${$fontWeight});` : ""}
`;

const HeadlineMedium = styled.h2<StyledTypoProps>`
  font-size: var(--article-typo-headline-medium-font-size);
  line-height: var(--article-typo-headline-medium-line-height);
  font-weight: var(--article-typo-font-weight-bold);
  color: ${({$color}) => $color ? `var(--article-typo-color-${$color})` : "var(--article-typo-color-strong)"};

  ${({ $fontWeight }) =>
    $fontWeight ? `font-weight: var(--article-typo-font-weight-${$fontWeight});` : ""}
`;

const HeadlineSmall = styled.h4<StyledTypoProps>`
  font-size: var(--article-typo-headline-small-font-size);
  line-height: var(--article-typo-headline-small-line-height);
  font-weight: var(--article-typo-font-weight-bold);
  color: ${({$color}) => $color ? `var(--article-typo-color-${$color})` : "var(--article-typo-color-weak)"};

  ${({ $fontWeight }) =>
    $fontWeight ? `font-weight: var(--article-typo-font-weight-${$fontWeight});` : ""}
`;

const LabelMedium = styled.p<StyledTypoProps>`
  font-size: var(--article-typo-label-medium-font-size);
  line-height: var(--article-typo-label-medium-line-height);
  font-weight: var(--article-typo-font-weight-medium);
  color: ${({$color}) => $color ? `var(--article-typo-color-${$color})` : "var(--article-typo-color-normal)"};

  ${({ $fontWeight }) =>
    $fontWeight ? `font-weight: var(--article-typo-font-weight-${$fontWeight});` : ""}
`;

// Caption components
const CaptionMedium = styled.p<StyledTypoProps>`
  font-size: var(--article-typo-caption-medium-font-size);
  line-height: var(--article-typo-caption-medium-line-height);
  font-weight: var(--article-typo-font-weight-regular);
  color: ${({$color}) => $color ? `var(--article-typo-color-${$color})` : "var(--article-typo-color-weak)"};

  ${({ $fontWeight }) =>
    $fontWeight ? `font-weight: var(--article-typo-font-weight-${$fontWeight});` : ""}
`;

export const ArticleTypo = {
  headline: {
    large: HeadlineLarge,
    medium: HeadlineMedium,
    small: HeadlineSmall,
  },
  label: {
    medium: LabelMedium,
  },
  caption: {
    medium: CaptionMedium,
  },
};
