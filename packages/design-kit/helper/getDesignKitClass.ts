import { getThemeFromServer } from "./getThemeFromServer";
import { getThemeModeFromServer } from "./getThemeModeFromServer";

export async function getDesignKitClass() {
  const theme = await getThemeFromServer();
  const themeMode = await getThemeModeFromServer();

  return `${theme}-palette ${theme}-radius ${theme}-typography ${theme}-${themeMode}`;
}
