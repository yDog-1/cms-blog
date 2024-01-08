import { Tag } from "@/types/Blog";
import style from "@/components/tag/[tagName]/TagPage.module.scss";

const fixTag = (tagName: string) => {
  switch (tagName) {
    case "Next-js":
      return tagName.replace("-", ".");
    default:
      return decodeURI(tagName);
  }
};

export default function TagPage({ tagName }: { tagName: Tag }) {
  const [fixedTagName, decodeTagName] = [fixTag(tagName), decodeURI(tagName)];
  return (
    <>
      <div>
        <div
          className={`${style.tags} mx-3 flex flex-col items-center md:flex-row`}
        >
          <div
            className={`${style[decodeTagName]} my-8 ml-5 w-fit rounded-md px-6 pb-3`}
          >
            <h1 className="text-5xl">{fixedTagName}</h1>
          </div>
          <p className="mb-3 md:mb-0 md:ml-1 md:mt-8">ページ一覧</p>
        </div>
      </div>
      <span className="block flex-1 bg-white">
        <div className={`${style.container} mx-auto`}>
          <ul className="mx-3">
            <li>post</li>
            <li>post</li>
            <li>post</li>
            <li>post</li>
            <li>post</li>
            <li>post</li>
            <li>post</li>
            <li>post</li>
            <li>post</li>
            <li>post</li>
          </ul>
        </div>
      </span>
    </>
  );
}
