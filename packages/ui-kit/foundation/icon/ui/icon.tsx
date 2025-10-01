import { getCSSVariableByUiKitContentColor } from "../../../shared";
import type { InterfaceIcon } from "../type";

export function Icon({
  iconKey,
  size = 24,
  color = "normal",
  fill,
  disableTransition = true,
}: InterfaceIcon) {
  return (
    <div
      className={"material-symbols-rounded"}
      style={{
        flex: 0,
        width: size,
        height: size,
        fontSize: size,
        color: color !== "inherit" ? getCSSVariableByUiKitContentColor(color) : "inherit",
        fontVariationSettings: `"FILL" ${fill ? 1 : 0}`,
        ...(!disableTransition
          ? {
              transitionDuration: "var(--motion-duration-fast)",
              transitionTimingFunction: "var(--motion-timing-linear)",
            }
          : {
              transitionDuration: "inherit",
              transitionTimingFunction: "inherit",
            }),
        transitionProperty: "font-variation-settings, color",
      }}
    >
      {iconKey}
    </div>
  );
}
