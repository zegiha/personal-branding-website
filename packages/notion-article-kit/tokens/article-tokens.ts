import { css } from '@linaria/core';

/**
 * Notion Article Kit CSS Variable Tokens
 *
 * 멀티 디자인 시스템 지원을 위한 CSS 변수 정의
 * 각 디자인 시스템에서 이 변수들을 오버라이드하여 사용 가능
 */
export const articleTokens = css`
  :global(:root) {
    /* ============================================
     * Typography
     * ============================================ */

    --article-typo-font-weight-regular: 400;
    --article-typo-font-weight-medium: 500;
    --article-typo-font-weight-bold: 700;

    --article-typo-color-strong: #1F1F1F;
    --article-typo-color-normal: #474747;
    --article-typo-color-weak: #999;
    --article-typo-color-link: #2289F0;

    /* Headline */
    --article-typo-headline-large-font-size: 32px;
    --article-typo-headline-large-line-height: 54px;

    --article-typo-headline-medium-font-size: 26px;
    --article-typo-headline-medium-line-height: 44px;

    --article-typo-headline-small-font-size: 20px;
    --article-typo-headline-small-line-height: 34px;

    /* Label */
    --article-typo-label-medium-font-size: 16px;
    --article-typo-label-medium-line-height: 28px;

    /* Caption */
    --article-typo-caption-medium-font-size: 14px;
    --article-typo-caption-medium-line-height: 24px;

    --article-margin-top-xxstrong: 24px;
    --article-margin-top-xstrong: 20px;
    --article-margin-top-strong: 16px;
    --article-margin-top-xnormal: 12px;
    --article-margin-top-normal: 6px;

    --article-margin-bottom-strong: 12px;
    --article-margin-bottom-normal: 6px;
    /* Inner content blocks: Code, Callout, Quote, Equation */
    --article-block-padding: 24px;

    /* Nested children indentation */
    --article-margin-nested: 24px;

    /* List marker width */
    --article-list-marker-width: 24px;

    /* List marker height (for numbered list) */
    --article-list-marker-height: 27px;

    /* List content padding */
    --article-list-content-padding: 6px;

    /* Callout emoji, Quote icon */
    --article-icon-size: 24px;

    /* Image, Video border width */
    --article-line: rgba(163, 163, 163, 0.24);

    --article-radius: 16px;

    --article-media-aspect-ratio: 16/9; /* 9/16 * 100 */
    --article-media-border-width: 1px;

    --article-quote-border-width: 2px;

    --article-box-background-color: #F5F5F5;
    --article-box-button-background-color: rgba(163, 163, 163, 0.16);
    --article-box-button-background-color-hover: rgba(163, 163, 163, 0.24);
  }
`;
