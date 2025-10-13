"use server";

import type { Client, ListBlockChildrenResponse } from "@notionhq/client";
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export async function getPageById(
  notion: Client,
  id: string,
): Promise<{
  blocks: Array<BlockObjectResponse>;
  childrenMap: { [K in string]: ListBlockChildrenResponse };
}> {
  const blocks = await notion.blocks.children.list({
    block_id: id,
  });

  const childrenMap: { [K in string]: ListBlockChildrenResponse } = {};
  await getChildrenMap(notion, blocks, childrenMap);

  return {
    blocks: blocks.results.filter((v): v is BlockObjectResponse => "type" in v),
    childrenMap,
  };
}

async function getChildrenMap(
  notion: Client,
  blocks: ListBlockChildrenResponse,
  res: { [K in string]: ListBlockChildrenResponse },
) {
  for (const v of blocks.results) {
    if (v.object === "block" && "has_children" in v && v.has_children) {
      res[v.id] = await notion.blocks.children.list({
        block_id: v.id,
      });
      await getChildrenMap(notion, res[v.id], res);
    }
  }
}
