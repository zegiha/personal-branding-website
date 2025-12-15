import {axios, toCamelCase} from "@/utils";
import plainAxios from "axios";
import type {PaginationEntity, BlurImageEntity, ArticleSummary} from "@/types";

export async function getSortedArticleSummary ({pageParam, activeKey}: {
  pageParam: unknown;
  activeKey: string
}){
  const rawData = await axios.get(`article?limit=8&page=${pageParam}&sort=${activeKey.toLowerCase()}`)
  const withoutBlur = {
    ...rawData?.data,
    data: rawData.data.data.map((v: any) => {
      let labeledData: Record<string, any> = {}
      Object.keys(v).map((key) => {
        labeledData[toCamelCase(key)] = v[key];
      })
      return labeledData;
    })
  } as PaginationEntity<ArticleSummary>

  const withBlur = await Promise.all(withoutBlur.data.map(async (v) => {
    const blurDataUrl = await plainAxios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/placeholder?url=${v.coverImageUrl}`)
      .then(res => res.data.blurDataURL)
    return {
      ...v,
      blurDataUrl
    } as BlurImageEntity<ArticleSummary>
  }))

  return {
    ...withoutBlur,
    data: withBlur
  }
}