'use client'

import {createContext, PropsWithChildren} from "react";

export const ArticleCodeThemeContext = createContext<'light' | 'dark'>('light')

export function ArticleCodeTheme({
  theme,
  children
}: PropsWithChildren & {
  theme: 'dark' | 'light'
}) {
  return (
    <ArticleCodeThemeContext value={theme}>
      {children}
    </ArticleCodeThemeContext>
  )
}