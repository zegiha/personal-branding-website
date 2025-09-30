import cn from "classnames";
import { getWidthClass, getWidthStyle } from "design-kit";
import { createElement } from "react";
import { firstCharacterToUpperCase } from "../../../helper";
import { getCSSVariableByUiKitContentColor } from "../../../shared";
import {
  getDefaultColorByTypographyVariant,
  getDefaultFontWeightByTypographyVariant,
  getTagNameByVariant,
} from "../helper";
import type { InterfaceBaseTypo, TypeTypographyTagName } from "../type";
import st from "./baseTypo.module.css";

export function BaseTypo<V extends TypeTypographyTagName>({
  variant,
  subVariant,
  isMarkdown,
  width,
  color,
  textAlign,
  textWrap = "pretty",
  textOverflowLine,
  fontWeight,
  flexShrink,
  underline,
  children,
  ...rest
}: InterfaceBaseTypo<V>) {
  return createElement(
    getTagNameByVariant(variant, subVariant),
    {
      ...rest,
      className: cn(
        `${variant}-${subVariant}${isMarkdown ? "-markdown" : ""}`,
        `${fontWeight ? `typography-${fontWeight}` : getDefaultFontWeightByTypographyVariant(variant)}`,
        st[
          `uiKitTypographyColor${firstCharacterToUpperCase(getDefaultColorByTypographyVariant(variant))}`
        ],
        getWidthClass(width),
        textAlign && st[`uiKitTypographyTextAlign${firstCharacterToUpperCase(textAlign)}`],
        textWrap && st[`uiKitTypographyTextWrap${firstCharacterToUpperCase(textWrap)}`],
        flexShrink === false && st.uiKitTypographyDisableFlexShrink,
        underline && st.uiKitTypographyUnderline,
        rest.className,
      ),
      style: {
        ...getWidthStyle(width),
        ...(textOverflowLine
          ? {
              textOverflow: "ellipsis",
              overflow: "hidden",
              lineClamp: textOverflowLine,
              whiteSpace: "nowrap",
            }
          : {}),
        color: color
          ? color === "inherit"
            ? "inherit"
            : getCSSVariableByUiKitContentColor(color)
          : undefined,
        ...rest.style,
      },
    },
    children,
  );
}
