"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNotionImageToArticleImage = parseNotionImageToArticleImage;
const parseNotionRichTextToArticleRichText_1 = require("./parseNotionRichTextToArticleRichText");
function parseNotionImageToArticleImage(notion) {
    const url = notion.image.type === "external"
        ? notion.image.external.url
        : notion.image.file.url;
    const captionRichText = notion.image.caption
        .map((v) => (0, parseNotionRichTextToArticleRichText_1.parseNotionRichTextToArticleRichText)(v))
        .filter((v) => v !== undefined);
    const caption = captionRichText.map((v) => v.content).join("");
    return {
        type: "image",
        url,
        alt: caption || "",
        width: 0,
        height: 0,
        caption: caption || undefined,
    };
}
