import {semantic, spacing} from "@/theme/tokens";
import { style } from "@vanilla-extract/css";

export const container = style({
  position: 'relative',
  width: '100%',
  height: '100vh',
  backgroundColor: semantic.container.even,
});

export const coverImage = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 1
});

export const contentsContainer = style({
  position: 'absolute',
  bottom: 0,
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: `40vh ${spacing[24]} ${spacing[24]} ${spacing[24]}`,
  background: `linear-gradient(180deg, transparent 0%, ${semantic.container.odd} 100%)`,
})

export const contentsWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[32],
  width: '100%',
  maxWidth: 1100,
})

export const textGroup = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: spacing[8],
  width: '100%',
})

export const badgeGroup = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: spacing[8],
  width: '100%',
})

export const infoGroup = style({
  display: 'flex',
  gap: spacing[24],
})

export const infoItemContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[4],
})

export const chipGroup = style({
  display: 'flex',
  gap: spacing[8],
  alignSelf: 'stretch',
  alignItems: 'flex-end',
})
