import { style } from '@vanilla-extract/css';
import { articleTokens } from '../../tokens';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'center',
  marginTop: articleTokens.spacing.marginTop.xstrong,
  marginBottom: articleTokens.spacing.marginBottom.strong,
});

export const equationBlock = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  backgroundColor: articleTokens.background.box,
  borderRadius: articleTokens.border.radius,
  padding: articleTokens.spacing.blockPadding,
  width: '100%',
});
