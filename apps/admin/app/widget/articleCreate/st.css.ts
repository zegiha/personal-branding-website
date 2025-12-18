import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "32px 24px",
});

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  width: "100%",
  maxWidth: 360,
  margin: "0 auto",
});

export const item = style({
  width: "100%",
});
