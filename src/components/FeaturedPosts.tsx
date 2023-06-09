import { getFeaturedPost } from "@/api/posts";
import React from "react";
import GridPosts from "./GridPosts";

export default async function FeturedPosts() {
  const posts = await getFeaturedPost();
  return (
    <section className="">
      <h2 className="text-xl font-bold my-2">Featured Posts</h2>
      <GridPosts posts={posts} />
    </section>
  );
}
