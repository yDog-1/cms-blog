import { Blog } from "@/types/Blog";
import { Content } from "@/types/Content";
import { createClient } from "microcms-js-sdk";
import type {
  CustomRequestInit,
  MicroCMSDate,
  MicroCMSQueries,
} from "microcms-js-sdk";
import { notFound } from "next/navigation";

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
export async function getList(
  queries?: MicroCMSQueries,
  customRequestInit: CustomRequestInit = { cache: "no-store" }
): Promise<{ contents: Content[]; totalCount: number }> {
  try {
    const { contents, totalCount } = await client
      .getList<Blog>({
        endpoint: "blog",
        queries: { limit: 10, ...queries },
        customRequestInit: customRequestInit,
      })
      .then((data) => {
        return {
          contents: data.contents.map((content) => {
            return localDate(content);
          }),
          totalCount: data.totalCount,
        };
      });
    return { contents: contents, totalCount: totalCount };
  } catch (error) {
    // ここのエラー処理は考える
    console.error(error);
    notFound();
  }
}

// ブログの詳細を取得
export async function getDetail(
  contentId: string,
  queries?: MicroCMSQueries,
  customRequestInit: CustomRequestInit = { cache: "no-store" }
): Promise<Content> {
  try {
    const detailData = await client
      .getListDetail<Blog>({
        endpoint: "blog",
        contentId,
        queries,
        customRequestInit: customRequestInit,
      })
      .then((data) => {
        return localDate(data);
      });
    return detailData;
  } catch (error) {
    console.error(error);
    notFound();
  }
}

// UTCを現地時間に変換・published.dateに格納
function localDate<T>(content: MicroCMSDate & Blog & T): Content {
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
