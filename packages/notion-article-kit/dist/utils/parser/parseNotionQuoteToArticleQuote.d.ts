import type { BlockObjectResponse, QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { TypeArticleQuote } from "../../type";
export declare function parseNotionQuoteToArticleQuote(notion: QuoteBlockObjectResponse, children?: BlockObjectResponse[]): TypeArticleQuote;
