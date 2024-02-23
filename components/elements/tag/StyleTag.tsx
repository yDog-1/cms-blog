"use client";
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
    <div className="*:m-0">
      <style jsx>
        {`
          div {
            background-color: ${tag.hsl};
            color: ${textColor};
          }
        `}
      </style>
      {children}
    </div>
  );
}
