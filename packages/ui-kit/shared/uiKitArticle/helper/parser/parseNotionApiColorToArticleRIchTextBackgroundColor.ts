import type { RichTextItemResponse } from "@notionhq/client";

export function parseNotionApiColorToArticleRIchTextBackgroundColor(
  color: RichTextItemResponse["annotations"]["color"],
): undefined | string {
  switch (color) {
    case "red_background":
      return "var(--semantic-accent-translucent-red)";
    case "blue_background":
      return "var(--semantic-accent-translucent-blue)";
    case "green_background":
      return "var(--semantic-accent-translucent-green)";
    case "gray_background":
      return "var(--semantic-fill-normal)";
    case "yellow_background":
      return "var(--semantic-accent-translucent-yellow)";
    case "pink_background":
      return "var(--semantic-accent-translucent-pink)";
    default:
      return undefined;
  }
}
