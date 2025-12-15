'use client'

import {useContext, useState} from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { TypeArticleCode } from "../../type";
import { ArticleButton } from "../ArticleButton";
import { ArticleTypo } from "../ArticleTypo";
import * as st from "./style.css";
import {ArticleCodeThemeContext} from "../ArticleCodeTheme";

const languageMap = {
  "c": "c",
  "c++": "cpp",
  "html": "html",
  "css": "css",
  "scss": "scss",
  "js": "javascript",
  "ts": "typescript",
  "jsx": "jsx",
  "tsx": "tsx",
  "docker": "dockerfile",
  "python": "python",
  "sql": "sql",
  "json": "json",
} as const;

export function ArticleCode({ language, text }: TypeArticleCode) {
  const theme = useContext(ArticleCodeThemeContext)
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const syntaxLang = languageMap[language] || language;

  return (
    <div className={st.container}>
      <div className={`article-code ${st.codeBlock}`}>
        <ArticleTypo.caption.medium color="weak">{language}</ArticleTypo.caption.medium>
        <ArticleButton
          className={`copyButton ${st.copyButton}`}
          type="button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(text);
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 2000);
            } catch {
              alert("다시 시도해주세요");
            }
          }}
          label={isCopied ? "copied" : "copy"}
          leadIcon={isCopied ? "check" : "content_copy"}
        />
        <SyntaxHighlighter
          language={syntaxLang}
          style={theme === 'light' ? oneLight : oneDark}
          customStyle={{
            margin: 0,
            padding: 0,
            background: 'transparent',
            fontFamily: "'JetBrains Mono', 'Consolas', 'Monaco', monospace",
          }}
          codeTagProps={{
            style: {
              fontFamily: "'JetBrains Mono', 'Consolas', 'Monaco', monospace",
              background: 'transparent',
              textShadow: 'none',
            }
          }}
          className={st.codeContent}
        >
          {text}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
