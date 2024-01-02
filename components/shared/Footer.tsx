import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <footer className=" bg-red-600 py-3">
        <div className=" container mx-auto bg-red-600 text-black md:w-2/3">
          <div className="mx-3">
            <ul className=" grid grid-cols-7 gap-2 md:grid-cols-5 md:gap-5 ">
              <li className=" col-span-3 my-auto md:col-span-1 ">
                <Link href="/" className="">
                  <Image
                    priority={true}
                    src="/images/yDog.png"
                    width={120}
                    height={120}
                    alt="yDog"
                    className="mx-auto md:ml-0"
                  ></Image>
                </Link>
              </li>
              <li className=" col-span-4 flex-auto text-gray-50 md:col-span-4 ">
                <ul className=" grid grid-flow-row grid-cols-1 text-lg">
                  <li className="flex flex-col items-end gap-2">
                    <Link
                      href="/about"
                      className="mx-auto rounded-md px-2 duration-200 md:-mr-2 md:hover:bg-gray-50 md:hover:font-bold md:hover:text-red-500"
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="mx-auto rounded-md px-2 duration-200 md:-mr-2 md:hover:bg-gray-50 md:hover:font-bold md:hover:text-red-500"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
