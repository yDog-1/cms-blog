import { Tag } from "@/types/Tag";
import styles from "./TagIcon.module.scss";
import Link from "next/link";

type Props = {
  tag: Tag;
  CustomTag: "li" | "div";
};

export default function TagIcon({ tag, CustomTag }: Props) {
  const language = tag;
  const tagStyle = tag.replace(".", "-");
  return (
    <CustomTag key={tag} className={styles[tagStyle]}>
      <Link href={`/tag/${language}`}>{tag}</Link>
    </CustomTag>
  );
}
