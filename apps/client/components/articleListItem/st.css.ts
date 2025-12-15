import {motion, radius, semantic, spacing} from "@/theme/tokens";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: 'flex',
  gap: spacing[64],
  width: '100%',
});

export const textWrap = style({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[8],
  width: '100%',
  padding: `${spacing[16]} 0`,
})

export const title = style({
  selectors: {
    [`${container}:hover &`]: {
      textDecoration: 'underline',
      textDecorationColor: semantic.label.strong
    }
  }
})

export const coverImageWrap = style({
  position: 'relative',
  aspectRatio: '4/3',
  borderRadius: radius.large,
  overflow: 'hidden',

  maxWidth: 240,
  minWidth: 240,
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