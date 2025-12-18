import { MetadataRoute } from "next";

const BASEURL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 정적 페이지들
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASEURL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASEURL}/article`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  return staticPages;
}
