import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";

export type Content = MicroCMSDate & {
  id: string;
  title: string;
  body: string;
  tags: Tag[];
} & MicroCMSContentId & {
    localPublishedAt: string;
  };
