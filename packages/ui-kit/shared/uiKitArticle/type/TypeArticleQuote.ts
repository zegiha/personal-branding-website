import type { TypeArticleContent } from "./TypeArticleContent";
import type { TypeArticleRichText } from "./TypeArticleRichText";

export type TypeArticleQuote = {
  type: "quote";
  richText: Array<TypeArticleRichText>;
  children: Array<TypeArticleContent>;
};
