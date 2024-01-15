import parse from "html-react-parser";
import hljs from "highlight.js";
import styles from "@/_scss/post/Post.module.scss";
import "highlight.js/styles/base16/apprentice.css";

export default function HighlightCode({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  const highlight = hljs.highlightAuto(code);
  const highlightCode = highlight.value;
  return (
    <pre className={styles.code}>
      <code className={language}>{parse(highlightCode)}</code>
    </pre>
  );
}
