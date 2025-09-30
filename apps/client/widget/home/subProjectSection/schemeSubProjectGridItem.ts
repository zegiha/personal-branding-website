import { ZodEnumIconKey } from "ui-kit/foundation";
import * as z from "zod";

export const SchemeSubProjectGridItem = z.array(
  z.object({
    coverUrl: z.string(),
    headline: z.string(),
    subHeadline: z.string(),
    badges: z.array(
      z.object({
        label: z.string(),
        icon: z.optional(ZodEnumIconKey),
      }),
    ),
    linkUrl: z.string(),
    linkLabel: z.string(),
    moreLinkUrl: z.string(),
  }),
);
