import type { TypeIconKey } from "../../../foundation";
import type { TypeUiKitTagUnitColor } from "../../../shared";

export type TypeChipProps = {
  normalColor: TypeUiKitTagUnitColor;
  activeColor: TypeUiKitTagUnitColor;
  label: string;
  leadIcon?: TypeIconKey;
  trailIcon?: TypeIconKey;
  active: boolean;
  toggle: () => void;
  disabled?: boolean;
};
