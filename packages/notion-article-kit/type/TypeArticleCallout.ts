import type { TypeArticleRichText } from "./TypeArticleRichText";

export type TypeArticleCallout = {
  type: "callout";
  richText: Array<TypeArticleRichText>;
  emoji?: string;
};
