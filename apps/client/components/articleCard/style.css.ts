import { style } from "@vanilla-extract/css";
import { motion, radius } from "@/theme/tokens";

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '100%',
})

export const contentWrap = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',
  padding: '0 8px',
})

export const badgeWrap = style({
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
  width: '100%',
})

export const coverImageWrap = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '7/5',
  borderRadius: radius.large,
  overflow: 'hidden',
})

export const coverImage = style({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: `transform ${motion.duration.fast} ${motion.timing.ftos}`,
  selectors: {
    [`${container}:hover &`]: {
      transform: 'scale(1.1)',
    }
  }
})
