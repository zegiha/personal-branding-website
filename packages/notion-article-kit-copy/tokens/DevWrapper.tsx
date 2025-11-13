import type { ReactNode } from "react";
import { articleTokens } from "./article-tokens";

interface DevWrapperProps {
  children: ReactNode;
}

/**
 * Development Wrapper for Article Tokens
 *
 * CSS 변수를 적용하기 위한 래퍼 컴포넌트
 * 이 컴포넌트를 최상위에서 한 번만 사용하면
 * 모든 하위 컴포넌트에서 CSS 변수를 상속받아 사용 가능
 */
export function DevWrapper({ children }: DevWrapperProps) {
  return <div className={articleTokens}>{children}</div>;
}
