import { radius } from "@/theme/tokens";
import { style } from "@vanilla-extract/css";

export const containerMedium = style({
  display: 'flex',
  padding: '4px 8px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  borderRadius: radius.small,
  maxHeight: 25,
  minHeight: 25,
});