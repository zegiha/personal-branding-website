import {
  semanticDarkCss,
  semanticLightCss,
} from "./tokens";

export function getThemeClass({
  themeMode
}: {
  themeMode: 'light' | 'dark'
}) {
  return themeMode === 'light' ? semanticLightCss : semanticDarkCss
}