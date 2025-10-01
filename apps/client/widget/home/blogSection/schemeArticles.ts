import * as z from "zod";
import { SchemeArticleCard } from "@/components/articleCard/schemeArticleCard";

export const SchemeArticles = z.array(SchemeArticleCard);
