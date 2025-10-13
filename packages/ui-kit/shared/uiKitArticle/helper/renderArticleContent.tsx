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
} from "../ui";

export function renderArticleContent(contents: Array<TypeArticleContent | undefined>) {
  return contents.map((content, i) => {
    switch (content.type) {
      case "headline1":
        return <ArticleHeadline1 key={i} {...content} />;
      case "headline2":
        return <ArticleHeadline2 key={i} {...content} />;
      case "headline3":
        return <ArticleHeadline3 key={i} {...content} />;
      case "paragraph":
        return (
          <ArticleParagraph key={i} richText={content.richText}>
            {renderArticleContent(content.children)}
          </ArticleParagraph>
        );
      case "numberedList":
        return (
          <ol key={i}>
            <ArticleNumberedList richText={content.richText}>
              {renderArticleContent(content.children)}
            </ArticleNumberedList>
          </ol>
        );
      case "bulletedList":
        return (
          <ul key={i}>
            <ArticleBulletedList richText={content.richText}>
              {renderArticleContent(content.children)}
            </ArticleBulletedList>
          </ul>
        );
      case "code":
        return <ArticleCode key={i} {...content} />;
      case "callout":
        return <ArticleCallout key={i} {...content} />;
      case "image":
        return <ArticleImage key={i} {...content} />;
      case "video":
        return <ArticleVideo key={i} {...content} />;
      case "quote":
        return (
          <ArticleQuote key={i} richText={content.richText}>
            {renderArticleContent(content.children)}
          </ArticleQuote>
        );
      case "equation":
        return <ArticleEquation key={i} {...content} />;
      case "divider":
        return <ArticleDivider key={i} />;
      default:
        return null;
    }
  });
}
