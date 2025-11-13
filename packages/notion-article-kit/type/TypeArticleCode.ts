export type TypeArticleCode = {
  type: "code";
  language:
    | "c"
    | "c++"
    | "html"
    | "css"
    | "scss"
    | "js"
    | "ts"
    | "jsx"
    | "tsx"
    | "docker"
    | "python"
    | "sql"
    | "json";
  text: string;
};
