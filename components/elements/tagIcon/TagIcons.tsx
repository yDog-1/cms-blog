import styles from "@/_scss/post/Post.module.scss";
import TagIcon from "@/components/elements/tagIcon/TagIcon";
import { Tag } from "@/types/Tag";

type Props = { tags: Tag[] };

export default function TagIcons({ tags }: Props) {
  return (
    <ul className={`${styles.tags}`}>
      {tags.map((tag) => {
        return <TagIcon key={tag} tag={tag} CustomTag="li" />;
      })}
    </ul>
  );
}
