import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import constantMetadata, { siteName } from "@/app/constantMetadata";

const ZenKakuGothicNew = Zen_Kaku_Gothic_New({
  weight: "400",
  subsets: ["latin"],
});

const description = "フロントエンドエンジニアを目指すyDogのブログです。";

export const metadata: Metadata = {
  metadataBase: new URL("https://ydog-tech-blog.vercel.app/"),
  title: {
    template: `%s | ${siteName}`,
    default: siteName,
  },
  description,
  openGraph: {
    title: {
      template: `%s | ${siteName}`,
      default: siteName,
    },
    description,
    url: "/",
  },
  twitter: {
    title: {
      template: `%s | ${siteName}`,
      default: siteName,
    },
    description,
  },
  alternates: {
    canonical: "/",
  },
  ...constantMetadata,
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
