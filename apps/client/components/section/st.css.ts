import { style } from "@vanilla-extract/css";
import {motion, semantic} from "@/theme/tokens";

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '32px 24px',
  backgroundColor: 'inherit',
  transition: `background-color ${motion.duration.xfast} ${motion.timing.linear}`
});

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',
})

export const backgroundOdd = style({
  backgroundColor: semantic.container.odd
})
export const backgroundEven = style({
  backgroundColor: semantic.container.even
})
