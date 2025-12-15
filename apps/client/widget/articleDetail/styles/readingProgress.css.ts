import { semantic } from "@/theme/tokens";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: '100%',
  height: 2,
  backgroundColor: semantic.fill.weak,
});

export const progress = style({
  width: '100%',
  height: 2,
  backgroundColor: semantic.accent.gray,
  transformOrigin: 'left',
})
