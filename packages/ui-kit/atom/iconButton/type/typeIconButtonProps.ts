import type { TypeIconKey } from "../../../foundation";

export type TypeIconButtonProps = {
  type: "button" | "submit";
  color: "transparent" | "fill";
  size: "medium" | "small";
  iconKey: TypeIconKey;
  onClick: () => void;
  disabled?: boolean;
};
