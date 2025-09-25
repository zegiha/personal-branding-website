import cn from "classnames";
import { Icon, Row, Typo } from "../../../foundation";
import { dashToCamelCase, firstCharacterToUpperCase } from "../../../helper";
import { uiKitTagUnitModuleCSS } from "../../../shared";
import type { TypeBadgeProps } from "../type";
import st from "./badge.module.css";

export function Badge({ color, label, leadIcon, trailIcon }: TypeBadgeProps) {
  return (
    <Row
      className={cn(
        st.badgeDefaultMedium,
        uiKitTagUnitModuleCSS[
          `uiKitTagUnitColor${firstCharacterToUpperCase(dashToCamelCase(color))}`
        ],
      )}
      alignItems={"center"}
      gap={4}
    >
      {leadIcon && <Icon iconKey={leadIcon} color={"inherit"} size={14} />}
      <Typo.label.small color={"inherit"}>{label}</Typo.label.small>
      {trailIcon && <Icon iconKey={trailIcon} color={"inherit"} size={14} />}
    </Row>
  );
}
