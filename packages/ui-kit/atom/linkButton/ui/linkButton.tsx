"use client";

import cn from "classnames";
import { getWidthClass, getWidthStyle } from "design-kit";
import Link from "next/link";
import { Icon, Row } from "../../../foundation";
import { dashToCamelCase, firstCharacterToUpperCase } from "../../../helper";
import { uiKitSolidInteractionModuleCSS, uiKitTagUnitModuleCSS } from "../../../shared";
import { getIconSize } from "../helper";
import type { TypeLinkButtonProps } from "../type";
import st from "./linkButton.module.css";
import LinkButtonLabelProviderBySize from "./linkButtonLabelProviderBySize";

export function LinkButton({
  href,
  size,
  color,
  width,
  fontWeight,
  label,
  leadIcon,
  trailIcon,
  disabled,
}: TypeLinkButtonProps) {
  const iconSize = getIconSize(size);

  const content = (
    <Row className={st.linkButtonWrapper} alignItems={"center"} gap={8} width={width}>
      {leadIcon && <Icon iconKey={leadIcon} color={"inherit"} size={iconSize} />}
      <LinkButtonLabelProviderBySize size={size} label={label} fontWeight={fontWeight} />
      {trailIcon && <Icon iconKey={trailIcon} color={"inherit"} size={iconSize} />}
    </Row>
  );

  const className = cn(
    disabled ? uiKitSolidInteractionModuleCSS.disabled : uiKitSolidInteractionModuleCSS.interaction,
    st.linkButtonDefaultStyle,
    st[`linkButton${firstCharacterToUpperCase(size)}`],
    uiKitTagUnitModuleCSS[`uiKitTagUnitColor${firstCharacterToUpperCase(dashToCamelCase(color))}`],
    getWidthClass(width),
  );

  const style = {
    ...getWidthStyle(width),
  };

  if (disabled) {
    return (
      <span className={className} style={style}>
        {content}
      </span>
    );
  }

  return (
    <Link href={href} className={className} style={style}>
      {content}
    </Link>
  );
}
