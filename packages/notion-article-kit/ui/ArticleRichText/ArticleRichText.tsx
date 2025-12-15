import type { CSSProperties } from "react";
import type { TypeArticleRichText } from "../../type";
import { Fragment } from "react";
import * as st from "./style.css";

export function ArticleRichText({ style, content, link }: TypeArticleRichText & { type: "text" }) {
  if (!style && !link) return <>{content ?? ""}</>;

  const cssStyle: CSSProperties = {
    fontWeight: style?.bold ? 700 : undefined,
    fontStyle: style?.italic ? "italic" : undefined,
    textDecoration: style?.underline
      ? "underline"
      : style?.strikethrough
        ? "line-through"
        : undefined,
    color: style?.color ? style?.color : undefined,
    backgroundColor: style?.backgroundColor ? style?.backgroundColor : undefined,
  };

  if (link)
    return (
      <a className={`article-rich-text-link ${st.link}`} href={link} style={cssStyle}>
        <EnteredText content={content} />
      </a>
    );
  else return <span className="article-rich-text" style={cssStyle}><EnteredText content={content} /></span>;
}

function EnteredText({ content }: { content: string }) {
  return <>{content.split("\n").map((line, i) => <Fragment key={i}>{line}<br /></Fragment>)}</>
}
