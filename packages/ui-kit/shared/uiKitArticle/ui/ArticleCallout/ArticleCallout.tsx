import { Col, Row, Typo } from "../../../../foundation";
import { renderRichText } from "../../helper";
import type { TypeArticleCallout } from "../../type";
import st from "./style.module.css";

export function ArticleCallout({ richText, emoji }: TypeArticleCallout) {
  return (
    <Col className={st.container}>
      <Row className={st.calloutBlock} width={"fill-width"} gap={8} alignItems="center">
        {emoji && <Typo.label.medium className={st.emoji}>{emoji}</Typo.label.medium>}
        <Typo.label.medium isMarkdown={true}>
          {renderRichText(richText)}
        </Typo.label.medium>
      </Row>
    </Col>
  );
}
