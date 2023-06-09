import React from "react";

type Props = {
  setCategory: (category: string) => void;
  selected: string;
};

export default function Category({ setCategory, selected }: Props) {
  const category = ["All", "frontend", "backend", "javascript", "my story"];

  return (
    <ul className="flex gap-8 text-gray-700 font-semibold">
      {category.map((c) => (
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
  );
}
