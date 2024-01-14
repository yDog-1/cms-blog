import { getList } from "@/libs/microcms";
import { notFound } from "next/navigation";
import { MicroCMSQueries } from "microcms-js-sdk";
import PostList from "./PostList/PostList";
import TopPost from "./PostList/TopPost";

export default async function TopPostList(props: {
  queries?: MicroCMSQueries;
}) {
  const { contents, totalCount } = await getList(props.queries);
  if (!contents || contents.length === 0) {
    return notFound();
  }
  const firstContent = contents[0];
  const otherContents = contents.slice(1);
  return (
    <div>
      <TopPost firstContent={firstContent} />
      <PostList contents={otherContents} totalCount={totalCount} />
    </div>
  );
}
