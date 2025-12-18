import type { Metadata } from "next";
import { ThemeProvider } from "@/theme/themeProvider";
import "./global.css";
import "./reset.css";
import { container } from "./st.css";
import { QueryClientLayout } from "@/components/layout/QueryClientLayout";
import { createMeta } from "@/utils/createMeta";

export const metadata: Metadata = createMeta({});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <ThemeProvider>
        <QueryClientLayout>
          <main className={container}>{children}</main>
        </QueryClientLayout>
      </ThemeProvider>
    </html>
  );
}
