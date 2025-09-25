import type { TypeUiKitContentColor } from "../type/typeUiKitContentColor";

export function getCSSVariableByUiKitContentColor(v: TypeUiKitContentColor) {
  if (v === "strong" || v === "normal" || v === "weak") return `var(--semantic-label-${v})`;
  return `var(--semantic-${v})`;
}
