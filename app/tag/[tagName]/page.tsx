import TagPage from "@/components/tag/[tagName]/TagPage";
import { Tag } from "@/types/Blog";

export default async function Page({
  params: { tagName },
}: {
  params: { tagName: Tag };
}) {
  return (
    <main className="flex flex-col">
      <TagPage tagName={tagName} />
    </main>
  );
}
