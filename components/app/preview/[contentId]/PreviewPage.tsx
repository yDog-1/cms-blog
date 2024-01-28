"use client";
import Post from "@/components/app/post/[postId]/Post";
import { Content } from "@/types/Content";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  getDetail(contentId: string, draftKey: string): Promise<Content>;
};
export default function PreviewPage({ getDetail }: Props) {
  const contentId = usePathname().replace("/preview/", "");
  const draftKey = useSearchParams().get("draftKey");
  const [post, setPost] = useState<Content>();

  const previewPost = async () => {
    setPost(await getDetail(contentId, draftKey!));
  };

  return (
    <>
      {post ? (
        <Post post={post} />
      ) : (
        <button
          className="mt-10 rounded-xl bg-red-500 px-2 py-0.5"
          onClick={previewPost}
        >
          プレビューする
        </button>
      )}
    </>
  );
}
