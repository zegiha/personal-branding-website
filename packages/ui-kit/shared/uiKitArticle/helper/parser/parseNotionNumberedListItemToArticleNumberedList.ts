import type { BlockObjectResponse, NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleNumberedList } from "../../type";
import { parseNotionBlockToArticleContent } from "./parseNotionBlockToArticleContent";
import { parseNotionRichTextToArticleRichText } from "./parseNotionRichTextToArticleRichText";

export function parseNotionNumberedListItemToArticleNumberedList(
  notion: NumberedListItemBlockObjectResponse,
  children?: BlockObjectResponse[],
): TypeArticleNumberedList {
  const richText = notion.numbered_list_item.rich_text
    .map((v) => parseNotionRichTextToArticleRichText(v))
    .filter(Boolean);

  const parsedChildren = (children || [])
    .map((v) => parseNotionBlockToArticleContent(v))
    .filter(Boolean);

  return {
    type: "numberedList",
    richText,
    children: parsedChildren,
  };
}
