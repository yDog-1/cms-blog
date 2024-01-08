import Post from "@/components/post/[postId]/Post";
import { getDetail } from "@/libs/microcms";
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

export default async function Page({
  params: { postId },
}: {
  params: { postId: string };
}) {
  return <Post postId={postId} />;
}
