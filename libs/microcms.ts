import { createClient } from "microcms-js-sdk";
import type { MicroCMSDate, MicroCMSQueries } from "microcms-js-sdk";
import { notFound } from "next/navigation";

//ブログの型定義
export type Blog = {
  id: string;
  title: string;
  body: string;
} & MicroCMSDate;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    customRequestInit: {
      // 開発時はコメントアウトしたらテストが楽
      // データ取得後、１時間はキャッシュが表示される。(ISR)
      // next: { revalidate: 3600 },
    },
    endpoint: "blog",
    queries,
  });
  return listData;
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  try {
    const detailData = await client.getListDetail<Blog>({
      endpoint: "blog",
      contentId,
      queries,
    });
    return detailData;
  } catch (error) {
    console.error(error);
    notFound();
  }
};
