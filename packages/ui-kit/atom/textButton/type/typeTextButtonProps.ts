import type { TypeIconKey } from "../../../foundation";
import type { TypeUiKitTagUnitColorOnlyTranslucent } from "../../../shared";

export type TypeTextButtonProps = {
  type: "button" | "submit";
  onClick: () => void;
  disabled?: boolean;
  color: TypeUiKitTagUnitColorOnlyTranslucent;
  label: string;
  leadIcon?: TypeIconKey;
  trailIcon?: TypeIconKey;
  width?: number;
  height?: number;
};
