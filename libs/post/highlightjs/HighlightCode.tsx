import parse from "html-react-parser";
import hljs from "highlight.js/lib/core";
import styles from "./HighlightCode.module.scss";
import "highlight.js/styles/lioshi.css";

hljs.registerLanguage(
  "typescript",
  require("highlight.js/lib/languages/typescript")
);
hljs.registerLanguage(
  "javascript",
  require("highlight.js/lib/languages/javascript")
);
hljs.registerLanguage("css", require("highlight.js/lib/languages/css"));
hljs.registerLanguage("scss", require("highlight.js/lib/languages/scss"));

type Props = {
  hlc: { code: string; languageClass: string; dataFileName: string };
};

export default function HighlightCode({
  hlc: { code, languageClass, dataFileName },
}: Props) {
  const language = languageClass.replace("language-", "");
  const highlightCode = hljs.highlight(code, {
    language: language,
    ignoreIllegals: true,
  }).value;
  return (
    <div className={styles.codeBlock}>
      <div className={styles.dataFileName}>{dataFileName}</div>
      <pre className={styles.code}>
        <code className={languageClass}>{parse(highlightCode)}</code>
      </pre>
    </div>
  );
}
