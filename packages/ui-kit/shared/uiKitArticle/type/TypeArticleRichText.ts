import type { TypeArticleRichTextStyle } from "./TypeArticleRichTextStyle";

export type TypeArticleRichText =
  | {
      type: "text";
      style: TypeArticleRichTextStyle;
      content?: string;
      link?: string;
    }
  | {
      type: "equation";
      content?: string;
    };
