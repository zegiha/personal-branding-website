import type { Heading2BlockObjectResponse } from "@notionhq/client";
import type { TypeArticleHeadline2 } from "../../type";
import { parseNotionRichTextToArticleRichText } from "./parseNotionRichTextToArticleRichText";

export function parseNotionHeading2ToArticleHeadline2(
  notion: Heading2BlockObjectResponse,
): TypeArticleHeadline2 {
  return {
    type: "headline2",
    richText: notion.heading_2.rich_text.map((v) => parseNotionRichTextToArticleRichText(v)),
  };
}
