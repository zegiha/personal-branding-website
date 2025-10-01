import * as z from "zod";
import { SchemeSeriesCard } from "@/components/seriesCard/schemeSeriesCard";

export const SchemeSerieses = z.array(SchemeSeriesCard);
