import EmailForm from "@/components/EmailForm";
import React from "react";

export async function generateMetadata() {
  return {
    title:
      "프론트엔드 개발자 | 조민택 블로그 | mintaek5555@gmail.com | Contact Me",
    description: "프론트엔드 개발자 조민택입니다.",
  };
}

export default function ContactPage() {
  return (
    <section className="flex flex-col gap-4 items-center p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-lg font-semibold">mintaek5555@gmail.com</p>
      </div>
      <EmailForm />
    </section>
  );
}
