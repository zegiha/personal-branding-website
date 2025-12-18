import { ClientWrap } from "@/widget/articleDetail/clientWrap";
import { ArticleEntity, ArticleEntityConst } from "@/types";
import { toCamelCase, createMeta } from "@/utils";
import { getTheme } from "@/theme/utils";
import { axios } from "@/utils";
import { Metadata } from "next";

async function getArticleData(slug: string): Promise<ArticleEntity> {
  const data = await axios(`/article/${slug}`);
  let res: Record<string, any> = ArticleEntityConst;

  Object.keys(data.data).forEach((key) => {
    const articleEntityKey = toCamelCase(key);
    res[articleEntityKey] = data.data[key];
  });

  return res as ArticleEntity;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const article = await getArticleData(slug);

    return createMeta({
      title: article.title,
      description: article.description,
      imageUrl: article.coverImageUrl,
      type: "article",
      publishedTime: article.createdAt,
      tags: article.tags,
    });
  } catch (error) {
    return createMeta({
      title: "Article Not Found",
    });
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  try {
    const data = await getArticleData(slug);
    const theme = await getTheme();

    return <ClientWrap {...data} theme={theme} />;
  } catch (error) {
    console.error(error);
    return null;
  }
}
