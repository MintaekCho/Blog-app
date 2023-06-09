import { getPostContent } from "@/api/posts";
import NextAndPrevPost from "@/components/NextAndPrevPost";
import Image from "next/image";
import React from "react";
import PostContent from "../../../components/PostContent";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostDetailPage({ params: { slug } }: Props) {
  const post = await getPostContent({
    slug,
  });

  const { title, path, next, prev } = post;
  return (
    <article className="rounded-2xl overflow-hidden shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section className="w-full flex">
        {prev && <NextAndPrevPost post={prev} type={"prev"} />}
        {next && <NextAndPrevPost post={next} type={"next"} />}
      </section>
    </article>
  );
}
