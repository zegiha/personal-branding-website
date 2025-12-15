import { style } from '@vanilla-extract/css';
import { articleTokens } from '../../tokens';

export const container = style({
  width: '100%',
  marginTop: articleTokens.spacing.marginTop.xxstrong,
  marginBottom: articleTokens.spacing.marginBottom.strong,
});

export const divider = style({
  width: '100%',
  height: '1px',
  backgroundColor: articleTokens.border.line,
});
