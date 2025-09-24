import "./default/default.css";
import "./index.css";

import { typography as typographyDefault } from "./default/default";
import localFont from "next/font/local";

export const pretendard = localFont({
  src: "../../assets/PretendardVariable.woff2",
});

export const jetbrainsMono = localFont({
  src: "../../assets/JetBrainsMono-Medium.woff2",
});

export const typography = {
  default: typographyDefault,
};
