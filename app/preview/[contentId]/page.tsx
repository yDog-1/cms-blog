import PreviewPage from "@/features/components/PreviewPage/PreviewPage";
import { getDetail } from "@/libs/microcms";
import { Content } from "@/types/Content";

//server action用関数
async function getPostDetail(
  contentId: string,
  draftKey: string
): Promise<Content> {
  "use server";
  return getDetail(contentId, { draftKey: draftKey }, { cache: "no-store" });
}

export default async function Page() {
  return (
    <main className=" flex flex-col items-center bg-white ">
      <PreviewPage getDetail={getPostDetail} />
    </main>
  );
}
