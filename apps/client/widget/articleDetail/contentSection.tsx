'use client'

import { Section } from "@/components";
import {
  section,
  contentContainer,
} from "./styles/contentSection.css";
import {RefObject, useEffect} from "react";
import {
  articleDefaultLightTheme,
  articleDefaultDarkTheme,
  RenderArticleContent,
  TypeArticleContent,
  numbering,
  ArticleCodeTheme,
} from "notion-article-kit";
import { cn } from "@/utils";
import { ArticleEntity } from "@/types";
import { Nav } from "./Nav";
import { LikeAndShareButtonGroup } from "./LikeAndShareButtonGroup";

type ContentSectionProps = {
  articleRef: RefObject<HTMLDivElement | null>
  content: Array<TypeArticleContent | undefined>;
  theme: 'light' | 'dark'
} & Pick<ArticleEntity, 'id' | 'title' | 'likeCount' | 'shareCount'>

export function ContentSection({
  articleRef,
  content,
  id,
  title,
  likeCount,
  shareCount,
  theme,
}: ContentSectionProps) {
  useEffect(() => {
    if(!articleRef?.current) return
    numbering({ target: articleRef.current.childNodes })
  }, [])
  return (
    <Section className={cn(section)}>
      <article ref={articleRef} className={cn(contentContainer, theme === 'light' ? articleDefaultLightTheme : articleDefaultDarkTheme)}>
        <ArticleCodeTheme theme={theme}>
          <RenderArticleContent contents={content}/>
        </ArticleCodeTheme>
      </article>
      {/* 좋아요/공유 버튼 그룹 */}
      <LikeAndShareButtonGroup
        id={id}
        title={title}
        likeCount={likeCount}
        shareCount={shareCount}
      />

      {/* 게시글 네비게이션 */}
      <Nav articleRef={articleRef} content={content} />
    </Section>
  )
}