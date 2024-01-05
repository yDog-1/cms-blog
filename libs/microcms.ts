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
  try {
    const contents = await client
      .getList<Blog>({
        customRequestInit: {
          // データ取得後、１時間はキャッシュが表示される。(ISR)
          next: { revalidate: 3600 },
        },
        endpoint: "blog",
        queries,
      })
      .then((data) => {
        return data.contents.map((content) => {
          return localDate(content);
        });
      });
    return contents;
  } catch (error) {
    // ここのエラー処理は考える
    console.error(error);
    notFound();
  }
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  try {
    const detailData = await client
      .getListDetail<Blog>({
        endpoint: "blog",
        contentId,
        queries,
      })
      .then((data) => {
        return localDate(data);
      });
    return detailData;
  } catch (error) {
    console.error(error);
    notFound();
  }
};

// UTCを現地時間に変換・published.dateに格納
function localDate<T>(content: MicroCMSDate & Blog & T) {
  const published = (() => {
    try {
      if (!content.publishedAt) {
        throw `ブログID: ${content.id}\nエラー: 公開日が取得できませんでした。`;
      }
      const publishedDate = new Date(content.publishedAt);
      const date = `${publishedDate.getFullYear()}/${
        publishedDate.getMonth() + 1
      }/${publishedDate.getDate()}`;
      return date;
    } catch (e) {
      console.error(e);
      return "YYYY/MM/DD";
    }
  })();
  return { ...content, localPublishedAt: published };
}
