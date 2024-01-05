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
    <main className={`${styles.main}`}>
      <div className={styles.post}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.time}>{post.localPublishedAt}</p>
        <div className={styles.postBody}>{parse(post.body)}</div>
      </div>
    </main>
  );
}
