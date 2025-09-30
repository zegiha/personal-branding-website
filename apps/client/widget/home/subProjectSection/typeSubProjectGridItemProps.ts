import type * as z from "zod";
import type { SchemeSubProjectGridItem } from "@/widget/home/subProjectSection/schemeSubProjectGridItem";

export type TypeSubProjectGridItemProps = z.infer<typeof SchemeSubProjectGridItem>[0];
