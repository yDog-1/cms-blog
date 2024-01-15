import parse, { DOMNode, Element, domToReact } from "html-react-parser";
import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from "next/image";
import styles from "@/_scss/post/Post.module.scss";

export function parseForNext(rawHtml: string) {
  return parse(rawHtml, {
    replace: (domNode) => {
      // aタグの処理
      if (domNode instanceof Element && domNode.name === "a") {
        // 同一ドメインじゃない
        if (domNode.attribs.href.indexOf("http") !== -1) {
          return domNode;
        }
        // それ以外はLinkタグに置き換える。
        return (
          <Link href={domNode.attribs.href}>
            {domToReact(domNode.children as DOMNode[])}
          </Link>
        );
      }
      // コードブロックの処理
      if (domNode instanceof Element && domNode.name === "div") {
        // コードブロックじゃない
        if (!("data-filename" in domNode.attribs)) {
          return domNode;
        }
        // コードブロックなら
        const dataFileName = domNode.attribs["data-filename"];
        const preElement = domNode.firstChild as Element;
        const codeElement = (preElement as Element).firstChild as
          | Text
          | Element;
        const code = (codeElement.firstChild as Text).data;
        const language = (codeElement as Element).attribs.class.replace(
          "language-",
          ""
        );
        return (
          <div className={styles.codeBlock}>
            <div className={styles.dataFileName}>{dataFileName}</div>
            <SyntaxHighlighter
              language={language}
              style={anOldHope}
              className={styles.code}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        );
      }
      // 画像の処理
      if (domNode instanceof Element && domNode.name === "img") {
        const atr = domNode.attribs;
        return (
          <Image
            src={atr.src}
            alt={atr.alt}
            width={Number(atr.width)}
            height={Number(atr.height)}
          ></Image>
        );
      }
    },
  });
}
