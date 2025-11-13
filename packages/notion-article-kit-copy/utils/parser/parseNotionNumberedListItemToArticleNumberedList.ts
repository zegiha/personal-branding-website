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
    .filter((v) => v !== undefined);

  const parsedChildren = (children || [])
    .map((v) => parseNotionBlockToArticleContent(v))
    .filter((v) => v !== undefined);

  return {
    type: "numberedList",
    richText,
    children: parsedChildren,
  };
}
