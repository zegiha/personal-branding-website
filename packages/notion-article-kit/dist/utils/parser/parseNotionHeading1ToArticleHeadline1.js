"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNotionHeading1ToArticleHeadline1 = parseNotionHeading1ToArticleHeadline1;
const parseNotionRichTextToArticleRichText_1 = require("./parseNotionRichTextToArticleRichText");
function parseNotionHeading1ToArticleHeadline1(notion) {
    return {
        type: "headline1",
        richText: notion.heading_1.rich_text.map((v) => (0, parseNotionRichTextToArticleRichText_1.parseNotionRichTextToArticleRichText)(v)).filter((v) => v !== undefined),
    };
}
