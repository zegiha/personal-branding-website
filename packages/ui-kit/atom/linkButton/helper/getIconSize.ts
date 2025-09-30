import type { TypeLinkButtonProps } from "../type";

export function getIconSize(size: TypeLinkButtonProps["size"]) {
  switch (size) {
    case "medium":
      return 16;
    case "large":
      return 18;
  }
}