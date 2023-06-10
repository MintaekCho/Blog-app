import { getAllPosts } from '@/api/posts';
import Category from '@/components/Category';
import GridPosts from '@/components/GridPosts';
import MainPosts from '@/components/MainPosts';

export async function generateMetadata() {

    return {
      title: '프론트엔드 개발자 | 조민택 블로그 | All Posts',
      description: '프론트엔드 개발자 조민택입니다.',
    };
  }

export default async function PostPage() {
    const posts = await getAllPosts();

    return <MainPosts posts={posts} />
}

