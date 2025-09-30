import { type NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest) {
  return NextResponse.json([
    {
      coverUrl: "https://i.pinimg.com/736x/2d/67/f9/2d67f9834649b584682ab58606f5a27e.jpg",
      headline: "headline",
      subHeadline: "subheadline",
      badges: [
        {
          label: "웹사이트",
        },
        {
          label: "도서",
        },
        {
          label: "10만",
          icon: "group",
        },
      ],
      linkUrl: "/",
      linkLabel: "서비스로 바로가기",
      moreLinkUrl: "/",
    },
    {
      coverUrl: "https://i.pinimg.com/736x/13/3c/13/133c1324e6370b2f8f4b7b618dab4aa1.jpg",
      headline: "headline",
      subHeadline: "subheadline",
      badges: [
        {
          label: "웹사이트",
        },
        {
          label: "도서",
        },
        {
          label: "10만",
          icon: "group",
        },
      ],
      linkUrl: "/",
      linkLabel: "서비스로 바로가기",
      moreLinkUrl: "/",
    },
    {
      coverUrl: "https://i.pinimg.com/736x/07/0f/80/070f80bb12382c4af30191135deb72d3.jpg",
      headline: "김민지",
      subHeadline: "존나이쁘다",
      badges: [
        {
          label: "웹사이트",
        },
        {
          label: "도서",
        },
        {
          label: "10만",
          icon: "group",
        },
      ],
      linkUrl: "/",
      linkLabel: "서비스로 바로가기",
      moreLinkUrl: "/",
    },
    {
      coverUrl: "https://i.pinimg.com/1200x/7a/1e/de/7a1ede563cde0cfff8203780bfe34ba5.jpg",
      headline: "headline",
      subHeadline: "subheadline",
      badges: [
        {
          label: "웹사이트",
        },
        {
          label: "도서",
        },
        {
          label: "10만",
          icon: "group",
        },
      ],
      linkUrl: "/",
      linkLabel: "서비스로 바로가기",
      moreLinkUrl: "/",
    },
    {
      coverUrl: "https://i.pinimg.com/1200x/7a/1e/de/7a1ede563cde0cfff8203780bfe34ba5.jpg",
      headline: "headline",
      subHeadline: "subheadline",
      badges: [
        {
          label: "웹사이트",
        },
        {
          label: "도서",
        },
        {
          label: "10만",
          icon: "group",
        },
      ],
      linkUrl: "/",
      linkLabel: "서비스로 바로가기",
      moreLinkUrl: "/",
    },
  ]);
}
