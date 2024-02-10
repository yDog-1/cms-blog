import parse from "html-react-parser";
import hljs from "highlight.js";
import styles from "./HighlightCode.module.scss";
import "highlight.js/styles/lioshi.css";

type Props = {
  code: string;
  languageClass: string;
  dataFileName: string;
};

export default function HighlightCode({
  code,
  languageClass,
  dataFileName,
}: Props) {
  const language = languageClass.replace("language-", "");
  const highlightCode = hljs.highlight(language, code).value;
  return (
    <div className={styles.codeBlock}>
      <div className={styles.dataFileName}>{dataFileName}</div>
      <pre className={styles.code}>
        <code className={languageClass}>{parse(highlightCode)}</code>
      </pre>
    </div>
  );
}
