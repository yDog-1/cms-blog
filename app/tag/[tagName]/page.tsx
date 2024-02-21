import TagPage from "@/features/components/TagPageList/TagPageList";
import { Tag } from "@/types/Tag";
import { Metadata } from "next";
import { getBasicMetadata } from "@/app/metadata";

export function generateMetadata({
  params: { tagName },
}: {
  params: { tagName: string };
}): Metadata {
  const description = `${tagName}タグのついたページ一覧`;

  return getBasicMetadata({
    title: `${tagName}ページ一覧`,
    description,
    path: `/tag/${tagName}`,
  });
}

type Props = {
  params: { tagName: Tag };
};

export default async function Page({ params: { tagName } }: Props) {
  return (
    <main>
      <TagPage tagName={tagName} />
    </main>
  );
}
