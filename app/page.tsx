import PostList from "@/components/PostList";

export default async function Home() {
  return (
    <main className="container mx-auto flex-1 md:w-2/3">
      <PostList />
    </main>
  );
}
