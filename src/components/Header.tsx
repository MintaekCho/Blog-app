import Link from "next/link";
import React from "react";
import HeaderCategory from "./HeaderCategory";

export type CategoryData = {
  name: string;
  href: string;
};

export default function Header() {
  const categorys = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
    { name: "posts", href: "/posts" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <header className="w-full flex items-center justify-between p-4">
      <Link href={"/"}>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold hover:tracking-wide hover:scale-105 ease-in-out duration-300">
          Min&apos;s Blog
        </h1>
      </Link>

      <nav className="hidden sm:flex gap-4 text-xs sm:text-sm md:text-md  ">
        {categorys.map((category) => (
          <Link
            className="hover:scale-105  hover:text-white hover:bg-black px-2 py-1 rounded-full"
            href={category.href}
          >
            {category.name}
          </Link>
        ))}
      </nav>
      <HeaderCategory categorys={categorys} />
    </header>
  );
}
