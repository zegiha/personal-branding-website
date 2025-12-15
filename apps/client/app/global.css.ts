import { globalFontFace, globalStyle } from "@vanilla-extract/css";
import {semantic} from "@/theme/tokens";

const Pretendard = 'Pretendard';

globalStyle('*', {
  boxSizing: 'border-box',
  fontFamily: Pretendard,
})

globalStyle('*', {
  WebkitFontSmoothing: 'antialiased',
  textRendering: 'optimizeLegibility',
  shapeRendering: 'geometricPrecision',
})

globalFontFace(Pretendard, {
  src: 'url(/fonts/Pretendard-Bold.subset.woff2) format("woff2")',
  fontWeight: '700',
  fontStyle: 'normal',
})
globalFontFace(Pretendard, {
  src: 'url(/fonts/Pretendard-Medium.subset.woff2) format("woff2")',
  fontWeight: '500',
  fontStyle: 'normal',
})
globalFontFace(Pretendard, {
  src: 'url(/fonts/Pretendard-Regular.subset.woff2) format("woff2")',
  fontWeight: '400',
  fontStyle: 'normal',
})

globalStyle('body', {
  backgroundColor: semantic.container.odd
})
