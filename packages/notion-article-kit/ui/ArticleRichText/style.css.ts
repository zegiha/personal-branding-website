import { style } from '@vanilla-extract/css';
import { articleTokens } from '../../tokens';

export const link = style({
  color: articleTokens.typography.color.link,
  textDecoration: 'underline',
});
