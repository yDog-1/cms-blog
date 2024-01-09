import { Tag } from "@/types/Blog";
import style from "@/components/tag/[tagName]/TagPage.module.scss";
import PostList from "@/components/TopPostList";

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
            className={`${style[decodeTagName]} my-8 ml-5 w-fit rounded-md px-6 pb-3  drop-shadow-xl`}
          >
            <h1 className="text-5xl">{fixedTagName}</h1>
          </div>
          <p className="mb-3 md:mb-0 md:ml-1 md:mt-8">ページ一覧</p>
        </div>
      </div>
      <PostList queries={{ filters: `tags[contains]${fixedTagName}` }} />
    </>
  );
}
