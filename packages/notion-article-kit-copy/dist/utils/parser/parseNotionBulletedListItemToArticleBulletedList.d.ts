import type { BlockObjectResponse, BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleBulletedList } from "../../type";
export declare function parseNotionBulletedListItemToArticleBulletedList(notion: BulletedListItemBlockObjectResponse, children?: BlockObjectResponse[]): TypeArticleBulletedList;
