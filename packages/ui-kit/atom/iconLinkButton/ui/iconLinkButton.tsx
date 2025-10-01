import cn from "classnames";
import Link from "next/link";
import { Icon } from "../../../foundation";
import { firstCharacterToUpperCase } from "../../../helper";
import {
  UiKitNonSolidInteractionWrapper,
  uiKitNonSolidInteractionModuleCSS,
  uiKitSolidInteractionModuleCSS,
} from "../../../shared";
import type { TypeIconLinkButtonProps } from "../type";
import st from "./iconLinkButton.module.css";

export function IconLinkButton({
  href,
  color,
  size,
  iconKey,
  disabled,
  inset,
}: TypeIconLinkButtonProps) {
  const content =
    color === "fill" ? (
      <Icon iconKey={iconKey} size={24} color={"normal"} fill />
    ) : (
      <UiKitNonSolidInteractionWrapper inset={inset ?? 0} disabled={!!disabled}>
        <Icon iconKey={iconKey} size={24} color={"normal"} fill />
      </UiKitNonSolidInteractionWrapper>
    );

  const className = cn(
    st.iconLinkButtonDefault,
    color === "fill" && st.iconLinkButtonCircular,
    color === "fill" ? st.iconLinkButtonFill : st.iconLinkButtonTransparent,
    st[`iconLinkButtonSize${firstCharacterToUpperCase(size)}`],
    disabled
      ? color === "fill"
        ? uiKitSolidInteractionModuleCSS.disabled
        : uiKitNonSolidInteractionModuleCSS.disabled
      : color === "fill"
        ? uiKitSolidInteractionModuleCSS.interaction
        : uiKitNonSolidInteractionModuleCSS.interaction,
  );

  if (disabled) {
    return <span className={className}>{content}</span>;
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
