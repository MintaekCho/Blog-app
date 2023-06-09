import React from "react";

export default function Category({setCategory}: any) {
  const category = ["All", "frontend", "backend", "javascript", "my story"];


  return (
    <ul className="flex gap-8 text-gray-700 font-semibold">
      {category.map((c) => (
        <li onClick={() => setCategory(c)} className="px-4 py-1 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-500 hover:text-white">{c}</li>
      ))}
    </ul>
  );
}
