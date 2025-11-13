import type { RichTextItemResponse } from "@notionhq/client";
import type { TypeArticleRichText } from "../../type";
import { parseNotionRichTextStyleToArticleRichTextStyle } from "./parseNotionRichTextStyleToArticleRichTextStyle";

export function parseNotionRichTextToArticleRichText(
  notion: RichTextItemResponse,
): TypeArticleRichText | undefined {
  switch (notion.type) {
    case "equation":
      return {
        type: "equation",
        content: notion.equation.expression,
      };
    case "text":
      return {
        type: "text",
        style: parseNotionRichTextStyleToArticleRichTextStyle(notion.annotations),
        content: notion.text.content,
        link: notion.text.link?.url,
      };
    default:
      return undefined;
  }
}
