import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4">
      <Link href={"/"}>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Min&apos;s Blog
        </h1>
      </Link>

      <nav className="flex gap-4 text-xs sm:text-sm md:text-md ">
        <Link className="hover:scale-105  hover:text-white hover:bg-black px-2 py-1 rounded-full" href={"/"}>home</Link>
        <Link className="hover:scale-105  hover:text-white hover:bg-black px-2 py-1 rounded-full" href={"/about"}>about</Link>
        <Link className="hover:scale-105  hover:text-white hover:bg-black px-2 py-1 rounded-full" href={"/posts"}>posts</Link>
        <Link className="hover:scale-105  hover:text-white hover:bg-black px-2 py-1 rounded-full" href={"/contact"}>contact</Link>
      </nav>
    </header>
  );
}
