import { getList } from "@/libs/microcms";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

export default async function Home() {
  const contents = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <ul className="container m-10 mx-auto grid grid-cols-1 gap-3 md:w-2/3 md:grid-cols-3">
      {contents.map((post) => (
        <li
          key={post.id}
          className="mx-2 flex rounded-lg bg-slate-50 px-5 py-1.5 shadow-lg shadow-slate-300 md:mx-0"
        >
          <Link
            href={`/post/${post.id}`}
            className=" flex flex-auto flex-col text-slate-900"
          >
            <h2 className=" my-3 text-2xl font-bold text-slate-900">
              {post.title}
            </h2>
            <div className="mt-auto flex justify-between">
              <p className=" my-3  text-sm text-slate-900">
                {post.forDisplayPublishedAt}
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
