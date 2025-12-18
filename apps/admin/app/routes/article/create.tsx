import { ArticleCreateSection } from "~/widget/articleCreate/articleCreateSection";
import type { Route } from "../article/+types/create";

export default function CreateArticlePage({ params }: Route.ComponentProps) {
  return <ArticleCreateSection id={params.id} />;
}
