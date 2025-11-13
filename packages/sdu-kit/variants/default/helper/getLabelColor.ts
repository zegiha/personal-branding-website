import { LabelColorType } from "../type/labelColorType";
import { semantic } from "../token/semantic";

export function getLabelColor(color?: LabelColorType | string, fallback?: LabelColorType | string) {
  if(!color) return fallback ?? '';
  switch(color) {
    case 'strong':
      return semantic.labelStrong;
    case 'normal':
      return semantic.labelNormal;
    case 'weak':
      return semantic.labelWeak;
    case 'whiteStatic':
      return semantic.whiteStatic;
    case 'whiteVariable':
      return semantic.whiteVariable;
    case 'blackStatic':
      return semantic.blackStatic;
    case 'blackVariable':
      return semantic.blackVariable;
    case 'red':
      return semantic.accentRed;
    case 'pink':
      return semantic.accentPink;
    case 'blue':
      return semantic.accentBlue;
    case 'yellow':
      return semantic.accentYellow;
    case 'green':
      return semantic.accentGreen;
    default:
      return color;
  }
}