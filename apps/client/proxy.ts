import { NextRequest, NextResponse } from "next/server";

const ARTICLE_PATH = "/article";

export function proxy(req: NextRequest) {
  // const { pathname } = req.nextUrl;

  // const isArticleIndex = pathname === ARTICLE_PATH || pathname === `${ARTICLE_PATH}/`;
  // const slugCandidate = pathname.startsWith(`${ARTICLE_PATH}/`)
  //   ? pathname.slice(ARTICLE_PATH.length + 1)
  //   : "";
  // const isArticleSlug = Boolean(slugCandidate) && !slugCandidate.includes("/");

  // if (isArticleIndex || isArticleSlug) {
  //   return NextResponse.next();
  // }

  // const redirectUrl = req.nextUrl.clone();
  // redirectUrl.pathname = ARTICLE_PATH;
  // return NextResponse.redirect(redirectUrl);
}
