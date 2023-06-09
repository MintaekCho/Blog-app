import React from "react";
import MarkdownViewer from "@/components/MarkdownViewer";
import { BsCalendarDate } from "react-icons/bs";
import { PostContent } from "@/api/posts";

export default function PostContent({ post }: { post: PostContent }) {
  const { title, description, content, date } = post;
  return (
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
  );
}
