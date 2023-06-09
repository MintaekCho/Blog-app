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
  }, [category]);

  return (
    <section className="mt-8 flex flex-col gap-4">
      <Category setCategory={setCategory} selected={category} />
      {activePosts && <GridPosts posts={activePosts} />}
    </section>
  );
}
