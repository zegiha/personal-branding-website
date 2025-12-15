import type { TypeArticleContent } from 'notion-article-kit/type';
import type { ImageResponseDto } from '../../file/dto/response/image.response.dto';

/**
 * TypeArticleContent 배열에서 재귀적으로 모든 Notion file 타입 이미지 URL을 추출합니다.
 * @param contents 파싱된 아티클 컨텐츠 배열
 * @returns Notion file URL 배열
 */
export function extractNotionImageUrls(
  contents: TypeArticleContent[],
): string[] {
  const urls: string[] = [];

  for (const content of contents) {
    // 이미지 블록인 경우
    if (content.type === 'image') {
      // Notion file URL은 'https://prod-files-secure.s3' 형식으로 시작
      if (content.url.startsWith('https://prod-files-secure.s3')) {
        urls.push(content.url);
      }
    }

    // 자식 요소가 있는 블록들 (리스트, 콜아웃 등)
    if ('children' in content && Array.isArray(content.children)) {
      urls.push(...extractNotionImageUrls(content.children));
    }
  }

  return urls;
}

/**
 * TypeArticleContent 배열에서 Notion URL을 R2 URL로 교체하고 이미지 크기를 업데이트합니다.
 * @param contents 파싱된 아티클 컨텐츠 배열
 * @param uploadedImages R2에 업로드된 이미지 정보 배열
 * @param notionUrls 원본 Notion URL 배열 (순서 매칭용)
 * @returns URL이 교체된 새로운 컨텐츠 배열
 */
export function replaceImageUrls(
  contents: TypeArticleContent[],
  uploadedImages: ImageResponseDto[],
  notionUrls: string[],
): TypeArticleContent[] {
  // URL 매핑 맵 생성 (Notion URL -> R2 이미지 정보)
  const urlMap = new Map<string, ImageResponseDto>();
  notionUrls.forEach((notionUrl, index) => {
    if (uploadedImages[index]) {
      urlMap.set(notionUrl, uploadedImages[index]);
    }
  });

  return contents.map((content) => {
    // 이미지 블록인 경우
    if (content.type === 'image') {
      const r2Image = urlMap.get(content.url);
      if (r2Image) {
        return {
          ...content,
          url: r2Image.url,
          width: r2Image.width || content.width,
          height: r2Image.height || content.height,
        };
      }
    }

    // 자식 요소가 있는 블록들 재귀 처리
    if ('children' in content && Array.isArray(content.children)) {
      return {
        ...content,
        children: replaceImageUrls(
          content.children,
          uploadedImages,
          notionUrls,
        ),
      };
    }

    return content;
  });
}
