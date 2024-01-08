import { getDetail, getList } from "@/libs/microcms";
import parse, { DOMNode, Element, domToReact } from "html-react-parser";
import styles from "@/components/post/[postId]/Post.module.scss";
import Link from "next/link";
import { Tag } from "@/types/Blog";
import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from "next/image";

export async function generateStaticParams() {
  const contents = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

function getTagElement(tag: Tag) {
  // . があれば - にする
  const language = tag.includes(".") ? tag.replace(".", "-") : tag;
  return (
    <li key={tag} className={styles[language]}>
      <Link href={`/tag/${language}`}>{tag}</Link>
    </li>
  );
}

function parseForNext(rawHtml: string) {
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

export default async function Post({ postId }: { postId: string }) {
  const post = await getDetail(postId);
  const parsedBody = parseForNext(post.body);

  return (
    <main className={styles.main}>
      <span className={styles.head}>
        <div>
          <p>{post.localPublishedAt}</p>
          <h1>{post.title}</h1>
          <ul className={styles.tags}>
            {post.tags.map((tag) => {
              return getTagElement(tag);
            })}
          </ul>
        </div>
      </span>
      <div>
        <div className={styles.post}>{parsedBody}</div>
      </div>
    </main>
  );
}
