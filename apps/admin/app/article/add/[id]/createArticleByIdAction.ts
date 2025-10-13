"use server";

import {
  parseNotionBlocksWithChildrenMap,
  type TypeArticleContent,
} from "ui-kit/shared/uiKitArticle";
import { getPageById } from "ui-kit/shared/uiKitArticle/api/getPageById";
import { getNotionClient } from "ui-kit/shared/uiKitArticle/helper/getNotionClient";

export async function createArticleByIdAction({
  title,
  tags,
  subTitle,
  file,
  id,
}: {
  file: File;
  title: string;
  subTitle: string;
  tags: Array<string>;
  id: string;
}) {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch(`${process.env.BASE_URL}/api/image`, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    const coverImageUrl = res.data["url"];

    try {
      const notion = await getNotionClient(process.env.NOTION_API_TOKEN ?? "");
      const { blocks, childrenMap } = await getPageById(notion, id);

      const customBlockData = parseNotionBlocksWithChildrenMap(blocks, childrenMap);

      try {
        const uploadImage = async (blocks: Array<TypeArticleContent>) => {
          for (const v of blocks) {
            if (v.type === "image") {
              const formData = new FormData();
              formData.append("url", v.url);

              try {
                const res = await fetch(`${process.env.BASE_URL}/api/image`, {
                  method: "POST",
                  body: formData,
                }).then((res) => res.json());

                v.url = res.data.url;
                v.width = res.data.width;
                v.height = res.data.height;
              } catch (e) {
                console.error("failed to upload image", v, e);
              }
            }

            if ("children" in v) {
              await uploadImage(v.children);
            }
          }
        };

        await uploadImage(customBlockData);

        const getCharacterNumber = (blocks: Array<TypeArticleContent>) => {
          let sum: number = 0;
          for (const v of blocks) {
            if ("children" in v) {
              sum += getCharacterNumber(v.children);
            }

            if (v.type === "image" || v.type === "video" || v.type === "divider") {
            } else if (v.type === "code" || v.type === "equation") sum += v.text.length;
            else
              v.richText.forEach((v) => {
                sum += v.content.length;
              });
          }
          return sum;
        };

        const characterNumber = getCharacterNumber(customBlockData);
        // 5️⃣ 읽는 시간 계산 (평균 1분 350자)
        const avgCharsPerMinute = 350;
        const readingMinute = Math.max(1, Math.ceil(characterNumber / avgCharsPerMinute));

        try {
          return await fetch(`${process.env.BASE_URL}/api/article`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              coverImageUrl,
              title,
              subTitle,
              content: customBlockData,
              tags,
              readingMinute,
            }),
          }).then((res) => res.json());
        } catch (e) {
          console.error("failed to create article", e);
        }
      } catch (e) {
        console.error("failed to upload contents image", e);
      }
    } catch (e) {
      console.error("failed to load notion and page data", e);
    }
  } catch (e) {
    console.error("failed to upload cover image", e);
  }
}
