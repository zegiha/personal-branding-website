"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNotionEquationToArticleEquation = parseNotionEquationToArticleEquation;
function parseNotionEquationToArticleEquation(notion) {
    return {
        type: "equation",
        text: notion.equation.expression,
    };
}
