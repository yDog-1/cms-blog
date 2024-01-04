import Post from "@/components/post/[postId]/Post";

export default async function Page({
  params: { postId },
}: {
  params: { postId: string };
}) {
  return <Post postId={postId} />;
}
