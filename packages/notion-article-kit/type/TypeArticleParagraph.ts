import type { TypeArticleContent } from "./TypeArticleContent";
import type { TypeArticleRichText } from "./TypeArticleRichText";

export type TypeArticleParagraph = {
  type: "paragraph";
  richText: Array<TypeArticleRichText>;
  children: Array<TypeArticleContent>;
};
