import { semantic } from "@/theme/tokens";
import type { ButtonLikesProps } from "./getButtonLikes.type";
import type { TextColorType } from "@/utils";

export function getButtonLikes({
  translucent = false,
  color,
}: ButtonLikesProps): {
  container: string;
  content: string;
  textColor: TextColorType;
} {
  if (translucent) {
    // translucent한 경우
    if (color === 'gray') {
      return {
        container: semantic.fill.normal,
        content: semantic.label.normal,
        textColor: 'normal',
      };
    }
    // red, pink, blue, yellow, green
    return {
      container: semantic.accentTranslucent[color],
      content: semantic.accent[color],
      textColor: color,
    };
  }
  
  // translucent하지 않은 경우
  if (color === 'gray') {
    return {
      container: semantic.black.variable,
      content: semantic.white.variable,
      textColor: 'whiteVariable',
    };
  }
  
  // red, pink, blue, yellow, green
  return {
    container: semantic.accent[color],
    content: semantic.white.static,
    textColor: 'whiteStatic',
  };
}