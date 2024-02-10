import Post from "@/features/components/Post/Post";
import { getDetail, getList } from "@/libs/microcms";
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

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: post.title,
    description: description,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

// 動的ルーティングを静的に生成
export async function getStaticPaths() {
  const contents = (await getList()).contents;

  const paths = contents.map((post) => {
    console.log(post.id);

    return {
      params: {
        postId: post.id,
      },
    };
  });

  return { paths: [...paths], fallback: false };
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
