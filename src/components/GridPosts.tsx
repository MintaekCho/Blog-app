import { Post } from "@/api/posts";
import React from "react";
import PostCard from "./PostCard";

export default function GridPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post, i) => (
        <PostCard key={i} post={post} />
      ))}
    </section>
  );
}
