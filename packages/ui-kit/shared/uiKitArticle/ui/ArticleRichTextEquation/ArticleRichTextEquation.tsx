import { InlineKatex } from "../../../../atom";
import type { TypeArticleRichText } from "../../type";

export function ArticleRichTextEquation({ content }: TypeArticleRichText & { type: "equation" }) {
  return <InlineKatex>{`§${content}§`}</InlineKatex>;
}
