import type { RichTextItemResponse } from "@notionhq/client";
import type { TypeArticleRichTextStyle } from "../../type";
import { parseNotionApiColorToArticleRIchTextBackgroundColor } from "./parseNotionApiColorToArticleRIchTextBackgroundColor";
import { parseNotionApiColorToArticleRIchTextColor } from "./parseNotionApiColorToArticleRIchTextColor";

export function parseNotionRichTextStyleToArticleRichTextStyle(
  notion: RichTextItemResponse["annotations"],
): TypeArticleRichTextStyle {
  return {
    bold: notion.bold,
    italic: notion.italic,
    strikethrough: notion.strikethrough,
    underline: notion.underline,
    color: parseNotionApiColorToArticleRIchTextColor(notion.color),
    backgroundColor: parseNotionApiColorToArticleRIchTextBackgroundColor(notion.color),
  };
}
