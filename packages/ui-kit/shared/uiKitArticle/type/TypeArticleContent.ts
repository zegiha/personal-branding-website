import type { TypeArticleBulletedList } from "./TypeArticleBulletedList";
import type { TypeArticleCallout } from "./TypeArticleCallout";
import type { TypeArticleCode } from "./TypeArticleCode";
import type { TypeArticleDivider } from "./TypeArticleDivider";
import type { TypeArticleEquation } from "./TypeArticleEquation";
import type { TypeArticleHeadline1 } from "./TypeArticleHeadline1";
import type { TypeArticleHeadline2 } from "./TypeArticleHeadline2";
import type { TypeArticleHeadline3 } from "./TypeArticleHeadline3";
import type { TypeArticleImage } from "./TypeArticleImage";
import type { TypeArticleNumberedList } from "./TypeArticleNumberedList";
import type { TypeArticleParagraph } from "./TypeArticleParagraph";
import type { TypeArticleQuote } from "./TypeArticleQuote";
import type { TypeArticleVideo } from "./TypeArticleVideo";

export type TypeArticleContent =
  | TypeArticleHeadline1
  | TypeArticleHeadline2
  | TypeArticleHeadline3
  | TypeArticleParagraph
  | TypeArticleNumberedList
  | TypeArticleBulletedList
  | TypeArticleCode
  | TypeArticleCallout
  | TypeArticleImage
  | TypeArticleVideo
  | TypeArticleQuote
  | TypeArticleEquation
  | TypeArticleDivider;
