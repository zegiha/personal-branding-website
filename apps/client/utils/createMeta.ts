import type { Metadata } from "next";

const BASEURL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

interface CreateMetaOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  imageUrl?: string;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
}

export function createMeta({
  title = "Zegiha",
  description = "Zegiha's personal branding website",
  keywords = ["Zegiha", "personal branding", "portfolio", "blog"],
  imageUrl,
  type = "website",
  publishedTime,
  tags = [],
}: CreateMetaOptions): Metadata {
  const ogImage = imageUrl ? imageUrl : `https://cdn.zegiha.work/og-image.webp`;
  return {
    title: title,
    description,
    keywords: [...keywords, ...tags],
    openGraph: {
      title: title,
      description,
      siteName: title,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === "article" &&
        publishedTime && {
          publishedTime,
          tags,
        }),
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description,
      images: [ogImage],
    },
  };
}
