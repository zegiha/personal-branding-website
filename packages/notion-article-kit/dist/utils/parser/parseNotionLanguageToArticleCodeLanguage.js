"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNotionLanguageToArticleCodeLanguage = parseNotionLanguageToArticleCodeLanguage;
function parseNotionLanguageToArticleCodeLanguage(notionLanguage) {
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
