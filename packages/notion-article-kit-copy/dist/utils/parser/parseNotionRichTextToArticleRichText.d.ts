import type { RichTextItemResponse } from "@notionhq/client";
import type { TypeArticleRichText } from "../../type";
export declare function parseNotionRichTextToArticleRichText(notion: RichTextItemResponse): TypeArticleRichText | undefined;
