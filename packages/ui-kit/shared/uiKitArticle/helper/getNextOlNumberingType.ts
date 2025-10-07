import type { TypeOlNumberingType } from "../type";

export function getNextOlNumberingType(v: TypeOlNumberingType): TypeOlNumberingType {
  switch (v) {
    case "arabic":
      return "roman";
    case "roman":
      return "alpha";
    case "alpha":
      return "arabic";
  }
}
