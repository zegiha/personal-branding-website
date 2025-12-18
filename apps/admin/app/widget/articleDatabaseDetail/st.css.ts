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
  gap: 24,
  width: "100%",
  maxWidth: 1100,
  margin: "0 auto",
});

export const item = style({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  width: "100%",
  padding: 16,
  borderRadius: 8,
  ":hover": {
    backgroundColor: "#F5F5F5",
  },
});
