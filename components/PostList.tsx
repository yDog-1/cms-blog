import { getList } from "@/libs/microcms";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowCircleRight } from "react-icons/fa";

export default async function PostList() {
  const contents = await getList();

  if (!contents || contents.length === 0) {
    return notFound();
  }
  return (
    <ul className="my-10 grid grid-cols-1 gap-3 md:grid-cols-3">
      {contents.map((post) => (
        <li
          key={post.id}
          className="rounded-lg bg-slate-50   shadow-lg shadow-slate-300 duration-100 active:shadow-none md:mx-0"
        >
          <Link href={`/post/${post.id}`} className="group py-1.5">
            <h2 className="px-5 py-3 text-2xl font-bold group-hover:underline">
              {post.title}
            </h2>
            <div className="flex justify-between">
              <p className=" ml-5 py-3 text-sm">{post.localPublisheAt}</p>
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
