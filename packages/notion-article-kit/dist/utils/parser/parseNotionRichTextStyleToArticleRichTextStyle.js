"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNotionRichTextStyleToArticleRichTextStyle = parseNotionRichTextStyleToArticleRichTextStyle;
const parseNotionApiColorToArticleRIchTextBackgroundColor_1 = require("./parseNotionApiColorToArticleRIchTextBackgroundColor");
const parseNotionApiColorToArticleRIchTextColor_1 = require("./parseNotionApiColorToArticleRIchTextColor");
function parseNotionRichTextStyleToArticleRichTextStyle(notion) {
    return {
        bold: notion.bold,
        italic: notion.italic,
        strikethrough: notion.strikethrough,
        underline: notion.underline,
        color: (0, parseNotionApiColorToArticleRIchTextColor_1.parseNotionApiColorToArticleRIchTextColor)(notion.color),
        backgroundColor: (0, parseNotionApiColorToArticleRIchTextBackgroundColor_1.parseNotionApiColorToArticleRIchTextBackgroundColor)(notion.color),
    };
}
