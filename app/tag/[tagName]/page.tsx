import TagPage from "@/components/app/tag/[tagName]/TagPageList";
import { Tag } from "@/types/Tag";

type Props = {
  tagName: Tag;
};

export default async function Page({ tagName }: Props) {
  return (
    <main className="flex flex-col">
      <TagPage tagName={tagName} />
    </main>
  );
}
