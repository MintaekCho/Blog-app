import FeturedPosts from "@/components/FeaturedPosts";
import Profile from "@/components/Profile";
import YouMayLikePost from "@/components/YouMayLikePost";

export default function Home() {
  return (
    <section className="">
      <Profile />
      <FeturedPosts />
      <YouMayLikePost />
    </section>
  );
}
