import type { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleCode } from "../../type";
import { parseNotionLanguageToArticleCodeLanguage } from "./parseNotionLanguageToArticleCodeLanguage";
import { parseNotionRichTextToArticleRichText } from "./parseNotionRichTextToArticleRichText";

export function parseNotionCodeToArticleCode(
  notion: CodeBlockObjectResponse,
): TypeArticleCode | undefined {
  const language = parseNotionLanguageToArticleCodeLanguage(notion.code.language);

  if (!language) {
    return undefined;
  }

  const richTextArray = notion.code.rich_text
    .map((v) => parseNotionRichTextToArticleRichText(v))
    .filter(Boolean);

  const text = richTextArray.map((v) => v.content).join("");

  return {
    type: "code",
    language,
    text,
  };
}
