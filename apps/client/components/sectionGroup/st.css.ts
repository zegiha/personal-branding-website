import {semantic, spacing, motion} from "@/theme/tokens";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: `${spacing[24]} 0`,
  backgroundColor: "inherit",
  transition: `background-color ${motion.duration.xfast} ${motion.timing.linear}`
});

export const backgroundOdd = style({
  backgroundColor: semantic.container.odd
})
export const backgroundEven = style({
  backgroundColor: semantic.container.even
})