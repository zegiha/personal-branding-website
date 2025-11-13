"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNotionBlockToArticleContent = parseNotionBlockToArticleContent;
const parseNotionBulletedListItemToArticleBulletedList_1 = require("./parseNotionBulletedListItemToArticleBulletedList");
const parseNotionCalloutToArticleCallout_1 = require("./parseNotionCalloutToArticleCallout");
const parseNotionCodeToArticleCode_1 = require("./parseNotionCodeToArticleCode");
const parseNotionDividerToArticleDivider_1 = require("./parseNotionDividerToArticleDivider");
const parseNotionEquationToArticleEquation_1 = require("./parseNotionEquationToArticleEquation");
const parseNotionHeading1ToArticleHeadline1_1 = require("./parseNotionHeading1ToArticleHeadline1");
const parseNotionHeading2ToArticleHeadline2_1 = require("./parseNotionHeading2ToArticleHeadline2");
const parseNotionHeading3ToArticleHeadline3_1 = require("./parseNotionHeading3ToArticleHeadline3");
const parseNotionImageToArticleImage_1 = require("./parseNotionImageToArticleImage");
const parseNotionNumberedListItemToArticleNumberedList_1 = require("./parseNotionNumberedListItemToArticleNumberedList");
const parseNotionParagraphToArticleParagraph_1 = require("./parseNotionParagraphToArticleParagraph");
const parseNotionQuoteToArticleQuote_1 = require("./parseNotionQuoteToArticleQuote");
const parseNotionVideoToArticleVideo_1 = require("./parseNotionVideoToArticleVideo");
function parseNotionBlockToArticleContent(notion, children) {
    switch (notion.type) {
        case "heading_1":
            return (0, parseNotionHeading1ToArticleHeadline1_1.parseNotionHeading1ToArticleHeadline1)(notion);
        case "heading_2":
            return (0, parseNotionHeading2ToArticleHeadline2_1.parseNotionHeading2ToArticleHeadline2)(notion);
        case "heading_3":
            return (0, parseNotionHeading3ToArticleHeadline3_1.parseNotionHeading3ToArticleHeadline3)(notion);
        case "paragraph":
            return (0, parseNotionParagraphToArticleParagraph_1.parseNotionParagraphToArticleParagraph)(notion, children);
        case "bulleted_list_item":
            return (0, parseNotionBulletedListItemToArticleBulletedList_1.parseNotionBulletedListItemToArticleBulletedList)(notion, children);
        case "numbered_list_item":
            return (0, parseNotionNumberedListItemToArticleNumberedList_1.parseNotionNumberedListItemToArticleNumberedList)(notion, children);
        case "quote":
            return (0, parseNotionQuoteToArticleQuote_1.parseNotionQuoteToArticleQuote)(notion, children);
        case "code":
            return (0, parseNotionCodeToArticleCode_1.parseNotionCodeToArticleCode)(notion);
        case "callout":
            return (0, parseNotionCalloutToArticleCallout_1.parseNotionCalloutToArticleCallout)(notion);
        case "divider":
            return (0, parseNotionDividerToArticleDivider_1.parseNotionDividerToArticleDivider)(notion);
        case "equation":
            return (0, parseNotionEquationToArticleEquation_1.parseNotionEquationToArticleEquation)(notion);
        case "image":
            return (0, parseNotionImageToArticleImage_1.parseNotionImageToArticleImage)(notion);
        case "video":
            return (0, parseNotionVideoToArticleVideo_1.parseNotionVideoToArticleVideo)(notion);
        default:
            return undefined;
    }
}
