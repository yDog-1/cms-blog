import { Tag } from "@/types/Tag";
import style from "./TagPageList.module.scss";
import TopPostList from "@/components/app/TopPage";

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
        <div
          className={`${style.tag} mx-3 flex flex-col items-center md:flex-row`}
        >
          <div
            className={`${style[decodeTagName]} my-8 ml-5 w-fit rounded-md px-6 pb-3  drop-shadow-xl`}
          >
            <h1 className="text-5xl">{fixedTagName}</h1>
          </div>
          <p className="mb-3 md:mb-0 md:ml-1 md:mt-8">ページ一覧</p>
        </div>
      </div>
      <TopPostList queries={{ filters: `tags[contains]${fixedTagName}` }} />
    </>
  );
}
