import {style, globalFontFace, globalStyle} from '@vanilla-extract/css';
import { articleTokens } from '../../tokens';

// JetBrains Mono 폰트 정의
const jetBrainsMono = 'JetBrains Mono';

globalFontFace(jetBrainsMono, {
  src: 'url(/packages/notion-article-kit/assets/font/JetBrainsMono-Medium.woff2) format("woff2")',
  fontWeight: 500,
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: articleTokens.spacing.marginTop.xnormal,
  marginBottom: articleTokens.spacing.marginBottom.strong,
});

export const codeBlock = style({
  backgroundColor: articleTokens.background.box,
  borderRadius: articleTokens.border.radius,
  padding: articleTokens.spacing.blockPadding,
  position: 'relative',
});

export const copyButton = style({
  position: 'absolute',
  top: articleTokens.spacing.blockPadding,
  right: articleTokens.spacing.blockPadding,
  opacity: 0,
  transition: 'opacity 0.12s ease-in-out',
  selectors: {
    [`${container}:hover &`]: {
      opacity: 1,
    },
  },
});

export const codeContent = style({
  fontFamily: `'${jetBrainsMono}', 'Consolas', 'Monaco', monospace !important`,
  fontSize: '16px',
  lineHeight: '1.6',
  overflowX: 'auto',
  margin: 0,
  backgroundColor: 'transparent !important',
});

globalStyle(`${codeContent} *`, {
  fontFamily: `'${jetBrainsMono}', 'Consolas', 'Monaco', monospace !important`,
})
globalStyle(`${codeContent}::-webkit-scrollbar`, {
  width: 0,
  height: 0,
});
