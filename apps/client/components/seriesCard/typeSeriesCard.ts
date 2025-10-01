import type * as z from "zod";
import type { SchemeSeriesCard } from "@/components/seriesCard/schemeSeriesCard";

export type TypeSeriesCard = z.infer<typeof SchemeSeriesCard>;
