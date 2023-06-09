import { getPostContent } from "@/api/posts";
import MarkdownViewer from "@/components/MarkdownViewer";
import Image from "next/image";
import React from "react";
import { BsCalendarDate } from "react-icons/bs";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostDetailPage({ params: { slug } }: Props) {
  const { title, description, content, date, path } = await getPostContent({
    slug,
  });
  return (
    <article className="rounded-2xl overflow-hidden shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />

      <section className="flex flex-col gap-2 p-4">
        <div className="flex gap-1 items-center text-lg text-sky-500 self-end font-semibold">
          <BsCalendarDate />
          {date.toString()}
        </div>
        <h3 className="text-4xl font-bold">{title}</h3>
        <p className="text-xl font-semibold">{description}</p>
        <div className="w-44 border-b-4 border-sky-500 my-4" />
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
