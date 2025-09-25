import type { TypeIconKey } from "../../../foundation";
import type { TypeUiKitTagUnitColor } from "../../../shared";

export type TypeBadgeProps = {
  color: TypeUiKitTagUnitColor;
  label: string;
  leadIcon?: TypeIconKey;
  trailIcon?: TypeIconKey;
};
