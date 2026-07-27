import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "一句话 vs 一份文档 · 太阳系模型对比",
  description:
    "同一个需求，分别以一句模糊提示和一份详细设计文档交给多个 AI 模型，对比产出差异。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

