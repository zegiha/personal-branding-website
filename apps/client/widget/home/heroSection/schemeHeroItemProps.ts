import * as z from "zod";

export const SchemeHeroItemProps = z.array(
  z.object({
    bannerUrl: z.string(),
    headline: z.string(),
    subHeadline: z.string(),
    linkUrl: z.string(),
    linkLabel: z.string(),
  }),
);
