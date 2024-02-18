import Post from "@/features/components/Post/Post";
import { getDetail, getList } from "@/libs/microcms";
import constantMetadata from "@/app/constantMetadata";
import { Metadata } from "next";

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

  return {
    ...constantMetadata,
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      url: `/post/${post.id}`,
      images: {
        url: "/opengraph-image.png?862c688aad63163e",
        width: 640,
        height: 640,
      },
    },
    twitter: {
      title: post.title,
      description,
    },
    alternates: {
      canonical: `/post/${post.id}`,
    },
  };
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
