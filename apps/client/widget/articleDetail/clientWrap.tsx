"use client";

import { useRef } from "react";
import { ArticleEntity } from "@/types";
import { ContentSection } from "@/widget/articleDetail/contentSection";
import { SectionGroup } from "@/components";
import { HeaderAndProgress } from "@/widget/articleDetail/HeaderAndProgress";
import { ArticleHeaderSection } from "@/widget/articleDetail/articleHeaderSection";

export function ClientWrap({
  content,
  ...articleHeaderSectionProps
}: ArticleEntity & { theme: "light" | "dark" }) {
  const articleRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <HeaderAndProgress articleRef={articleRef} />
      <ArticleHeaderSection {...articleHeaderSectionProps} />
      <SectionGroup backgroundColor={"odd"}>
        <ContentSection
          articleRef={articleRef}
          content={JSON.parse(content)}
          {...articleHeaderSectionProps}
        />
        <div style={{ height: "50vh" }} />
      </SectionGroup>
    </>
  );
}
