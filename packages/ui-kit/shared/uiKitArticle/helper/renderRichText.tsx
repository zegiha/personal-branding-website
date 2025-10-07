import type { TypeArticleRichText } from "../type";
import { ArticleRichText, ArticleRichTextEquation } from "../ui";

export function renderRichText(richText: Array<TypeArticleRichText>) {
  return richText.map((v, i) => {
    switch (v.type) {
      case "text":
        return <ArticleRichText key={i} {...v} />;
      case "equation":
        return <ArticleRichTextEquation key={i} {...v} />;
      default:
        return null;
    }
  });
}
