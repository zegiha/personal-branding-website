import cn from "classnames";
import { getWidthClass, getWidthStyle } from "design-kit";
import { dashToCamelCase, firstCharacterToUpperCase } from "../../../helper";
import type { InterfaceFlex } from "../type";
import st from "./flex.module.css";

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
        getWidthClass(width),
        rest.className,
      )}
      style={{
        gap,
        flexWrap: wrap ? "wrap" : undefined,
        flexGrow,
        flexShrink,
        ...getWidthStyle(width),
        ...rest.style,
      }}
    />
  );
}
