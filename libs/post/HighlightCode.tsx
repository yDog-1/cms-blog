import parse from "html-react-parser";
import hljs from "highlight.js";
import styles from "@/_scss/post/Post.module.scss";
import "highlight.js/styles/base16/apprentice.css";

export default function HighlightCode({
  code,
  languageClass,
}: {
  code: string;
  languageClass: string;
}) {
  const language = languageClass.replace("language-", "");
  const highlightCode = hljs.highlight(language, code).value;
  return (
    <pre className={styles.code}>
      <code className={languageClass}>{parse(highlightCode)}</code>
    </pre>
  );
}
