import Link from "next/link";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import styles from "../PostList.module.scss";
import { Content } from "@/types/Content";
import { MicroCMSQueries } from "microcms-js-sdk";
import { getList } from "@/libs/microcms";
import { notFound } from "next/navigation";

export default async function LiPosts(props: {
  contents?: Content[];
  queries?: MicroCMSQueries;
}) {
  const contents = props.contents
    ? props.contents
    : await getList(props.queries);
  if (!contents || contents.length === 0) {
    return notFound();
  }
  return (
    <ul className="mx-3 mb-10 mt-3 grid grid-cols-1 gap-3 md:mx-0 md:mt-6 md:grid-cols-3">
      {contents.map((post) => (
        <li
          key={post.id}
          className={`${styles.float} mt-1 flex rounded-lg bg-slate-50 duration-100 active:bg-slate-200 md:mx-0`}
        >
          <Link
            href={`/post/${post.id}`}
            className="group flex flex-1 flex-col"
          >
            <h2 className="px-5 pb-10 pt-3 text-2xl font-bold group-hover:underline">
              {post.title}
            </h2>
            <div className="mt-auto flex justify-between px-5">
              <p className="py-3 text-sm">{post.localPublishedAt}</p>
              <FaArrowCircleRight
                color={"#DC2626"}
                size={"1.7em"}
                className="my-auto ml-auto"
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
