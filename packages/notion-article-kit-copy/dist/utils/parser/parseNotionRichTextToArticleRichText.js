"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNotionRichTextToArticleRichText = parseNotionRichTextToArticleRichText;
const parseNotionRichTextStyleToArticleRichTextStyle_1 = require("./parseNotionRichTextStyleToArticleRichTextStyle");
function parseNotionRichTextToArticleRichText(notion) {
    switch (notion.type) {
        case "equation":
            return {
                type: "equation",
                content: notion.equation.expression,
            };
        case "text":
            return {
                type: "text",
                style: (0, parseNotionRichTextStyleToArticleRichTextStyle_1.parseNotionRichTextStyleToArticleRichTextStyle)(notion.annotations),
                content: notion.text.content,
                link: notion.text.link?.url,
            };
        default:
            return undefined;
    }
}
