import { radius, spacing } from "@/theme/tokens";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing[6],
  maxWidth: 'max-content',
  minWidth: 'max-content',
  padding: `${spacing[6]} ${spacing[12]}`,
  borderRadius: radius.circular,
})
