"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNotionHeading3ToArticleHeadline3 = parseNotionHeading3ToArticleHeadline3;
const parseNotionRichTextToArticleRichText_1 = require("./parseNotionRichTextToArticleRichText");
function parseNotionHeading3ToArticleHeadline3(notion) {
    return {
        type: "headline3",
        richText: notion.heading_3.rich_text.map((v) => (0, parseNotionRichTextToArticleRichText_1.parseNotionRichTextToArticleRichText)(v)).filter((v) => v !== undefined),
    };
}
