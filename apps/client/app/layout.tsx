import type { Metadata } from "next";
import "./globals.css";
import "design-kit"
import { getThemeFromServer, getThemeModeFromServer } from "design-kit/server";

export const metadata: Metadata = {
  title: "Zegiha",
  description: "Zegiha's website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getThemeFromServer()
  const themeMode = await getThemeModeFromServer()

  return (
    <html lang="ko" className={`${theme}-palette ${theme}-${themeMode}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
