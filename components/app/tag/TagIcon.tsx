import styles from "@/_scss/post/Post.module.scss";
import { getTagElement } from "@/libs/getTagElement";
import { Tag } from "@/types/Blog";

type Props = { tags: Tag[] };

export default function TagIcon({ tags }: Props) {
  return (
    <ul className={`${styles.tags}`}>
      {tags.map((tag) => {
        return getTagElement(tag, "li");
      })}
    </ul>
  );
}
