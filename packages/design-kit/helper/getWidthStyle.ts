import type { CSSProperties } from "react";
import type { TypeWidth } from "../tokens/layout/width/types";

export function getWidthStyle(v: TypeWidth): CSSProperties {
  if (
    v !== "fill-width" &&
    v !== "fill-flex" &&
    v !== "auto" &&
    v !== "fit-content" &&
    v !== undefined &&
    v !== null
  )
    return {
      width: v,
    };
  else {
    return {};
  }
}
