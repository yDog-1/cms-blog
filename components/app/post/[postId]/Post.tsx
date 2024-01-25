import { getDetail, getList } from "@/libs/microcms";
import styles from "@/_scss/post/Post.module.scss";
import { parseForNext } from "../../../../libs/post/parseForNext";
import TagIcon from "../../tag/TagIcon";

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

type Props = { postId: string };

export default async function Post({ postId }: Props) {
  const post = await getDetail(postId);
  const parsedBody = parseForNext(post.body);

  return (
    <>
      <span className={styles.head}>
        <div>
          <p>{post.localPublishedAt}</p>
          <h1>{post.title}</h1>
          <TagIcon tags={post.tags} />
        </div>
      </span>
      <div>
        <div className={styles.post}>{parsedBody}</div>
      </div>
    </>
  );
}
