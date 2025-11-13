import { css } from "@linaria/core";

export const paletteCss = css`
  --gray-000: #000000;
  --gray-500: #888888;
  --gray-900: #FFFFFF;
`;

export const palette = {
  gray000: "var(--gray-000)",
  gray500: "var(--gray-500)",
  gray900: "var(--gray-900)",
};

export type PaletteType = typeof palette;