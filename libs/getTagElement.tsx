import { Tag } from "@/types/Blog";
import styles from "@/components/post/[postId]/Post.module.scss";
import Link from "next/link";

export function getTagElement(tag: Tag) {
  // . があれば - にする
  const language = tag.includes(".") ? tag.replace(".", "-") : tag;
  return (
    <li key={tag} className={styles[language]}>
      <Link href={`/tag/${language}`}>{tag}</Link>
    </li>
  );
}
