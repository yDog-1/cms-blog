import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <div className="flex content-center justify-center py-5">
      <div className={styles.loader}></div>
    </div>
  );
}
