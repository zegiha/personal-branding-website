"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNotionHeading2ToArticleHeadline2 = parseNotionHeading2ToArticleHeadline2;
const parseNotionRichTextToArticleRichText_1 = require("./parseNotionRichTextToArticleRichText");
function parseNotionHeading2ToArticleHeadline2(notion) {
    return {
        type: "headline2",
        richText: notion.heading_2.rich_text.map((v) => (0, parseNotionRichTextToArticleRichText_1.parseNotionRichTextToArticleRichText)(v)).filter((v) => v !== undefined),
    };
}
