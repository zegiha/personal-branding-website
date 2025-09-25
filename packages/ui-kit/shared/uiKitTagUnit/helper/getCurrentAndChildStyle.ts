import type { TypeGetCurrentAndChildStyleReturn, TypeUiKitTagUnitColor } from "../type";

export function getCurrentAndChildStyle(
  color: TypeUiKitTagUnitColor,
): TypeGetCurrentAndChildStyleReturn {
  switch (color) {
    case "translucent-red":
      return {
        current: {
          background: "var(--semantic-accent-translucent-red)",
        },
        child: {
          color: "var(--semantic-accent-red)",
        },
      };
    case "translucent-pink":
      return {
        current: {
          background: "var(--semantic-accent-translucent-pink)",
        },
        child: {
          color: "var(--semantic-accent-pink)",
        },
      };
    case "translucent-yellow":
      return {
        current: {
          background: "var(--semantic-accent-translucent-yellow)",
        },
        child: {
          color: "var(--semantic-accent-yellow)",
        },
      };
    case "translucent-green":
      return {
        current: {
          background: "var(--semantic-accent-translucent-green)",
        },
        child: {
          color: "var(--semantic-accent-green)",
        },
      };
    case "translucent-blue":
      return {
        current: {
          background: "var(--semantic-accent-translucent-blue)",
        },
        child: {
          color: "var(--semantic-accent-blue)",
        },
      };
    case "translucent-gray":
      return {
        current: {
          background: "var(--semantic-fill-normal)",
        },
        child: {
          color: "var(--semantic-label-normal)",
        },
      };
    case "red":
      return {
        current: {
          background: "var(--semantic-accent-red)",
        },
        child: {
          color: "var(--semantic-white-static)",
        },
      };
    case "pink":
      return {
        current: {
          background: "var(--semantic-accent-pink)",
        },
        child: {
          color: "var(--semantic-white-static)",
        },
      };
    case "yellow":
      return {
        current: {
          background: "var(--semantic-accent-yellow)",
        },
        child: {
          color: "var(--semantic-white-static)",
        },
      };
    case "green":
      return {
        current: {
          background: "var(--semantic-accent-green)",
        },
        child: {
          color: "var(--semantic-white-static)",
        },
      };
    case "blue":
      return {
        current: {
          background: "var(--semantic-accent-blue)",
        },
        child: {
          color: "var(--semantic-white-static)",
        },
      };
    case "gray":
      return {
        current: {
          background: "var(--semantic-black-variable)",
        },
        child: {
          color: "var(--semantic-white-variable)",
        },
      };
  }
}
