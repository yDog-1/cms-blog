import Post from "@/features/components/Post/Post";
import { getDetail, getList } from "@/libs/microcms";
import { Metadata } from "next";
import { getBasicMetadata } from "@/app/metadata";

// metadataを動的に適用
export async function generateMetadata({
  params: { postId },
}: {
  params: { postId: string };
}): Promise<Metadata> {
  // fetch data
  const post = await getDetail(postId);
  const reg = /<("[^"]*"|'[^']*'|[^'">])*>/g;
  // bodyからhtml要素を取り除いて、スペースに、連続したスペースを1つにする

  const description = post.body.replace(reg, " ").replace(/ +/g, " ");

  return getBasicMetadata({
    title: post.title,
    description,
    path: `/post/${post.id}`,
  });
}

// 動的ルーティングを静的に生成
export async function generateStaticParams() {
  const contents = (await getList()).contents;

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return paths;
}

export default async function Page({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);
  return (
    <main className=" flex flex-col items-center bg-white ">
      <Post post={post} />
    </main>
  );
}
