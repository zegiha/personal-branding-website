import type { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleCallout } from "../../type";
export declare function parseNotionCalloutToArticleCallout(notion: CalloutBlockObjectResponse): TypeArticleCallout;
