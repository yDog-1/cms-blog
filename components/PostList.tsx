import { getList } from "@/libs/microcms";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

export default async function PostList() {
  const contents = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }
  return (
    <ul className="my-10 grid grid-cols-1 gap-3 md:grid-cols-3">
      {contents.map((post) => (
        <li
          key={post.id}
          className="mx-2 flex rounded-lg bg-slate-50 px-5 py-1.5 shadow-lg shadow-slate-300 duration-100 active:shadow-none md:mx-0"
        >
          <Link
            href={`/post/${post.id}`}
            className=" group flex flex-auto flex-col text-slate-900"
          >
            <h2 className=" my-3 text-2xl font-bold text-slate-900 group-hover:underline">
              {post.title}
            </h2>
            <div className="mt-auto flex justify-between">
              <p className=" my-3  text-sm text-slate-900">
                {post.published.date}
              </p>
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
