import type {
  TypeTypographyVariant,
  TypeTypographySubVariant,
  TypeTypographyTagName,
} from "../type";
import type { ComponentPropsWithoutRef } from "react";
import { TypeWidth } from "design-kit";
import { TypeTypographyColor } from "./TypeTypographyColor";
import { TypeTypographyFontWeight } from "./TypeTypographyFontWeight";

export type InterfaceBaseTypo<V extends TypeTypographyTagName> = {
  variant: TypeTypographyVariant;
  subVariant: TypeTypographySubVariant;
  isMarkdown?: boolean;
  width?: TypeWidth;
  color?: TypeTypographyColor;
  textAlign?: "start" | "center" | "end";
  textWrap?: "wrap" | "pretty";
  textOverflowLine?: number;
  fontWeight?: TypeTypographyFontWeight;
  flexShrink?: boolean;
  underline?: boolean;
} & ComponentPropsWithoutRef<V>;
