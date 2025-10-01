import * as z from "zod";
import { SchemeBadge } from "@/shared/scheme/schemeBadge";

export const SchemeSubProjectGridItem = z.array(
  z.object({
    coverUrl: z.string(),
    headline: z.string(),
    subHeadline: z.string(),
    badges: z.array(SchemeBadge),
    linkUrl: z.string(),
    linkLabel: z.string(),
    moreLinkUrl: z.string(),
  }),
);
