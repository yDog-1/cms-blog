"use client";
import { Content } from "@/types/Content";
import { useCallback, useState } from "react";
import PostList from "./PostList";
import styles from "./PostList.module.scss";
import { MicroCMSQueries } from "microcms-js-sdk";
import Loading from "../shared/Loading";

// microCMS SDKのqueries limitの初期値
const defaultLimit = 10;
const addOffset = 9;

export default function ShowMore(props: {
  getMoreList: (
    offset: number
  ) => Promise<{ contents: Content[]; totalCount: number }>;
  totalCount: number;
  firstRenderContents: Content[];
  queries?: MicroCMSQueries;
}) {
  const { getMoreList, totalCount, firstRenderContents } = props;

  const [offset, setOffset] = useState(defaultLimit);
  const [contents, setContents] = useState(firstRenderContents);
  const [visibleButton, setVisibleButton] = useState(
    // 1つは、大きく切り出して表示しているため、1を足す
    totalCount > firstRenderContents.length + 1 ? true : false
  );
  const [loading, setLoading] = useState(false);

  const getMoreContents = useCallback(async () => {
    if (offset > totalCount) {
      return;
    }

    setLoading((loading) => !loading);
    setVisibleButton(!visibleButton);

    const list = (await getMoreList(offset)).contents;
    setContents((contents) => [...contents, ...list]);
    setOffset((offset) => offset + addOffset);
    setLoading((loading) => !loading);
    setVisibleButton(!visibleButton);

    if (offset > totalCount) {
      return;
    }
    setVisibleButton(!visibleButton);
  }, [getMoreList, offset, totalCount, visibleButton]);

  return (
    <>
      <PostList contents={contents} totalCount={totalCount} />
      {visibleButton ? (
        <button
          className={`${styles.float} mx-auto mt-3 w-full rounded-lg bg-red-500 p-1 text-lg  font-bold text-slate-50`}
          onClick={getMoreContents}
        >
          もっと見る
        </button>
      ) : (
        loading && <Loading />
      )}
    </>
  );
}
