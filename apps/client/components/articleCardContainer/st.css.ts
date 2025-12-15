import {
  spacing,
  breakPoint,
} from "@/theme/tokens";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: 'grid',
  rowGap: spacing[36],
  columnGap: spacing[24],
  width: '100%',

  gridTemplateColumns: 'repeat(4, 1fr)',
  '@media': {
    [breakPoint.medium]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [breakPoint.subMedium]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [breakPoint.small]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  }
});