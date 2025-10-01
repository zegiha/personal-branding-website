import { Col, Typo } from "ui-kit/foundation";

export function ContentColumn({
  category,
  contents,
}: {
  category: string;
  contents: Array<{
    url?: string;
    label: string;
  }>;
}) {
  return (
    <Col gap={12}>
      <Typo.label.small color={"strong"}>{category}</Typo.label.small>
      {contents.map((v, i) =>
        v.url ? (
          <a key={i} href={v.url} style={{ color: "var(--semantic-label-weak" }}>
            <Typo.label.small color={"weak"}>{v.label}</Typo.label.small>
          </a>
        ) : (
          <Typo.label.small key={i} color={"weak"}>
            {v.label}
          </Typo.label.small>
        ),
      )}
    </Col>
  );
}
