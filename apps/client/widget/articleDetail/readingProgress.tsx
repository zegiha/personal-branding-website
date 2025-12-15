'use client';

import { container, progress } from "./styles/readingProgress.css";
import {RefObject, useEffect, useState} from "react";

export function ReadingProgress({
  articleRef
}: {
  articleRef: RefObject<HTMLDivElement | null>
}) {
  const [readPercent, setReadPercent] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if(!articleRef?.current) return;

      const currentScroll = window.scrollY;
      const windowHeight = window.innerHeight;
      const articleHeight = articleRef.current.clientHeight;

      // 히어로 섹션(100vh) + 패딩(32px)을 고려한 article 시작 위치
      const heroHeight = windowHeight; // 100vh
      const paddingTop = 32;
      const articleStartPosition = heroHeight + paddingTop;

      // 화면 중앙의 위치
      const viewportCenter = currentScroll + windowHeight / 2;

      // 화면 중앙이 article 내에서 얼마나 진행되었는지 계산
      const centerInArticle = viewportCenter - articleStartPosition;

      // 읽기 진행률 계산 (0~100)
      const percent = (centerInArticle / articleHeight) * 100;
      setReadPercent(Math.max(Math.min(percent, 100), 0));
    }

    handleScroll(); // 초기 실행
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [articleRef]);

  return (
    <div className={container}>
      <div className={progress} style={{transform: `scaleX(${readPercent / 100})`}}/>
    </div>
  )
}