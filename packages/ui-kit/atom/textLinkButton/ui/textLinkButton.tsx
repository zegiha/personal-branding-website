import cn from "classnames";
import Link from "next/link";
import { Icon, Row, Typo } from "../../../foundation";
import { dashToCamelCase, firstCharacterToUpperCase } from "../../../helper";
import {
  UiKitNonSolidInteractionWrapper,
  uiKitNonSolidInteractionModuleCSS,
  uiKitTagUnitModuleCSS,
} from "../../../shared";
import type { TypeTextLinkButtonProps } from "../type";
import st from "./textLinkButton.module.css";

export function TextLinkButton({
  href,
  disabled = false,
  color,
  label,
  leadIcon,
  trailIcon,
  width,
  height,
  inset,
}: TypeTextLinkButtonProps) {
  const content = (
    <UiKitNonSolidInteractionWrapper inset={inset ?? -6} disabled={disabled}>
      <Row justifyContent={"center"} alignItems={"center"} gap={8}>
        {leadIcon && <Icon iconKey={leadIcon} color={"inherit"} size={16} />}
        <Typo.label.medium color={"inherit"}>{label}</Typo.label.medium>
        {trailIcon && <Icon iconKey={trailIcon} color={"inherit"} size={16} />}
      </Row>
    </UiKitNonSolidInteractionWrapper>
  );

  if (disabled) {
    return (
      <span
        className={cn(
          st.textLinkButtonDefault,
          uiKitTagUnitModuleCSS[
            `uiKitTagUnitColor${firstCharacterToUpperCase(dashToCamelCase(color))}`
          ],
          uiKitNonSolidInteractionModuleCSS.disabled,
        )}
        style={{
          ...(width || height ? { flexShrink: 0, flexGrow: 0, inset: 0 } : undefined),
          width: width,
          height: height,
        }}
      >
        {content}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        st.textLinkButtonDefault,
        uiKitTagUnitModuleCSS[
          `uiKitTagUnitColor${firstCharacterToUpperCase(dashToCamelCase(color))}`
        ],
        uiKitNonSolidInteractionModuleCSS.interaction,
      )}
      style={{
        ...(width || height ? { flexShrink: 0, flexGrow: 0, inset: 0 } : undefined),
        width: width,
        height: height,
      }}
    >
      {content}
    </Link>
  );
}