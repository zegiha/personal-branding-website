'use client'

import { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import type { TypeArticleRichText } from "../../type";

export function ArticleRichTextEquation({ content }: TypeArticleRichText & { type: "equation" }) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current) {
      try {
        katex.render(content, spanRef.current, {
          displayMode: false,
          throwOnError: false,
        });
      } catch (error) {
        console.error('KaTeX rendering error:', error);
      }
    }
  }, [content]);

  return <span ref={spanRef} className="article-rich-text-equation" />;
}
