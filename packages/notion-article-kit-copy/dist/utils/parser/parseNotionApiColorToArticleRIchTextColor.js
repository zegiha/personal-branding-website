"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNotionApiColorToArticleRIchTextColor = parseNotionApiColorToArticleRIchTextColor;
function parseNotionApiColorToArticleRIchTextColor(color) {
    switch (color) {
        case "red":
            return "var(--semantic-accent-red)";
        case "blue":
            return "var(--semantic-accent-blue)";
        case "green":
            return "var(--semantic-accent-green)";
        case "gray":
            return "var(--semantic-label-weak)";
        case "yellow":
            return "var(--semantic-accent-yellow)";
        case "pink":
            return "var(--semantic-accent-pink)";
        default:
            return undefined;
    }
}
