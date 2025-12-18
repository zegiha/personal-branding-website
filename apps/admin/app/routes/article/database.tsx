import axios from "~/utils/axios";
import type { Route } from "../article/+types/database";
import { ArticleDatabaseSection } from "~/widget/articleDatabase/articleDatabaseSection";

export async function loader({ request }: Route.ActionArgs) {
  try {
    const cookie = request.headers.get("cookie") || "";
    const res = await axios.get("/notion/database", {
      headers: {
        Cookie: cookie,
      },
    });

    return res.data;
  } catch (e) {
    console.error("[ARTICLE_DATABASE_PAGE] Loader Error", e);
    return null;
  }
}

export default function DatabasePage({ loaderData }: Route.ComponentProps) {
  if (loaderData === null) return <>앙 API 실패띠</>;
  return <ArticleDatabaseSection data={loaderData} />;
}
