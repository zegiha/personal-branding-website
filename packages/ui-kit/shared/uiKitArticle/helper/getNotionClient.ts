"use server";

import { Client } from "@notionhq/client";

export async function getNotionClient(notionApiToken: string) {
  return new Client({
    auth: notionApiToken,
  });
}
