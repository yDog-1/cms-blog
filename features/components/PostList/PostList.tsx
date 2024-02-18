import Link from "next/link";
import styles from "@/features/components/PostList/PostList.module.scss";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import PostCard from "./PostCard";

export default function PostList({
  id = "",
  title = "",
  localPublishedAt = "",
}) {
  return (
    <li
      className={`${styles.float} mt-1 flex rounded-lg bg-slate-50 duration-100 active:bg-slate-200 md:mx-0`}
    >
      <PostCard id={id} title={title} localPublishedAt={localPublishedAt} />
    </li>
  );
}
