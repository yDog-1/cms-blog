import styles from "@/_scss/post/Post.module.scss";
import PreviewPage from "@/components/app/preview/[contentId]/PreviewPage";
import { getDetail } from "@/libs/microcms";
import { Content } from "@/types/Content";

//server action用関数
export async function getPostDetail(
  contentId: string,
  draftKey: string
): Promise<Content> {
  "use server";
  return getDetail(contentId, { draftKey: draftKey });
}

export default async function Page() {
  return (
    <main className={styles.main}>
      <PreviewPage getDetail={getPostDetail} />
    </main>
  );
}
