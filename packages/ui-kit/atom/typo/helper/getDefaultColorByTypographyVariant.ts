import type { TypeTypographyVariant } from "../type";

export function getDefaultColorByTypographyVariant(variant: TypeTypographyVariant) {
  if (variant === "display" || variant === "headline") return "strong";
  if (variant === "label") return "normal";
  return "weak";
}
