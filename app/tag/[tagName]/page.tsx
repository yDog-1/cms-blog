import TagList from "@/components/tag/[tagName]/TagPage";
import { Tag } from "@/types/Blog";

export default async function Page({
  params: { tagName },
}: {
  params: { tagName: Tag };
}) {
  return (
    <main className="flex flex-col">
      <TagList tagName={tagName} />
    </main>
  );
}
