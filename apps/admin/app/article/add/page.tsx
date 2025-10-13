"use server";

import { Col } from "ui-kit/foundation";
import { getAllDataSourceIds } from "ui-kit/shared/uiKitArticle/api/getAllDataSourceIds";
import { getAllPages } from "ui-kit/shared/uiKitArticle/api/getAllPages";
import { getNotionClient } from "ui-kit/shared/uiKitArticle/helper/getNotionClient";
import { AddArticleItem } from "@/widget/article/add/addArticleItem";
import st from "./page.module.css";

export default async function Page() {
  const fetching = async () => {
    const notion = await getNotionClient(process.env.NOTION_API_TOKEN ?? "");
    const ids = await getAllDataSourceIds(notion);
    return await getAllPages(notion, ids);
  };

  const data = await fetching();

  return (
    <Col className={st.container} width={"fill-width"} alignItems={"center"}>
      <Col className={st.wrapper} gap={16} width={"fill-width"}>
        {data.map((v, i) => (
          <AddArticleItem key={i} {...v} />
        ))}
      </Col>
    </Col>
  );
}
