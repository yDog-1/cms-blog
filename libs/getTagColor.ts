import { Tag } from "@/types/Blog";

export default function getTagColor(tag: Tag) {
  const lTex = "text-slate-50";
  switch (tag) {
    case "Next.js":
      return `bg-slate-800 ${lTex}`;
    case "Javascript":
      return `bg-yellow-500`;
    case "Typescript":
      return `bg-blue-500 ${lTex}`;
    case "microCMS":
      return `bg-slate-700 ${lTex}`;
    case "tailwindcss":
      return `bg-sky-500 ${lTex}`;
    case "Notion":
      return `bg-slate-900 ${lTex}`;
    case "scss":
      return `bg-fuchsia-400 ${lTex}`;
    default:
      return "bg-red-500";
  }
}
