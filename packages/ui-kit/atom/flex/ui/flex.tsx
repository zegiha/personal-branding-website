import cn from "classnames";
import { dashToCamelCase, firstCharacterToUpperCase } from "../../../helper";
import { InterfaceFlex } from "../type";
import st from "./flex.module.css";
import { widthModuleCSS } from "design-kit";

export function Flex({
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  wrap,
  flexGrow,
  flexShrink,
  width,
  ...rest
}: InterfaceFlex) {
  const isWidth = width !== undefined;
  const isWidthStatic =
    width !== "fill-flex" && width !== "fill-width" && width !== "fit-content" && width !== "auto";

  return (
    <div
      {...rest}
      className={cn(
        st.uiKitFlexDefault,
        flexDirection &&
          st[`uiKitFlexFlexDirection${firstCharacterToUpperCase(dashToCamelCase(flexDirection))}`],
        justifyContent &&
          st[
            `uiKitFlexJustifyContent${firstCharacterToUpperCase(dashToCamelCase(justifyContent))}`
          ],
        alignItems &&
          st[`uiKitFlexAlignItems${firstCharacterToUpperCase(dashToCamelCase(alignItems))}`],
        isWidth && !isWidthStatic && widthModuleCSS[dashToCamelCase(width)],
        rest.className,
      )}
      style={{
        gap,
        flexWrap: wrap ? "wrap" : undefined,
        flexGrow,
        flexShrink,
        ...(isWidth && isWidthStatic
          ? {
              width,
            }
          : {}),
        ...rest.style,
      }}
    />
  );
}
