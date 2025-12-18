import { Link } from "react-router";
import { container, wrapper, item as itemCss } from "./st.css";

export function ArticleDatabaseSection({
  data,
}: {
  data: Array<{
    id: string;
    name: string;
    path: string;
  }>;
}) {
  return (
    <section className={container}>
      <div className={wrapper}>
        {data.map((item) => (
          <Link
            key={item.id}
            to={`/article/database${item.path}/${item.id}`}
            className={itemCss}
          >
            <span>
              <strong>{item.name}</strong>
            </span>
            <span>{item.path}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
