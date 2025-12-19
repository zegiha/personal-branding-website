"use client";

import { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import type { TypeArticleEquation } from "../../type";
import * as st from "./style.css";

export function ArticleEquation({ text }: TypeArticleEquation) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(text, containerRef.current, {
          displayMode: true,
          throwOnError: false,
        });
      } catch (error) {
        console.error("KaTeX rendering error:", error);
      }
    }
  }, [text]);

  return (
    <div className={`article-equation ${st.container}`}>
      <div ref={containerRef} className={st.equationBlock} />
    </div>
  );
}
