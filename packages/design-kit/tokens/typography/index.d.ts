interface TypographyLineHeight {
  default: string;
  markdown: string;
}

interface TypographyStyle {
  fontSize: string;
  lineHeight: TypographyLineHeight;
}

interface DisplayTokens {
  medium: TypographyStyle;
}

interface HeadlineTokens {
  large: TypographyStyle;
  medium: TypographyStyle;
  submedium: TypographyStyle;
  small: TypographyStyle;
}

interface LabelTokens {
  large: TypographyStyle;
  medium: TypographyStyle;
  small: TypographyStyle;
}

interface CaptionTokens {
  medium: TypographyStyle;
  small: TypographyStyle;
}

interface TypographyTokens {
  display: DisplayTokens;
  headline: HeadlineTokens;
  label: LabelTokens;
  caption: CaptionTokens;
}

export declare const typography: {
  default: TypographyTokens;
};
