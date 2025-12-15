import {style} from "@vanilla-extract/css";
import {motion, radius, semantic, spacing} from "@/theme/tokens";

export const container = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: spacing[4],
  height: 35,
  padding: `${spacing[8]} ${spacing[12]}`,
  borderRadius: radius.medium,
  backgroundColor: semantic.fill.normal,
  selectors: {
    ['&:before']: {
      content: "",
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      backgroundColor: "transparent",
      borderRadius: 'inherit',
      transition: `background-color ${motion.duration.fast} ${motion.timing.ftos}`,
    },
    ['&:hover:before']: {
      backgroundColor: semantic.interaction.hover,
    },
    ['&:active:before']: {
      transitionDuration: motion.duration.zero,
      backgroundColor: semantic.interaction.active,
    }
  }
})