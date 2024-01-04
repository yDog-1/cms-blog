import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto flex-1 md:w-2/3">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className=" text-blue-500 hover:underline" href="/">
        Return Home
      </Link>
    </div>
  );
}
