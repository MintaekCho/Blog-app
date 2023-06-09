import { Post } from "@/api/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  post: Post;
  type: "prev" | "next";
};
const ICON_CLASS =
  "text-2xl text-yellow-400 group-hover:text-3xl ease-in-out duration-300";

export default function NextAndPrevPost({
  post: { path, title, description },
  type,
}: Props) {
  return (
    <Link className="group w-full relative bg-black" href={`posts/${path}`}>
      <Image
        className="w-full max-h-[250px] opacity-40  min-h-[100px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={200}
        height={150}
      />
      <div className="flex items-center justify-around gap-2 w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center px-8">
        {type === "prev" && (
          <div>
            <FaArrowLeft className={ICON_CLASS} />
          </div>
        )}
        <div className="w-full text-center">
          <h3 className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold truncate">
            {title}
          </h3>
          <p className="text-xs sm:text-sm md:text-md lg:text-lg text-white truncate">
            {description}
          </p>
        </div>
        {type === "next" && <div><FaArrowRight className={ICON_CLASS} /></div>}
      </div>
    </Link>
  );
}
