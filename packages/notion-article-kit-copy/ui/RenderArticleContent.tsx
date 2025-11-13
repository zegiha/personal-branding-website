import { Col } from "./shared/FlexBox";
import type { TypeArticleContent } from "../type";
import {
  ArticleBulletedList,
  ArticleCallout,
  ArticleCode,
  ArticleDivider,
  ArticleEquation,
  ArticleHeadline1,
  ArticleHeadline2,
  ArticleHeadline3,
  ArticleImage,
  ArticleNumberedList,
  ArticleParagraph,
  ArticleQuote,
  ArticleVideo,
} from ".";
import { Fragment } from "react";

const REGISTRY = {
  headline1: ArticleHeadline1,
  headline2: ArticleHeadline2,
  headline3: ArticleHeadline3,
  paragraph: ArticleParagraph,
  numberedList: ArticleNumberedList,
  bulletedList: ArticleBulletedList,
  code: ArticleCode,
  callout: ArticleCallout,
  image: ArticleImage,
  video: ArticleVideo,
  quote: ArticleQuote,
  equation: ArticleEquation,
  divider: ArticleDivider,
} as const satisfies Record<TypeArticleContent['type'], any>;

export function RenderArticleContent({contents=[]}: {contents: Array<TypeArticleContent | undefined>}) {
  console.log('[RenderArticleContent] contents: ', contents.length, contents[0]?.type)

  if(contents.length === 0) return null;
  
  return (
    <Col className="article-content" width='fill'>
      {contents.map((v, i) => {
        const Cmp = v ? REGISTRY[v.type] : null;
        return <Fragment key={`${v?.type ?? 'none'}-${i}`}>{Cmp ? <Cmp {...v as any} /> : null}</Fragment>
      })}
    </Col>
  )
}
