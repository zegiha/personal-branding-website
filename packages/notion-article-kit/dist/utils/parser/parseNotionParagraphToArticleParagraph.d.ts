import type { BlockObjectResponse, ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleParagraph } from "../../type";
export declare function parseNotionParagraphToArticleParagraph(notion: ParagraphBlockObjectResponse, children?: BlockObjectResponse[]): TypeArticleParagraph;
