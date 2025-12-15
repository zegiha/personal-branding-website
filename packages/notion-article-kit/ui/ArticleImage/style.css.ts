import { style } from '@vanilla-extract/css';
import { articleTokens } from '../../tokens';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  alignItems: 'center',
  marginTop: articleTokens.spacing.marginTop.xstrong,
  marginBottom: articleTokens.spacing.marginBottom.strong,
});

export const image = style({
  width: '100%',
  height: '100%',
  backgroundColor: articleTokens.background.box,
  border: `1px solid ${articleTokens.border.line}`,
  objectFit: 'cover',
});
