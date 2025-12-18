import axios from "~/utils/axios";
import type { Route } from "../article/+types/databaseDetail";
import { ArticleDatabaseDetailSection } from "~/widget/articleDatabaseDetail/articleDatabaseDetailSection";

export async function loader({ params, request }: Route.LoaderArgs) {
  try {
    const { path, id } = params;
    const cookies = request.headers.get("cookie") || "";

    return await axios
      .get(`/notion/page/${path}/${id}`, {
        headers: { Cookie: cookies },
      })
      .then((res) => res.data);
  } catch (e) {
    console.error("[DATABASE_DETAIL_PAGE] Loader Error", e);
    return null;
  }
}

export default function DatabaseDetailPage({
  loaderData,
}: Route.ComponentProps) {
  if (loaderData === null) return <h1>API failed</h1>;
  return <ArticleDatabaseDetailSection data={loaderData as any} />;
}
