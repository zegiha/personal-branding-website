import type { TypeArticleRichText } from "../../type";

export function ArticleRichTextEquation({ content }: TypeArticleRichText & { type: "equation" }) {
  return <span className="article-rich-text-equation">{`§${content}§`}</span>;
}

/* ============================================
 * Previous Implementation (No CSS Changes)
 * ============================================
 *
 * This component had no CSS styling, only import
 * path was updated from ../../../../atom to sdu-kit
 *
 * ============================================ */
