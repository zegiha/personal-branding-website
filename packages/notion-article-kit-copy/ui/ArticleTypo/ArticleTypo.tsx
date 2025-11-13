import { ComponentPropsWithoutRef } from 'react';
import st from './ArticleTypo.module.css';

type ArticleTypoColor = 'strong' | 'normal' | 'weak';
type ArticleTypoFontWeight = 'regular' | 'medium' | 'bold';

type StyledTypoProps = {
  $color?: ArticleTypoColor;
  $fontWeight?: ArticleTypoFontWeight;
};

// Helper to build className
function buildClassName(
  baseClass: string,
  color?: ArticleTypoColor,
  fontWeight?: ArticleTypoFontWeight
): string {
  const classes = [baseClass];

  if (color) {
    const colorKey = `color${color.charAt(0).toUpperCase()}${color.slice(1)}` as keyof typeof st;
    classes.push(st[colorKey]);
  }

  if (fontWeight) {
    const weightKey = `fontWeight${fontWeight.charAt(0).toUpperCase()}${fontWeight.slice(1)}` as keyof typeof st;
    classes.push(st[weightKey]);
  }

  return classes.join(' ');
}

// Headline components
function HeadlineLarge({
  $color = 'strong',
  $fontWeight,
  children,
  className,
  ...props
}: StyledTypoProps & ComponentPropsWithoutRef<'h1'>) {
  return (
    <h1
      className={`${buildClassName(st.headlineLarge, $color, $fontWeight)} ${className || ''}`}
      {...props}
    >
      {children}
    </h1>
  );
}

function HeadlineMedium({
  $color = 'strong',
  $fontWeight,
  children,
  className,
  ...props
}: StyledTypoProps & ComponentPropsWithoutRef<'h2'>) {
  return (
    <h2
      className={`${buildClassName(st.headlineMedium, $color, $fontWeight)} ${className || ''}`}
      {...props}
    >
      {children}
    </h2>
  );
}

function HeadlineSmall({
  $color = 'weak',
  $fontWeight,
  children,
  className,
  ...props
}: StyledTypoProps & ComponentPropsWithoutRef<'h4'>) {
  return (
    <h4
      className={`${buildClassName(st.headlineSmall, $color, $fontWeight)} ${className || ''}`}
      {...props}
    >
      {children}
    </h4>
  );
}

function LabelMedium({
  $color = 'normal',
  $fontWeight,
  children,
  className,
  ...props
}: StyledTypoProps & ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      className={`${buildClassName(st.labelMedium, $color, $fontWeight)} ${className || ''}`}
      {...props}
    >
      {children}
    </p>
  );
}

function CaptionMedium({
  $color = 'weak',
  $fontWeight,
  children,
  className,
  ...props
}: StyledTypoProps & ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      className={`${buildClassName(st.captionMedium, $color, $fontWeight)} ${className || ''}`}
      {...props}
    >
      {children}
    </p>
  );
}

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
