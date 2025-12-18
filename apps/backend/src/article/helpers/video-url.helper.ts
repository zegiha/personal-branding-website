import type { TypeArticleContent } from 'notion-article-kit/type';

/**
 * TypeArticleContent 배열에서 재귀적으로 모든 file 타입 비디오 URL을 추출합니다.
 * @param contents 파싱된 아티클 컨텐츠 배열
 * @returns file 타입 비디오 URL 배열
 */
export function extractFileVideoUrls(contents: TypeArticleContent[]): string[] {
  const urls: string[] = [];

  for (const content of contents) {
    // 비디오 블록이면서 format이 file인 경우
    if (content.type === 'video' && content.format === 'file') {
      urls.push(content.url);
    }

    // 자식 요소가 있는 블록들 (리스트, 콜아웃 등)
    if ('children' in content && Array.isArray(content.children)) {
      urls.push(...extractFileVideoUrls(content.children));
    }
  }

  return urls;
}

/**
 * TypeArticleContent 배열에서 원본 비디오 URL을 R2 URL로 교체합니다.
 * @param contents 파싱된 아티클 컨텐츠 배열
 * @param uploadedVideos R2에 업로드된 비디오 URL 배열
 * @param originalUrls 원본 비디오 URL 배열 (순서 매칭용)
 * @returns URL이 교체된 새로운 컨텐츠 배열
 */
export function replaceVideoUrls(
  contents: TypeArticleContent[],
  uploadedVideos: string[],
  originalUrls: string[],
): TypeArticleContent[] {
  // URL 매핑 맵 생성 (원본 URL -> R2 URL)
  const urlMap = new Map<string, string>();
  originalUrls.forEach((originalUrl, index) => {
    if (uploadedVideos[index]) {
      urlMap.set(originalUrl, uploadedVideos[index]);
    }
  });

  return contents.map((content) => {
    // 비디오 블록인 경우
    if (content.type === 'video' && content.format === 'file') {
      const r2Url = urlMap.get(content.url);
      if (r2Url) {
        return {
          ...content,
          url: r2Url,
        };
      }
    }

    // 자식 요소가 있는 블록들 재귀 처리
    if ('children' in content && Array.isArray(content.children)) {
      return {
        ...content,
        children: replaceVideoUrls(
          content.children,
          uploadedVideos,
          originalUrls,
        ),
      };
    }

    return content;
  });
}
