import { styled } from "@linaria/react";
import React from "react";

type Size = 'fill' | number | string;

export interface SizedBoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType
  width?: Size
  maxWidth?: Size
  minWidth?: Size
  height?: Size
  maxHeight?: Size
  minHeight?: Size
}

function getStyleSize(size?: Size) {
  if (size === 'fill') return '100%';
  if (typeof size === 'number') return `${size}px`;
  return size;
}

export const SizedBox = styled.div<Omit<SizedBoxProps, 'as'>>`
  width: ${props => getStyleSize(props.width) || ''};
  max-width: ${props => getStyleSize(props.maxWidth) || ''};
  min-width: ${props => getStyleSize(props.minWidth) || ''};
  height: ${props => getStyleSize(props.height) || ''};
  max-height: ${props => getStyleSize(props.maxHeight) || ''};
  min-height: ${props => getStyleSize(props.minHeight) || ''};
`;