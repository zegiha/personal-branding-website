import { createThemeContract } from '@vanilla-extract/css';

/**
 * Notion Article Kit Theme Contract
 *
 * 이 contract를 통해 소비자가 테마를 커스터마이징할 수 있습니다.
 * createTheme()을 사용하여 이 contract의 값을 오버라이드할 수 있습니다.
 */
export const articleTokens = createThemeContract({
  typography: {
    fontWeight: {
      regular: null,
      medium: null,
      bold: null,
    },
    color: {
      strong: null,
      normal: null,
      weak: null,
      link: null,
    },
    headline: {
      large: {
        fontSize: null,
        lineHeight: null,
      },
      medium: {
        fontSize: null,
        lineHeight: null,
      },
      small: {
        fontSize: null,
        lineHeight: null,
      },
    },
    label: {
      medium: {
        fontSize: null,
        lineHeight: null,
      },
    },
    caption: {
      medium: {
        fontSize: null,
        lineHeight: null,
      },
    },
  },
  spacing: {
    marginTop: {
      xxstrong: null,
      xstrong: null,
      strong: null,
      xnormal: null,
      normal: null,
    },
    marginBottom: {
      strong: null,
      normal: null,
    },
    blockPadding: null,
    nestedIndent: null,
    listContentPadding: null,
  },
  list: {
    markerWidth: null,
    markerHeight: null,
  },
  icon: {
    size: null,
  },
  border: {
    line: null,
    radius: null,
    mediaWidth: null,
    quoteWidth: null,
  },
  background: {
    box: null,
    buttonNormal: null,
    buttonHover: null,
  },
  media: {
    aspectRatio: null,
  },
});
