import styles from "@/features/components/Post/Post.module.scss";
import parseToJSX from "@/libs/post/ParseToJSX";
import TagIcons from "@/components/elements/tagIcon/TagIcons";
import { Content } from "@/types/Content";

type Props = {
  post: Content;
};

export default function Post({ post }: Props) {
  const parsedBody = parseToJSX(post.body);
  return (
    <>
      <span className={styles.head}>
        <div className="*:m-3">
          <p>{post.localPublishedAt}</p>
          <h1>{post.title}</h1>
          <TagIcons tags={post.tags} />
        </div>
      </span>
      <div>
        <div className={styles.post}>{parsedBody}</div>
      </div>
    </>
  );
}
