import type { Heading3BlockObjectResponse } from "@notionhq/client";
import type { TypeArticleHeadline3 } from "../../type";
import { parseNotionRichTextToArticleRichText } from "./parseNotionRichTextToArticleRichText";

export function parseNotionHeading3ToArticleHeadline3(
  notion: Heading3BlockObjectResponse,
): TypeArticleHeadline3 {
  return {
    type: "headline3",
    richText: notion.heading_3.rich_text.map((v) => parseNotionRichTextToArticleRichText(v)),
  };
}
