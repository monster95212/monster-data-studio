import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monster Data Studio",
  description: "数据分析、建模、可视化与报告交付服务展示网站。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
