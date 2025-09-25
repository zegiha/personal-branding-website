import type { TypeWidth } from "design-kit";
import type { ComponentPropsWithoutRef } from "react";
import type { TypeUiKitContentColor } from "../../../shared/uiKitContentColor";
import type {
  TypeTypographySubVariant,
  TypeTypographyTagName,
  TypeTypographyVariant,
} from "./index";
import type { TypeTypographyFontWeight } from "./TypeTypographyFontWeight";

export type InterfaceBaseTypo<V extends TypeTypographyTagName> = {
  variant: TypeTypographyVariant;
  subVariant: TypeTypographySubVariant;
  isMarkdown?: boolean;
  width?: TypeWidth;
  color?: TypeUiKitContentColor;
  textAlign?: "start" | "center" | "end";
  textWrap?: "wrap" | "pretty";
  textOverflowLine?: number;
  fontWeight?: TypeTypographyFontWeight;
  flexShrink?: boolean;
  underline?: boolean;
} & ComponentPropsWithoutRef<V>;
