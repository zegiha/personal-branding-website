"use client";

import cn from "classnames";
import { getWidthClass, getWidthStyle } from "design-kit";
import { Icon, Row } from "../../../foundation";
import { dashToCamelCase, firstCharacterToUpperCase } from "../../../helper";
import { uiKitSolidInteractionModuleCSS, uiKitTagUnitModuleCSS } from "../../../shared";
import { getIconSize } from "../helper";
import type { TypeButtonProps } from "../type";
import st from "./button.module.css";
import ButtonLabelProviderBySize from "./buttonLabelProviderBySize";

export function Button({
  type,
  onClick,
  size,
  color,
  width,
  fontWeight,
  label,
  leadIcon,
  trailIcon,
  disabled,
}: TypeButtonProps) {
  const iconSize = getIconSize(size);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        disabled
          ? uiKitSolidInteractionModuleCSS.disabled
          : uiKitSolidInteractionModuleCSS.interaction,
        st.buttonDefaultStyle,
        st[`button${firstCharacterToUpperCase(size)}`],
        uiKitTagUnitModuleCSS[
          `uiKitTagUnitColor${firstCharacterToUpperCase(dashToCamelCase(color))}`
        ],
        getWidthClass(width),
      )}
      style={{
        ...getWidthStyle(width),
      }}
    >
      <Row className={st.buttonWrapper} alignItems={"center"} gap={8} width={width}>
        {leadIcon && <Icon iconKey={leadIcon} color={"inherit"} size={iconSize} />}
        <ButtonLabelProviderBySize size={size} label={label} fontWeight={fontWeight} />
        {trailIcon && <Icon iconKey={trailIcon} color={"inherit"} size={iconSize} />}
      </Row>
    </button>
  );
}
