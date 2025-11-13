import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleImage } from "../../type";
export declare function parseNotionImageToArticleImage(notion: ImageBlockObjectResponse): TypeArticleImage;
