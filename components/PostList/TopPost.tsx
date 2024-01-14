import { Content } from "@/types/Content";
import styles from "./PostList.module.scss";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

export default function TopPost(props: { firstContent: Content }) {
  const { firstContent } = props;
  return (
    <div
      className={`${styles.float}
          mt-10 flex rounded-lg bg-slate-50 duration-100 active:bg-slate-200`}
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
  );
}
