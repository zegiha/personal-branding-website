import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleContent } from "../../type";
export declare function parseNotionBlockToArticleContent(notion: BlockObjectResponse, children?: BlockObjectResponse[]): TypeArticleContent | undefined;
