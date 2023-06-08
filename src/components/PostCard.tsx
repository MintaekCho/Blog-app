import { Post } from "@/api/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PostCard({ post }: { post: Post }) {
  const { title, description, category, date, path } = post;
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden shadow-lg">
        <Image
        className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={400}
          height={200}
        />
        <div className="flex flex-col gap-1 items-center p-4">
          <time className="self-end">{date}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <p className="px-2  bg-green-100 rounded-full mt-2">{category}</p>
        </div>
      </article>
    </Link>
  );
}
