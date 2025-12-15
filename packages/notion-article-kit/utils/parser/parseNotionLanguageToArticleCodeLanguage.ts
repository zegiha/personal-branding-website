import type { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleCode } from "../../type";

export function parseNotionLanguageToArticleCodeLanguage(
  notionLanguage: CodeBlockObjectResponse["code"]["language"],
): TypeArticleCode["language"] | undefined {
  switch (notionLanguage) {
    case "c":
      return "c";
    case "c++":
      return "c++";
    case "html":
      return "html";
    case "css":
      return "css";
    case "scss":
      return "scss";
    case "javascript":
      return "js";
    case "typescript":
      return "ts";
    case "docker":
      return "docker";
    case "python":
      return "python";
    case "sql":
      return "sql";
    case "json":
      return "json";
    default:
      return undefined;
  }
}
