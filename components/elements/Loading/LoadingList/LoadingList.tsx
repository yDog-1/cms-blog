import PostList from "@/features/components/PostList/PostList";
import styles from "./loadingList.module.scss";

export default function LoadingList() {
  const dummyPost = ["0", "1", "2"];
  return (
    <>
      <ul
        className={`${styles["loading-card"]} mt-3 grid grid-cols-1 gap-3 md:mt-6 md:grid-cols-3`}
      >
        {dummyPost.map((id) => {
          return <PostList key={id} loading={true} />;
        })}
      </ul>
    </>
  );
}
