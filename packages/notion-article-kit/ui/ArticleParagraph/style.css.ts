import { style } from '@vanilla-extract/css';
import { articleTokens } from '../../tokens';

export const paragraph = style({
  marginTop: articleTokens.spacing.marginTop.normal,
  marginBottom: articleTokens.spacing.marginBottom.normal,
});

export const childrenIndent = style({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: articleTokens.spacing.nestedIndent,
});
