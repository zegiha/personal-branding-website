import type { TypeWidth } from "design-kit";
import type { TypeIconKey } from "../../../foundation";
import type { TypeUiKitTagUnitColor } from "../../../shared";

export type TypeLinkButtonProps = {
  href: string;
  size: "large" | "medium";
  color: TypeUiKitTagUnitColor;
  width?: TypeWidth;
  fontWeight?: "bold" | "medium";
  label: string;
  leadIcon?: TypeIconKey;
  trailIcon?: TypeIconKey;
  disabled?: boolean;
};