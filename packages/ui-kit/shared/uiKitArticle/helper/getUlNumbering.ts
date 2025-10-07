import type { TypeUlNumberingType } from "../type";

export function getUlNumbering(_: number, t: TypeUlNumberingType): string {
  switch (t) {
    case "black_circle":
      return "󰀂";
    case "empty_circle":
      return "󰀁";
    case "square":
      return "&#65517;";
  }
}
