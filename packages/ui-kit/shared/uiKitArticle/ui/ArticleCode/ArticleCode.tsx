"use client";

import { useState } from "react";
import { Button } from "../../../../atom";
import { Col, Typo } from "../../../../foundation";
import type { TypeArticleCode } from "../../type";
import st from "./style.module.css";

export function ArticleCode({ language, text }: TypeArticleCode) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  return (
    <Col className={st.container}>
      <div className={st.codeBlock}>
        <Typo.label.small color={"weak"}>{language}</Typo.label.small>
        <Button
          className={st.copyButton}
          type={"button"}
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
          size={"small"}
          color={"translucent-gray"}
          label={isCopied ? "copied" : "copy"}
          leadIcon={isCopied ? "check" : "content_copy"}
        />
        <Typo.label.medium className={st.codeContent}>{text}</Typo.label.medium>
      </div>
    </Col>
  );
}
