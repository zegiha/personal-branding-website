import * as z from "zod";

export const SchemeArticleCard = z.object({
  coverUrl: z.string(),
  headline: z.string(),
  readingTime: z.number(),
  viewCount: z.number(),
  linkUrl: z.string(),
});
