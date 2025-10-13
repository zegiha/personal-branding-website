import type { ListBlockChildrenResponse } from "@notionhq/client";
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleContent } from "../../type";
import { parseNotionBlockToArticleContent } from "./parseNotionBlockToArticleContent";

/**
 * Parse Notion blocks with a children map for recursive children support
 * @param blocks - Array of Notion blocks to parse
 * @param childrenMap - Map of block IDs to their children responses
 * @returns Array of parsed TypeArticleContent
 */
export function parseNotionBlocksWithChildrenMap(
  blocks: BlockObjectResponse[],
  childrenMap: { [blockId: string]: ListBlockChildrenResponse },
): TypeArticleContent[] {
  const parseBlockRecursively = (
    block: BlockObjectResponse,
  ): TypeArticleContent | undefined => {
    // Get children for this block from the map
    const childrenResponse = childrenMap[block.id];
    const childBlocks = childrenResponse?.results.filter(
      (child): child is BlockObjectResponse => child.object === "block",
    );

    // Recursively parse children first
    const parsedChildren =
      childBlocks && childBlocks.length > 0
        ? childBlocks.map(parseBlockRecursively).filter(Boolean)
        : undefined;

    // Get the basic parsed content
    const baseContent = parseNotionBlockToArticleContent(block);

    // If no base content, return undefined
    if (!baseContent) return undefined;

    // Inject recursively parsed children into blocks that support children
    if (
      parsedChildren &&
      parsedChildren.length > 0 &&
      (baseContent.type === "paragraph" ||
        baseContent.type === "bulletedList" ||
        baseContent.type === "numberedList" ||
        baseContent.type === "quote")
    ) {
      return {
        ...baseContent,
        children: parsedChildren,
      };
    }

    return baseContent;
  };

  return blocks
    .map(parseBlockRecursively)
    .filter((content): content is TypeArticleContent => content !== undefined);
}
