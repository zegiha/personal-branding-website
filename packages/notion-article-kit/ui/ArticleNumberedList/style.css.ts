import { style } from '@vanilla-extract/css';
import { articleTokens } from '../../tokens';

export const listItem = style({
  listStyleType: 'none',
});

export const listContent = style({
  display: 'flex',
  flexDirection: 'row',
  gap: 0,
  marginTop: articleTokens.spacing.marginTop.normal,
  marginBottom: articleTokens.spacing.marginBottom.normal,
});

export const markerSize = style({
  minWidth: articleTokens.list.markerWidth,
  maxHeight: articleTokens.list.markerHeight,
  minHeight: articleTokens.list.markerHeight,
});

export const childrenIndent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
  paddingLeft: articleTokens.spacing.nestedIndent,
});
