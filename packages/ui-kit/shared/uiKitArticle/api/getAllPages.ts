"use server";

import type { Client } from "@notionhq/client";

export async function getAllPages(
  notion: Client,
  ids: Array<string>,
): Promise<Array<{ id: string; title: string; tags: Array<string> }>> {
  try {
    return await Promise.all(
      ids.map(async (id) => {
        return await notion.dataSources
          .query({
            data_source_id: id,
            filter: {
              and: [
                {
                  property: "Status",
                  status: {
                    equals: "Published",
                  },
                },
              ],
            },
          })
          .then((res) => res.results)
          .then((res) =>
            res.map((v) => {
              if (v.object === "page" && "properties" in v && v.properties.title.type === "title") {
                const plainText = v.properties.title.title.map((v) => v.plain_text).join("");

                const tags =
                  "tag" in v.properties && "multi_select" in v.properties.tag
                    ? v.properties.tag.multi_select.map((v) => v.name)
                    : [];
                return {
                  id: v.id,
                  title: plainText,
                  tags,
                };
              } else return null;
            }),
          );
      }),
    )
      .then((v) => v.flat())
      .then((v) => v.filter((v) => v !== null));
  } catch (e) {
    console.error(e);
    return [];
  }
}
