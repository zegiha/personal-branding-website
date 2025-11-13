"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNotionQuoteToArticleQuote = parseNotionQuoteToArticleQuote;
const parseNotionBlockToArticleContent_1 = require("./parseNotionBlockToArticleContent");
const parseNotionRichTextToArticleRichText_1 = require("./parseNotionRichTextToArticleRichText");
function parseNotionQuoteToArticleQuote(notion, children) {
    const richText = notion.quote.rich_text
        .map((v) => (0, parseNotionRichTextToArticleRichText_1.parseNotionRichTextToArticleRichText)(v))
        .filter((v) => v !== undefined);
    const parsedChildren = (children || [])
        .map((v) => (0, parseNotionBlockToArticleContent_1.parseNotionBlockToArticleContent)(v))
        .filter((v) => v !== undefined);
    return {
        type: "quote",
        richText,
        children: parsedChildren,
    };
}
