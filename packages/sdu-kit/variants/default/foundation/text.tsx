import { styled } from "@linaria/react";
import { SizedBox } from "../../../shared/ui/sizedBox";
import { typography } from "../token/typography";
import { LabelColorType } from "../type/labelColorType";
import { getLabelColor } from "../helper/getLabelColor";

export type TextProps = {
  as: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'small';
  type?: 'default' | 'markdown';
  variant: keyof typeof typography;
  size: 'large' | 'medium' | 'submedium' | 'small';
  color?: LabelColorType;
  weight?: 'regular' | 'medium' | 'bold';
  align?: 'left' | 'center' | 'right';
}

function getFontWeight(weight: 'regular' | 'medium' | 'bold') {
  switch (weight) {
    case 'regular':
      return 400;
    case 'medium':
      return 500;
    case 'bold':
      return 700;
  }
}

export const Text = styled(SizedBox)<TextProps>`
  font-family: "Pretendard", sans-serif;
  font-size: ${props => typography[props.variant][props.size as keyof typeof typography[keyof typeof typography]].fontSize};
  line-height: ${props => typography[props.variant][props.size as keyof typeof typography[keyof typeof typography]].lineHeight[props.type ?? 'default']};
  font-weight: ${props => getFontWeight(props.weight ?? 'medium')};
  text-align: ${props => props.align ?? 'left'};
  color: ${props => getLabelColor(props.color ?? 'normal')};
`;