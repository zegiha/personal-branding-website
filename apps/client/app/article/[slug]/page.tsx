'use server'

import {ClientWrap} from "@/widget/articleDetail/clientWrap";
import {ArticleEntity, ArticleEntityConst} from "@/types";
import {toCamelCase} from "@/utils";
import {getTheme} from "@/theme/utils";
import {axios} from "@/utils";

export default async function Page({
  params
}: {
  params: Promise<{
    slug: string
  }>
}) {
  const { slug } = await params
  try {
   const data = await axios(`/article/${slug}`)
     .then(data => {
       let res: Record<string, any> = ArticleEntityConst;

       Object.keys(data.data).forEach(key => {
         const articleEntityKey = toCamelCase(key);
         res[articleEntityKey] = data.data[key];
       })

       return res as ArticleEntity;
     })

    const theme = await getTheme()

    return (
      <ClientWrap {...data} theme={theme} />
    )
  } catch(error) {
    console.error(error)
    return null
  }
}