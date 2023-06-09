import { getFeaturedNotPost } from "@/api/posts";
import React from "react";
import MultiCarousel from "./MultiCarousel";

import PostCard from "./PostCard";

export default async function YouMayLikePost() {
  const posts = await getFeaturedNotPost();

  return (
    <>
      <h2 className="text-lg font-bold my-2 mt-8">You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </>
  );
}
