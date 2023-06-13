"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { CategoryData } from "./Header";

export default function HeaderCategory({
  categorys,
}: {
  categorys: CategoryData[];
}) {
  const [categoryVisible, setCategoryVisible] = useState(false);

  return (
    <div className="relative sm:hidden">
      <span className="text-2xl">
        <BiCategoryAlt onClick={() => setCategoryVisible(!categoryVisible)} />
      </span>
      {categoryVisible && (
        <nav className="w-28 absolute -left-24 top-7 z-10 flex flex-col items-center p-6 bg-[#f2f2f2] border border-[#c4c4c4] gap-4 md:text-sm font-bold rounded-md overflow-hidden ease-in-out duration-300">
          {categorys.map((category) => (
            <Link
              className="hover:scale-105  hover:text-[#c4c4c4] hover:font-bold"
              onClick={() => setCategoryVisible(!categoryVisible)}
              href={category.href}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
