"use client";
import Post from "@/features/components/Post/Post";
import Loading from "@/components/elements/Loading/Loading";
import { Content } from "@/types/Content";
import { notFound, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import getPostDetail from "./getPostDetail";

export default function PreviewPage() {
  const contentId = usePathname().replace("/preview/", "");
  const draftKey = useSearchParams().get("draftKey");
  if (typeof draftKey !== "string") notFound();
  const [post, setPost] = useState<Content>();

  useEffect(() => {
    const previewPost = async () => {
      const prePost = await getPostDetail(contentId, draftKey);
      setPost(prePost);
    };
    previewPost();
  }, []);

  if (!post)
    return (
      <div className="m-auto flex content-center justify-center">
        <Loading />
      </div>
    );

  return <Post post={post} />;
}
