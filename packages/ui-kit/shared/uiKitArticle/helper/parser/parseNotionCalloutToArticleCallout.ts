import type { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleCallout } from "../../type";
import { parseNotionRichTextToArticleRichText } from "./parseNotionRichTextToArticleRichText";

export function parseNotionCalloutToArticleCallout(
  notion: CalloutBlockObjectResponse,
): TypeArticleCallout {
  const richText = notion.callout.rich_text
    .map((v) => parseNotionRichTextToArticleRichText(v))
    .filter(Boolean);

  const emoji =
    notion.callout.icon?.type === "emoji" ? notion.callout.icon.emoji : undefined;

  return {
    type: "callout",
    richText,
    emoji,
  };
}
