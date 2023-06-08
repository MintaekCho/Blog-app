import Posts from "@/components/Posts";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <section className="">
      <Profile />
      {/* @ts-expect-error Server Component */}
      <Posts />
    </section>
  );
}
