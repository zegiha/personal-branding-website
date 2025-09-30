import type * as z from "zod";
import type { SchemeHeroItemProps } from "./schemeHeroItemProps";

export type TypeHeroItemProps = z.infer<typeof SchemeHeroItemProps>[0];
