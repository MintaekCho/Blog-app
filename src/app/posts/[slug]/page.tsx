import { getPostContent } from "@/api/posts";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostDetailPage({ params: {slug} }: Props) {
    const post = await getPostContent({slug});
  return (
    <div>
      <pre>{post.title}</pre>
      <pre>{post.description}</pre>
      <pre>{post.content}</pre>
    </div>
  );
}
