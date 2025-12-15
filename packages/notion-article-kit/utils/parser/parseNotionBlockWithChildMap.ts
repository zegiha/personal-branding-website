import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleContent } from "../../type";
import { parseNotionBlockToArticleContent } from "./parseNotionBlockToArticleContent";

/**
 * Parse Notion blocks with a children map for recursive children support
 * @param blocks - Array of Notion blocks to parse
 * @param childMap - Map of block IDs to their child block IDs
 * @returns Array of parsed TypeArticleContent
 */
export function parseNotionBlockWithChildMap(
  blocks: BlockObjectResponse[],
  childMap: Record<string, Array<string>>,
): TypeArticleContent[] {
  // Create a map for quick block lookup by ID
  const blockMap = new Map<string, BlockObjectResponse>(
    blocks.map((block) => [block.id, block]),
  );

  // Find all block IDs that are children of other blocks
  const childBlockIds = new Set<string>(
    Object.values(childMap).flat(),
  );

  const parseBlockRecursively = (
    block: BlockObjectResponse,
  ): TypeArticleContent | undefined => {
    // Get children IDs for this block from the map
    const childBlockIds = childMap[block.id];

    // Map child IDs to actual block objects
    const childBlocks = childBlockIds
      ?.map((childId) => blockMap.get(childId))
      .filter((child): child is BlockObjectResponse => child !== undefined);

    // Recursively parse children first
    const parsedChildren =
      childBlocks && childBlocks.length > 0
        ? childBlocks.map(parseBlockRecursively).filter((v) => v !== undefined)
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

  // Only parse root blocks (blocks that are not children of any other block)
  const rootBlocks = blocks.filter((block) => !childBlockIds.has(block.id));

  return rootBlocks
    .map(parseBlockRecursively)
    .filter((content): content is TypeArticleContent => content !== undefined);
}
