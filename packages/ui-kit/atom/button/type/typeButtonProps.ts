import type { TypeIconKey } from "../../../foundation";
import type { TypeUiKitTagUnitColor } from "../../../shared";

export type TypeButtonProps = {
  type: "button" | "submit";
  onClick: () => void;
  size: "large" | "medium";
  color: TypeUiKitTagUnitColor;
  label: string;
  leadIcon?: TypeIconKey;
  trailIcon?: TypeIconKey;
  disabled?: boolean;
};
