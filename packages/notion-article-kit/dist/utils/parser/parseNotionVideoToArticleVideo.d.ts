import type { VideoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleVideo } from "../../type";
export declare function parseNotionVideoToArticleVideo(notion: VideoBlockObjectResponse): TypeArticleVideo;
export declare function toYouTubeEmbedUrl(url: string): string | null;
export declare function isVideoFileUrl(url: string): boolean;
