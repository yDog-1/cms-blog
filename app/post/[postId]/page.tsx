import Post from "@/components/app/post/[postId]/Post";
import { getDetail, getList } from "@/libs/microcms";
import { Metadata } from "next";
import styles from "@/_scss/post/Post.module.scss";

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

// 動的ルーティングを生成
export async function generateStaticParams() {
  const contents = (await getList()).contents;

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function Page({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);
  return (
    <main className={styles.main}>
      <Post post={post} />
    </main>
  );
}
