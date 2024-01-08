import Image from "next/image";

export default function Page() {
  return (
    <main>
      <div className="my-10">
        <div className="mx-3 flex flex-col items-center gap-2">
          <h1 className=" text-3xl">yDog</h1>
          <Image
            src="/images/yDog.png"
            alt="yDog icon"
            width={1000}
            height={1000}
            className=" w-40"
          ></Image>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit est soluta, facilis eligendi, perspiciatis laboriosam
            quos impedit sunt dolorem vitae odit amet quia quasi minus alias
            eveniet dignissimos! Labore, quia.
          </p>
        </div>
      </div>
    </main>
  );
}
