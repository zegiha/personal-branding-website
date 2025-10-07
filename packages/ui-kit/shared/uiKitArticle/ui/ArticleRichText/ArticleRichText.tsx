import type { CSSProperties } from "react";
import type { TypeArticleRichText } from "../../type";
import st from "./articleRichText.module.css";

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
      <a className={st.link} href={link} style={cssStyle}>
        {content ?? ""}
      </a>
    );
  else return <span style={cssStyle}>{content ?? ""}</span>;
}
