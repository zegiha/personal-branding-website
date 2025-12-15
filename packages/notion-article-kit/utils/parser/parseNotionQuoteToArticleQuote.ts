import type { BlockObjectResponse, QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleQuote } from "../../type";
import { parseNotionBlockToArticleContent } from "./parseNotionBlockToArticleContent";
import { parseNotionRichTextToArticleRichText } from "./parseNotionRichTextToArticleRichText";

export function parseNotionQuoteToArticleQuote(
  notion: QuoteBlockObjectResponse,
  children?: BlockObjectResponse[],
): TypeArticleQuote {
  const richText = notion.quote.rich_text
    .map((v) => parseNotionRichTextToArticleRichText(v))
    .filter((v) => v !== undefined);

  const parsedChildren = (children || [])
    .map((v) => parseNotionBlockToArticleContent(v))
    .filter((v) => v !== undefined);

  return {
    type: "quote",
    richText,
    children: parsedChildren,
  };
}
