import { getDetail, getList } from "@/libs/microcms";
import styles from "@/components/post/[postId]/Post.module.scss";
import { getTagElement } from "@/libs/getTagElement";
import { parseForNext } from "./parseForNext";

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
  const parsedBody = parseForNext(post.body);

  return (
    <>
      <span className={styles.head}>
        <div>
          <p>{post.localPublishedAt}</p>
          <h1>{post.title}</h1>
          <ul className={styles.tags}>
            {post.tags.map((tag) => {
              return getTagElement(tag, "li");
            })}
          </ul>
        </div>
      </span>
      <div>
        <div className={styles.post}>{parsedBody}</div>
      </div>
    </>
  );
}
