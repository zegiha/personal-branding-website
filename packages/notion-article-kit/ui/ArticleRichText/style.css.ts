import { style } from "@vanilla-extract/css";
import { articleTokens } from "../../tokens";

export const link = style({
  display: "inline",
  color: articleTokens.typography.color.link,
  textDecoration: "underline",
  wordBreak: "break-all",
});
