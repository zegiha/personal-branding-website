'use client'

import { useState } from "react";
import { Col } from "sdu-kit";
import { styled } from "@linaria/react";
import type { TypeArticleCode } from "../../type";
import { ArticleButton } from "../ArticleButton";
import { ArticleTypo } from "../ArticleTypo";
// import st from "./style.module.css";

// Linaria Styled Components
const StyledContainer = styled(Col)`
  margin-top: var(--article-margin-top-xnormal);
  margin-bottom: var(--article-margin-bottom-strong);

  &:hover .copyButton {
    opacity: 1;
  }
`;

const StyledCodeBlock = styled.div`
  background-color: var(--article-box-background-color);
  border-radius: var(--article-radius);
  padding: var(--article-block-padding);
  position: relative;
`;

const StyledCopyButton = styled(ArticleButton)`
  position: absolute;
  top: var(--article-block-padding);
  right: var(--article-block-padding);
  opacity: 0;
`;

const StyledCodeContent = styled(ArticleTypo.label.medium)`
  margin: 0;
  white-space: pre-wrap;
`;

export function ArticleCode({ language, text }: TypeArticleCode) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  return (
    <StyledContainer>
      <StyledCodeBlock className="article-code">
        <ArticleTypo.caption.medium $color={"weak"}>{language}</ArticleTypo.caption.medium>
        <StyledCopyButton
          className="copyButton"
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
        <StyledCodeContent>{text}</StyledCodeContent>
      </StyledCodeBlock>
    </StyledContainer>
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
