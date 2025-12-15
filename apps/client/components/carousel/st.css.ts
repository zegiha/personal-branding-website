import { motion, radius, semantic } from "@/theme/tokens";
import { style } from "@vanilla-extract/css";

export const controlButton = {
  base: style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.circular,
    transitionProperty: 'background-color, opacity',
    transitionDuration: motion.duration.fast,
    transitionTimingFunction: motion.timing.stof,
    selectors: {
      '&:hover:not(:disabled)': {
        backgroundColor: semantic.interaction.hover,
        transitionTimingFunction: motion.timing.ftos,
      },
      '&:active:not(:disabled)': {
        backgroundColor: semantic.interaction.active,
        transitionDuration: motion.duration.zero,
      },
      '&:disabled': {
        opacity: 0.64,
        transitionDuration: motion.duration.zero,
        cursor: 'not-allowed',
      },
    }
  }),
  active: style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.circular,
    backgroundColor: semantic.interaction.active,
  }),
  medium: style({
    maxWidth: 36,
    minWidth: 36,
    maxHeight: 36,
    minHeight: 36,
  })
}

export const controlButtonGroup = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  width: '100%',
})