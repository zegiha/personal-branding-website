import { style } from '@vanilla-extract/css';
import {motion, spacing, semantic, radius} from "@/theme/tokens";

export const headerWrap = style({
  width: '100%',
  top: 0,
  zIndex: 100,
})

export const headerBase = style({
  width: '100%',
  paddingLeft: spacing['24'],
  paddingRight: spacing['24'],
  paddingTop: spacing['12'],
  paddingBottom: spacing['12'],
  transition: `background-color ${motion.duration.xfast} ${motion.timing.linear}`,
  alignItems: 'center',
});

export const headerFill = style({
  backgroundColor: semantic.container.odd,
});

export const headerTransparent = style({
  backgroundColor: 'transparent',
});

export const content = style({
  maxWidth: '1100px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
});

export const logoWrapper = style({
  display: 'flex',
  width: 'fit-content',
  alignItems: 'center',
  padding: `0 ${spacing['8']}`,
});

export const nav = style({
  flex: 1,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export const textLinkButton = style({
  display: 'flex',
  alignItems: 'center',
  padding: spacing['8'],
  borderRadius: radius.medium,
  transition: `background-color ${motion.duration.fast} ${motion.timing.inOut}`,
  ':hover': {
    backgroundColor: semantic.interaction.hover,
  },
  margin: `0 ${spacing['4']}`,
});

export const iconLinkButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing['8'],
  borderRadius: radius.medium,
  transition: `background-color ${motion.duration.fast} ${motion.timing.inOut}`,
  ':hover': {
    backgroundColor: semantic.interaction.hover,
  },
  margin: `0 ${spacing['4']}`,
});
