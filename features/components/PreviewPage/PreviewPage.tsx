"use client";
import Post from "@/features/components/Post/Post";
import Loading from "@/components/elements/Loading/Loading";
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

  useEffect(() => {
    const previewPost = async () => {
      const prePost = await getDetail(contentId, draftKey!);
      setPost(prePost);
    };
    previewPost();
  }, [contentId, draftKey, getDetail]);

  if (!post)
    return (
      <div className="m-auto flex content-center justify-center">
        <Loading />
      </div>
    );

  return <Post post={post} />;
}
