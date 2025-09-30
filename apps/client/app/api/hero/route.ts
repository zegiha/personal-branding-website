import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      bannerUrl: "https://i.pinimg.com/1200x/7a/1e/de/7a1ede563cde0cfff8203780bfe34ba5.jpg",
      headline: "hi1",
      subHeadline: "i am hoho",
      linkUrl: "/",
      linkLabel: "to home",
    },
    {
      bannerUrl: "https://i.pinimg.com/1200x/7a/1e/de/7a1ede563cde0cfff8203780bfe34ba5.jpg",
      headline: "hi2",
      subHeadline: "i am hoho",
      linkUrl: "/",
      linkLabel: "to home",
    },
  ]);
}
