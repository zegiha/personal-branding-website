import { TypeTypographyColor } from "../type/TypeTypographyColor";

export function getCSSVariableByTypographyColor(v: TypeTypographyColor) {
  if (v === "strong" || v === "normal" || v === "weak") return `var(--semantic-label-${v})`;
  return `var(--semantic-${v})`;
}
