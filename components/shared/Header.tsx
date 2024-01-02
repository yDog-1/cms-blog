import Link from "next/link";
import X from "./logo/X";
import Github from "./logo/Github";

export const Header = () => {
  const darkMode = false;
  const iconSize = 15;
  return (
    <header className=" bg-red-600 py-3 sm:pt-10">
      <div className="container mx-auto md:w-2/3 ">
        <div className="mx-3 flex flex-col text-gray-50 md:flex-row">
          <Link href="/" className="flex items-center font-extrabold">
            <h1 className=" px-3 pb-3 text-4xl text-black md:p-0 md:text-3xl ">
              yDog Tech Blog
            </h1>
          </Link>
          <div className="ml-auto flex md:-mb-1">
            <ul className="mb-2 mt-auto flex items-end space-x-3 md:m-0 md:mb-1">
              <li className="rounded-md px-2 text-xl duration-200 md:hover:bg-gray-300 md:hover:font-bold md:hover:text-red-500">
                <Link href="/">TOP</Link>
              </li>
              <li className="p-1">
                <a
                  href="https://x.com/yDog_1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <X width={iconSize} height={iconSize} darkMode={darkMode} />
                </a>
              </li>
              <li className="p-1">
                <a
                  href="https://github.com/yDog-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github
                    width={iconSize}
                    height={iconSize}
                    darkMode={darkMode}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
