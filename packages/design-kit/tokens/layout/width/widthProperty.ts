import type { CSSProperties } from "react";
import type { TypeWidth } from "./types";

export function widthProperty(v: TypeWidth): CSSProperties {
  if (v === undefined || v === null) return {};
  if (v === "auto") return { width: "auto" };
  if (v === "fill-flex") return { flexGrow: 1 };
  if (v === "fill-width") return { width: "100%" };
  if (v === "fit-content") return { width: "fit-content" };
  return { width: v };
}
