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

export const video = style({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  backgroundColor: articleTokens.background.box,
  border: `1px solid ${articleTokens.border.line}`,
  borderRadius: articleTokens.border.radius,
});

export const iframe = style({
  width: '100%',
  aspectRatio: articleTokens.media.aspectRatio,
  backgroundColor: articleTokens.background.box,
  border: `1px solid ${articleTokens.border.line}`,
  borderRadius: articleTokens.border.radius,
});
