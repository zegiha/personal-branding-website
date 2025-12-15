import { ReactNode } from "react";
import { textLineHeightByType, textSizeByType, textWeight } from "./text.css";
import { textColor } from "@/theme/tokens";
type TextAs = 
| 'h1'
| 'h2'
| 'h3'
| 'span'
| 'p'
| 'pre'
| 'small'
| 'strong';

type TextHeadlineType = {
  type: 'headline'
} & (
  | { size: 'large' }
  | { size: 'medium' }
  | { size: 'small' }
)

type TextDisplayType = {
  type: 'display'
} & (
  | {size: 'large'}
  | {size: 'medium'}
)

type TextLabelType = {
  type: 'label'
} & (
  | {size: 'large'}
  | {size: 'medium'}
  | {size: 'small'}
)

type TextCaptionType = {
  type: 'caption'
} & (
  | {size: 'medium'}
  | {size: 'small'}
)

type TextProps = {
  as?: TextAs
  children: ReactNode
  color?: keyof typeof textColor
  className?: string
  lineHeight?: boolean
  weight?: 'regular' | 'medium' | 'bold';
} & (
  | TextHeadlineType
  | TextDisplayType
  | TextLabelType
  | TextCaptionType
)

export function Text({
  as,
  children,
  type,
  size,
  color,
  className,
  lineHeight = true,
  weight,
  ...rest
}: TextProps) {
  const Cmp = as ?? (() => {
    if(type === 'display') return 'h1';
    if(type === 'headline') {
      if(size === 'large') return 'h1';
      if(size === 'medium') return 'h2';
      if(size === 'small') return 'h1';
    }
    return 'span'
  })();

  const textSizeClass = textSizeByType[type as keyof typeof textSizeByType][size as keyof (typeof textSizeByType)[keyof typeof textSizeByType]];
  const textLineHeightClass = lineHeight
    ? textLineHeightByType[type as keyof typeof textLineHeightByType][size as keyof (typeof textLineHeightByType)[keyof typeof textLineHeightByType]]
    : undefined;
  const textWeightKey = weight ?? (type === 'label' || type === 'caption' ? 'medium' : 'bold');
  const textWeightClass = textWeight[textWeightKey as keyof typeof textWeight];
  const textColorClass = color ? textColor[color as keyof typeof textColor] : undefined;

  const classNames = [textSizeClass, textLineHeightClass, textWeightClass, className, textColorClass]
    .filter((cls): cls is string => Boolean(cls))
    .join(' ');

  return <Cmp className={classNames} {...rest}>{children}</Cmp>;
}
