import type * as z from "zod";
import type { SchemeSeriesCard } from "@/components/seriesCard/schemeSeriesCard";

export type TypeSeriesCardProps = z.infer<typeof SchemeSeriesCard>;
