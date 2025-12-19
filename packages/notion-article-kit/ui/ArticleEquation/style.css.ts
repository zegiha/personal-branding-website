import { style } from "@vanilla-extract/css";
import { articleTokens } from "../../tokens";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  marginTop: articleTokens.spacing.marginTop.xstrong,
  marginBottom: articleTokens.spacing.marginBottom.strong,
  backgroundColor: articleTokens.background.box,
  borderRadius: articleTokens.border.radius,
  overflowX: "auto",
  maxWidth: "100%",
});

export const equationBlock = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: articleTokens.spacing.blockPadding,
  minWidth: "100%",
  width: "fit-content",
  position: "relative",
});
