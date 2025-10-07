import type { TypeIconKey } from "../../../foundation";

export type TypeIconLinkButtonProps = {
  href: string;
  color: "transparent" | "fill";
  size: "medium" | "small";
  iconKey: TypeIconKey;
  disabled?: boolean;
  inset?: number;
};
