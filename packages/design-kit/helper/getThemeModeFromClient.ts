import { ThemeModeEnum } from "../const/ThemeModeEnum";

export function getThemeModeFromClient(): ThemeModeEnum {
  const html = document.getElementsByTagName("html")[0];
  const classNameThemeIdx = Object.values(ThemeModeEnum).findIndex((theme) =>
    html.className.includes(theme),
  );
  if (classNameThemeIdx !== -1) return Object.values(ThemeModeEnum)[classNameThemeIdx];

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  if (mediaQuery.matches) return ThemeModeEnum.DARK;

  return ThemeModeEnum.LIGHT;
}
