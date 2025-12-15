import { style } from '@vanilla-extract/css';
import { articleTokens } from '../../tokens';

export const button = style({
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  backgroundColor: articleTokens.background.buttonNormal,
  padding: '6px',
  borderRadius: '6px',
  transition: 'all 0.12s ease-in-out',
  height: '29px',
  selectors: {
   '&:hover:not(:disabled)': {
      backgroundColor: articleTokens.background.buttonHover,
    },
  }
});
