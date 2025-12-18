import { set, useForm } from "react-hook-form";
import { container, wrapper, item } from "./st.css";
import { useSearchParams } from "react-router";
import { useState } from "react";
import axios from "~/utils/axios";

type Inputs = {
  title: string;
  description: string;
  cover_image_url: string;
  tag: string;
};

export function ArticleCreateSection({ id }: { id: string }) {
  const [buttonLabel, setButtonLabel] = useState<string>("생성");
  const [searchParams] = useSearchParams();
  const { register, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      title: searchParams.get("title") ?? "",
      tag: searchParams.get("tags") ?? "",
    },
  });

  const onSubmit = async (data: Inputs) => {
    setButtonLabel("노션 블록 가져오는 중...");
    let blockAndChildMap: {
      block: any;
      childMap: Record<string, Array<string>>;
    } | null = null;

    try {
      blockAndChildMap = await axios
        .get(`/notion/block/${id}`)
        .then((res) => res.data);
      if (blockAndChildMap === null) throw new Error("No data");
    } catch (e) {
      console.error("[ARTICLE_CREATE_SECTION] Fetch Notion Data Error", e);
      alert("노션 블록을 가져오는 중에 오류가 발생했습니다.");
      setButtonLabel("생성");
      return;
    }

    setButtonLabel("읽는 시간 계산 중...");
    let plainText = "";
    (blockAndChildMap.block as Array<any>).forEach((block) => {
      const content = block[block.type];
      if (content.rich_text) {
        plainText += content.rich_text
          .map((rt: any) => rt.plain_text)
          .filter((v: any) => typeof v === "string")
          .join("\n");
      }
    });

    if (plainText.trim() === "") {
      setButtonLabel("생성");
      alert(
        "글 내용을 가져올 수 없습니다. 노션 페이지에 텍스트가 포함되어 있는지 확인해주세요."
      );
      return;
    }

    const read_time = getReadingTime(plainText);

    setButtonLabel("글 생성 중...");
    try {
      await axios.post("/article", {
        title: data.title,
        description: data.description,
        cover_image_url: data.cover_image_url,
        read_time,
        tags: data.tag.split(",").map((tag) => tag.trim()),
        block: blockAndChildMap.block,
        childMap: blockAndChildMap.childMap,
      });
    } catch (e) {
      console.error("[ARTICLE_CREATE_SECTION] Create Article Error", e);
      alert("글 생성 중에 오류가 발생했습니다.");
    } finally {
      setButtonLabel("생성");
    }
  };

  return (
    <section className={container}>
      <form className={wrapper} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className={item}
          placeholder="제목"
          {...register("title", { required: true })}
        />
        <input
          type="text"
          className={item}
          placeholder="설명"
          {...register("description", { required: true })}
        />
        <input
          type="text"
          className={item}
          placeholder="커버 이미지 URL"
          {...register("cover_image_url", { required: true })}
        />
        <input
          className={item}
          type="text"
          placeholder="태그"
          {...register("tag", { required: true })}
        />
        <button>{buttonLabel}</button>
      </form>
    </section>
  );
}

/**
 * 글 읽는 데 걸리는 시간(분) 계산
 * @param text 전체 글 문자열
 * @param charsPerMinute 분당 읽는 글자 수 (기본 500)
 */
export function getReadingTime(
  text: string,
  charsPerMinute: number = 500
): number {
  if (!text) return 0;

  const cleanText = text
    .replace(/\s+/g, "") // 공백 제거
    .replace(/[\r\n]+/g, "");

  const minutes = cleanText.length / charsPerMinute;

  return Math.max(1, Math.ceil(minutes));
}
