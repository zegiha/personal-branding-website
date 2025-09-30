import { widthModuleCSS } from "../index";
import type { TypeWidth } from "../tokens/layout/width/types";

export function getWidthClass(v: TypeWidth) {
  switch (v) {
    case "fill-width":
      return widthModuleCSS.fillWidth;
    case "fill-flex":
      return widthModuleCSS.fillFlex;
    case "fit-content":
      return widthModuleCSS.fitContent;
    case "auto":
      return widthModuleCSS.auto;
    default:
      return "";
  }
}
