import type { TypeOlNumberingType } from "../type";
import { toAlpha } from "./toAlpha";
import { toRoman } from "./toRoman";

export function getOlNumbering(n: number, t: TypeOlNumberingType): string {
  switch (t) {
    case "arabic":
      return `${n.toString()}.`;

    case "roman":
      return `${toRoman(n)}.`;

    case "alpha":
      return `${toAlpha(n)}.`;

    default:
      return `${n.toString()}.`;
  }
}
