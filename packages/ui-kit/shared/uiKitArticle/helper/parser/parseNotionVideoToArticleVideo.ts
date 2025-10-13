import type { VideoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleVideo } from "../../type";
import { parseNotionRichTextToArticleRichText } from "./parseNotionRichTextToArticleRichText";

export function parseNotionVideoToArticleVideo(notion: VideoBlockObjectResponse): TypeArticleVideo {
  const url = notion.video.type === "external" ? notion.video.external.url : notion.video.file.url;

  const captionRichText = notion.video.caption
    .map((v) => parseNotionRichTextToArticleRichText(v))
    .filter(Boolean);

  const caption = captionRichText.map((v) => v.content).join("");

  if (url.includes("youtube.com")) {
    return {
      type: "video",
      format: "youtube",
      url: toYouTubeEmbedUrl(url),
      caption: caption || undefined,
    };
  } else {
    if (checkIfVideoUrl(url)) {
      return {
        type: "video",
        format: "file",
        url,
        caption: caption || undefined,
      };
    } else {
      return undefined;
    }
  }
}

export function toYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsedUrl = new URL(url);
    let videoId: string | null = null;

    // Case 1: https://www.youtube.com/watch?v=ID
    if (parsedUrl.hostname.includes("youtube.com")) {
      videoId = parsedUrl.searchParams.get("v");
    }

    // Case 2: https://youtu.be/ID
    else if (parsedUrl.hostname === "youtu.be") {
      videoId = parsedUrl.pathname.slice(1);
    }

    if (!videoId) return null;

    // t 또는 start 파라미터로 시작 시간 추출 (있으면 embed URL에 추가)
    const start =
      parsedUrl.searchParams.get("t") || parsedUrl.searchParams.get("start") || undefined;

    const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
    if (start) embedUrl.searchParams.set("start", start.replace(/s$/, "")); // "353s" → "353"

    return embedUrl.toString();
  } catch {
    return null;
  }
}

export async function checkIfVideoUrl(url: string): Promise<boolean> {
  // 1️⃣ 빠른 확장자 검사
  if (isVideoFileUrl(url)) return true;

  // 2️⃣ 서버에서 HEAD 요청 (가능한 경우)
  try {
    const res = await fetch(url, { method: "HEAD" });
    const type = res.headers.get("content-type") || "";
    return type.startsWith("video/");
  } catch {
    return false;
  }
}

export function isVideoFileUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    const pathname = parsed.pathname.toLowerCase();
    return (
      pathname.endsWith(".mp4") ||
      pathname.endsWith(".webm") ||
      pathname.endsWith(".ogg") ||
      pathname.endsWith(".mov") ||
      pathname.endsWith(".avi") ||
      pathname.endsWith(".mkv")
    );
  } catch {
    return false;
  }
}
