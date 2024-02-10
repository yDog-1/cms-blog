import parse, { Element, Text, domToReact } from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import styles from "@/_scss/post/Post.module.scss";
import HighlightCode from "./HighlightCode";

const isElement = (element: unknown): element is Element =>
  element instanceof Element;
const isText = (text: unknown): text is Text => text instanceof Text;

let liIndex = 0; //ページ全体のliのカウント用

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
        const children = domNode.children.filter(
          // childrenの型をElement | Textとする
          (node): node is Element | Text => isElement(node) || isText(node)
        );
        return <Link href={domNode.attribs.href}>{domToReact(children)}</Link>;
      }
      // コードブロックの処理
      if (domNode instanceof Element && domNode.name === "div") {
        // コードブロックじゃない
        if (!("data-filename" in domNode.attribs)) {
          return domNode;
        }
        // コードブロックなら
        if (!isElement(domNode.firstChild)) return;
        if (!isElement(domNode.firstChild.firstChild)) return;

        const codeElement = domNode.firstChild.firstChild;
        if (!isText(codeElement.firstChild)) return;

        const code = codeElement.firstChild.data;
        const language = codeElement.attribs.class;
        const dataFileName = domNode.attribs["data-filename"];
        return (
          <HighlightCode
            code={code}
            languageClass={language}
            dataFileName={dataFileName}
          />
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
      // ul処理
      if (domNode instanceof Element && domNode.name === "ul") {
        const liChildren = domNode.children;
        return (
          <ul>
            {liChildren.map((li) => {
              if (!isElement(li)) return;
              if (!isText(li.firstChild)) return;

              const data = li.firstChild.data;

              if (liIndex > 5) liIndex = 0;
              liIndex += 1;
              return (
                <li key={data} className={styles[`ul-li-${liIndex}`]}>
                  {data}
                </li>
              );
            })}
          </ul>
        );
      }
      // ol処理
      if (domNode instanceof Element && domNode.name === "ol") {
        const liChildren = domNode.children;
        return (
          <ol>
            {liChildren.map((li) => {
              if (!isElement(li)) return;
              if (!isText(li.firstChild)) return;

              const data = li.firstChild.data;

              if (liIndex > 5) liIndex = 0;
              liIndex += 1;
              return (
                <li key={data} className={styles[`ol-li-${liIndex}`]}>
                  {data}
                </li>
              );
            })}
          </ol>
        );
      }
    },
  });
}
