"use server";

import type { Client } from "@notionhq/client";

export async function getAllDataSourceIds(notion: Client): Promise<Array<string>> {
  try {
    return await notion
      .search({
        filter: {
          property: "object",
          value: "data_source",
        },
      })
      .then((res) => res.results)
      .then((res) => res.map((v) => v.id));
  } catch (e) {
    console.error(e);
    return [];
  }
}
