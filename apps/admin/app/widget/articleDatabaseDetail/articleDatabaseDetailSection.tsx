import { Link } from "react-router";
import { container, wrapper, item } from "./st.css";

export function ArticleDatabaseDetailSection({
  data,
}: {
  data: Array<{
    id: string;
    notionId: string;
    tag: Array<string>;
    title: string;
  }>;
}) {
  return (
    <div className={container}>
      <div className={wrapper}>
        {data.map((v) => (
          <Link
            key={v.id}
            className={item}
            to={`/article/${v.id}?title=${v.title}&tags=${v.tag.join(",")}`}
          >
            <strong>{v.title}</strong>
            <span>Tags: {v.tag.join(", ")}</span>
            <span>Notion ID: {v.notionId}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
