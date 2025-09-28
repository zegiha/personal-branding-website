"use client";

import cn from "classnames";
import { Icon, Row, Typo } from "../../../foundation";
import { dashToCamelCase, firstCharacterToUpperCase } from "../../../helper";
import { uiKitSolidInteractionModuleCSS, uiKitTagUnitModuleCSS } from "../../../shared";
import type { TypeChipProps } from "../type";
import st from "./chip.module.css";

export function Chip({
  normalColor,
  activeColor,
  label,
  leadIcon,
  trailIcon,
  active,
  toggle,
  disabled,
}: TypeChipProps) {
  return (
    <button
      type={"button"}
      onClick={toggle}
      className={cn(
        st.chipDefault,
        disabled
          ? uiKitSolidInteractionModuleCSS.disabled
          : uiKitSolidInteractionModuleCSS.interaction,
        active
          ? uiKitTagUnitModuleCSS[
              `uiKitTagUnitColor${firstCharacterToUpperCase(dashToCamelCase(activeColor))}`
            ]
          : uiKitTagUnitModuleCSS[
              `uiKitTagUnitColor${firstCharacterToUpperCase(dashToCamelCase(normalColor))}`
            ],
        active && st.chipDefaultActive,
      )}
    >
      <Row className={cn(st.chipWrapper)} alignItems={"center"} gap={6}>
        {leadIcon && <Icon iconKey={leadIcon} color={"inherit"} size={16} fill={active} />}
        <Typo.label.medium color={"inherit"}>{label}</Typo.label.medium>
        {trailIcon && <Icon iconKey={trailIcon} color={"inherit"} size={16} />}
      </Row>
    </button>
  );
}
