'use server'

import {cookies} from "next/headers";

export async function changeTheme(theme: 'light' | 'dark') {
  const cookieStore = await cookies();
  cookieStore.set('theme', theme);
  return theme
}