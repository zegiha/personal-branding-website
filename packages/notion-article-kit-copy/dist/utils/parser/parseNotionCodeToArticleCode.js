"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNotionCodeToArticleCode = parseNotionCodeToArticleCode;
const parseNotionLanguageToArticleCodeLanguage_1 = require("./parseNotionLanguageToArticleCodeLanguage");
const parseNotionRichTextToArticleRichText_1 = require("./parseNotionRichTextToArticleRichText");
function parseNotionCodeToArticleCode(notion) {
    const language = (0, parseNotionLanguageToArticleCodeLanguage_1.parseNotionLanguageToArticleCodeLanguage)(notion.code.language);
    if (!language) {
        return undefined;
    }
    const richTextArray = notion.code.rich_text
        .map((v) => (0, parseNotionRichTextToArticleRichText_1.parseNotionRichTextToArticleRichText)(v))
        .filter((v) => v !== undefined);
    const text = richTextArray.map((v) => v.content).join("");
    return {
        type: "code",
        language,
        text,
    };
}
