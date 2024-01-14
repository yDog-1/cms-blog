"use client";
import { useState } from "react";

// microCMS SDKのqueries limitの初期値
const defaultLimit = 10;

export default function ShowMoreButton() {
  const [offset, setOffset] = useState(defaultLimit);
  console.log(offset);
  return (
    <>
      <button
        className=" mx-auto mt-3 w-full rounded-lg bg-blue-500 p-1 text-lg  font-bold text-slate-50"
        onClick={() => setOffset((offset) => offset + 9)}
      >
        もっと見る
      </button>
    </>
  );
}
