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

export const listMarker = style({
  minWidth: articleTokens.list.markerWidth,
});

export const childrenIndent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
  paddingLeft: articleTokens.spacing.nestedIndent,
});
