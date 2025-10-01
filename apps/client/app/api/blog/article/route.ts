import { NextResponse } from "next/server";

export async function GET() {
  const dummy = {
    coverUrl: "https://i.pinimg.com/736x/cb/e9/3a/cbe93a094defd23a2e36406536293ee6.jpg",
    headline: "김민지랑 연애하는법 특강",
    readingTime: 100,
    viewCount: 2000,
    linkUrl: "/",
  };

  return NextResponse.json(Array.from({ length: 8 }, () => dummy));
}
