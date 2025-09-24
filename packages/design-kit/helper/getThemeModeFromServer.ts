import { cookies, headers } from "next/headers";
import { ThemeModeEnum } from "../const/ThemeModeEnum";

export async function getThemeModeFromServer(): Promise<ThemeModeEnum> {
	const store = await cookies();
	const themeMode = store.get("theme-mode")?.value as ThemeModeEnum | undefined;

	if (themeMode) return themeMode;

	const h = await headers();
	const ch = h.get("see-ch-prefers-color-scheme") as ThemeModeEnum | undefined;

	if (ch === ThemeModeEnum.DARK) return ThemeModeEnum.DARK;
	return ThemeModeEnum.LIGHT;
}
