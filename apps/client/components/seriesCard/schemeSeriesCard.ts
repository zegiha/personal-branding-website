import * as z from "zod";

export const SchemeSeriesCard = z.object({
  coverUrl: z.string(),
  name: z.string(),
  description: z.string(),
  involvedSeriesNumber: z.optional(z.number()),
  involvedArticleNumber: z.optional(z.number()),
  linkUrl: z.string(),
});
