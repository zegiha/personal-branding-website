import type { CSSProperties } from "react";
import { styled } from "@linaria/react";
import type { TypeArticleRichText } from "../../type";
import { Fragment } from "react";
// import st from "./articleRichText.module.css";

// Linaria Styled Components
const StyledLink = styled.a`
  color: var(--article-typo-color-link);
  text-decoration: underline;
`;

export function ArticleRichText({ style, content, link }: TypeArticleRichText & { type: "text" }) {
  if (!style && !link) return <>{content ?? ""}</>;


  const cssStyle: CSSProperties = {
    fontWeight: style?.bold ? 700 : undefined,
    fontStyle: style?.italic ? "italic" : undefined,
    textDecoration: style?.underline
      ? "underline"
      : style?.strikethrough
        ? "strikethrough"
        : undefined,
    color: style?.color ? style?.color : undefined,
    backgroundColor: style?.backgroundColor ? style?.backgroundColor : undefined,
  };

  if (link)
    return (
      <StyledLink className="article-rich-text-link" href={link} style={cssStyle}>
        <EnteredText content={content} />
      </StyledLink>
    );
  else return <span className="article-rich-text" style={cssStyle}><EnteredText content={content} /></span>;
}

function EnteredText({ content }: { content: string }) {
  return <>{content.split("\n").map((line, i) => <Fragment key={i}>{line}<br /></Fragment>)}</>
}

/* ============================================
 * Previous CSS Modules Implementation
 * ============================================
 *
 * .link {
 *   color: var(--semantic-label-weak);
 *   text-decoration: underline;
 * }
 *
 * ============================================ */
