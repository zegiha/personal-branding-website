import { BlockMath } from "react-katex";
import { Col, Row } from "../../../../foundation";
import type { TypeArticleEquation } from "../../type";
import st from "./style.module.css";

export function ArticleEquation({ text }: TypeArticleEquation) {
  return (
    <Col className={st.container} gap={20} alignItems="center">
      <Row className={st.equationBlock} justifyContent={"center"}>
        <BlockMath math={text} />
      </Row>
    </Col>
  );
}
