import { Tag } from "@/types/Blog";
import styles from "@/_scss/post/Post.module.scss";
import Link from "next/link";

export function getTagElement(tag: Tag, CustomTag: "li" | "div") {
  const language = tag;
  const tagStyle = tag.replace(".", "-");
  return (
    <CustomTag key={tag} className={styles[tagStyle]}>
      <Link href={`/tag/${language}`}>{tag}</Link>
    </CustomTag>
  );
}
