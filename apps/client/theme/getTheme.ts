'use server'

import {cookies} from "next/headers";

export async function getTheme() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  return (theme?.value || "light") as 'dark' | 'light';
}