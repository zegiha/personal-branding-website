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
  width,
  height,
  inset,
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
      style={{
        ...(width || height ? { flexShrink: 0, flexGrow: 0 } : undefined),
        width: width,
        height: height,
      }}
    >
      <UiKitNonSolidInteractionWrapper inset={inset ?? -6} disabled={disabled}>
        <Row justifyContent={"center"} alignItems={"center"} gap={8}>
          {leadIcon && <Icon iconKey={leadIcon} color={"inherit"} size={16} />}
          <Typo.label.medium color={"inherit"}>{label}</Typo.label.medium>
          {trailIcon && <Icon iconKey={trailIcon} color={"inherit"} size={16} />}
        </Row>
      </UiKitNonSolidInteractionWrapper>
    </button>
  );
}
