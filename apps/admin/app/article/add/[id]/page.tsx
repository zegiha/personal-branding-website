"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { Button } from "ui-kit/atom";
import { Col, Row } from "ui-kit/foundation";
import { createArticleByIdAction } from "@/app/article/add/[id]/createArticleByIdAction";
import st from "./style.module.css";

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { id } = useParams<{ id: string }>();
  const searchParam = useSearchParams();
  const title = searchParam.get("title");
  const tags = searchParam.get("tags")?.split(" ");
  const [content, setContent] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  if (title === undefined || title === null || tags === undefined || tags === null) {
    alert("돌아가라");
    return <>돌아가라</>;
  }

  return (
    <Col className={st.inputSection} width={"fill-width"} alignItems={"center"}>
      <Col className={st.inputSectionWrapper} width={"fill-width"} gap={16}>
        <Row
          className={st.inputContainer}
          width={"fill-width"}
          alignItems={"center"}
          gap={4}
          onClick={() => inputRef.current?.focus()}
        >
          {/*<Icon iconKey={"alternate_email"} color={"weak"} size={16} />*/}
          <input
            ref={inputRef}
            className={st.input}
            type={"text"}
            placeholder={"부제목"}
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          {/*<Icon iconKey={"keyboard_arrow_down"} color={"weak"} size={16} />*/}
        </Row>
        <input
          type={"file"}
          multiple={false}
          onChange={(e) => {
            if (e.target.files === null) {
              setFile(null);
              return;
            }
            const file = e.target.files[0];
            setFile(file);
          }}
        />
        <Button
          type={"button"}
          onClick={() => {
            if (file === null || content === "") return;
            createArticleByIdAction({
              id,
              title,
              subTitle: content,
              tags,
              file,
            });
          }}
          size={"large"}
          color={"gray"}
          label={"다음"}
        />
      </Col>
    </Col>
  );
}
