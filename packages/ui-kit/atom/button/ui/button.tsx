"use client";

import cn from "classnames";
import { Icon, Row } from "../../../foundation";
import { dashToCamelCase, firstCharacterToUpperCase } from "../../../helper";
import { interactionModuleCSS, uiKitTagUnitModuleCSS } from "../../../shared";
import { getIconSize } from "../helper";
import type { TypeButtonProps } from "../type";
import st from "./button.module.css";
import ButtonLabelProviderBySize from "./buttonLabelProviderBySize";

export function Button({
  type,
  onClick,
  size,
  color,
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
        disabled ? interactionModuleCSS.disabled : interactionModuleCSS.interaction,
        st.buttonDefaultStyle,
        st[`button${firstCharacterToUpperCase(size)}`],
        uiKitTagUnitModuleCSS[
          `uiKitTagUnitColor${firstCharacterToUpperCase(dashToCamelCase(color))}`
        ],
      )}
    >
      <Row alignItems={"center"} gap={8}>
        {leadIcon && <Icon iconKey={leadIcon} color={"inherit"} size={iconSize} />}
        <ButtonLabelProviderBySize size={size} label={label} />
        {trailIcon && <Icon iconKey={trailIcon} color={"inherit"} size={iconSize} />}
      </Row>
    </button>
  );
}
