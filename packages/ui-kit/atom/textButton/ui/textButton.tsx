import cn from "classnames";
import { Icon, Row, Typo } from "../../../foundation";
import { dashToCamelCase, firstCharacterToUpperCase } from "../../../helper";
import {
  UiKitNonSolidInteractionWrapper,
  uiKitNonSolidInteractionModuleCSS,
  uiKitTagUnitModuleCSS,
} from "../../../shared";
import type { TypeTextButtonProps } from "../type";
import st from "./textBuutton.module.css";

export function TextButton({
  type,
  onClick,
  disabled = false,
  color,
  label,
  leadIcon,
  trailIcon,
}: TypeTextButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        st.textButtonDefault,
        uiKitTagUnitModuleCSS[
          `uiKitTagUnitColor${firstCharacterToUpperCase(dashToCamelCase(color))}`
        ],
        disabled
          ? uiKitNonSolidInteractionModuleCSS.disabled
          : uiKitNonSolidInteractionModuleCSS.interaction,
      )}
    >
      <UiKitNonSolidInteractionWrapper disabled={disabled}>
        <Row alignItems={"center"} gap={8}>
          {leadIcon && <Icon iconKey={leadIcon} color={"inherit"} size={16} />}
          <Typo.label.medium color={"inherit"}>{label}</Typo.label.medium>
          {trailIcon && <Icon iconKey={trailIcon} color={"inherit"} size={16} />}
        </Row>
      </UiKitNonSolidInteractionWrapper>
    </button>
  );
}
