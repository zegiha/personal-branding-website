import classNames from "classnames";
import Link from "next/link";
import { Badge } from "ui-kit/atom";
import { Col, Row, Typo } from "ui-kit/foundation";
import { uiKitNonSolidInteractionModuleCSS } from "ui-kit/shared";
import st from "./addArticleItem.module.css";

export function AddArticleItem({
  id,
  title,
  tags,
}: {
  id: string;
  title: string;
  tags: Array<string>;
}) {
  return (
    <Link href={`/article/add/${id}?title=${title}&tags=${tags.join(" ")}`}>
      <Col
        className={classNames(st.pageItem, uiKitNonSolidInteractionModuleCSS.interaction)}
        width={"fill-width"}
        gap={8}
      >
        <Typo.label.large color={title === "" ? "weak" : "normal"}>
          {title !== "" ? title : "Not titled yet"}
        </Typo.label.large>
        <Row gap={4}>
          {tags.map((v, i) => (
            <Badge key={i} color={"translucent-gray"} label={v} />
          ))}
        </Row>
        <div
          className={classNames(
            st.fakeBackground,
            uiKitNonSolidInteractionModuleCSS.fakeBackground,
          )}
        />
      </Col>
    </Link>
  );
}
