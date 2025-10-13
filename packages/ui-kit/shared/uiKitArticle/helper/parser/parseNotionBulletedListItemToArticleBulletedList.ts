import type { BlockObjectResponse, BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleBulletedList } from "../../type";
import { parseNotionBlockToArticleContent } from "./parseNotionBlockToArticleContent";
import { parseNotionRichTextToArticleRichText } from "./parseNotionRichTextToArticleRichText";

export function parseNotionBulletedListItemToArticleBulletedList(
  notion: BulletedListItemBlockObjectResponse,
  children?: BlockObjectResponse[],
): TypeArticleBulletedList {
  const richText = notion.bulleted_list_item.rich_text
    .map((v) => parseNotionRichTextToArticleRichText(v))
    .filter(Boolean);

  const parsedChildren = (children || [])
    .map((v) => parseNotionBlockToArticleContent(v))
    .filter(Boolean);

  return {
    type: "bulletedList",
    richText,
    children: parsedChildren,
  };
}
