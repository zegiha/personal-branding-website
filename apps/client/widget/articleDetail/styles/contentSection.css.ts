import { style } from "@vanilla-extract/css";
import { breakPoint, radius, semantic, spacing } from "@/theme/tokens";

export const section = style({
  position: "relative",
});

export const contentContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: 720,
  margin: "0 auto",
});

export const buttonGroupPositionWrap = style({
  position: "absolute",
  top: spacing[32],
  left: "calc(50% - 360px - 64px)",
  transform: "translateX(-100%)",
  height: "100%",
  paddingBottom: spacing[48],
  "@media": {
    [`screen and (${breakPoint.large})`]: {
      left: "calc(50% - 360px - 24px)",
    },
    [`screen and (${breakPoint.xmedium})`]: {
      display: "none",
    },
  },
});

export const buttonGroup = style({
  position: "sticky",
  top: 80,
  display: "flex",
  flexDirection: "column",
  gap: spacing[8],
});

export const button = style({
  display: "flex",
  maxWidth: 61,
  minWidth: 61,
  maxHeight: 61,
  minHeight: 61,
  padding: spacing[8],
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: spacing[4],
  borderRadius: radius.medium,
  border: `1px solid ${semantic.line.normal}`,
});

// Article Navigation Styles
export const navPositionWrap = style({
  position: "absolute",
  top: spacing[32],
  left: "calc(50% + 360px + 64px)", // 본문 오른쪽 +64px
  maxWidth: 160,
  minWidth: 160,
  height: "100%",
  paddingBottom: spacing[48],

  "@media": {
    [`screen and (${breakPoint.large})`]: {
      left: "calc(50% + 360px + 24px)", // 본문 오른쪽 +24px
    },
    [`screen and (${breakPoint.xmedium})`]: {
      display: "none",
    },
  },
});

export const navContainer = style({
  position: "sticky",
  top: 80,
  display: "flex",
  flexDirection: "column",
  gap: spacing[8],
});

export const navItem = style({
  display: "flex",
  alignItems: "flex-start",
  padding: spacing[8],
  borderLeft: `1px solid ${semantic.line.normal}`,
  opacity: 0.8,
  cursor: "pointer",
  transition: "border-color 0.2s, opacity 0.2s",

  ":hover": {
    opacity: 1,
  },
});

export const navItemActive = style({
  borderLeftColor: semantic.black.variable,
});

export const navText = style({
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "1.19em",
  color: semantic.label.normal,
});

export const navTextActive = style({
  color: semantic.label.strong,
});
