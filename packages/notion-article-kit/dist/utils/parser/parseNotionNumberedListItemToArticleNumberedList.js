"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNotionNumberedListItemToArticleNumberedList = parseNotionNumberedListItemToArticleNumberedList;
const parseNotionBlockToArticleContent_1 = require("./parseNotionBlockToArticleContent");
const parseNotionRichTextToArticleRichText_1 = require("./parseNotionRichTextToArticleRichText");
function parseNotionNumberedListItemToArticleNumberedList(notion, children) {
    const richText = notion.numbered_list_item.rich_text
        .map((v) => (0, parseNotionRichTextToArticleRichText_1.parseNotionRichTextToArticleRichText)(v))
        .filter((v) => v !== undefined);
    const parsedChildren = (children || [])
        .map((v) => (0, parseNotionBlockToArticleContent_1.parseNotionBlockToArticleContent)(v))
        .filter((v) => v !== undefined);
    return {
        type: "numberedList",
        richText,
        children: parsedChildren,
    };
}
