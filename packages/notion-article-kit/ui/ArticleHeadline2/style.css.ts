import { style } from '@vanilla-extract/css';
import { articleTokens } from '../../tokens';

export const headline = style({
  marginTop: articleTokens.spacing.marginTop.strong,
  marginBottom: articleTokens.spacing.marginBottom.strong,
});
