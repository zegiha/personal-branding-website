import { type NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import { prisma } from "@/shared/prisma";

const SchemeArticleCreate = z.object({
  coverImageUrl: z.string().url("유효한 URL 아님"),
  title: z.string().min(1, "제목은 필수입니다."),
  subTitle: z.string().min(1, "부제목은 필수"),
  content: z.any(),
  tags: z.array(z.string()), // 태그 이름 배열
  readingMinute: z.number(),
});

export async function POST(req: NextRequest) {
  const t = await req.json();
  const safeParse = SchemeArticleCreate.safeParse(t);

  if (safeParse.error) {
    console.error("error", safeParse.error);
    return NextResponse.json({ status: 401, message: "wrong body" });
  }

  const { data } = safeParse;

  try {
    const res = await prisma.article.create({
      data: {
        coverImageUrl: data.coverImageUrl,
        title: data.title,
        subTitle: data.subTitle,
        content: data.content,
        readingMinute: data.readingMinute,
        tags: {
          create: data.tags.map((v) => ({
            tag: {
              connectOrCreate: {
                where: { name: v },
                create: { name: v },
              },
            },
          })),
        },
      },
      include: {
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });

    return NextResponse.json({
      status: 201,
      message: "success",
      data: res,
    });
  } catch (e) {
    console.error("failed to create article", e);
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}
