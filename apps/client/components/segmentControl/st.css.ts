import { motion, radius, semantic } from "@/theme/tokens";
import { style } from "@vanilla-extract/css";

export const container = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  gap: 20,
  
})

export const segmentText = style({
  transition: `color ${motion.duration.fast} ${motion.timing.ftos}`,
})

export const segmentWrap = style({
  padding: '8px 0',
})

export const indicator = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: 2,
  backgroundColor: semantic.accent.gray,
  borderRadius: radius.circular,
  transition: `all ${motion.duration.fast} ${motion.timing.ftos}`
})

export const indicatorContainer = style({
  width: '100%',
  height: 2,
  position: 'absolute',
  bottom: 0,
  backgroundColor: semantic.line.normal,
  borderRadius: radius.circular
})