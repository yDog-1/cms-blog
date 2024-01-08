import { getTagElement } from "@/libs/getTagElement";
import { Tag } from "@/types/Blog";

const fixTag = (tagName: string) => {
  switch (tagName) {
    case "Next-js":
      return tagName.replace("-", ".");
    default:
      return decodeURI(tagName);
  }
};

export default function TagList({ tagName }: { tagName: Tag }) {
  const fixedTagName = fixTag(tagName);
  const style = getTagElement(tagName, "div");
  return <div>{fixedTagName}</div>;
}
