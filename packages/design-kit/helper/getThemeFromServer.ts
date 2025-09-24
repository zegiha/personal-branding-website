import { cookies } from "next/headers";
import { ThemeEnum } from "../const/ThemeEnum";

export async function getThemeFromServer() {
  const store = await cookies();
  const theme = store.get("theme")?.value as ThemeEnum | undefined;

  return theme ?? ThemeEnum.DEFAULT;
}
