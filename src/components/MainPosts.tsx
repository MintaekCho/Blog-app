"use client";
import { Post } from "@/api/posts";
import React, { useEffect, useState } from "react";
import Category from "./Category";
import GridPosts from "./GridPosts";

export default function MainPosts({ posts }: { posts: Post[] }) {
  const [activePosts, setActivePosts] = useState<Post[]>(posts);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    if (category === "All") {
      setActivePosts(posts);
    } else {
      setActivePosts(posts.filter((post) => post.category === category));
    }
  }, [category, posts]);

  return (
    <section className="w-full mt-8 flex flex-col gap-4 p-4">
      <Category category={category} setCategory={setCategory} selected={category} />
      {activePosts && <GridPosts posts={activePosts} />}
    </section>
  );
}
