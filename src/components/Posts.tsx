import { getAllPosts, getFeaturedPost } from "@/api/posts";
import React from "react";
import PostCard from "./PostCard";

export default async function Posts() {
  const posts = await getFeaturedPost();
  return (
    <section className="">
      <h3 className="text-xl font-bold my-2">Featured Posts</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </div>
    </section>
  );
}
