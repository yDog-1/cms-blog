import { MicroCMSDate } from "microcms-js-sdk";
import { Tag } from "./Tag";

//ブログの型定義
export type Blog = {
  id: string;
  title: string;
  body: string;
  tags: Tag[];
} & MicroCMSDate;
