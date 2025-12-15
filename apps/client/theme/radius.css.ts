// theme/radius.css.ts
import { createTheme } from '@vanilla-extract/css';

export const [radiusClass, radius] = createTheme({
  small: '6px',
  medium: '8px',
  large: '16px',
  xlarge: '36px',
  circular: '9999px',
});
