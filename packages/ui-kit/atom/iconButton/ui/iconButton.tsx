import cn from "classnames";
import { Icon } from "../../../foundation";
import { firstCharacterToUpperCase } from "../../../helper";
import {
  UiKitNonSolidInteractionWrapper,
  uiKitNonSolidInteractionModuleCSS,
  uiKitSolidInteractionModuleCSS,
} from "../../../shared";
import type { TypeIconButtonProps } from "../type";
import st from "./iconButton.module.css";

export function IconButton({ type, color, size, iconKey, onClick, disabled, inset }: TypeIconButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        st.iconButtonDefault,
        color === "fill" && st.iconButtonCircular,
        color === "fill" ? st.iconButtonFill : st.iconButtonTransparent,
        st[`iconButtonSize${firstCharacterToUpperCase(size)}`],
        disabled
          ? color === "fill"
            ? uiKitSolidInteractionModuleCSS.disabled
            : uiKitNonSolidInteractionModuleCSS.disabled
          : color === "fill"
            ? uiKitSolidInteractionModuleCSS.interaction
            : uiKitNonSolidInteractionModuleCSS.interaction,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {color === "fill" ? (
        <Icon iconKey={iconKey} size={24} color={"normal"} fill />
      ) : (
        <UiKitNonSolidInteractionWrapper inset={inset ?? 0} disabled={disabled}>
          <Icon iconKey={iconKey} size={24} color={"normal"} fill />
        </UiKitNonSolidInteractionWrapper>
      )}
    </button>
  );
}
