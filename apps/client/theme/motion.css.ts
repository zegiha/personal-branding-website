// theme/motion.css.ts
import { createTheme } from '@vanilla-extract/css';

export const [motionClass, motion] = createTheme({
  duration: {
    normal: '500ms',
    fast: '240ms',
    xfast: '120ms',
    zero: '0s',
  },
  timing: {
    linear: 'cubic-bezier(0, 0, 1, 1)',
    inOut: 'cubic-bezier(0.8, 0, 0.2, 1)',
    stof: 'cubic-bezier(0.56, 0, 0.84, 1)',
    ftos: 'cubic-bezier(0.16, 0, 0.24, 1)',
  },
});
