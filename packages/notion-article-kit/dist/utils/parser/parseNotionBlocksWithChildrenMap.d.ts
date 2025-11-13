import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleContent } from "../../type";
/**
 * Parse Notion blocks with a children map for recursive children support
 * @param blocks - Array of Notion blocks to parse
 * @param childMap - Map of block IDs to their child block IDs
 * @returns Array of parsed TypeArticleContent
 */
export declare function parseNotionBlocksWithChildrenMap(blocks: BlockObjectResponse[], childMap: Record<string, Array<string>>): TypeArticleContent[];
