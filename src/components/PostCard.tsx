import { Post } from "@/api/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PostCard({ post }: { post: Post }) {
  const { title, description, category, date, path } = post;
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-lg">
        <Image
        className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={80}
          height={40}
        />
        <div className="flex flex-col gap-1 items-center p-4">
          <time className="self-end text-gray-500">{date}</time>
          <h3 className="text-lg font-bold truncate">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <p className="px-2  bg-green-100 rounded-full mt-2">{category}</p>
        </div>
      </article>
    </Link>
  );
}
