'use client'

import { useState } from "react";
import { Col } from "../shared/FlexBox";
import type { TypeArticleCode } from "../../type";
import { ArticleButton } from "../ArticleButton";
import { ArticleTypo } from "../ArticleTypo";
import st from "./style.module.css";

export function ArticleCode({ language, text }: TypeArticleCode) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  return (
    <Col className={st.container}>
      <div className={`article-code ${st.codeBlock}`}>
        <ArticleTypo.caption.medium $color={"weak"}>{language}</ArticleTypo.caption.medium>
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
        <ArticleTypo.label.medium className={st.codeContent}>{text}</ArticleTypo.label.medium>
      </div>
    </Col>
  );
}

/* ============================================
 * Previous CSS Modules Implementation
 * ============================================
 *
 * .container {
 *   padding: 12px;
 * }
 *
 * .codeBlock {
 *   background-color: var(--semantic-container-even);
 *   border-radius: var(--article-radius);
 *   padding: 24px;
 *   position: relative;
 * }
 *
 * .copyButton {
 *   position: absolute;
 *   top: 24px;
 *   right: 24px;
 *   transition: opacity var(--motion-duration-xfast) var(--motion-timing-linear);
 *   opacity: 0;
 * }
 * .container:hover .copyButton {
 *   opacity: 1;
 * }
 *
 * .codeContent {
 *   margin: 0;
 *   white-space: pre-wrap;
 * }
 *
 * ============================================ */
