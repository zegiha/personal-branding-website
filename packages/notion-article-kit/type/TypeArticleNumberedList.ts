import type { TypeArticleContent } from "./TypeArticleContent";
import type { TypeArticleRichText } from "./TypeArticleRichText";

export type TypeArticleNumberedList = {
  type: "numberedList";
  richText: Array<TypeArticleRichText>;
  children: Array<TypeArticleContent>;
};
