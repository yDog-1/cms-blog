import { getList } from "@/libs/microcms";
import Link from "next/link";

export default async function Home() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <ul className="container m-10 mx-auto grid grid-cols-1 gap-3 md:w-2/3 md:grid-cols-3">
      {contents.map((post) => (
        <li
          key={post.id}
          className="mx-2 flex rounded-lg bg-gray-500 p-1.5 md:mx-0"
        >
          <Link
            href={`/post/${post.id}`}
            className=" flex flex-auto flex-col text-gray-50"
          >
            <h2 className=" my-3 text-2xl font-bold text-gray-50">
              {post.title}
            </h2>
            <p className=" my-3 mt-auto text-sm text-gray-50">
              {post.publishedAt}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
