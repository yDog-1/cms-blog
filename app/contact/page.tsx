import Github from "@/components/elements/logo/Github";
import X from "@/components/elements/logo/X";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex">
      <div className="my-10 flex-1">
        <div className="mx-3 flex h-full flex-col items-center gap-2 text-2xl md:justify-center">
          <ul>
            <li className="flex gap-2">
              <p>email</p>
              <p>ydog-1@outlook.jp</p>
            </li>
            <li>
              <div className="mt-3 flex gap-2">
                <p>SNS</p>
                <div className="mx-auto flex w-[100px] justify-between">
                  <a
                    href="https://github.com/yDog-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full "
                  >
                    <Github width={32} height={32} darkMode={true} />
                  </a>
                  <a
                    href="https://x.com/yDog_1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-full "
                  >
                    <X width={32} height={32} darkMode={true} />
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
