import { getList } from "@/libs/microcms";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowCircleRight } from "react-icons/fa";

export default async function PostList() {
  const contents = await getList();
  if (!contents || contents.length === 0) {
    return notFound();
  }
  const firstContent = contents[0];
  const otherContents = contents.slice(1);
  return (
    <div>
      <div className="mx-3 mt-10 flex rounded-lg bg-slate-50 shadow-lg shadow-slate-300 duration-100 active:shadow-none md:mx-0">
        <Link
          href={`/post/${firstContent.id}`}
          className="group flex flex-1 flex-col"
        >
          <h2 className="px-5 pb-10 pt-3 text-2xl font-bold group-hover:underline">
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
      <ul className="mx-3 mb-10 mt-6 grid grid-cols-1 gap-3 md:mx-0 md:grid-cols-3">
        {otherContents.map((post) => (
          <li
            key={post.id}
            className="flex rounded-lg bg-slate-50 shadow-lg shadow-slate-300 duration-100 active:shadow-none md:mx-0"
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
    </div>
  );
}
