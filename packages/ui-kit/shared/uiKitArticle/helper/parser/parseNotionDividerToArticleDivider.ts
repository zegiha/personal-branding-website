import type { DividerBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleDivider } from "../../type";

export function parseNotionDividerToArticleDivider(
  notion: DividerBlockObjectResponse,
): TypeArticleDivider {
  return {
    type: "divider",
  };
}
