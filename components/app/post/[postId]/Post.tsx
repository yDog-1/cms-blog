import styles from "@/_scss/post/Post.module.scss";
import { parseForNext } from "../../../../libs/post/parseForNext";
import TagIcon from "../../tag/TagIcon";
import { Content } from "@/types/Content";

type Props = {
  post: Content;
};

export default function Post({ post }: Props) {
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
