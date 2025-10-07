import type { TypeWidth } from "design-kit";
import type { TypeIconKey } from "../../../foundation";
import type { TypeUiKitTagUnitColor } from "../../../shared";

export type TypeButtonProps = {
  type: "button" | "submit";
  onClick: () => void;
  size: "large" | "medium" | "small";
  color: TypeUiKitTagUnitColor;
  width?: TypeWidth;
  fontWeight?: "bold" | "medium";
  label: string;
  leadIcon?: TypeIconKey;
  trailIcon?: TypeIconKey;
  disabled?: boolean;
  className?: string;
};
