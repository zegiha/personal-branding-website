import type * as z from "zod";
import type { SchemeArticleCard } from "@/components/articleCard/schemeArticleCard";

export type TypeArticleCardProps = z.infer<typeof SchemeArticleCard>;
