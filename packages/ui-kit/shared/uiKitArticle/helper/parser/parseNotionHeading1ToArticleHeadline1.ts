import type { Heading1BlockObjectResponse } from "@notionhq/client";
import type { TypeArticleHeadline1 } from "../../type";
import { parseNotionRichTextToArticleRichText } from "./parseNotionRichTextToArticleRichText";

export function parseNotionHeading1ToArticleHeadline1(
  notion: Heading1BlockObjectResponse,
): TypeArticleHeadline1 {
  return {
    type: "headline1",
    richText: notion.heading_1.rich_text.map((v) => parseNotionRichTextToArticleRichText(v)),
  };
}
