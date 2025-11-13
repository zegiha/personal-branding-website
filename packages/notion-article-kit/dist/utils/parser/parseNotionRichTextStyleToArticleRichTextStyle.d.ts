import type { RichTextItemResponse } from "@notionhq/client";
import type { TypeArticleRichTextStyle } from "../../type";
export declare function parseNotionRichTextStyleToArticleRichTextStyle(notion: RichTextItemResponse["annotations"]): TypeArticleRichTextStyle;
