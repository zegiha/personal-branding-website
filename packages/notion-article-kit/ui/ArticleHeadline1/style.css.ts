import { style } from '@vanilla-extract/css';
import { articleTokens } from '../../tokens';

export const headline = style({
  marginTop: articleTokens.spacing.marginTop.xxstrong,
  marginBottom: articleTokens.spacing.marginBottom.strong,
});
