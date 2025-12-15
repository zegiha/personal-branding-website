import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleImage } from "../../type";
import { parseNotionRichTextToArticleRichText } from "./parseNotionRichTextToArticleRichText";

export function parseNotionImageToArticleImage(
  notion: ImageBlockObjectResponse,
): TypeArticleImage {
  let url =
    notion.image.type === "external"
      ? notion.image.external.url
      : notion.image.file.url;

  const captionRichText = notion.image.caption
    .map((v) => parseNotionRichTextToArticleRichText(v))
    .filter((v) => v !== undefined);

  const caption = captionRichText.map((v) => v.content).join("");

  return {
    type: "image",
    url,
    alt: caption || "",
    width: 0,
    height: 0,
    caption: caption || undefined,
  };
}
