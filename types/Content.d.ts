import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { Blog } from "./Blog";

export type Content = MicroCMSDate &
  Blog &
  MicroCMSContentId & {
    localPublishedAt: string;
  };
