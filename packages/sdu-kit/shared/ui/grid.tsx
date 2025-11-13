import { styled } from "@linaria/react"
import { SizedBox } from "./sizedBox"
import React from "react"

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number | string
  rows?: number | string
  gap?: number
}

function getTemplate(v?: number | string) {
  if (typeof v === 'number') return `repeat(${v}, 1fr)`;
  return v ?? '';
}

export const Grid = styled(SizedBox)<GridProps>`
  display: grid;
  grid-template-columns: ${props => getTemplate(props.columns)};
  grid-template-rows: ${props => getTemplate(props.rows)};
  gap: ${props => props.gap || 0}px;
`;