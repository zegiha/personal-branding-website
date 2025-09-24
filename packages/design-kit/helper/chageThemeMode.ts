import { ThemeModeEnum } from "../const/ThemeModeEnum";
import { getThemeFromClient } from "./getThemeFromClient";

export async function changeThemeMode(themeMode: ThemeModeEnum) {
  let prevThemeMode: Array<string> | undefined;

  try {
    if (window !== undefined) {
      const html = document.querySelector("html");
      if (!html) throw new Error("window is not undefined but html is undefined");

      const theme = getThemeFromClient();

      prevThemeMode = Array.from(html.classList);

      html.classList.remove(...Object.values(ThemeModeEnum).map((mode) => `${theme}-${mode}`));
      html.classList.add(`${theme}-${themeMode}`);
    }

    await fetch(`/api/theme/mode`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ themeMode }),
    });
  } catch (e) {
    console.error(e);

    alert("테마 모드를 바꾸는데 실패했어요");

    if (prevThemeMode !== undefined && window !== undefined) {
      const html = document.querySelector("html");
      if (!html) throw new Error("window is not undefined but html is undefined");

      prevThemeMode.forEach((v) => {
        html.classList.add(v);
      });
    }
  }
}
