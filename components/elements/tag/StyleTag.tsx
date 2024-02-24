import { notFound } from "next/navigation";
import { tagColors } from "./tagColors";

const blackText = "#0f172a";
const whiteText = "#f8fafc";

export default function StyleTag({
  children,
  tagName,
}: {
  children: React.ReactNode;
  tagName: string;
}) {
  const tag = tagColors.find((tag) => tag.tag === tagName);
  if (tag === undefined) return notFound();
  const textColor = tag.isBlackText ? blackText : whiteText;
  return (
    <div
      style={{
        backgroundColor: `${tag.hsl}`,
        color: `${textColor}`,
      }}
    >
      {children}
    </div>
  );
}
