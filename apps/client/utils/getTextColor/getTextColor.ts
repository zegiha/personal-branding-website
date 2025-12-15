import { semantic } from "@/theme/tokens";
import type { TextColorType } from "./textColor.type";

export function getTextColor(color: TextColorType) {
  if(
    color === 'normal' ||
    color === 'strong' ||
    color === 'weak'
  ) {
    return semantic.label[color];
  }

  if(
    color === 'red' ||
    color === 'pink' ||
    color === 'blue' ||
    color === 'yellow' ||
    color === 'green'
  ) {
    return semantic.accent[color];
  }

  if(color === 'whiteVariable') return semantic.white.variable;
  if(color === 'whiteStatic') return semantic.white.static;

  throw new Error(`[GET_TEXT_COLOR] Invalid color: ${color}`);
}