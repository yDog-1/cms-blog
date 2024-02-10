import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";

const ZenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | yDog Tech Blog",
    default: "yDog Tech Blog",
  },
  description: "フロントエンドエンジニアを目指すyDogのブログです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${ZenKakuGothicNew.className} flex min-h-screen flex-col`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
