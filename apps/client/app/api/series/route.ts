import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const dummy = {
    coverUrl: "https://i.pinimg.com/736x/07/0f/80/070f80bb12382c4af30191135deb72d3.jpg",
    name: "Minji",
    description: "Series about newjeans minji",
    linkUrl: "/",
    involvedSeriesNumber: 2,
    involvedArticleNumber: 100,
  };
  return NextResponse.json([dummy, dummy, dummy, dummy]);
}
