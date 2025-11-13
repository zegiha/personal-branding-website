import { styled } from "@linaria/react";
import { SizedBox } from "./sizedBox";

export interface FlexProps {
  direction?: 'row' | 'column'
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  gap?: number
  wrap?: boolean
  flex?: string
  flexGrow?: number
  flexShrink?: number
  flexBasis?: string
}

export const Flex = styled(SizedBox)<FlexProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  gap: ${props => props.gap || 0}px;
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  flex: ${props => props.flex || ''};
  flex-grow: ${props => props.flexGrow || ''};
  flex-shrink: ${props => props.flexShrink || ''};
  flex-basis: ${props => props.flexBasis || ''};
`;

export const Row = styled(Flex)`
  flex-direction: row;
`;

export const Col = styled(Flex)`
  flex-direction: column;
`;