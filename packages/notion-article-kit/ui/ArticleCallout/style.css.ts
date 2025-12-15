import { style } from '@vanilla-extract/css';
import { articleTokens } from '../../tokens';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: articleTokens.spacing.marginTop.xstrong,
  marginBottom: articleTokens.spacing.marginBottom.strong,
});

export const calloutBlock = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  gap: '8px',
  alignItems: 'center',
  backgroundColor: articleTokens.background.box,
  borderRadius: articleTokens.border.radius,
  padding: articleTokens.spacing.blockPadding,
});

export const emoji = style({
  fontSize: articleTokens.icon.size,
  width: articleTokens.icon.size,
  height: articleTokens.icon.size,
});
