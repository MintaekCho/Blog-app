import { getAllPosts } from '@/api/posts';
import Category from '@/components/Category';
import GridPosts from '@/components/GridPosts';
import MainPosts from '@/components/MainPosts';

export default async function PostPage() {
    const posts = await getAllPosts();

    return <MainPosts posts={posts} />
}

