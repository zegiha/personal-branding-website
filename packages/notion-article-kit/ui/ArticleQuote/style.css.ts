import { style } from '@vanilla-extract/css';
import { articleTokens } from '../../tokens';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: articleTokens.spacing.marginTop.xstrong,
  marginBottom: articleTokens.spacing.marginBottom.strong,
});

export const quoteBlock = style({
  borderLeft: `2px solid ${articleTokens.border.line}`,
  padding: articleTokens.spacing.blockPadding,
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
  alignItems: 'flex-start',
});

export const innerColumn = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
});

export const childrenIndent = style({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: articleTokens.spacing.nestedIndent,
});
