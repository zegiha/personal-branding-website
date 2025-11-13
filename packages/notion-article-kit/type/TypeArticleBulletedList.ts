import type { TypeArticleContent } from "./TypeArticleContent";
import type { TypeArticleRichText } from "./TypeArticleRichText";

export type TypeArticleBulletedList = {
  type: "bulletedList";
  richText: Array<TypeArticleRichText>;
  children: Array<TypeArticleContent>;
};
