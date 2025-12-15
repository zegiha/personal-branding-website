import type { SVGProps } from 'react';
import CopySvg from './assets/Copy.svg';

export type CopyIconProps = {
  size?: number;
  color?: string;
} & Omit<SVGProps<SVGSVGElement>, 'width' | 'height' | 'fill'>;

/**
 * Copy 아이콘 컴포넌트
 * ArticleButton에서 사용하기 위한 간단한 SVG 래퍼
 */
export function CopyIcon({ size = 14, color, ...props }: CopyIconProps) {
  return (
    <CopySvg
      width={size}
      height={size}
      fill={color || 'currentColor'}
      {...props}
    />
  );
}
