import { MicroCMSDate } from "microcms-js-sdk";

//ブログの型定義
export type Blog = {
  id: string;
  title: string;
  body: string;
  tags: (
    | "Next,js"
    | "Javascript"
    | "Typescript"
    | "microCMS"
    | "tailwindcss"
    | "scss"
    | "Notion"
    | "その他"
  )[];
} & MicroCMSDate;
