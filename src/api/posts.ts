import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

type PostContent = Post & { content: string };

export async function getFeaturedPost(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getFeaturedNotPost(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "public/data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostContent({
  slug,
}: {
  slug: string;
}): Promise<PostContent> {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "posts",
    `${slug}.md`
  );
  const metedata = await getAllPosts().then((posts) =>
    posts.find((post) => post.path === slug)
  );
  if (!metedata)
    throw new Error(`${slug}에 해당하는 포스트가 존재하지 않습니다.`);
  const content = await readFile(filePath, "utf-8");
  return { ...metedata, content };
}
