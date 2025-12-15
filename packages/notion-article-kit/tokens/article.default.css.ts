import { createTheme } from '@vanilla-extract/css';
import { articleTokens } from './article.contract.css';

/**
 * Notion Article Kit 기본 테마
 *
 * 기존 Linaria article-tokens.ts의 값을 vanilla-extract로 변환한 기본 테마입니다.
 */
export const articleDefaultLightTheme = createTheme(articleTokens, {
  typography: {
    fontWeight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    color: {
      strong: '#1F1F1F',
      normal: '#474747',
      weak: '#999999',
      link: '#2289F0',
    },
    headline: {
      large: {
        fontSize: '32px',
        lineHeight: '54px',
      },
      medium: {
        fontSize: '26px',
        lineHeight: '44px',
      },
      small: {
        fontSize: '20px',
        lineHeight: '34px',
      },
    },
    label: {
      medium: {
        fontSize: '16px',
        lineHeight: '28px',
      },
    },
    caption: {
      medium: {
        fontSize: '14px',
        lineHeight: '24px',
      },
    },
  },
  spacing: {
    marginTop: {
      xxstrong: '24px',
      xstrong: '20px',
      strong: '16px',
      xnormal: '12px',
      normal: '6px',
    },
    marginBottom: {
      strong: '12px',
      normal: '6px',
    },
    blockPadding: '24px',
    nestedIndent: '24px',
    listContentPadding: '6px',
  },
  list: {
    markerWidth: '24px',
    markerHeight: '27px',
  },
  icon: {
    size: '24px',
  },
  border: {
    line: 'rgba(163, 163, 163, 0.24)',
    radius: '16px',
    mediaWidth: '1px',
    quoteWidth: '2px',
  },
  background: {
    box: '#F5F5F5',
    buttonNormal: 'rgba(163, 163, 163, 0.16)',
    buttonHover: 'rgba(163, 163, 163, 0.24)',
  },
  media: {
    aspectRatio: '16/9',
  },
});

export const articleDefaultDarkTheme = createTheme(articleTokens, {
   typography: {
    fontWeight: {
      regular: '400',
      medium: '500',
      bold: '700',
    },
    color: {
      strong: '#FFFFFF',
      normal: '#E6E6E6',
      weak: '#999999',
      link: '#2289F0',
    },
    headline: {
      large: {
        fontSize: '32px',
        lineHeight: '54px',
      },
      medium: {
        fontSize: '26px',
        lineHeight: '44px',
      },
      small: {
        fontSize: '20px',
        lineHeight: '34px',
      },
    },
    label: {
      medium: {
        fontSize: '16px',
        lineHeight: '28px',
      },
    },
    caption: {
      medium: {
        fontSize: '14px',
        lineHeight: '24px',
      },
    },
  },
  spacing: {
    marginTop: {
      xxstrong: '24px',
      xstrong: '20px',
      strong: '16px',
      xnormal: '12px',
      normal: '6px',
    },
    marginBottom: {
      strong: '12px',
      normal: '6px',
    },
    blockPadding: '24px',
    nestedIndent: '24px',
    listContentPadding: '6px',
  },
  list: {
    markerWidth: '24px',
    markerHeight: '27px',
  },
  icon: {
    size: '24px',
  },
  border: {
    line: 'rgba(163, 163, 163, 0.24)',
    radius: '16px',
    mediaWidth: '1px',
    quoteWidth: '2px',
  },
  background: {
    box: '#1A1A1A',
    buttonNormal: 'rgba(163, 163, 163, 0.16)',
    buttonHover: 'rgba(163, 163, 163, 0.24)',
  },
  media: {
    aspectRatio: '16/9',
  },
})
