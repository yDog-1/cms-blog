import { getList } from "@/libs/microcms";
import { notFound } from "next/navigation";
import { MicroCMSQueries } from "microcms-js-sdk";
import TopPost from "./PostList/TopPost";
import { Content } from "@/types/Content";
import ShowMore from "./PostList/ShowMore";

export async function getMoreList(
  offset: number
): Promise<{ contents: Content[]; totalCount: number }> {
  "use server";
  return getList({ offset: offset });
}

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
      <ShowMore
        getMoreList={getMoreList}
        totalCount={totalCount}
        firstRenderContents={otherContents}
      ></ShowMore>
    </div>
  );
}
