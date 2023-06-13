"use client";
import React from "react";
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';

type Props = {
  category: string;
  setCategory: (category: string) => void;
  selected: string;
};

export default function Category({ category, setCategory, selected }: Props) {
  const categorys = ["All", "frontend", "backend", "javascript", "my story"];

  return (
    <>
      <ul className="hidden sm:flex w-full  gap-8 text-xs sm:text-sm md:text-md text-gray-700 font-semibold">
        {categorys.map((c) => (
          <li
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-1 bg-gray-100 rounded-lg cursor-pointer ${
              c === selected && "bg-gray-500 text-white"
            } hover:bg-gray-500 hover:text-white`}
          >
            {c}
          </li>
        ))}
      </ul>
      <Dropdown className="sm:hidden" options={categorys}   value={category} onChange={(data) => setCategory(data.value)} />
    </>
  );
}
