import type { Metadata } from "next";
import "./globals.css";
import "design-kit";
import { jetbrainsMono, pretendard } from "design-kit";
import { getDesignKitClass } from "design-kit/server";

export const metadata: Metadata = {
  title: "Zegiha",
  description: "Zegiha's website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const designKitClass = await getDesignKitClass();

  return (
    <html
      lang="ko"
      className={`${designKitClass} ${pretendard.className} ${jetbrainsMono.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
