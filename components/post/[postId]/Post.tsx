import { getDetail, getList } from "@/libs/microcms";
import parse from "html-react-parser";
import styles from "@/components/post/[postId]/Post.module.scss";
import Link from "next/link";
import { Tag } from "@/types/Blog";

function getTagColor(tag: Tag) {
  const lTex = "text-slate-50";
  switch (tag) {
    case "Next.js":
      return `bg-slate-800 ${lTex}`;
    case "Javascript":
      return `bg-yellow-500`;
    case "Typescript":
      return `bg-blue-500 ${lTex}`;
    case "microCMS":
      return `bg-slate-700 ${lTex}`;
    case "tailwindcss":
      return `bg-sky-500 ${lTex}`;
    case "Notion":
      return `bg-slate-900 ${lTex}`;
    case "scss":
      return `bg-fuchsia-400 ${lTex}`;
    default:
      return "background-color:red;";
  }
}

export async function generateStaticParams() {
  const contents = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function Post({ postId }: { postId: string }) {
  const post = await getDetail(postId);

  return (
    <main className={styles.main}>
      <span className={styles.head}>
        <div className={styles.title}>
          <p>{post.localPublishedAt}</p>
          <h1>{post.title}</h1>
          <ul>
            {post.tags.map((tag) => {
              return (
                <li key={tag} className={getTagColor(tag)}>
                  <Link href={`/tag/${tag}`}>{tag}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </span>
      <div>
        <div className={styles.post}>{parse(post.body)}</div>
      </div>
    </main>
  );
}
