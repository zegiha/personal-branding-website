import "./katex.css";
import "./material-symbols.css";

import localFont from "next/font/local";

export const MaterialSymbolsRounded = localFont({
  src: "./node_modules/material-symbols/material-symbols-rounded.woff2",
  display: "swap",
  weight: "400",
  preload: true,
});
