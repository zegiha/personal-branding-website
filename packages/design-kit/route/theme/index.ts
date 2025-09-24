import { NextRequest, NextResponse } from "next/server";
import { ThemeEnum } from "../../const/ThemeEnum";
import { cookies } from "next/headers";
import * as z from "zod";

const ThemePostEntity = z.object({
	theme: z.enum(Object.values(ThemeEnum)),
});

export async function POST(req: NextRequest) {
	try {
		const store = await cookies();

		const json = await req.json();
		const theme = ThemePostEntity.safeParse(json);

		if (!theme.success) {
			return new NextResponse("Invalid theme", { status: 400 });
		}

		store.set("theme", `${theme.data.theme}`);

		return new NextResponse("Success", { status: 200 });
	} catch (e) {}
}
