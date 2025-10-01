import type * as z from "zod";
import type { SchemeSeriesGridItem } from "@/components/seriesGridItem/schemeSeriesGridItem";

export type TypeSeriesGridItem = z.infer<typeof SchemeSeriesGridItem>;
