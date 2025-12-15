/**
 * Notion Article Kit Tokens
 *
 * 소비자가 테마를 커스터마이징할 수 있도록 contract와 기본 테마를 export합니다.
 */

// Theme contract - 소비자가 createTheme()로 오버라이드 가능
export { articleTokens } from './article.contract.css';

// 기본 테마 - 바로 사용 가능
export { articleDefaultLightTheme, articleDefaultDarkTheme } from './article.default.css';
