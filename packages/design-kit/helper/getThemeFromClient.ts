import { ThemeEnum } from "../const/ThemeEnum";

export function getThemeFromClient() {
  const html = document.getElementsByTagName("html")[0];
  const classNameThemeIdx = Object.values(ThemeEnum).findIndex((theme) =>
    html.className.includes(theme),
  );
  if (classNameThemeIdx !== -1) return Object.values(ThemeEnum)[classNameThemeIdx];

  return ThemeEnum.DEFAULT;
}
