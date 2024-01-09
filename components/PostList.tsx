import { getList } from "@/libs/microcms";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./PostList.module.scss";
import { FaArrowCircleRight } from "react-icons/fa";
import { MicroCMSQueries } from "microcms-js-sdk";
import LiPosts from "./PostList/LiPosts";

export default async function PostList(props: { queries?: MicroCMSQueries }) {
  const contents = await getList(props.queries);
  if (!contents || contents.length === 0) {
    return notFound();
  }
  const firstContent = contents[0];
  const otherContents = contents.slice(1);
  return (
    <div>
      <div
        className={`${styles.float}
          mx-3 mt-10 flex rounded-lg bg-slate-50 duration-100 active:bg-slate-200 md:mx-0`}
      >
        <Link
          href={`/post/${firstContent.id}`}
          className="group flex flex-1 flex-col"
        >
          <h2 className="px-5 pb-10 pt-3 text-2xl font-bold group-hover:underline md:text-5xl">
            {firstContent.title}
          </h2>
          <div className="mt-auto flex justify-between px-5">
            <p className="py-3 text-sm">{firstContent.localPublishedAt}</p>
            <FaArrowCircleRight
              color={"#DC2626"}
              size={"1.7em"}
              className="my-auto ml-auto"
            />
          </div>
        </Link>
      </div>
      <LiPosts contents={otherContents} />
    </div>
  );
}
