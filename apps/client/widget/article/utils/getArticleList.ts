'use server'

import { axios } from "@/utils/axios";
import plainAxios from "axios";
import {toCamelCase} from "@/utils/toCamelCase";
import {ArticleSummary, BlurImageEntity, PaginationEntity} from "@/types";

export async function getArticleList({page}: {page: number}): Promise<PaginationEntity<BlurImageEntity<ArticleSummary>>> {
  const data = await axios.get(`/article?page=${page}`)
    .then(res => res.data)
    .then(res => {
      return {
        ...res,
        data: res.data.map((data: any) => {
        const res: Record<string, any> = {};
        Object.keys(data).forEach(key => {
          res[toCamelCase(key)] = data[key]
        })
        return res as ArticleSummary
      })
      }
    }) as PaginationEntity<ArticleSummary>;

  const articleSummaryWithBlurImage = await Promise.all(data.data.map(async (v) => {
    const blurDataUrl = await plainAxios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/placeholder?url=${v.coverImageUrl}`)
      .then(res => res.data.blurDataURL)
    return {
      ...v,
      blurDataUrl,
    } as BlurImageEntity<ArticleSummary>
  }))

  return {
    ...data,
    data: articleSummaryWithBlurImage
  }
}