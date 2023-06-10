import { getAllPosts } from '@/api/posts';
import Category from '@/components/Category';
import GridPosts from '@/components/GridPosts';
import MainPosts from '@/components/MainPosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'All Posts',
    description: "블로그 작성글 모두 보기",
  };

export default async function PostPage() {
    const posts = await getAllPosts();

    return <MainPosts posts={posts} />
}

