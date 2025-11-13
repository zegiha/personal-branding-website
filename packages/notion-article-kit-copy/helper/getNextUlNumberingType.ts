import type { TypeUlNumberingType } from "../type";

export function getNextUlNumberingType(v: TypeUlNumberingType): TypeUlNumberingType {
  switch (v) {
    case "black_circle":
      return "empty_circle";
    case "empty_circle":
      return "square";
    case "square":
      return "black_circle";
  }
}
