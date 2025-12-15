import type { BlockObjectResponse, ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleParagraph } from "../../type";
import { parseNotionBlockToArticleContent } from "./parseNotionBlockToArticleContent";
import { parseNotionRichTextToArticleRichText } from "./parseNotionRichTextToArticleRichText";

export function parseNotionParagraphToArticleParagraph(
  notion: ParagraphBlockObjectResponse,
  children?: BlockObjectResponse[],
): TypeArticleParagraph {
  const richText = notion.paragraph.rich_text
    .map((v) => parseNotionRichTextToArticleRichText(v))
    .filter((v) => v !== undefined);

  const parsedChildren = (children || [])
    .map((v) => parseNotionBlockToArticleContent(v))
    .filter((v) => v !== undefined);

  return {
    type: "paragraph",
    richText,
    children: parsedChildren,
  };
}
