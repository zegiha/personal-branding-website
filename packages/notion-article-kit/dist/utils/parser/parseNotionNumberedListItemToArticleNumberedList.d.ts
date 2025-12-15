import type { BlockObjectResponse, NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleNumberedList } from "../../type";
export declare function parseNotionNumberedListItemToArticleNumberedList(notion: NumberedListItemBlockObjectResponse, children?: BlockObjectResponse[]): TypeArticleNumberedList;
