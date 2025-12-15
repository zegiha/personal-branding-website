import type { EquationBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleEquation } from "../../type";
export declare function parseNotionEquationToArticleEquation(notion: EquationBlockObjectResponse): TypeArticleEquation;
