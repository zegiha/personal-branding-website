"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNotionApiColorToArticleRIchTextBackgroundColor = parseNotionApiColorToArticleRIchTextBackgroundColor;
function parseNotionApiColorToArticleRIchTextBackgroundColor(color) {
    switch (color) {
        case "red_background":
            return "var(--semantic-accent-translucent-red)";
        case "blue_background":
            return "var(--semantic-accent-translucent-blue)";
        case "green_background":
            return "var(--semantic-accent-translucent-green)";
        case "gray_background":
            return "var(--semantic-fill-normal)";
        case "yellow_background":
            return "var(--semantic-accent-translucent-yellow)";
        case "pink_background":
            return "var(--semantic-accent-translucent-pink)";
        default:
            return undefined;
    }
}
