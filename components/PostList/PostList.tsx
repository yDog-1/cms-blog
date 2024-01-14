import Link from "next/link";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import styles from "./PostList.module.scss";
import { Content } from "@/types/Content";
import { MicroCMSQueries } from "microcms-js-sdk";
import { notFound } from "next/navigation";

export default function PostList(props: {
  contents?: Content[];
  queries?: MicroCMSQueries;
  totalCount: number;
}) {
  const contents = props.contents;
  if (!contents || contents.length === 0) {
    return notFound();
  }
  return (
    <ul className="mt-3 grid grid-cols-1 gap-3 md:mt-6 md:grid-cols-3">
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
