import { NextRequest, NextResponse } from "next/server";
import { ThemeModeEnum } from "../../../const/ThemeModeEnum";
import { cookies } from "next/headers";
import * as z from "zod";

const ThemeModePostEntity = z.object({
	themeMode: z.enum(Object.values(ThemeModeEnum)),
});

export async function POST(req: NextRequest) {
	try {
		const store = await cookies();

		const json = await req.json();
		const theme = ThemeModePostEntity.safeParse(json);

		if (!theme.success) {
			return new NextResponse("Invalid theme", { status: 400 });
		}

		store.set("theme-mode", `${theme.data.themeMode}`);

		return new NextResponse("Success", { status: 200 });
	} catch (e) {}
}
