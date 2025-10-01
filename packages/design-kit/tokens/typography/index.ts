import "./default/default.css";
import "./index.css";

import localFont from "next/font/local";
import { typography as typographyDefault } from "./default/default";

export const pretendard = localFont({
  src: "../../assets/PretendardVariable.woff2",
  display: "swap",
});

export const jetbrainsMono = localFont({
  src: "../../assets/JetBrainsMono-Medium.woff2",
  display: "swap",
});

export const typography = {
  default: typographyDefault,
};
