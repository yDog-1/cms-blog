import { getDetail, getList } from "@/libs/microcms";
import parse from "html-react-parser";
import styles from "@/components/post/[postId]/Post.module.scss";

export async function generateStaticParams() {
  const contents = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function Post({ postId }: { postId: string }) {
  const post = await getDetail(postId);

  return (
    <main className={`${styles.main} container mx-auto flex-1 md:w-2/3`}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className="flex justify-end">
        <p>公開日</p>
        <p className="ml-4">{post.published.date}</p>
      </div>
      <div className={styles.postBody}>{parse(post.body)}</div>
    </main>
  );
}
