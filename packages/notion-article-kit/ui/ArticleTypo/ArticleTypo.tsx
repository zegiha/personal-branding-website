import { ComponentPropsWithoutRef } from "react";
import * as st from "./style.css";

type ArticleTypoColor = "strong" | "normal" | "weak";
type ArticleTypoFontWeight = "regular" | "medium" | "bold";

type TypoProps = {
  color?: ArticleTypoColor;
  fontWeight?: ArticleTypoFontWeight;
  children?: React.ReactNode;
  className?: string;
};

function HeadlineLarge({
  color,
  fontWeight,
  className = '',
  ...props
}: TypoProps & Omit<ComponentPropsWithoutRef<'h1'>, 'color'>) {
  const classes = [
    st.headlineLarge,
    color && st.colorVariant[color],
    fontWeight && st.fontWeightVariant[fontWeight],
    className,
  ].filter(Boolean).join(' ');

  return <h1 className={classes} {...props} />;
}

function HeadlineMedium({
  color,
  fontWeight,
  className = '',
  ...props
}: TypoProps & Omit<ComponentPropsWithoutRef<'h2'>, 'color'>) {
  const classes = [
    st.headlineMedium,
    color && st.colorVariant[color],
    fontWeight && st.fontWeightVariant[fontWeight],
    className,
  ].filter(Boolean).join(' ');

  return <h2 className={classes} {...props} />;
}

function HeadlineSmall({
  color,
  fontWeight,
  className = '',
  ...props
}: TypoProps & Omit<ComponentPropsWithoutRef<'h4'>, 'color'>) {
  const classes = [
    st.headlineSmall,
    color && st.colorVariant[color],
    fontWeight && st.fontWeightVariant[fontWeight],
    className,
  ].filter(Boolean).join(' ');

  return <h4 className={classes} {...props} />;
}

function LabelMedium({
  color,
  fontWeight,
  className = '',
  ...props
}: TypoProps & Omit<ComponentPropsWithoutRef<'p'>, 'color'>) {
  const classes = [
    st.labelMedium,
    color && st.colorVariant[color],
    fontWeight && st.fontWeightVariant[fontWeight],
    className,
  ].filter(Boolean).join(' ');

  return <p className={classes} {...props} />;
}

function CaptionMedium({
  color,
  fontWeight,
  className = '',
  ...props
}: TypoProps & Omit<ComponentPropsWithoutRef<'p'>, 'color'>) {
  const classes = [
    st.captionMedium,
    color && st.colorVariant[color],
    fontWeight && st.fontWeightVariant[fontWeight],
    className,
  ].filter(Boolean).join(' ');

  return <p className={classes} {...props} />;
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
