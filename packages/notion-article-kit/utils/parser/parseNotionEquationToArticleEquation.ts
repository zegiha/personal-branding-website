import type { EquationBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleEquation } from "../../type";

export function parseNotionEquationToArticleEquation(
  notion: EquationBlockObjectResponse,
): TypeArticleEquation {
  return {
    type: "equation",
    text: notion.equation.expression,
  };
}
