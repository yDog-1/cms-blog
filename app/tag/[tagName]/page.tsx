import TagPage from "@/features/components/TagPageList/TagPageList";
import { Tag } from "@/types/Tag";

type Props = {
  params: { tagName: Tag };
};

export default async function Page({ params: { tagName } }: Props) {
  return (
    <main className="flex flex-col">
      <TagPage tagName={tagName} />
    </main>
  );
}
