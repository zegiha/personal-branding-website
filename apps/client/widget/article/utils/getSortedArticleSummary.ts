import { axios, toCamelCase } from "@/utils";
import type { PaginationEntity, ArticleSummary } from "@/types";

export async function getSortedArticleSummary({
  pageParam,
  activeKey,
}: {
  pageParam: unknown;
  activeKey: string;
}) {
  const rawData = await axios.get(
    `article?limit=8&page=${pageParam}&sort=${activeKey.toLowerCase()}`
  );
  return {
    ...rawData?.data,
    data: rawData.data.data.map((v: any) => {
      let labeledData: Record<string, any> = {};
      Object.keys(v).map((key) => {
        labeledData[toCamelCase(key)] = v[key];
      });
      return labeledData;
    }),
  } as PaginationEntity<ArticleSummary>;
}
