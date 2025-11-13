"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNotionCalloutToArticleCallout = parseNotionCalloutToArticleCallout;
const parseNotionRichTextToArticleRichText_1 = require("./parseNotionRichTextToArticleRichText");
function parseNotionCalloutToArticleCallout(notion) {
    const richText = notion.callout.rich_text
        .map((v) => (0, parseNotionRichTextToArticleRichText_1.parseNotionRichTextToArticleRichText)(v))
        .filter((v) => v !== undefined);
    const emoji = notion.callout.icon?.type === "emoji" ? notion.callout.icon.emoji : undefined;
    return {
        type: "callout",
        richText,
        emoji,
    };
}
