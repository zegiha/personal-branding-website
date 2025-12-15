import type { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleCode } from "../../type";
export declare function parseNotionCodeToArticleCode(notion: CodeBlockObjectResponse): TypeArticleCode | undefined;
