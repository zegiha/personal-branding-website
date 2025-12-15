import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleContent } from "../../type";
import { parseNotionBulletedListItemToArticleBulletedList } from "./parseNotionBulletedListItemToArticleBulletedList";
import { parseNotionCalloutToArticleCallout } from "./parseNotionCalloutToArticleCallout";
import { parseNotionCodeToArticleCode } from "./parseNotionCodeToArticleCode";
import { parseNotionDividerToArticleDivider } from "./parseNotionDividerToArticleDivider";
import { parseNotionEquationToArticleEquation } from "./parseNotionEquationToArticleEquation";
import { parseNotionHeading1ToArticleHeadline1 } from "./parseNotionHeading1ToArticleHeadline1";
import { parseNotionHeading2ToArticleHeadline2 } from "./parseNotionHeading2ToArticleHeadline2";
import { parseNotionHeading3ToArticleHeadline3 } from "./parseNotionHeading3ToArticleHeadline3";
import { parseNotionImageToArticleImage } from "./parseNotionImageToArticleImage";
import { parseNotionNumberedListItemToArticleNumberedList } from "./parseNotionNumberedListItemToArticleNumberedList";
import { parseNotionParagraphToArticleParagraph } from "./parseNotionParagraphToArticleParagraph";
import { parseNotionQuoteToArticleQuote } from "./parseNotionQuoteToArticleQuote";
import { parseNotionVideoToArticleVideo } from "./parseNotionVideoToArticleVideo";

export function parseNotionBlockToArticleContent(
  notion: BlockObjectResponse,
  children?: BlockObjectResponse[],
): TypeArticleContent | undefined {
  switch (notion.type) {
    case "heading_1":
      return parseNotionHeading1ToArticleHeadline1(notion);
    case "heading_2":
      return parseNotionHeading2ToArticleHeadline2(notion);
    case "heading_3":
      return parseNotionHeading3ToArticleHeadline3(notion);
    case "paragraph":
      return parseNotionParagraphToArticleParagraph(notion, children);
    case "bulleted_list_item":
      return parseNotionBulletedListItemToArticleBulletedList(notion, children);
    case "numbered_list_item":
      return parseNotionNumberedListItemToArticleNumberedList(notion, children);
    case "quote":
      return parseNotionQuoteToArticleQuote(notion, children);
    case "code":
      return parseNotionCodeToArticleCode(notion);
    case "callout":
      return parseNotionCalloutToArticleCallout(notion);
    case "divider":
      return parseNotionDividerToArticleDivider(notion);
    case "equation":
      return parseNotionEquationToArticleEquation(notion);
    case "image":
      return parseNotionImageToArticleImage(notion);
    case "video":
      return parseNotionVideoToArticleVideo(notion);
    default:
      return undefined;
  }
}
