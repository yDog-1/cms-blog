import { getDetail, getList } from "@/libs/microcms";
import parse from "html-react-parser";

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);

  return (
    <div className=" container mx-auto md:w-2/3 ">
      <h1>{post.title}</h1>
      <div>{parse(post.body)}</div>
    </div>
  );
}
