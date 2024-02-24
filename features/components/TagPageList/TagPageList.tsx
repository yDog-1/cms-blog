import { Tag } from "@/types/Tag";
import TopPostList from "@/components/layouts/TopPage";
import StyleTag from "@/components/elements/tag/StyleTag";

const fixTag = (tagName: string) => {
  if (tagName.includes("-")) {
    return tagName.replace("-", ".");
  }
  return decodeURI(tagName);
};

type Props = { tagName: Tag };

export default function TagPageList({ tagName }: Props) {
  const [fixedTagName, decodeTagName] = [
    fixTag(tagName),
    decodeURI(tagName).replace(".", "-"),
  ];

  return (
    <>
      <div>
        <div className="mx-3 flex flex-col items-center md:flex-row">
          <div className="my-8 flex w-fit drop-shadow-xl *:rounded-md *:px-6 *:pb-3 md:ml-5">
            <StyleTag tagName={fixedTagName}>
              <h1 className="text-5xl">{fixedTagName}</h1>
            </StyleTag>
          </div>
          <p className="mb-3 md:mb-0 md:ml-1 md:mt-8">ページ一覧</p>
        </div>
      </div>
      <TopPostList queries={{ filters: `tags[contains]${fixedTagName}` }} />
    </>
  );
}
