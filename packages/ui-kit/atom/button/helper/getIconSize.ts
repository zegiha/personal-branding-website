import type { TypeButtonProps } from "../type";

export function getIconSize(size: TypeButtonProps["size"]) {
  switch (size) {
    case "medium":
      return 16;
    case "large":
      return 18;
  }
}
