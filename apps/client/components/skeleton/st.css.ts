import { style, keyframes } from '@vanilla-extract/css';
import { semantic } from '@/theme/tokens';

const pulse = keyframes({
  '0%, 100%': { opacity: 1 },
  '50%': { opacity: 0.5 },
});

export const skeleton = style({
  backgroundColor: semantic.fill.weak,
  animation: `${pulse} 1.5s ease-in-out infinite`,
});
