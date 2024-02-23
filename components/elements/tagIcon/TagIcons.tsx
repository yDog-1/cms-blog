import TagIcon from "@/components/elements/tagIcon/TagIcon";
import { Tag } from "@/types/Tag";

type Props = { tags: Tag[] };

export default function TagIcons({ tags }: Props) {
  return (
    <ul className="flex flex-wrap gap-1 text-center">
      {tags.map((tag) => {
        return <TagIcon key={tag} tag={tag} />;
      })}
    </ul>
  );
}
