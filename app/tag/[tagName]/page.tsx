import TagPage from "@/features/components/TagPageList/TagPageList";
import { Tag } from "@/types/Tag";
import constantMetadata, { siteName } from "@/app/constantMetadata";
import { Metadata } from "next";

export function generateMetadata({
  params: { tagName },
}: {
  params: { tagName: string };
}): Metadata {
  const description = `${siteName}の${tagName}タグのついたページ一覧です。`;

  return {
    ...constantMetadata,
    title: `${tagName}ページ一覧`,
    description,
    openGraph: {
      title: `${tagName}ページ一覧`,
      description,
      url: `/tag/${tagName}`,
      images: {
        url: "/opengraph-image.png?862c688aad63163e",
        width: 640,
        height: 640,
      },
    },
    twitter: {
      title: `${tagName}ページ一覧`,
      description,
    },
    alternates: {
      canonical: `/tag/${tagName}`,
    },
  };
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
